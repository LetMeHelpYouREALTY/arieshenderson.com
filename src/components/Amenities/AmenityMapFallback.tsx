import { COMMUNITY_CONFIG } from "@/lib/community-config";
import StaticAmenityList from "./StaticAmenityList";

type AmenityMapFallbackProps = {
  title?: string;
  showStaticList?: boolean;
};

export default function AmenityMapFallback({
  title = "Map preview",
  showStaticList = true,
}: AmenityMapFallbackProps) {
  const { lat, lng } = COMMUNITY_CONFIG.center;
  const embedSrc = `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`;

  return (
    <div className="space-y-6">
      <div
        className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
        aria-label={`${title} centered on ${COMMUNITY_CONFIG.displayName}`}
      >
        <iframe
          title={`Google Maps embed — ${COMMUNITY_CONFIG.displayName}, ${COMMUNITY_CONFIG.city}`}
          src={embedSrc}
          className="h-[480px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      {showStaticList ? <StaticAmenityList /> : null}
    </div>
  );
}
