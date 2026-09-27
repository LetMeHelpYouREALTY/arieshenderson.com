/**
 * Aries master-planned community (Henderson, NV) — site focus per arieshenderson.com / llms.txt.
 * Center coordinates sourced from OpenStreetMap geocode of Oasis Canyon at Aries
 * (Desert Lantern Place, within the Aries development), verified 2026-09-27.
 */
export const COMMUNITY_CONFIG = {
  slug: "aries",
  name: "Aries",
  displayName: "Aries Henderson",
  city: "Henderson",
  state: "NV",
  postalCode: "89015",
  regionLabel: "Henderson, Nevada",
  /** Community center for map radius searches */
  center: {
    lat: 36.0757934,
    lng: -114.9284155,
  },
  /** Documented sales-center corridor along the Aries development */
  streetAddress: "East Lake Mead Parkway",
  fullAddress: "East Lake Mead Parkway, Henderson, NV 89015",
  salesOfficeExample: "1109 Desert Lantern Place, Henderson, NV 89015",
  websiteBaseUrl: "https://www.arieshenderson.com",
  /** Family-oriented master-planned community (Pulte + Del Webb); not a 55+-only site */
  communityType: "master-planned" as const,
} as const;

export type CommunityConfig = typeof COMMUNITY_CONFIG;
