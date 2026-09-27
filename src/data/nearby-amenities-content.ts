import type { AmenityCategoryId } from "@/components/Amenities/amenity-categories";

export type CuratedPlace = {
  name: string;
  address: string;
  category: AmenityCategoryId;
  schemaType:
    | "Restaurant"
    | "CafeOrCoffeeShop"
    | "GroceryStore"
    | "Park"
    | "GolfCourse"
    | "Hospital"
    | "Pharmacy"
    | "ShoppingCenter"
    | "School"
    | "Place";
  note?: string;
};

/** Verified public listings — used for fallback UI and JSON-LD ItemList only */
export const CURATED_PLACES: CuratedPlace[] = [
  {
    name: "Smith's Marketplace",
    address: "845 E Lake Mead Pkwy, Henderson, NV 89011",
    category: "grocery",
    schemaType: "GroceryStore",
    note: "Full-service grocery anchor along the Lake Mead Parkway corridor east of Aries.",
  },
  {
    name: "St. Rose Dominican Hospital, Siena Campus",
    address: "3001 St Rose Pkwy, Henderson, NV 89052",
    category: "healthcare",
    schemaType: "Hospital",
  },
  {
    name: "The District at Green Valley Ranch",
    address: "2240 Village Walk Dr, Henderson, NV 89052",
    category: "shopping",
    schemaType: "ShoppingCenter",
    note: "Outdoor shopping, dining, and entertainment in Green Valley.",
  },
  {
    name: "C.T. Sewell Elementary School",
    address: "700 E Lake Mead Parkway, Henderson, NV 89015",
    category: "schools",
    schemaType: "School",
    note: "Clark County School District; confirm zoning for a specific Aries address before enrolling.",
  },
  {
    name: "Lake Mead National Recreation Area",
    address: "601 Nevada Way, Boulder City, NV 89005",
    category: "parks",
    schemaType: "Park",
    note: "Boating, hiking, and shoreline recreation northeast of Henderson.",
  },
];

export type AmenityContentSection = {
  id: AmenityCategoryId | "commute";
  title: string;
  body: string;
};

export const AMENITY_CONTENT_SECTIONS: AmenityContentSection[] = [
  {
    id: "grocery",
    title: "Grocery & everyday errands",
    body:
      "Smith's Marketplace at 845 E Lake Mead Pkwy (Cadence Village Center) is the closest full grocery anchor along the Lake Mead Parkway corridor serving east Henderson, including Aries. Additional supermarkets and specialty shops are available toward Green Valley and along Boulder Highway as you head toward central Henderson.",
  },
  {
    id: "restaurants",
    title: "Dining near Aries",
    body:
      "Lake Mead Parkway and the Green Valley / Water Street corridors offer a mix of casual chains and local favorites. The District at Green Valley Ranch adds sit-down restaurants and quick options within a short drive. New retail pads continue to fill in along the Lake Mead corridor as Aries and neighboring master plans grow.",
  },
  {
    id: "parks",
    title: "Parks & recreation",
    body:
      "Aries is a new master-planned community with on-site parks and trails, including Greenbow Park (opened with the community). Lake Mead National Recreation Area is northeast for boating and desert shoreline access. Henderson's city park system—including Cornerstone Park and Acacia Park—is available farther west toward central Henderson.",
  },
  {
    id: "golf",
    title: "Golf",
    body:
      "Public and resort courses dot the Henderson and Las Vegas Valley, including options near Lake Las Vegas and throughout Green Valley. Many buyers at Aries pair community walking trails with occasional rounds at valley courses within roughly 15–25 minutes by car, depending on traffic.",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    body:
      "St. Rose Dominican Hospital, Siena Campus on St Rose Parkway provides emergency and specialty care for east Henderson and Green Valley. Urgent care clinics, primary care offices, and pharmacies cluster along St Rose Parkway, Eastern Avenue, and the Lake Mead / Boulder Highway corridors.",
  },
  {
    id: "shopping",
    title: "Shopping",
    body:
      "The District at Green Valley Ranch remains the primary regional outdoor mall for apparel, services, and dining. Big-box and home-improvement retailers line Stephanie Street and nearby Henderson commercial nodes. Expect more pad sites along Lake Mead Parkway as Aries retail phases come online.",
  },
  {
    id: "schools",
    title: "Schools",
    body:
      "Aries sits in the Clark County School District. Builder materials reference C.T. Sewell Elementary; middle and high school assignments depend on your lot and CCSD boundaries. Always verify current zoning with the district before you write an offer.",
  },
  {
    id: "commute",
    title: "Commute & regional access",
    body:
      "Aries sits along Lake Mead Parkway with access toward the 215 Beltway, Boulder Highway, and the Water Street District in historic Henderson. Approximate drive times vary with traffic: about 25–35 minutes to the Las Vegas Strip, about 20–30 minutes to Harry Reid International Airport, and about 15–25 minutes to Downtown Summerlin via the 215 and I-215 corridor. Times are approximate and should be tested at your typical travel hours.",
  },
];

export type AmenityFaq = {
  question: string;
  answer: string;
};

export const AMENITIES_FAQS: AmenityFaq[] = [
  {
    question: "What grocery stores are near Aries in Henderson?",
    answer:
      "Smith's Marketplace at 845 E Lake Mead Pkwy is the primary full grocery store along the Lake Mead corridor serving Aries and neighboring Cadence.",
  },
  {
    question: "How far is Aries from the Las Vegas Strip?",
    answer:
      "Most Strip destinations are roughly 25–35 minutes by car from Aries in typical traffic, using Lake Mead Parkway and freeway connections toward Las Vegas.",
  },
  {
    question: "Are there hospitals near Aries Henderson?",
    answer:
      "St. Rose Dominican Hospital, Siena Campus on St Rose Parkway provides emergency and inpatient care within about a 15–20 minute drive of Aries.",
  },
  {
    question: "What parks are inside or near the Aries community?",
    answer:
      "Aries includes on-site parks such as Greenbow Park, with additional Henderson city parks and Lake Mead National Recreation Area reachable by car.",
  },
  {
    question: "Which schools serve new homes at Aries?",
    answer:
      "Homes at Aries are in Clark County School District; elementary assignments often reference C.T. Sewell Elementary, but you must confirm zoning for your specific address.",
  },
  {
    question: "How long does it take to reach Harry Reid International Airport from Aries?",
    answer:
      "Plan on roughly 20–30 minutes to the airport via Lake Mead Parkway and the 215/515 connectors, depending on time of day.",
  },
  {
    question: "Is Aries close to shopping and restaurants?",
    answer:
      "Yes—Lake Mead Parkway retail is expanding near Aries, and The District at Green Valley Ranch offers major shopping and dining within a short drive.",
  },
  {
    question: "Can I walk to amenities from Aries?",
    answer:
      "Some on-site trails and future pad sites are walkable within Aries, but most grocery, healthcare, and regional shopping trips are short drives along Lake Mead Parkway.",
  },
];
