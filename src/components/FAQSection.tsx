import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you use platforms like WordPress or Wix?",
    answer:
      "No. At SkyEdge4K.studio, we build every website using real code (Next.js, React, and Tailwind). That means faster load times, better SEO, no platform limitations, and 100% ownership of your site — no monthly fees or templates.",
  },
  {
    question: "Can you help my business appear on Google?",
    answer:
      "Yes! Every website we build is optimized for SEO from the code level up — including structure, speed, and metadata. We also offer ongoing SEO and Google Ads management to help your business rank higher and attract real clients.",
  },
  {
    question: "What makes your websites faster than others?",
    answer:
      "Our sites are fully coded without unnecessary plugins or heavy themes. We optimize images, use server-side rendering, and follow best coding practices to achieve lightning-fast performance and top Google PageSpeed scores.",
  },
  {
    question: "Do I need to pay a monthly fee after the site is done?",
    answer:
      "No monthly platform fees! You pay once for development and you own your website forever. We can provide optional maintenance or marketing services, but ownership remains 100% yours.",
  },
  {
    question: "Can you manage my Google Ads campaigns too?",
    answer:
      "Absolutely. We specialize in high-performing Google Ads campaigns that are fully integrated with your website analytics. We track conversions, optimize ad spend, and focus on delivering measurable ROI — not just clicks.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the project’s complexity, but most websites take between 2–5 weeks. During this time, we design, develop, optimize, and test everything so your site launches polished and ready to perform.",
  },
];

export const FaqSection = () => {
  return (
    <section className="py-24 w-full">
      <div className="w-full max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="text-xs font-medium">FAQ</Badge>
          <h2 className="mt-4 text-3xl font-semibold">Frequently Asked Questions</h2>
          <p className="mt-6 font-medium text-muted-foreground">
            Have questions about SkyEdge4K.studio? Here are the most common answers about our web development,
            SEO, and Google Ads services.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
