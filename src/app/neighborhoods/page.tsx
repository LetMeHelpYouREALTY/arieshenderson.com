import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { generateMetadata as genMeta } from "@/components/SEO/MetaTags";
import { Metadata } from "next";

export const metadata: Metadata = genMeta({
  title: "Las Vegas Neighborhoods | New Construction Communities",
  description:
    "Explore new construction homes in Las Vegas neighborhoods: Summerlin, Henderson, North Las Vegas. Find the perfect community for your lifestyle.",
  canonical: "/neighborhoods",
  keywords: [
    "Las Vegas neighborhoods",
    "new construction communities",
    "Summerlin homes",
    "Henderson homes",
    "North Las Vegas homes",
  ],
});

const neighborhoods = [
  {
    name: "Summerlin",
    slug: "summerlin",
    description:
      "Master-planned luxury community with top-rated schools, championship golf courses, and premium amenities.",
    priceRange: "$500K - $1.5M+",
    highlights: [
      "150+ parks and trails",
      "Top-rated schools",
      "Championship golf courses",
      "Downtown Summerlin shopping",
    ],
  },
  {
    name: "Henderson",
    slug: "henderson",
    description:
      "Family-friendly city with excellent schools, abundant parks, and more moderate pricing than Summerlin.",
    priceRange: "$400K - $900K",
    highlights: [
      "Top-rated school district",
      "Family-oriented communities",
      "Extensive park systems",
      "Water-smart communities",
    ],
  },
  {
    name: "North Las Vegas",
    slug: "north-las-vegas",
    description:
      "Fast-growing area offering the best value in the Las Vegas Valley with modern new construction communities.",
    priceRange: "$350K - $700K",
    highlights: [
      "Best value in the valley",
      "Newer infrastructure",
      "Growing commercial development",
      "Proximity to Nellis Air Force Base",
    ],
  },
];

export default function NeighborhoodsPage() {
  return (
    <>
      <Breadcrumb
        pageName="Las Vegas Neighborhoods"
        description="Explore new construction communities in Las Vegas, Henderson, Summerlin, and North Las Vegas."
        path="neighborhoods"
        schemaPageName="Neighborhoods"
      />

      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl md:text-6xl">
              Las Vegas Neighborhoods
            </h1>
            <p className="mb-8 text-xl text-body-color dark:text-body-color-dark">
              Explore new construction communities across the Las Vegas Valley.
              Each neighborhood offers unique lifestyle, amenities, and value.
            </p>
          </div>
        </div>
      </section>

      {/* Neighborhood Cards */}
      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {neighborhoods.map((neighborhood) => (
              <div
                key={neighborhood.slug}
                className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
              >
                <h2 className="mb-3 text-2xl font-bold text-black group-hover:text-primary dark:text-white">
                  {neighborhood.name}
                </h2>
                <p className="mb-4 text-body-color dark:text-body-color-dark">
                  {neighborhood.description}
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-body-color dark:text-body-color-dark">
                    Price Range:
                  </p>
                  <p className="text-lg font-bold text-primary">
                    {neighborhood.priceRange}
                  </p>
                </div>
                <ul className="mb-6 space-y-2">
                  {neighborhood.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start text-sm text-body-color dark:text-body-color-dark"
                    >
                      <span className="mr-2 text-primary">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/neighborhoods/${neighborhood.slug}`}
                  className="inline-block rounded-xs bg-primary px-6 py-3 text-sm font-semibold text-white duration-300 ease-in-out hover:bg-primary/90"
                >
                  Explore {neighborhood.name} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Which Neighborhood is Right for You?
            </h2>
            <div className="space-y-6">
              <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Choose Summerlin If:
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-body-color dark:text-body-color-dark">
                  <li>You want established luxury and premium amenities</li>
                  <li>Top-rated schools are a priority</li>
                  <li>You value master-planned community governance</li>
                  <li>Golf and outdoor recreation are important</li>
                  <li>Budget allows for $500K+ pricing</li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Choose Henderson If:
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-body-color dark:text-body-color-dark">
                  <li>You want family-oriented communities</li>
                  <li>Excellent schools at more moderate prices</li>
                  <li>You prefer a suburban feel with city access</li>
                  <li>Water-smart communities appeal to you</li>
                  <li>Budget is $400K-$900K</li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Choose North Las Vegas If:
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-body-color dark:text-body-color-dark">
                  <li>You want the best value in the valley</li>
                  <li>You're a first-time buyer or investor</li>
                  <li>Newer infrastructure is important</li>
                  <li>You want to get in before full development</li>
                  <li>Budget is $350K-$700K</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Not Sure Which Neighborhood?
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Let us help you find the perfect community based on your lifestyle,
              budget, and priorities.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-xs bg-white px-8 py-4 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-white/90"
            >
              Get Neighborhood Recommendations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
