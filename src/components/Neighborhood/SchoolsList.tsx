type School = {
  name: string;
  type: string;
};

type SchoolsListProps = {
  schools: {
    elementary: School[];
    middle: School[];
    high: School[];
  };
  neighborhoodName: string;
};

export default function SchoolsList({
  schools,
  neighborhoodName,
}: SchoolsListProps) {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Schools Serving {neighborhoodName}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-body-color dark:text-body-color-dark">
            {neighborhoodName} is served by the Clark County School District,
            with private schools nearby.
          </p>
          <p className="mt-4 text-sm text-body-color/70 dark:text-body-color-dark/70">
            School assignments may vary by community. Verify zoning with the
            Clark County School District.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Elementary Schools */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-black dark:text-white">
              Elementary Schools
            </h3>
            <div className="space-y-4">
              {schools.elementary.map((school, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                >
                  <h4 className="mb-2 font-semibold text-black dark:text-white">
                    {school.name}
                  </h4>
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {school.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Schools */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-black dark:text-white">
              Middle Schools
            </h3>
            <div className="space-y-4">
              {schools.middle.map((school, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                >
                  <h4 className="mb-2 font-semibold text-black dark:text-white">
                    {school.name}
                  </h4>
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {school.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* High Schools */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-black dark:text-white">
              High Schools
            </h3>
            <div className="space-y-4">
              {schools.high.map((school, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                >
                  <h4 className="mb-2 font-semibold text-black dark:text-white">
                    {school.name}
                  </h4>
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {school.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.ccsd.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Visit Clark County School District Website →
          </a>
        </div>
      </div>
    </section>
  );
}
