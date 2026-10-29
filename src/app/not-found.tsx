import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | GetReal Buyer Agents",
  description:
    "The page you're looking for doesn't exist. Return to our homepage or search for new construction homes in Las Vegas.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-[180px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-4 text-6xl font-bold text-black dark:text-white">
                  404
                </h1>
                <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                  Page Not Found
                </h2>
                <p className="mb-8 text-lg text-body-color dark:text-body-color-dark">
                  The page you're looking for doesn't exist or has been moved.
                  Let's get you back on track.
                </p>

                <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    href="/"
                    className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/90"
                  >
                    Return to Homepage
                  </Link>
                  <Link
                    href="/search"
                    className="rounded-xs border-2 border-primary bg-transparent px-8 py-4 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-primary/10"
                  >
                    Search Homes
                  </Link>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    Popular Pages
                  </h3>
                  <ul className="flex flex-wrap justify-center gap-4">
                    <li>
                      <Link
                        href="/about"
                        className="text-primary hover:underline"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="text-primary hover:underline"
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className="text-primary hover:underline"
                      >
                        Market Insights
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/neighborhoods/summerlin"
                        className="text-primary hover:underline"
                      >
                        Summerlin
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/neighborhoods/henderson"
                        className="text-primary hover:underline"
                      >
                        Henderson
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/neighborhoods/north-las-vegas"
                        className="text-primary hover:underline"
                      >
                        North Las Vegas
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <p className="text-body-color dark:text-body-color-dark">
                    Need help?{" "}
                    <Link href="/contact" className="text-primary hover:underline">
                      Contact us
                    </Link>{" "}
                    or call{" "}
                    <a
                      href="tel:+17025001955"
                      className="text-primary hover:underline"
                    >
                      (702) 500-1955
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
