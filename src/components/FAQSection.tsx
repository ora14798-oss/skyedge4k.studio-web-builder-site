"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

interface FAQItem {
  question: string;
  answer: string;
}

export const FaqSection = () => {
  const t = useTranslations("FaqSection");
  const faqs = t.raw("items") as FAQItem[];

  return (
    <section className="py-24 w-full">
      <div className="w-full max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="text-xs font-medium">{t("badge")}</Badge>
          <h2 className="mt-4 text-3xl font-semibold">
            {t("title")}
          </h2>
          <p className="mt-6 font-medium text-muted-foreground">
            {t("description")}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};