"use client";

import { useContactFormSubmit } from "@/hooks/useContactFormSubmit";

type LeadCaptureCTAProps = {
  neighborhoodName: string;
};

export default function LeadCaptureCTA({
  neighborhoodName,
}: LeadCaptureCTAProps) {
  const { handleSubmit, state, errorMessage, successMessage, isSubmitting } =
    useContactFormSubmit({
      formName: "Neighborhood Lead Capture",
      getExtraFields: (form) => {
        const formData = new FormData(form);
        return {
          neighborhood: neighborhoodName,
          timeline: String(formData.get("timeline") ?? "").trim() || undefined,
          priceRange:
            String(formData.get("priceRange") ?? "").trim() || undefined,
        };
      },
    });

  return (
    <section className="relative overflow-hidden bg-primary py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Get the Inside Track on {neighborhoodName} New Construction
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Free consultation. No builder conflicts. We work exclusively for
            you.
          </p>

          <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-xl dark:bg-gray-900">
            {state === "success" ? (
              <p
                className="mb-6 rounded-xs border border-green-200 bg-green-50 px-4 py-3 text-base text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-100"
                role="status"
              >
                {successMessage}
              </p>
            ) : null}
            {state === "error" ? (
              <p
                className="mb-6 rounded-xs border border-red-200 bg-red-50 px-4 py-3 text-base text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-100"
                role="alert"
              >
                {errorMessage}
              </p>
            ) : null}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-black dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xs border border-gray-300 bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-black dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-xs border border-gray-300 bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-black dark:text-white"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full rounded-xs border border-gray-300 bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    placeholder="(702) 555-1234"
                  />
                </div>
                <div>
                  <label
                    htmlFor="timeline"
                    className="mb-2 block text-sm font-medium text-black dark:text-white"
                  >
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    className="w-full rounded-xs border border-gray-300 bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediately">Immediately</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6-12months">6-12 months</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="priceRange"
                  className="mb-2 block text-sm font-medium text-black dark:text-white"
                >
                  Price Range
                </label>
                <select
                  id="priceRange"
                  name="priceRange"
                  required
                  className="w-full rounded-xs border border-gray-300 bg-white px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                >
                  <option value="">Select price range</option>
                  <option value="under-400k">Under $400K</option>
                  <option value="400k-600k">$400K - $600K</option>
                  <option value="600k-800k">$600K - $800K</option>
                  <option value="800k-1m">$800K - $1M</option>
                  <option value="1m-plus">$1M+</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/90 disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Get Your Free Consultation"}
              </button>

              <p className="text-sm text-body-color dark:text-body-color-dark">
                By submitting, you agree to be contacted about new construction
                opportunities. We never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
