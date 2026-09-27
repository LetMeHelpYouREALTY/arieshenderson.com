import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { generateMetadata as genMeta } from "@/components/SEO/MetaTags";
import { Metadata } from "next";

export const metadata: Metadata = genMeta({
  title: "Homebuyer Resources & Guides | Las Vegas Real Estate",
  description:
    "Free resources for Las Vegas homebuyers: buying guides, market insights, financing tips, and neighborhood information. Expert advice from buyer agents.",
  canonical: "/resources",
  keywords: [
    "homebuyer resources",
    "buying guide",
    "real estate tips",
    "homebuyer education",
  ],
});

const resources = [
  {
    title: "New Construction Buying Guide",
    description:
      "Complete guide to buying new construction homes. Learn about the process, what to expect, and how to protect your interests.",
    link: "/new-construction",
    category: "Buying Guides",
  },
  {
    title: "First-Time Homebuyer Checklist",
    description:
      "Step-by-step checklist for first-time homebuyers. From pre-approval to closing, we cover everything you need to know.",
    link: "/first-time-buyer",
    category: "Buying Guides",
  },
  {
    title: "Las Vegas Neighborhood Guide",
    description:
      "Explore neighborhoods across the Las Vegas Valley. Compare communities, prices, schools, and amenities.",
    link: "/neighborhoods",
    category: "Neighborhoods",
  },
  {
    title: "Market Insights & Trends",
    description:
      "Stay informed with the latest Las Vegas real estate market news, trends, and insights from industry experts.",
    link: "/blog",
    category: "Market Information",
  },
  {
    title: "Property Search Tools",
    description:
      "Search thousands of properties in Las Vegas. Use our advanced filters to find exactly what you're looking for.",
    link: "/search",
    category: "Tools",
  },
];

const tips = [
  {
    title: "Get Pre-Approved First",
    description:
      "Know your budget before you start looking. Pre-approval shows sellers you're serious and helps you move quickly when you find the right home.",
  },
  {
    title: "Understand All Costs",
    description:
      "Beyond the purchase price, factor in closing costs, property taxes, HOA fees, insurance, and maintenance. We help you understand the full picture.",
  },
  {
    title: "Don't Skip Inspections",
    description:
      "Even new construction homes need inspections. We coordinate thorough inspections and negotiate repairs on your behalf.",
  },
  {
    title: "Research Neighborhoods",
    description:
      "Visit neighborhoods at different times of day. Check schools, commute times, and nearby amenities. We provide detailed neighborhood research.",
  },
  {
    title: "Work with an Exclusive Buyer Agent",
    description:
      "The builder's or seller's agent works for them, not you. An exclusive buyer agent represents only your interests and negotiates on your behalf.",
  },
  {
    title: "Review Contracts Carefully",
    description:
      "Real estate contracts are complex. We review every clause, explain what it means, and negotiate better terms for you.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Breadcrumb
        pageName="Homebuyer Resources"
        description="Free resources, guides, and tips for Las Vegas homebuyers. Expert advice to help you make informed decisions."
        path="resources"
        schemaPageName="Resources"
      />

      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl md:text-6xl">
              Homebuyer Resources
            </h1>
            <p className="mb-8 text-xl text-body-color dark:text-body-color-dark">
              Free guides, tips, and tools to help you navigate the Las Vegas
              real estate market. Expert advice from exclusive buyer agents.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Guides & Tools
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => (
              <Link
                key={index}
                href={resource.link}
                className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
              >
                <div className="mb-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {resource.category}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black group-hover:text-primary dark:text-white">
                  {resource.title}
                </h3>
                <p className="text-body-color dark:text-body-color-dark">
                  {resource.description}
                </p>
                <span className="mt-4 inline-block text-primary group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Homebuying Tips
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-body-color dark:text-body-color-dark">
              Expert tips to help you navigate the homebuying process and make
              informed decisions.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
              >
                <h3 className="mb-3 text-lg font-bold text-black dark:text-white">
                  {tip.title}
                </h3>
                <p className="text-body-color dark:text-body-color-dark">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Common Questions
            </h2>
            <div className="space-y-6">
              <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
                <h3 className="mb-3 text-lg font-bold text-black dark:text-white">
                  How much does buyer representation cost?
                </h3>
                <p className="text-body-color dark:text-body-color-dark">
                  Nothing. Buyer representation is free to you. The builder or
                  seller pays our commission as part of their marketing costs.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
                <h3 className="mb-3 text-lg font-bold text-black dark:text-white">
                  Do I really need my own agent for new construction?
                </h3>
                <p className="text-body-color dark:text-body-color-dark">
                  Yes. The builder's agent works for the builder, not you. They
                  won't negotiate price or point out contract issues. We work
                  exclusively for you.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
                <h3 className="mb-3 text-lg font-bold text-black dark:text-white">
                  What's the difference between a buyer's agent and the builder's agent?
                </h3>
                <p className="text-body-color dark:text-body-color-dark">
                  The builder's agent represents the builder's interests. A
                  buyer's agent represents only you. We negotiate on your behalf,
                  review contracts, and protect your interests.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
                <h3 className="mb-3 text-lg font-bold text-black dark:text-white">
                  Can you help with financing?
                </h3>
                <p className="text-body-color dark:text-body-color-dark">
                  We connect you with trusted lenders who specialize in working
                  with homebuyers. We help you understand your options and find
                  the best financing for your situation.
                </p>
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
              Need More Help?
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Schedule a free consultation to get personalized guidance for your
              homebuying journey.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-xs bg-white px-8 py-4 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-white/90"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
