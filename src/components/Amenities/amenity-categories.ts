export type AmenityCategoryId =
  | "restaurants"
  | "cafes"
  | "grocery"
  | "parks"
  | "golf"
  | "healthcare"
  | "pharmacies"
  | "shopping"
  | "parking"
  | "fitness"
  | "schools";

export type AmenityCategory = {
  id: AmenityCategoryId;
  label: string;
  primaryTypes: string[];
  searchRadiusMeters: number;
};

/** Standard family master-planned order (spec default) */
export const AMENITY_CATEGORY_ORDER: AmenityCategoryId[] = [
  "restaurants",
  "cafes",
  "grocery",
  "parks",
  "golf",
  "healthcare",
  "pharmacies",
  "shopping",
  "parking",
  "fitness",
  "schools",
];

export const AMENITY_CATEGORIES: AmenityCategory[] = [
  {
    id: "restaurants",
    label: "Restaurants",
    primaryTypes: ["restaurant"],
    searchRadiusMeters: 8000,
  },
  {
    id: "cafes",
    label: "Cafes",
    primaryTypes: ["cafe", "coffee_shop"],
    searchRadiusMeters: 8000,
  },
  {
    id: "grocery",
    label: "Grocery",
    primaryTypes: ["grocery_store", "supermarket"],
    searchRadiusMeters: 10000,
  },
  {
    id: "parks",
    label: "Parks",
    primaryTypes: ["park"],
    searchRadiusMeters: 8000,
  },
  {
    id: "golf",
    label: "Golf",
    primaryTypes: ["golf_course"],
    searchRadiusMeters: 15000,
  },
  {
    id: "healthcare",
    label: "Healthcare",
    primaryTypes: ["hospital", "doctor"],
    searchRadiusMeters: 12000,
  },
  {
    id: "pharmacies",
    label: "Pharmacies",
    primaryTypes: ["pharmacy"],
    searchRadiusMeters: 8000,
  },
  {
    id: "shopping",
    label: "Shopping",
    primaryTypes: ["shopping_mall", "department_store"],
    searchRadiusMeters: 12000,
  },
  {
    id: "parking",
    label: "Parking",
    primaryTypes: ["parking"],
    searchRadiusMeters: 8000,
  },
  {
    id: "fitness",
    label: "Fitness",
    primaryTypes: ["gym"],
    searchRadiusMeters: 10000,
  },
  {
    id: "schools",
    label: "Schools",
    primaryTypes: ["school", "primary_school", "secondary_school"],
    searchRadiusMeters: 8000,
  },
];

export function getCategoryById(id: AmenityCategoryId): AmenityCategory | undefined {
  return AMENITY_CATEGORIES.find((c) => c.id === id);
}
