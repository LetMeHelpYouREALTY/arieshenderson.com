import { COMMUNITY_CONFIG } from "@/lib/community-config";
import {
  CURATED_PLACES,
  type CuratedPlace,
} from "@/data/nearby-amenities-content";
import type { AmenityCategoryId } from "./amenity-categories";

type StaticAmenityListProps = {
  categoryFilter?: AmenityCategoryId | "all";
  className?: string;
};

export default function StaticAmenityList({
  categoryFilter = "all",
  className = "",
}: StaticAmenityListProps) {
  const places: CuratedPlace[] =
    categoryFilter === "all"
      ? CURATED_PLACES
      : CURATED_PLACES.filter((p) => p.category === categoryFilter);

  return (
    <div className={className}>
      <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
        Featured places near {COMMUNITY_CONFIG.name}
      </h3>
      <ul className="space-y-4" aria-label="Curated nearby amenities list">
        {places.map((place) => (
          <li
            key={`${place.name}-${place.address}`}
            className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900"
          >
            <p className="font-medium text-black dark:text-white">{place.name}</p>
            <p className="text-sm text-body-color dark:text-body-color-dark">
              {place.address}
            </p>
            {place.note ? (
              <p className="mt-2 text-sm text-body-color dark:text-body-color-dark">
                {place.note}
              </p>
            ) : null}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place.address)}`}
              className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Directions
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
