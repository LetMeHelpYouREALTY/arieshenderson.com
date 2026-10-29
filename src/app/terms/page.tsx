import Breadcrumb from "@/components/Common/Breadcrumb";
import { generateMetadata as genMeta } from "@/components/SEO/MetaTags";
import { Metadata } from "next";

export const metadata: Metadata = genMeta({
  title: "Terms of Service",
  description:
    "Terms of service for GetReal Buyer Agents. Read our terms and conditions for using our real estate services and website.",
  canonical: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumb
        pageName="Terms of Service"
        description="Terms and conditions for using our services."
        path="terms"
      />

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h1 className="mb-6 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                Terms of Service
              </h1>
              <p className="mb-4 text-sm text-body-color dark:text-body-color-dark">
                Last Updated: {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-black dark:text-white">
                Acceptance of Terms
              </h2>
              <p className="mb-4 text-body-color dark:text-body-color-dark">
                By accessing and using this website, you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-black dark:text-white">
                Real Estate Services
              </h2>
              <p className="mb-4 text-body-color dark:text-body-color-dark">
                GetReal Buyer Agents provides exclusive buyer representation
                services for real estate transactions. Our services are provided
                free to buyers, as our commission is paid by the builder or
                seller.
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-black dark:text-white">
                No Dual Agency
              </h2>
              <p className="mb-4 text-body-color dark:text-body-color-dark">
                We represent only buyers, never sellers or builders. This ensures
                we can fully advocate for your interests without conflicts of
                interest.
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-black dark:text-white">
                Information Accuracy
              </h2>
              <p className="mb-4 text-body-color dark:text-body-color-dark">
                While we strive to provide accurate information, property
                listings, prices, and availability are subject to change. We
                recommend verifying all information before making decisions.
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-black dark:text-white">
                Limitation of Liability
              </h2>
              <p className="mb-4 text-body-color dark:text-body-color-dark">
                GetReal Buyer Agents shall not be liable for any indirect,
                incidental, special, or consequential damages arising from your
                use of our services or website.
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-black dark:text-white">
                Professional Licensing
              </h2>
              <p className="mb-4 text-body-color dark:text-body-color-dark">
                Dr. Jan Duffy is a licensed real estate agent in Nevada (License
                #S.0197614). Services are provided through Berkshire Hathaway
                HomeServices Nevada Properties.
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-black dark:text-white">
                Contact Information
              </h2>
              <p className="mb-4 text-body-color dark:text-body-color-dark">
                For questions about these Terms of Service, please contact us:
              </p>
              <p className="mb-4 text-body-color dark:text-body-color-dark">
                <strong>GetReal Buyer Agents</strong>
                <br />
                9406 Del Webb Boulevard
                <br />
                Las Vegas, NV 89134
                <br />
                Phone:{" "}
                <a
                  href="tel:+17025001955"
                  className="text-primary hover:underline"
                >
                  (702) 500-1955
                </a>
                <br />
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
        </div>
      </section>
    </>
  );
}
