import Breadcrumb from "@/components/Common/Breadcrumb";
import AdvancedSearch from "@/components/RealScout/AdvancedSearch";
import NeighborhoodHero from "@/components/Neighborhood/NeighborhoodHero";
import BuilderCommunities from "@/components/Neighborhood/BuilderCommunities";
import MarketStats from "@/components/Neighborhood/MarketStats";
import SchoolsList from "@/components/Neighborhood/SchoolsList";
import NeighborhoodFAQ from "@/components/Neighborhood/NeighborhoodFAQ";
import LeadCaptureCTA from "@/components/Neighborhood/LeadCaptureCTA";
import StructuredData from "@/components/SEO/StructuredData";
import { generateMetadata as genMeta } from "@/components/SEO/MetaTags";
import Link from "next/link";
import { Metadata } from "next";
import neighborhoodsData from "@/data/neighborhoods.json";

const neighborhood = neighborhoodsData["north-las-vegas"];

export const metadata: Metadata = genMeta({
  title: "New Construction Homes in North Las Vegas NV",
  description:
    "Find new construction in North Las Vegas with an exclusive buyer's agent. We negotiate price, review contracts, protect your interests. Free representation. Price range $350K-$700K.",
  canonical: "/neighborhoods/north-las-vegas",
  keywords: [
    "North Las Vegas new construction",
    "North Las Vegas homes for sale",
    "new construction North Las Vegas",
    "North Las Vegas real estate",
  ],
});

export default function NorthLasVegasNeighborhoodPage() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "North Las Vegas, Nevada",
    description: "Fast-growing city in the Las Vegas Valley, Nevada",
    address: {
      "@type": "PostalAddress",
      addressLocality: "North Las Vegas",
      addressRegion: "NV",
      addressCountry: "US",
    },
  };

  return (
    <>
      <StructuredData data={placeSchema} />
      <Breadcrumb
        pageName="North Las Vegas Neighborhood"
        description="Growing area with new construction and affordable housing options."
        path="neighborhoods/north-las-vegas"
        parents={[{ name: "Neighborhoods", path: "neighborhoods" }]}
        schemaPageName="North Las Vegas"
      />

      <NeighborhoodHero
        h1={neighborhood.h1}
        subhead={neighborhood.subhead}
        priceRange={neighborhood.priceRange}
      />

      {/* Neighborhood Overview */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              About North Las Vegas, Nevada
            </h2>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="mb-4 text-lg leading-relaxed text-body-color dark:text-body-color-dark">
                {neighborhood.overview}
              </p>
              <p className="mb-4 text-lg leading-relaxed text-body-color dark:text-body-color-dark">
                <strong className="text-black dark:text-white">Character & Lifestyle:</strong>{" "}
                {neighborhood.character}
              </p>
              <p className="mb-4 text-lg leading-relaxed text-body-color dark:text-body-color-dark">
                <strong className="text-black dark:text-white">Why New Construction:</strong>{" "}
                {neighborhood.whyNewConstruction}
              </p>
              <p className="text-lg leading-relaxed text-body-color dark:text-body-color-dark">
                <strong className="text-black dark:text-white">Development Trends:</strong>{" "}
                {neighborhood.developmentTrends}
              </p>
            </div>
          </div>
        </div>
      </section>

      <BuilderCommunities
        communities={neighborhood.communities}
        neighborhoodName={neighborhood.name}
      />

      <MarketStats
        medianPrice={neighborhood.medianPrice}
        pricePerSqft={neighborhood.pricePerSqft}
        daysOnMarket={neighborhood.daysOnMarket}
        activeListings={neighborhood.activeListings}
        yoyChange={neighborhood.yoyChange}
        neighborhoodName={neighborhood.name}
        lastUpdated={lastUpdated}
      />

      <SchoolsList schools={neighborhood.schools} neighborhoodName={neighborhood.name} />

      {/* Lifestyle & Amenities */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Lifestyle & Amenities in North Las Vegas
            </h2>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  Shopping & Dining
                </h3>
                <p className="text-body-color dark:text-body-color-dark">
                  {neighborhood.lifestyle.shopping}
                </p>
                <p className="mt-4 text-body-color dark:text-body-color-dark">
                  {neighborhood.lifestyle.dining}
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  Parks & Recreation
                </h3>
                <p className="text-body-color dark:text-body-color-dark">
                  {neighborhood.lifestyle.parks}
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  Healthcare
                </h3>
                <p className="text-body-color dark:text-body-color-dark">
                  {neighborhood.lifestyle.healthcare}
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  Commute Times
                </h3>
                <p className="text-body-color dark:text-body-color-dark">
                  {neighborhood.lifestyle.commute}
                </p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Unique Features
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                {neighborhood.lifestyle.unique}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use a Buyer's Agent */}
      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Why Use a Buyer's Agent in North Las Vegas
            </h2>
            <p className="text-lg leading-relaxed text-body-color dark:text-body-color-dark">
              {neighborhood.buyerAgentValue}
            </p>
          </div>
        </div>
      </section>

      {/* Property Search Widget */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Search New Construction Homes in North Las Vegas
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-body-color dark:text-body-color-dark">
              Use our advanced search tool to find the latest new construction
              listings in North Las Vegas. Filter by price, beds, baths, and more.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <AdvancedSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
            </div>
          </div>
        </div>
      </section>

      <NeighborhoodFAQ faqs={neighborhood.faqs} />

      {/* Related Neighborhoods */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Compare Other Neighborhoods
            </h2>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {neighborhood.relatedNeighborhoods.map((related, index) => (
                <Link
                  key={index}
                  href={`/neighborhoods/${related.slug}`}
                  className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
                >
                  <h3 className="mb-2 text-xl font-bold text-black group-hover:text-primary dark:text-white">
                    {related.name}
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark">
                    {related.comparison}
                  </p>
                  <span className="mt-4 inline-block text-primary group-hover:underline">
                    Explore {related.name} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LeadCaptureCTA neighborhoodName={neighborhood.name} />
    </>
  );
}
