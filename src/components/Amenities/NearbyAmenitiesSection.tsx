"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import SectionTitle from "@/components/Common/SectionTitle";
import { COMMUNITY_CONFIG } from "@/lib/community-config";

const AmenityMap = dynamic(() => import("@/components/Amenities/AmenityMap"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800"
      style={{ height: 480, minHeight: 480 }}
      aria-hidden
    />
  ),
});

type NearbyAmenitiesSectionProps = {
  /** Compact section for interior pages */
  variant?: "home" | "page";
};

export default function NearbyAmenitiesSection({
  variant = "home",
}: NearbyAmenitiesSectionProps) {
  const title =
    variant === "home"
      ? `Life Near ${COMMUNITY_CONFIG.name}`
      : `What's Nearby ${COMMUNITY_CONFIG.name}`;

  const paragraph =
    variant === "home"
      ? `Explore dining, grocery, parks, healthcare, and more around ${COMMUNITY_CONFIG.displayName} in ${COMMUNITY_CONFIG.city}. Filter the map by category or view the full amenities guide.`
      : `Interactive map of verified amenities serving buyers at ${COMMUNITY_CONFIG.displayName}.`;

  return (
    <section
      className="py-16 md:py-20 lg:py-28"
      aria-label={`What's nearby ${COMMUNITY_CONFIG.name}`}
    >
      <div className="container">
        <SectionTitle title={title} paragraph={paragraph} center width="720px" mb="48px" />
        <AmenityMap showStaticList={variant === "page"} />
        <div className="mt-10 text-center">
          <Link
            href="/amenities"
            className="inline-block rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/90"
          >
            View Full Nearby Amenities Guide
          </Link>
        </div>
      </div>
    </section>
  );
}
