"use client";

import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function PricingSection() {
  const t = useTranslations("Pricing");

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const plans = [
    {
      name: t("plans.landing.name"),
      price: t("plans.landing.price"),
      description: t("plans.landing.description"),
      features: t.raw("plans.landing.features") as string[],
      buttonText: t("plans.landing.button"),
    },
    {
      name: t("plans.professional.name"),
      price: t("plans.professional.price"),
      description: t("plans.professional.description"),
      features: t.raw("plans.professional.features") as string[],
      buttonText: t("plans.professional.button"),
    },
    {
      name: t("plans.store.name"),
      price: t("plans.store.price"),
      description: t("plans.store.description"),
      features: t.raw("plans.store.features") as string[],
      buttonText: t("plans.store.button"),
    },
  ];

  return (
    <section id="pricing" className="py-24 w-full bg-secondary/30">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="text-xs font-medium">{t("badge")}</Badge>
          <h2 className="mt-4 text-3xl font-semibold">
            {t("title")}
          </h2>
          <p className="mt-6 font-medium text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between bg-white rounded-2xl p-8 border shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                index === 1
                  ? "border-sky-400 ring-1 ring-sky-200 bg-gradient-to-b from-sky-50 to-white scale-105"
                  : "border-gray-200"
              }`}
            >
              <div>
                <div className="text-center mb-6">
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-bold mb-1 text-sky-600">
                    {plan.price}
                  </div>
                  <p className="text-sm text-gray-600 italic">{t("startingPrice")}</p>
                  <p className="mt-4 text-sm text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8 text-sm text-gray-700">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 leading-snug"
                    >
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-[2px]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <Button
                  onClick={handleScrollToContact}
                  className={`w-full py-3 font-semibold rounded-lg transition-all duration-300 ${
                    index === 1
                      ? "bg-sky-600 hover:bg-sky-700 text-white"
                      : "border-sky-500 text-sky-600 hover:bg-sky-50"
                  }`}
                  variant={index === 1 ? "default" : "outline"}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}