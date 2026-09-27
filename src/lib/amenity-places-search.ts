import {
  AMENITY_CATEGORIES,
  type AmenityCategoryId,
} from "@/components/Amenities/amenity-categories";
import { COMMUNITY_CONFIG } from "@/lib/community-config";

const cache = new Map<string, Promise<google.maps.places.Place[]>>();

export function searchCategoryPlaces(
  categoryId: AmenityCategoryId,
): Promise<google.maps.places.Place[]> {
  const category = AMENITY_CATEGORIES.find((c) => c.id === categoryId);
  if (!category) {
    return Promise.resolve([]);
  }

  let p = cache.get(categoryId);
  if (!p) {
    p = (async () => {
      const { Place } = (await google.maps.importLibrary(
        "places",
      )) as google.maps.PlacesLibrary;
      const { places } = await Place.searchNearby({
        fields: [
          "displayName",
          "location",
          "formattedAddress",
          "googleMapsURI",
          "id",
        ],
        locationRestriction: {
          center: COMMUNITY_CONFIG.center,
          radius: category.searchRadiusMeters,
        },
        includedPrimaryTypes: category.primaryTypes,
        maxResultCount: 10,
        rankPreference: "POPULARITY" as google.maps.places.SearchNearbyRankPreference,
      });
      return places ?? [];
    })();
    p.catch(() => cache.delete(categoryId));
    cache.set(categoryId, p);
  }
  return p;
}
