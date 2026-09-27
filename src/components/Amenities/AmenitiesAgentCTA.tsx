import Link from "next/link";
import { COMMUNITY_CONFIG } from "@/lib/community-config";

export default function AmenitiesAgentCTA() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl">
            Your hyperlocal guide to {COMMUNITY_CONFIG.displayName}
          </h2>
          <p className="mb-6 text-body-color dark:text-body-color-dark">
            Dr. Jan Duffy (Nevada S.0197614) is an exclusive buyer agent with
            Berkshire Hathaway HomeServices Nevada Properties. She helps buyers
            compare builders, neighborhoods, and commute trade-offs at Aries and
            across the Las Vegas Valley—with no dual agency and no cost to you
            on builder-paid new construction.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary/90"
            >
              Schedule Free Consultation
            </Link>
            <a
              href="tel:+17027180043"
              className="rounded-xs border border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary/5"
            >
              Call (702) 718-0043
            </a>
          </div>
          <p className="mt-6 text-sm text-body-color dark:text-body-color-dark">
            Email:{" "}
            <a
              href="mailto:contact@arieshenderson.com"
              className="text-primary hover:underline"
            >
              contact@arieshenderson.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
