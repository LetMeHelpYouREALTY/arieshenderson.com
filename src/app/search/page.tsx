import Breadcrumb from "@/components/Common/Breadcrumb";
import AdvancedSearch from "@/components/RealScout/AdvancedSearch";
import NearbyAmenitiesSection from "@/components/Amenities/NearbyAmenitiesSection";
import { generateMetadata as genMeta } from "@/components/SEO/MetaTags";
import { Metadata } from "next";

export const metadata: Metadata = genMeta({
  title: "Property Search",
  description:
    "Search for homes for sale in Las Vegas. Use our advanced search to filter by price, location, property type, and more. Find your perfect home today.",
  canonical: "/search",
  keywords: [
    "Las Vegas homes for sale",
    "property search",
    "home search",
    "Las Vegas real estate search",
  ],
});

export default function SearchPage() {
  return (
    <>
      <Breadcrumb
        pageName="Property Search"
        description="Use our advanced search tool to find your perfect home. Filter by location, price, property type, and more."
        path="search"
      />

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 text-center">
              <h1 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
                Find Your Dream Home
              </h1>
              <p className="text-lg text-body-color dark:text-body-color-dark">
                Search thousands of properties in Las Vegas and surrounding areas.
                Use our advanced filters to find exactly what you're looking for.
              </p>
            </div>

            <div className="mb-12 flex justify-center">
              <div className="w-full max-w-4xl">
                <AdvancedSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
              </div>
            </div>

            <NearbyAmenitiesSection variant="page" />

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
              <h2 className="mb-4 text-xl font-bold text-black dark:text-white">
                Search Tips
              </h2>
              <ul className="space-y-2 text-body-color dark:text-body-color-dark">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>
                    Start with a location or zip code to see available properties
                    in that area
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>
                    Use price filters to narrow down properties within your
                    budget
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>
                    Filter by property type (single family, condo, townhouse,
                    etc.)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>
                    Save your favorite properties and get notified of price
                    changes
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
