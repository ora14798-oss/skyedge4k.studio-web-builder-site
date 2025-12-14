"use client";

import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function PricingSection() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const plans = [
    {
      name: "Web Development",
      price: "From $795 USD",
      description: "Landing Page, Full Website and online store development",
      features: [
        "Landing Page – $795 USD",
        "Full Website – $1,000 USD",
        "Responsive design (mobile + desktop)",
        "Basic SEO optimization included",
        "Fast and secure hosting integration",
      ],
      buttonText: "Request Quote",
    },
    {
      name: "SEO Packages",
      price: "From $550 USD",
      description: "Boost your online visibility and get found on Google",
      features: [
        "Website SEO setup and optimization",
        "On-page and off-page improvements",
        "Google Search Console integration",
        "Monthly performance reports",
      ],
      buttonText: "Get SEO Plan",
    },
    {
      name: "Paid Ads Campaigns",
      price: "From $230 USD",
      description: "Social Media & Google Ads Management",
      features: [
        "Campaign Setup – $230 USD",
        "Monthly Management – $460 USD",
        "Google Ads – From $600 USD",
        "Targeting, creatives & optimization",
        "Platforms: Meta, Instagram, Google. ",
      ],
      buttonText: "Start Campaign",
    },
  ];

  return (
    <section id="pricing" className="py-24 w-full bg-secondary/30">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="text-xs font-medium">Pricing</Badge>
          <h2 className="mt-4 text-3xl font-semibold">
            Choose the Perfect Plan for You
          </h2>
          <p className="mt-6 font-medium text-muted-foreground">
            Clear pricing for web development, SEO, and paid ad campaigns —
            select what fits your business goals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between bg-white rounded-2xl p-8 border shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                index === 1
                  ? "border-sky-400 ring-1 ring-sky-200 bg-gradient-to-b from-sky-50 to-white"
                  : "border-gray-200"
              }`}
            >
              {/* Card Header */}
              <div>
                <div className="text-center mb-6">
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-bold mb-1 text-sky-600">
                    {plan.price}
                  </div>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                </div>

                {/* Features */}
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

              {/* Button */}
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
