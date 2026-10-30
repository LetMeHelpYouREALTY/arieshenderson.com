const credentials = [
  {
    label: "Experience",
    value: "Licensed since 2008 · 35 years in Las Vegas",
  },
  {
    label: "Career Sales",
    value: "$127M+ in closed transactions",
  },
  {
    label: "Certifications",
    value: "ABR (Accredited Buyer's Representative), CSP (Certified New Home Sales Professional)",
  },
  {
    label: "Specialization",
    value: "Exclusive buyer representation and new construction homes",
  },
];

const AboutCredentials = () => {
  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Meet Dr. Jan Duffy
            </h2>
            <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg">
              Dr. Jan Duffy is a Nevada real estate professional, licensed
              since 2008 · 35 years in Las Vegas. With over $127M
              in career sales across the Las Vegas Valley, she leads the New
              Construction Homes Division as an exclusive buyer agent—
              representing homebuyers only, never builders or sellers.
            </p>
            <dl className="mb-8 space-y-4">
              {credentials.map((item) => (
                <div key={item.label}>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-primary">
                    {item.label}
                  </dt>
                  <dd className="text-base font-medium text-black dark:text-white">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mb-8">
              <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                Visit Our Office
              </h3>
              <p className="text-base font-medium text-body-color">
                New Construction Homes Division — Dr. Jan Duffy
                <br />
                9406 Del Webb Boulevard, Las Vegas, NV 89134
              </p>
              <p className="mt-2 text-base font-medium text-body-color">
                Open daily, 9:00 AM – 6:00 PM
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+17025001955"
                className="inline-block rounded-xs bg-primary px-6 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/90"
              >
                Call (702) 500-1955
              </a>
              <a
                href="https://maps.google.com/?q=9406+Del+Webb+Boulevard+Las+Vegas+NV+89134"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xs border border-primary px-6 py-3 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-primary/10"
              >
                Get Directions
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Dr.+Jan+Duffy+Berkshire+Hathaway+HomeServices+9406+Del+Webb+Boulevard+Las+Vegas+NV+89134"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xs border border-primary px-6 py-3 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-primary/10"
              >
                View Google Reviews
              </a>
            </div>
          </div>

          <div className="mt-12 w-full px-4 lg:mt-0 lg:w-1/2">
            <div className="h-full min-h-[400px] overflow-hidden rounded-lg border border-gray-200 shadow-sm dark:border-gray-700">
              <iframe
                src="https://www.google.com/maps?q=9406+Del+Webb+Boulevard,+Las+Vegas,+NV+89134&output=embed"
                title="Map to Dr. Jan Duffy's office at 9406 Del Webb Boulevard, Las Vegas, NV 89134"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCredentials;
