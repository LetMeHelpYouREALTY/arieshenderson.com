import AboutCredentials from "@/components/About/AboutCredentials";
import AboutFAQ from "@/components/About/AboutFAQ";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { generateMetadata as genMeta } from "@/components/SEO/MetaTags";
import StructuredData from "@/components/SEO/StructuredData";
import { Metadata } from "next";

export const metadata: Metadata = genMeta({
  title: "About Dr. Jan Duffy | Exclusive Buyer Agent Las Vegas",
  description:
    "Meet Dr. Jan Duffy (NV S.0197614), ABR & CSP certified exclusive buyer agent, Berkshire Hathaway HomeServices Nevada Properties. 30+ years, $127M+ sold.",
  canonical: "/about",
  keywords: [
    "exclusive buyer agent",
    "Las Vegas real estate agent",
    "ABR certified",
    "buyer representation",
    "Dr. Jan Duffy",
  ],
});

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Dr. Jan Duffy — Exclusive Buyer Agent Las Vegas",
  url: "https://www.arieshenderson.com/about",
  mainEntity: {
    "@type": "RealEstateAgent",
    "@id": "https://www.arieshenderson.com/#agent",
    name: "Dr. Jan Duffy",
    identifier: "S.0197614",
    jobTitle: "Exclusive Buyer Agent",
    telephone: "+1-702-500-1955",
    email: "contact@arieshenderson.com",
    url: "https://www.arieshenderson.com/about",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9406 Del Webb Boulevard",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89134",
      addressCountry: "US",
    },
    memberOf: {
      "@type": "Organization",
      name: "Berkshire Hathaway HomeServices Nevada Properties",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "Nevada Real Estate License S.0197614",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "Accredited Buyer's Representative (ABR)",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "Certified New Home Sales Professional (CSP)",
      },
    ],
    knowsAbout: [
      "New Construction Homes",
      "Exclusive Buyer Representation",
      "First-Time Homebuyers",
      "Las Vegas Real Estate",
    ],
    areaServed: [
      { "@type": "City", name: "Las Vegas" },
      { "@type": "City", name: "Henderson" },
      { "@type": "City", name: "North Las Vegas" },
      { "@type": "City", name: "Summerlin" },
    ],
  },
};

const AboutPage = () => {
  return (
    <>
      <StructuredData data={aboutPageSchema} />
      <Breadcrumb
        pageName="About"
        description="Your trusted Las Vegas real estate expert specializing in exclusive buyer representation and new construction homes."
        path="about"
      />
      <AboutSectionOne />
      <AboutCredentials />
      <AboutSectionTwo />
      <AboutFAQ />
    </>
  );
};

export default AboutPage;
