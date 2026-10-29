import Breadcrumb from "@/components/Common/Breadcrumb";
import { generateMetadata as genMeta } from "@/components/SEO/MetaTags";
import { Metadata } from "next";

export const metadata: Metadata = genMeta({
  title: "Privacy Policy",
  description:
    "Privacy policy for GetReal Buyer Agents. Learn how we collect, use, and protect your personal information when you use our real estate services.",
  canonical: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        description="How we collect, use, and protect your information."
        path="privacy-policy"
      />

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h1 className="mb-6 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                Privacy Policy
              </h1>
              <p className="mb-4 text-sm text-body-color dark:text-body-color-dark">
                Last Updated: {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-black dark:text-white">
                Information We Collect
              </h2>
              <p className="mb-4 text-body-color dark:text-body-color-dark">
                We collect information that you provide directly to us when you:
              </p>
              <ul className="mb-4 list-disc pl-6 text-body-color dark:text-body-color-dark">
                <li>Request a consultation or contact us</li>
                <li>Subscribe to our newsletter or market updates</li>
                <li>Use our property search tools</li>
                <li>Complete forms on our website</li>
              </ul>
              <p className="mb-4 text-body-color dark:text-body-color-dark">
                This information may include your name, email address, phone
                number, property preferences, and other details you choose to
                provide.
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-black dark:text-white">
                How We Use Your Information
              </h2>
              <p className="mb-4 text-body-color dark:text-body-color-dark">
                We use the information we collect to:
              </p>
              <ul className="mb-4 list-disc pl-6 text-body-color dark:text-body-color-dark">
                <li>Provide real estate services and respond to your inquiries</li>
                <li>Send you market updates and property information</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-black dark:text-white">
                Information Sharing
              </h2>
              <p className="mb-4 text-body-color dark:text-body-color-dark">
                We do not sell your personal information. We may share your
                information with:
              </p>
              <ul className="mb-4 list-disc pl-6 text-body-color dark:text-body-color-dark">
                <li>Service providers who assist us in operating our business</li>
                <li>Real estate professionals involved in your transaction</li>
                <li>Legal authorities when required by law</li>
              </ul>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-black dark:text-white">
                Data Security
              </h2>
              <p className="mb-4 text-body-color dark:text-body-color-dark">
                We implement appropriate security measures to protect your
                personal information. However, no method of transmission over
                the Internet is 100% secure.
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-black dark:text-white">
                Your Rights
              </h2>
              <p className="mb-4 text-body-color dark:text-body-color-dark">
                You have the right to:
              </p>
              <ul className="mb-4 list-disc pl-6 text-body-color dark:text-body-color-dark">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2 className="mb-4 mt-8 text-2xl font-bold text-black dark:text-white">
                Contact Us
              </h2>
              <p className="mb-4 text-body-color dark:text-body-color-dark">
                If you have questions about this Privacy Policy or wish to
                exercise your rights, please contact us:
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
