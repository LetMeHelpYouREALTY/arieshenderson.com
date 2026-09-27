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
  loadGoogleMaps,
  mapsAuthFailed,
} from "@/lib/google-maps-loader";
import { searchCategoryPlaces } from "@/lib/amenity-places-search";
import AmenityMapFallback from "./AmenityMapFallback";
import StaticAmenityList from "./StaticAmenityList";

const MAP_HEIGHT_PX = 480;

type MapPlaceResult = {
  id: string;
  name: string;
  address?: string;
  lat: number;
  lng: number;
};

type AmenityMapProps = {
  /** When true, show curated list under the map */
  showStaticList?: boolean;
  className?: string;
};

function buildInfoWindowContent(
  name: string,
  lat: number,
  lng: number,
  address?: string,
): HTMLElement {
  const div = document.createElement("div");
  div.style.maxWidth = "240px";

  const title = document.createElement("strong");
  title.textContent = name;
  div.appendChild(title);

  if (address) {
    div.appendChild(document.createElement("br"));
    const addr = document.createElement("span");
    addr.textContent = address;
    div.appendChild(addr);
  }

  div.appendChild(document.createElement("br"));
  const link = document.createElement("a");
  link.href = buildDirectionsUrl(lat, lng, name);
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = "Directions";
  div.appendChild(link);

  return div;
}

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
  >(() => (!apiKey || mapsAuthFailed ? "fallback" : "idle"));
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [showCuratedForCategory, setShowCuratedForCategory] = useState(false);

  const enterFallback = useCallback(() => {
    if (mapRef.current) {
      mapRef.current = null;
    }
    clearMarkersRef(markersRef);
    if (communityMarkerRef.current) {
      communityMarkerRef.current.setMap(null);
      communityMarkerRef.current = null;
    }
    setLoadState("fallback");
  }, []);

  useEffect(() => {
    const onAuthFailure = () => {
      enterFallback();
    };
    window.addEventListener("gmaps:auth-failure", onAuthFailure);
    return () => window.removeEventListener("gmaps:auth-failure", onAuthFailure);
  }, [enterFallback]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || !apiKey || loadState === "fallback") return;

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
  }, [apiKey, loadState]);

  const clearMarkers = useCallback(() => {
    clearMarkersRef(markersRef);
  }, []);

  const showCommunityMarker = useCallback(async (map: google.maps.Map) => {
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

    communityMarkerRef.current.addListener("click", () => {
      infoWindowRef.current?.setContent(
        buildInfoWindowContent(
          COMMUNITY_CONFIG.displayName,
          position.lat,
          position.lng,
          COMMUNITY_CONFIG.fullAddress,
        ),
      );
      infoWindowRef.current?.open({
        map,
        anchor: communityMarkerRef.current!,
      });
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
        marker.addListener("click", () => {
          infoWindowRef.current?.setContent(
            buildInfoWindowContent(
              place.name,
              place.lat,
              place.lng,
              place.address,
            ),
          );
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
      setShowCuratedForCategory(false);

      try {
        const places = await searchCategoryPlaces(categoryId);

        const mapped: MapPlaceResult[] = [];
        for (const [index, place] of places.entries()) {
          const loc = place.location;
          if (!loc) continue;
          const json = loc.toJSON();
          mapped.push({
            id: place.id ?? `place-${index}`,
            name: place.displayName ?? "Place",
            address: place.formattedAddress,
            lat: json.lat,
            lng: json.lng,
          });
        }

        renderPlaces(map, mapped);
        setStatusMessage(
          mapped.length
            ? `${mapped.length} ${category.label.toLowerCase()} near ${COMMUNITY_CONFIG.name}`
            : `No ${category.label.toLowerCase()} found in this radius.`,
        );
        if (!mapped.length) {
          setShowCuratedForCategory(true);
        }
      } catch {
        setStatusMessage(
          "Live results unavailable — see featured places below.",
        );
        setShowCuratedForCategory(true);
      }
    },
    [renderPlaces],
  );

  const initMap = useCallback(async () => {
    if (!apiKey || mapRef.current || mapsAuthFailed) {
      if (mapsAuthFailed) enterFallback();
      return;
    }
    setLoadState("loading");
    try {
      await loadGoogleMaps(apiKey);
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
      enterFallback();
    }
  }, [
    apiKey,
    mapId,
    showCommunityMarker,
    searchCategory,
    activeCategory,
    enterFallback,
  ]);

  useEffect(() => {
    if (isVisible && apiKey && loadState === "idle" && !mapsAuthFailed) {
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

  const listVisible = showStaticList || showCuratedForCategory;

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

      {listVisible ? (
        <div className="mt-8">
          <StaticAmenityList categoryFilter={activeCategory} />
        </div>
      ) : null}
    </div>
  );
}

function clearMarkersRef(markersRef: React.RefObject<google.maps.Marker[]>) {
  markersRef.current.forEach((m) => m.setMap(null));
  markersRef.current = [];
}
