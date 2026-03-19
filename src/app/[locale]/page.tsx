import dynamic from "next/dynamic";
import { HeroSection } from "@/components/HeroSection";

// Below-fold sections: lazy load for faster initial paint
const MainFeatureSection = dynamic(
  () => import("@/components/MainFeatureSection").then((m) => ({ default: m.MainFeatureSection })),
  { ssr: true, loading: () => <SectionSkeleton className="h-[400px]" /> }
);
const PricingSection = dynamic(
  () => import("@/components/pricing-section").then((m) => ({ default: m.PricingSection })),
  { ssr: true, loading: () => <SectionSkeleton className="h-[500px]" /> }
);
const LogosSections = dynamic(
  () => import("@/components/LogosSection").then((m) => ({ default: m.LogosSections })),
  { ssr: true, loading: () => <SectionSkeleton className="h-[280px]" /> }
);
const CTASection = dynamic(
  () => import("@/components/CTASection").then((m) => ({ default: m.CTASection })),
  { ssr: true, loading: () => <SectionSkeleton className="h-[320px]" /> }
);
const TestimonialSection = dynamic(
  () => import("@/components/TestimonialSection").then((m) => ({ default: m.TestimonialSection })),
  { ssr: true, loading: () => <SectionSkeleton className="h-[400px]" /> }
);
const CTASectionForm = dynamic(
  () => import("@/components/cta-section").then((m) => ({ default: m.CTASectionForm })),
  { ssr: true, loading: () => <SectionSkeleton className="h-[400px]" /> }
);
const FaqSection = dynamic(
  () => import("@/components/FAQSection").then((m) => ({ default: m.FaqSection })),
  { ssr: true, loading: () => <SectionSkeleton className="h-[350px]" /> }
);
const FooterSection = dynamic(
  () => import("@/components/FooterSection").then((m) => ({ default: m.FooterSection })),
  { ssr: true, loading: () => <SectionSkeleton className="h-[400px]" /> }
);

function SectionSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse bg-muted/30 rounded-lg ${className ?? ""}`}
      aria-hidden
    />
  );
}

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
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
