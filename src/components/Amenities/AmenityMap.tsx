"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { COMMUNITY_CONFIG } from "@/lib/community-config";
import {
  AMENITY_CATEGORIES,
  AMENITY_CATEGORY_ORDER,
  type AmenityCategoryId,
} from "@/components/Amenities/amenity-categories";
import {
  buildDirectionsUrl,
  loadGoogleMapsScript,
} from "@/lib/google-maps-loader";
import AmenityMapFallback from "./AmenityMapFallback";
import StaticAmenityList from "./StaticAmenityList";

const MAP_HEIGHT_PX = 480;

type MapPlaceResult = {
  id: string;
  name: string;
  address?: string;
  lat: number;
  lng: number;
  rating?: number;
};

type AmenityMapProps = {
  /** When true, show curated list under the map */
  showStaticList?: boolean;
  className?: string;
};

export default function AmenityMap({
  showStaticList = false,
  className = "",
}: AmenityMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;

  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const communityMarkerRef = useRef<google.maps.Marker | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] =
    useState<AmenityCategoryId>("grocery");
  const [loadState, setLoadState] = useState<
    "idle" | "loading" | "ready" | "fallback"
  >(apiKey ? "idle" : "fallback");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || !apiKey) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px", threshold: 0.1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [apiKey]);

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
  }, []);

  const showCommunityMarker = useCallback(async (map: google.maps.Map) => {
    const { Map: MapsLib } = (await google.maps.importLibrary(
      "maps",
    )) as google.maps.MapsLibrary;
    void MapsLib;

    const position = COMMUNITY_CONFIG.center;
    if (communityMarkerRef.current) {
      communityMarkerRef.current.setMap(null);
    }

    communityMarkerRef.current = new google.maps.Marker({
      map,
      position,
      title: COMMUNITY_CONFIG.displayName,
      zIndex: 1000,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 12,
        fillColor: "#4a90e2",
        fillOpacity: 1,
        strokeColor: "#ffffff",
        strokeWeight: 3,
      },
    });

    if (!infoWindowRef.current) {
      infoWindowRef.current = new google.maps.InfoWindow();
    }

    const content = `<div style="max-width:220px"><strong>${COMMUNITY_CONFIG.displayName}</strong><br/>${COMMUNITY_CONFIG.fullAddress}<br/><a href="${buildDirectionsUrl(position.lat, position.lng, COMMUNITY_CONFIG.name)}" target="_blank" rel="noopener">Directions</a></div>`;
    communityMarkerRef.current.addListener("click", () => {
      infoWindowRef.current?.setContent(content);
      infoWindowRef.current?.open({ map, anchor: communityMarkerRef.current! });
    });
  }, []);

  const renderPlaces = useCallback(
    (map: google.maps.Map, places: MapPlaceResult[]) => {
      clearMarkers();
      if (!infoWindowRef.current) {
        infoWindowRef.current = new google.maps.InfoWindow();
      }

      places.forEach((place) => {
        const marker = new google.maps.Marker({
          map,
          position: { lat: place.lat, lng: place.lng },
          title: place.name,
        });
        const ratingLine =
          place.rating != null ? `<br/>Rating: ${place.rating.toFixed(1)}` : "";
        const addressLine = place.address ? `<br/>${place.address}` : "";
        const directions = buildDirectionsUrl(place.lat, place.lng, place.name);
        const html = `<div style="max-width:240px"><strong>${place.name}</strong>${ratingLine}${addressLine}<br/><a href="${directions}" target="_blank" rel="noopener">Directions</a></div>`;
        marker.addListener("click", () => {
          infoWindowRef.current?.setContent(html);
          infoWindowRef.current?.open({ map, anchor: marker });
        });
        markersRef.current.push(marker);
      });
    },
    [clearMarkers],
  );

  const searchCategory = useCallback(
    async (map: google.maps.Map, categoryId: AmenityCategoryId) => {
      const category = AMENITY_CATEGORIES.find((c) => c.id === categoryId);
      if (!category) return;

      setStatusMessage(`Loading ${category.label.toLowerCase()}…`);

      try {
        const { Place } = (await google.maps.importLibrary(
          "places",
        )) as google.maps.PlacesLibrary;

        if (typeof Place.searchNearby !== "function") {
          throw new Error("Place.searchNearby unavailable");
        }

        const { places } = await Place.searchNearby({
          fields: [
            "displayName",
            "formattedAddress",
            "location",
            "rating",
            "id",
          ],
          locationRestriction: {
            center: COMMUNITY_CONFIG.center,
            radius: category.searchRadiusMeters,
          },
          includedPrimaryTypes: category.primaryTypes,
          maxResultCount: 15,
          rankPreference: google.maps.places.SearchNearbyRankPreference
            .POPULARITY,
        });

        const mapped: MapPlaceResult[] = [];
        for (const [index, place] of (places ?? []).entries()) {
          const loc = place.location;
          if (!loc) continue;
          mapped.push({
            id: place.id ?? `place-${index}`,
            name: place.displayName ?? "Place",
            address: place.formattedAddress,
            lat: loc.lat(),
            lng: loc.lng(),
            rating: place.rating ?? undefined,
          });
        }

        renderPlaces(map, mapped);
        setStatusMessage(
          mapped.length
            ? `${mapped.length} ${category.label.toLowerCase()} near ${COMMUNITY_CONFIG.name}`
            : `No ${category.label.toLowerCase()} found in this radius.`,
        );
      } catch {
        setStatusMessage(
          "Live results unavailable — see featured places below.",
        );
      }
    },
    [renderPlaces],
  );

  const initMap = useCallback(async () => {
    if (!apiKey || mapRef.current) return;
    setLoadState("loading");
    try {
      await loadGoogleMapsScript(apiKey);
      const { Map } = (await google.maps.importLibrary(
        "maps",
      )) as google.maps.MapsLibrary;

      const el = document.getElementById("aries-amenity-map-canvas");
      if (!el) throw new Error("Map element missing");

      const map = new Map(el as HTMLElement, {
        center: COMMUNITY_CONFIG.center,
        zoom: 13,
        mapId: mapId || undefined,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      });

      mapRef.current = map;
      await showCommunityMarker(map);
      await searchCategory(map, activeCategory);
      setLoadState("ready");
    } catch {
      setLoadState("fallback");
    }
  }, [apiKey, mapId, showCommunityMarker, searchCategory, activeCategory]);

  useEffect(() => {
    if (isVisible && apiKey && loadState === "idle") {
      void initMap();
    }
  }, [isVisible, apiKey, loadState, initMap]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || loadState !== "ready") return;
    void searchCategory(map, activeCategory);
  }, [activeCategory, loadState, searchCategory]);

  const handleCategoryKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const buttons =
      event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>(
        '[role="tab"]',
      );
    if (!buttons?.length) return;

    let nextIndex = index;
    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % buttons.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + buttons.length) % buttons.length;
    } else {
      return;
    }
    event.preventDefault();
    buttons[nextIndex]?.focus();
    buttons[nextIndex]?.click();
  };

  if (loadState === "fallback" || !apiKey) {
    return (
      <div className={className}>
        <AmenityMapFallback showStaticList={showStaticList} />
      </div>
    );
  }

  return (
    <div className={className} ref={containerRef}>
      <div
        role="tablist"
        aria-label="Filter nearby amenities by category"
        className="mb-4 flex flex-wrap gap-2"
      >
        {AMENITY_CATEGORY_ORDER.map((categoryId, index) => {
          const category = AMENITY_CATEGORIES.find((c) => c.id === categoryId);
          if (!category) return null;
          const selected = activeCategory === categoryId;
          return (
            <button
              key={categoryId}
              type="button"
              role="tab"
              id={`amenity-tab-${categoryId}`}
              aria-selected={selected}
              aria-controls="aries-amenity-map-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveCategory(categoryId)}
              onKeyDown={(e) => handleCategoryKeyDown(e, index)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selected
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-black hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div
        id="aries-amenity-map-panel"
        role="tabpanel"
        aria-labelledby={`amenity-tab-${activeCategory}`}
      >
        <div
          id="aries-amenity-map-canvas"
          className="w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
          style={{ height: MAP_HEIGHT_PX, minHeight: MAP_HEIGHT_PX }}
          aria-label={`Interactive map of ${activeCategory} near ${COMMUNITY_CONFIG.displayName}`}
        />
        {loadState === "loading" ? (
          <p className="mt-2 text-sm text-body-color dark:text-body-color-dark">
            Loading map…
          </p>
        ) : null}
        {statusMessage ? (
          <p className="mt-2 text-sm text-body-color dark:text-body-color-dark">
            {statusMessage}
          </p>
        ) : null}
      </div>

      {showStaticList ? (
        <div className="mt-8">
          <StaticAmenityList categoryFilter={activeCategory} />
        </div>
      ) : null}
    </div>
  );
}
