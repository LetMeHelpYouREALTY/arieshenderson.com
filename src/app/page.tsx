import ScrollUp from "@/components/Common/ScrollUp";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import HeroSection from "@/components/Homepage/HeroSection";
import ProblemSection from "@/components/Homepage/ProblemSection";
import DifferentiatorSection from "@/components/Homepage/DifferentiatorSection";
import ValuePropsSection from "@/components/Homepage/ValuePropsSection";
import CredentialsSection from "@/components/Homepage/CredentialsSection";
import ProcessSection from "@/components/Homepage/ProcessSection";
import TwoPathNavigation from "@/components/Homepage/TwoPathNavigation";
import PricingSection from "@/components/Homepage/PricingSection";
import PropertySearchWidget from "@/components/Homepage/PropertySearchWidget";
import FeaturedCommunities from "@/components/Homepage/FeaturedCommunities";
import NearbyAmenitiesSection from "@/components/Amenities/NearbyAmenitiesSection";
import FAQSection from "@/components/Homepage/FAQSection";
import CTASection from "@/components/Homepage/CTASection";
import { generateMetadata as genMeta } from "@/components/SEO/MetaTags";
import { Metadata } from "next";

export const metadata: Metadata = genMeta({
  title: "Exclusive Buyer Agent Las Vegas | New Construction Representation",
  description:
    "Las Vegas buyer's agent working exclusively for you—not the builder. We negotiate price, review contracts, and protect your interests. Free representation.",
  canonical: "/",
  keywords: [
    "exclusive buyer agent",
    "Las Vegas real estate",
    "new construction homes",
    "buyer representation",
    "Las Vegas homebuyer agent",
  ],
});

export default function Home() {
  return (
    <>
      <ScrollUp />
      {/* 1. Hero Section with Value Proposition */}
      <HeroSection />
      
      {/* 2. Problem Section */}
      <ProblemSection />
      
      {/* 3. Differentiator Statement */}
      <DifferentiatorSection />
      
      {/* 4. Value Props */}
      <ValuePropsSection />
      
      {/* 5. Credentials/Certifications Visual */}
      <CredentialsSection />
      
      {/* 6. Process */}
      <ProcessSection />
      
      {/* 7. Two-Path Navigation */}
      <TwoPathNavigation />
      
      {/* 8. Pricing/Packages */}
      <PricingSection />
      
      {/* 9. Trust Signals: Testimonials */}
      <Testimonials />
      
      {/* 10. Property Search Widget */}
      <PropertySearchWidget />
      
      {/* 11. Featured Communities */}
      <FeaturedCommunities />

      <NearbyAmenitiesSection variant="home" />
      
      {/* 12. FAQ */}
      <FAQSection />
      
      {/* 13. Final CTA */}
      <CTASection />
      
      {/* 14. Blog/News Feed */}
      <Blog />
    </>
  );
}
