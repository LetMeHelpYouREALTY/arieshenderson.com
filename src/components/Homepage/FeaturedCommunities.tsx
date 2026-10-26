import Link from 'next/link'
import SectionTitle from '../Common/SectionTitle'

type Community = {
  name: string
  location: string
  description: string
  priceRange: string
  image?: string
  href: string
}

const communities: Community[] = [
  {
    name: 'Summerlin',
    location: 'Las Vegas, NV',
    description:
      'Master-planned community with 150+ parks, trails, and shopping.',
    priceRange: '$500K - $1.5M',
    href: '/neighborhoods/summerlin',
  },
  {
    name: 'Henderson',
    location: 'Henderson, NV',
    description:
      'Master-planned communities with parks, trails, and moderate pricing.',
    priceRange: '$400K - $900K',
    href: '/neighborhoods/henderson',
  },
  {
    name: 'North Las Vegas',
    location: 'North Las Vegas, NV',
    description:
      'Growing area with new construction and affordable housing options.',
    priceRange: '$350K - $700K',
    href: '/neighborhoods/north-las-vegas',
  },
]

export default function FeaturedCommunities() {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Featured Communities"
          paragraph="Explore active new construction neighborhoods in the Las Vegas area. Each community offers unique amenities and lifestyle options."
          center
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {communities.map((community, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="h-16 w-16 text-primary/30"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                  {community.name}
                </h3>
                <p className="mb-2 text-sm text-body-color dark:text-body-color-dark">
                  {community.location}
                </p>
                <p className="mb-4 text-body-color dark:text-body-color-dark">
                  {community.description}
                </p>
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">
                    {community.priceRange}
                  </span>
                </div>
                <Link
                  href={community.href}
                  className="inline-block text-primary hover:underline"
                >
                  View Community Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/neighborhoods"
            className="inline-block rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            View All Communities
          </Link>
        </div>
      </div>
    </section>
  )
}
