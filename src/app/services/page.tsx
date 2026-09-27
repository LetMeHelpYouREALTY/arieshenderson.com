import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { generateMetadata as genMeta } from "@/components/SEO/MetaTags";
import { Metadata } from "next";

export const metadata: Metadata = genMeta({
  title: "Exclusive Buyer Agent Services | Las Vegas Real Estate",
  description:
    "Comprehensive buyer representation services: new construction, resale homes, first-time buyer guidance, contract review, and negotiation. Free to buyers.",
  canonical: "/services",
  keywords: [
    "buyer agent services",
    "real estate services",
    "homebuyer services",
    "buyer representation",
  ],
});

const services = [
  {
    title: "New Construction Representation",
    description:
      "Expert guidance for buying new construction homes. We negotiate with builders, review contracts, and protect your interests throughout the build process.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    link: "/new-construction",
  },
  {
    title: "First-Time Buyer Guidance",
    description:
      "Complete support for first-time homebuyers. We explain the process, help with financing, and guide you from pre-approval to closing.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    link: "/first-time-buyer",
  },
  {
    title: "Property Search & Analysis",
    description:
      "Access to all MLS listings plus off-market opportunities. We analyze properties, neighborhoods, and market trends to find the best value.",
    icon: (
      <svg
        className="h-6 w-6"
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
    ),
    link: "/search",
  },
  {
    title: "Price Negotiation",
    description:
      "We negotiate on your behalf to get the best price, terms, and conditions. Our clients typically save $10,000-$50,000 through strategic negotiations.",
    icon: (
      <svg
        className="h-6 w-6"
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
    ),
  },
  {
    title: "Contract Review & Negotiation",
    description:
      "We review every contract clause, identify red flags, and negotiate better terms. Builder contracts are written to protect builders—we protect you.",
    icon: (
      <svg
        className="h-6 w-6"
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
    ),
  },
  {
    title: "Inspection Coordination",
    description:
      "We coordinate inspections, review reports, and negotiate repairs on your behalf. We ensure you understand what needs to be addressed.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Neighborhood Research",
    description:
      "We know which neighborhoods are appreciating, which offer the best value, and which match your lifestyle. We help you make informed decisions.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    link: "/neighborhoods",
  },
  {
    title: "Closing Coordination",
    description:
      "We coordinate all aspects of closing, ensure documents are in order, and guide you through the final steps. We're with you until you get the keys.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb
        pageName="Our Services"
        description="Comprehensive buyer representation services for Las Vegas homebuyers. Free to you—the builder or seller pays our commission."
        path="services"
        schemaPageName="Services"
      />

      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl md:text-6xl">
              Our Buyer Agent Services
            </h1>
            <p className="mb-8 text-xl text-body-color dark:text-body-color-dark">
              Comprehensive representation for Las Vegas homebuyers. We handle
              everything from search to closing. Free to you—the builder or
              seller pays our commission.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  {service.title}
                </h3>
                <p className="mb-4 text-body-color dark:text-body-color-dark">
                  {service.description}
                </p>
                {service.link && (
                  <Link
                    href={service.link}
                    className="text-primary hover:underline"
                  >
                    Learn more →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Free to You */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Why Our Services Are Free to You
            </h2>
            <div className="space-y-6 text-lg text-body-color dark:text-body-color-dark">
              <p>
                Real estate commissions are typically paid by the seller or
                builder, not the buyer. When you work with us, the builder or
                seller pays our commission as part of their marketing costs.
              </p>
              <p>
                This means you get expert representation at no cost to you. We
                work exclusively for you, negotiating the best price and terms
                while the other party pays our fee.
              </p>
              <p>
                <strong className="text-black dark:text-white">
                  No hidden fees. No surprises. Just expert representation that
                  puts your interests first.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Schedule a free consultation to learn how we can help you find and
              buy your perfect home.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-xs bg-white px-8 py-4 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-white/90"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
