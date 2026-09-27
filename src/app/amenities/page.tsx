import Breadcrumb from "@/components/Common/Breadcrumb";
import BreadcrumbSchema from "@/components/SEO/BreadcrumbSchema";
import FAQSchema from "@/components/SEO/FAQSchema";
import StructuredData from "@/components/SEO/StructuredData";
import AmenityMap from "@/components/Amenities/AmenityMap";
import AmenitiesAgentCTA from "@/components/Amenities/AmenitiesAgentCTA";
import {
  AMENITIES_FAQS,
  AMENITY_CONTENT_SECTIONS,
  CURATED_PLACES,
} from "@/data/nearby-amenities-content";
import { COMMUNITY_CONFIG } from "@/lib/community-config";
import { generateMetadata as genMeta } from "@/components/SEO/MetaTags";
import type { Metadata } from "next";

const baseUrl = COMMUNITY_CONFIG.websiteBaseUrl;

export const metadata: Metadata = genMeta({
  title: `Nearby Amenities in ${COMMUNITY_CONFIG.name}, Henderson NV`,
  description:
    "Interactive map and local guide to dining, grocery, parks, healthcare, schools, and commute times near Aries master-planned community in Henderson, Nevada.",
  canonical: "/amenities",
  keywords: [
    "Aries Henderson amenities",
    "Aries Henderson grocery",
    "Henderson parks near Aries",
    "Aries new construction Henderson",
  ],
});

export default function AmenitiesPage() {
  const breadcrumbItems = [
    { name: "Home", url: baseUrl },
    { name: "Nearby Amenities", url: `${baseUrl}/amenities` },
  ];

  const communityPlaceSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: COMMUNITY_CONFIG.displayName,
    description:
      "Aries master-planned new home community in Henderson, Nevada, along East Lake Mead Parkway.",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMMUNITY_CONFIG.streetAddress,
      addressLocality: COMMUNITY_CONFIG.city,
      addressRegion: COMMUNITY_CONFIG.state,
      postalCode: COMMUNITY_CONFIG.postalCode,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMMUNITY_CONFIG.center.lat,
      longitude: COMMUNITY_CONFIG.center.lng,
    },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Featured amenities near ${COMMUNITY_CONFIG.displayName}`,
    itemListElement: CURATED_PLACES.map((place, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": place.schemaType,
        name: place.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: place.address,
          addressLocality: COMMUNITY_CONFIG.city,
          addressRegion: COMMUNITY_CONFIG.state,
          addressCountry: "US",
        },
      },
    })),
  };

  const agentSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${baseUrl}/amenities#agent`,
    name: "Dr. Jan Duffy",
    identifier: "S.0197614",
    jobTitle: "Exclusive Buyer Agent",
    url: `${baseUrl}/about`,
    telephone: "+1-702-718-0043",
    email: "contact@arieshenderson.com",
    worksFor: {
      "@type": "Organization",
      name: "Berkshire Hathaway HomeServices Nevada Properties",
    },
    areaServed: {
      "@type": "Place",
      name: COMMUNITY_CONFIG.displayName,
      address: {
        "@type": "PostalAddress",
        addressLocality: COMMUNITY_CONFIG.city,
        addressRegion: COMMUNITY_CONFIG.state,
        addressCountry: "US",
      },
    },
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={AMENITIES_FAQS} />
      <StructuredData data={communityPlaceSchema} />
      <StructuredData data={itemListSchema} />
      <StructuredData data={agentSchema} />

      <Breadcrumb
        pageName="Nearby Amenities"
        description={`Dining, services, parks, and commute guides for ${COMMUNITY_CONFIG.displayName}.`}
        path="amenities"
      />

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-black dark:text-white sm:text-5xl">
              Nearby Amenities in {COMMUNITY_CONFIG.name}, Henderson
            </h1>
            <p className="text-lg text-body-color dark:text-body-color-dark">
              Aries is a new master-planned community along East Lake Mead Parkway
              in Henderson, Nevada. Use the map to explore real places buyers ask
              about—then read the category guide and FAQs below (all crawlable
              without JavaScript).
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
            Interactive amenity map
          </h2>
          <AmenityMap showStaticList />
        </div>
      </section>

      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Hyperlocal guide by category
            </h2>
            <div className="space-y-10">
              {AMENITY_CONTENT_SECTIONS.map((section) => (
                <article key={section.id}>
                  <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                    {section.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-body-color dark:text-body-color-dark">
                    {section.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Frequently asked questions
            </h2>
            <dl className="space-y-8">
              {AMENITIES_FAQS.map((faq) => (
                <div key={faq.question}>
                  <dt className="mb-2 text-lg font-semibold text-black dark:text-white">
                    {faq.question}
                  </dt>
                  <dd className="text-body-color dark:text-body-color-dark">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <AmenitiesAgentCTA />
    </>
  );
}
