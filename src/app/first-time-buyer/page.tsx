import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { generateMetadata as genMeta } from "@/components/SEO/MetaTags";
import { Metadata } from "next";

export const metadata: Metadata = genMeta({
  title: "First-Time Homebuyer Agent Las Vegas",
  description:
    "First-time buyer guidance from consultation to keys. We explain the process, help with financing, and negotiate on your behalf. Free to you.",
  canonical: "/first-time-buyer",
  keywords: [
    "first-time homebuyer",
    "Las Vegas first-time buyer",
    "first-time buyer agent",
    "homebuyer guide",
  ],
});

export default function FirstTimeBuyerPage() {
  return (
    <>
      <Breadcrumb
        pageName="First-Time Homebuyer Guide"
        description="Expert guidance for first-time homebuyers in Las Vegas. We make the process simple and stress-free."
        path="first-time-buyer"
        schemaPageName="First-Time Homebuyer"
      />

      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl md:text-6xl">
              First-Time Homebuyer Guide
            </h1>
            <p className="mb-8 text-xl text-body-color dark:text-body-color-dark">
              Buying your first home doesn't have to be overwhelming. We guide
              you through every step, from financing to closing. Free to you.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/90"
              >
                Get Free First-Time Buyer Consultation
              </Link>
              <Link
                href="/search"
                className="rounded-xs border-2 border-primary bg-transparent px-8 py-4 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-primary/10"
              >
                Start Your Home Search
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why First-Time Buyers Need Help */}
      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Why First-Time Buyers Need Expert Guidance
            </h2>
            <div className="space-y-6 text-lg text-body-color dark:text-body-color-dark">
              <p>
                Buying your first home is exciting, but it's also complex. There
                are financing options to understand, contracts to review, and
                decisions to make that will impact you for years to come.
              </p>
              <p>
                Without proper guidance, first-time buyers often:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>Overpay because they don't know how to negotiate</li>
                <li>Miss important contract terms that could cost them later</li>
                <li>Choose the wrong financing option</li>
                <li>Make decisions based on emotion rather than logic</li>
                <li>Get overwhelmed by the process and make mistakes</li>
              </ul>
              <p>
                We make the process simple, transparent, and stress-free. We
                explain everything in plain English and guide you through each
                step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do for First-Time Buyers */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              How We Help First-Time Buyers
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                Financing Education
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                We explain different loan types, down payment assistance
                programs, and help you understand what you can afford. We
                connect you with trusted lenders who work with first-time
                buyers.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                Process Explanation
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                We walk you through every step of the homebuying process, from
                pre-approval to closing. No surprises, no confusion—just clear
                guidance.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                Negotiation on Your Behalf
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                We negotiate price, repairs, and terms. You don't have to worry
                about being taken advantage of—we handle all negotiations.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                Contract Review
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                We review every contract clause and explain what it means. We
                identify potential issues and ensure your interests are
                protected.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                Home Search Guidance
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                We help you identify neighborhoods that fit your lifestyle and
                budget. We know which areas are appreciating and which offer the
                best value.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                Inspection Coordination
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                We coordinate inspections, review reports, and help you
                understand what needs to be addressed. We negotiate repairs on
                your behalf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* First-Time Buyer Checklist */}
      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              First-Time Buyer Checklist
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                    Get Pre-Approved
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark">
                    Know your budget before you start looking. We'll help you
                    connect with lenders who specialize in first-time buyer
                    programs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                    Understand Your Needs
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark">
                    Think about location, size, features, and future plans. We'll
                    help you prioritize what matters most.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                    Start Your Search
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark">
                    Use our search tools and let us know what you're looking for.
                    We'll send you properties that match your criteria.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                    Make an Offer
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark">
                    We'll help you craft a competitive offer and negotiate on
                    your behalf. We know what works in the Las Vegas market.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                    Inspections & Due Diligence
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark">
                    We coordinate inspections and help you understand what needs
                    to be addressed. We negotiate repairs on your behalf.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                    Close & Move In
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark">
                    We guide you through closing and ensure everything is in
                    order. Then you get the keys to your first home!
                  </p>
                </div>
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
              Ready to Buy Your First Home?
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Let us guide you through the process. Free consultation, no
              obligation, just expert guidance.
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
