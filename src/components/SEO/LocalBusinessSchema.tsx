import SchemaMarkup from "./SchemaMarkup";

export default function LocalBusinessSchema() {
  const localBusinessData = {
    name: "GetReal Buyer Agents",
    alternateName: "Berkshire Hathaway HomeServices Nevada Properties - New Construction Homes Division",
    description:
      "Exclusive buyer representation for new construction homes in Las Vegas. We negotiate price, review contracts, and protect your interests. Free to buyers.",
    url: "https://www.arieshenderson.com",
    telephone: "+1-702-718-0043",
    email: "contact@arieshenderson.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9406 Del Webb Boulevard",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89134",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.2719,
      longitude: -115.2894,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Las Vegas",
      },
      {
        "@type": "City",
        name: "Henderson",
      },
      {
        "@type": "City",
        name: "North Las Vegas",
      },
      {
        "@type": "City",
        name: "Summerlin",
      },
      {
        "@type": "Place",
        name: "Aries Henderson",
        description:
          "Master-planned new home community in Henderson, Nevada along East Lake Mead Parkway",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 36.0757934,
          longitude: -114.9284155,
        },
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "Free to buyers",
    paymentAccepted: "Builder pays commission",
    serviceType: [
      "Exclusive Buyer Representation",
      "New Construction Home Buying",
      "Home Valuation",
      "Property Search",
      "Real Estate Consultation",
    ],
    memberOf: {
      "@type": "Organization",
      name: "Berkshire Hathaway HomeServices Nevada Properties",
    },
    agent: {
      "@type": "RealEstateAgent",
      name: "Dr. Jan Duffy",
      identifier: "S.0197614",
      jobTitle: "Exclusive Buyer Agent",
      specializesIn: [
        "New Construction Homes",
        "Buyer Representation",
        "First-Time Homebuyers",
        "Las Vegas Real Estate",
      ],
    },
  };

  return <SchemaMarkup type="LocalBusiness" data={localBusinessData} />;
}
