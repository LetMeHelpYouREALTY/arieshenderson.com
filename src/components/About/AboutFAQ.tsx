import FAQSchema from "@/components/SEO/FAQSchema";

export const aboutFaqs = [
  {
    question: "Who is Dr. Jan Duffy?",
    answer:
      "Dr. Jan Duffy is a Nevada real estate agent, licensed since 2008 · 35 years in Las Vegas, with over $127M in career sales, specializing in exclusive buyer representation for new construction homes across Las Vegas, Henderson, Summerlin, and North Las Vegas.",
  },
  {
    question: "What is an exclusive buyer agent?",
    answer:
      "An exclusive buyer agent represents only the homebuyer in a transaction—never the builder or seller. This eliminates dual agency conflicts and means every negotiation, contract review, and recommendation is made solely in the buyer's interest.",
  },
  {
    question: "Does it cost anything to work with an exclusive buyer agent?",
    answer:
      "No. The builder or seller pays the buyer agent's commission as part of their marketing costs, so buyers receive full representation at no cost to them.",
  },
  {
    question: "What areas does Dr. Jan Duffy serve?",
    answer:
      "Dr. Duffy serves the entire Las Vegas Valley, including Summerlin, Henderson, North Las Vegas, and surrounding Southern Nevada communities, with office locations in Centennial Hills, Henderson, Sunset, and Summerlin.",
  },
  {
    question: "Why do I need my own agent for new construction?",
    answer:
      "The agent in a builder's sales office works for the builder, not for you. An exclusive buyer agent negotiates the base price and upgrades, reviews the builder contract for one-sided clauses, coordinates inspections, and protects your interests through closing and warranty claims.",
  },
];

const AboutFAQ = () => {
  return (
    <>
      <FAQSchema faqs={aboutFaqs} />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {aboutFaqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900"
                >
                  <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutFAQ;
