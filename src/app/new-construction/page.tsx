import Breadcrumb from "@/components/Common/Breadcrumb";
import AdvancedSearch from "@/components/RealScout/AdvancedSearch";
import Link from "next/link";
import { generateMetadata as genMeta } from "@/components/SEO/MetaTags";
import { Metadata } from "next";
import SchemaMarkup from "@/components/SEO/SchemaMarkup";

export const metadata: Metadata = genMeta({
  title: "New Construction Buyer Representation Las Vegas",
  description:
    "Don't face builders alone. Our exclusive buyer agents negotiate pricing, review contracts, and protect your interests on new construction. Builder pays our fee.",
  canonical: "/new-construction",
  keywords: [
    "new construction homes",
    "Las Vegas new construction",
    "buyer agent new construction",
    "new home buyer representation",
  ],
});

export default function NewConstructionPage() {
  const serviceSchema = {
    serviceType: "Exclusive Buyer Representation for New Construction",
    provider: {
      "@type": "RealEstateAgent",
      name: "GetReal Buyer Agents",
    },
    areaServed: "Las Vegas Metropolitan Area",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "New Construction Buyer Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "New Construction Buyer Representation",
          },
          price: "0",
          priceCurrency: "USD",
        },
      ],
    },
  };

  return (
    <>
      <SchemaMarkup type="Service" data={serviceSchema} />
      <Breadcrumb
        pageName="New Construction Buyer Representation"
        description="Expert guidance for buying new construction homes in Las Vegas. We negotiate on your behalf and protect your interests."
        path="new-construction"
        schemaPageName="New Construction"
      />

      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl md:text-6xl">
              New Construction Buyer Representation
            </h1>
            <p className="mb-8 text-xl text-body-color dark:text-body-color-dark">
              Don't face builders alone. Our exclusive buyer agents negotiate
              pricing, review contracts, and protect your interests on new
              construction. Builder pays our fee—free to you.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/90"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/search"
                className="rounded-xs border-2 border-primary bg-transparent px-8 py-4 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-primary/10"
              >
                Search New Construction
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why New Construction Needs Special Representation */}
      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Why New Construction Needs Special Representation
            </h2>
            <div className="space-y-6 text-lg text-body-color dark:text-body-color-dark">
              <p>
                Buying new construction is different from buying a resale home.
                Builders use their own contracts, set their own timelines, and
                have their own processes. Without proper representation, you're
                at a significant disadvantage.
              </p>
              <p>
                The builder's sales agent works for the builder—not you. Their
                job is to get you to pay full price, add expensive upgrades, and
                close quickly. They won't negotiate on your behalf or point out
                contract issues that could cost you thousands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              What We Do for New Construction Buyers
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                Negotiate Pricing
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                We negotiate base prices, lot premiums, and upgrade costs. Our
                clients typically save $10,000-$50,000 through strategic
                negotiations.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                Review Contracts
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Builder contracts are written to protect the builder. We review
                every clause, identify red flags, and negotiate better terms
                for you.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                Protect Your Interests
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                We ensure you understand all costs, timelines, and obligations.
                We're your advocate if issues arise during construction or
                closing.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                Find the Right Community
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                We know which builders are building where, which communities
                offer the best value, and which areas are appreciating fastest.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                Navigate Upgrades
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Builders mark up upgrades significantly. We help you understand
                which upgrades add value and which you can do later for less.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                Manage Timeline
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Construction delays are common. We help coordinate your timeline,
                manage expectations, and ensure you're protected if delays occur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Our New Construction Process
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  1
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                    Initial Consultation
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark">
                    We discuss your needs, budget, timeline, and preferences. We
                    explain the new construction process and answer all your
                    questions.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  2
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                    Community & Builder Research
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark">
                    We identify communities and builders that match your
                    criteria. We research builder reputations, past projects,
                    and current availability.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  3
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                    Site Visits & Selection
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark">
                    We accompany you to model homes and communities. We help you
                    compare options and make informed decisions.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  4
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                    Negotiation & Contract Review
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark">
                    We negotiate price, lot selection, upgrades, and contract
                    terms. We review every clause and ensure your interests are
                    protected.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  5
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                    Construction Monitoring
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark">
                    We monitor construction progress, coordinate inspections,
                    and ensure quality standards are met throughout the build
                    process.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  6
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                    Final Walkthrough & Closing
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark">
                    We conduct a thorough final walkthrough, identify any
                    issues, and ensure everything is resolved before closing. We
                    guide you through the closing process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Search */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Search New Construction Homes
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-body-color dark:text-body-color-dark">
              Use our advanced search to find new construction homes in Las
              Vegas, Henderson, Summerlin, and North Las Vegas.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <AdvancedSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Ready to Buy New Construction?
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Get expert representation that puts your interests first. Free to
              you—the builder pays our commission.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-xs bg-white px-8 py-4 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-white/90"
            >
              Schedule Your Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
