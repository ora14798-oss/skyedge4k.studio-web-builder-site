import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import ContactForm from "@/components/contact-form";
import { CTASectionForm } from "@/components/cta-section";
import { FaqSection } from "@/components/FAQSection";
import { FooterSection } from "@/components/FooterSection";
import { HeroSection } from "@/components/HeroSection";
import { LogosSections } from "@/components/LogosSection";
import { MainFeatureSection } from "@/components/MainFeatureSection";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialSection } from "@/components/TestimonialSection";

export default function Home() {
  return (
    <main className="w-full  flex flex-col items-center overflow-hidden ">
      <HeroSection />
      <MainFeatureSection />
      <PricingSection />
      <LogosSections />
      <CTASection />
      <TestimonialSection />
      <CTASectionForm />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
