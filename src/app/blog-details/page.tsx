import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Market Insights | Real Estate News & Articles",
  description:
    "Read the latest real estate market insights, buying tips, and market trends to help you make informed homebuying decisions.",
};

const BlogDetailsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Market Insights"
        description="Stay informed with the latest real estate market news, buying tips, and market trends."
        path="blog"
      />
      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div className="text-center">
                <h2 className="mb-4 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight dark:text-white">
                  Browse Our Latest Market Insights
                </h2>
                <p className="mb-8 text-lg text-body-color dark:text-body-color-dark">
                  Our market insights are sourced from Simplifying the Market and
                  provide valuable information about the Las Vegas real estate
                  market, buying tips, and market trends.
                </p>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800">
                  <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                    To read our latest articles and market insights, please visit
                    our blog page where you can access all current real estate news
                    and information.
                  </p>
                  <Link
                    href="/blog"
                    className="inline-block rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    View All Market Insights
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
