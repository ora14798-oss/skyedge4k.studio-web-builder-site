import ContactForm from "@/components/contact-form";
import {CTASectionForm} from "@/components/cta-section";
import {CTASection} from "@/components/CTASection";
import {FaqSection} from "@/components/FAQSection";
import {FooterSection} from "@/components/FooterSection";
import {HeroSection} from "@/components/HeroSection";
import {LogosSections} from "@/components/LogosSection";
import {MainFeatureSection} from "@/components/MainFeatureSection";
import {TestimonialSection} from "@/components/TestimonialSection";
import Image from "next/image";
import { PricingSection } from "@/components/pricing-section";


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
