"use client";

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import {cn} from "@/lib/utils";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Card} from "@/components/ui/card";

const testimonials = [
  {
    name: "Laura Gómez",
    role: "CEO, Café del Sol",
    avatar:
      "https://res.cloudinary.com/dqksqtluq/image/upload/v1759701465/MELDENNE_S_5_teaoee.png",
    content:
      "SkyEdge4K.studio built our custom-coded website from scratch. It’s fast, beautiful, and clients love it. No templates, no limits!",
  },
  {
    name: "Carlos Rivera",
    role: "Founder, UrbanStore",
    avatar:
      "https://res.cloudinary.com/dqksqtluq/image/upload/v1759701462/MELDENNE_S_9_z3ppv7.png",
    content:
      "We stopped paying monthly for Shopify. SkyEdge4K created a coded e-commerce site we fully own — faster and more profitable.",
  },
  {
    name: "Sofía Morales",
    role: "Marketing Director, Evolve Agency",
    avatar:
      "https://res.cloudinary.com/dqksqtluq/image/upload/v1759701462/MELDENNE_S_8_ot8ukw.png",
    content:
      "Their SEO strategy and Google Ads campaign brought us measurable results. We doubled our client leads in the first month.",
  },
  {
    name: "Andrés López",
    role: "Real Estate Developer, NovaHomes",
    avatar:
      "https://res.cloudinary.com/dqksqtluq/image/upload/v1759701464/MELDENNE_S_6_mvzc0q.png",
    content:
      "SkyEdge4K created a dynamic property website with 3D tours and perfect SEO. It’s modern, responsive, and brings real buyers.",
  },
  {
    name: "Fernanda Torres",
    role: "Entrepreneur",
    avatar:
      "https://res.cloudinary.com/dqksqtluq/image/upload/v1759701462/MELDENNE_S_7_lvqcxo.png",
    content:
      "They don’t use WordPress or drag-and-drop tools — everything is coded. The site loads instantly and ranks high on Google.",
  },
  {
    name: "Daniel Pérez",
    role: "Owner, FitZone Gym",
    avatar:
      "https://res.cloudinary.com/dqksqtluq/image/upload/v1759701465/MELDENNE_S_5_teaoee.png",
    content:
      "My fitness website looks professional and converts visitors to members daily. SkyEdge4K handles our SEO and ads with precision.",
  },
  {
    name: "Camila Ríos",
    role: "Marketing Consultant",
    avatar:
      "https://res.cloudinary.com/dqksqtluq/image/upload/v1759250916/Untitled_design_ycyrom.png",
    content:
      "Their team understands branding and marketing deeply. My clients constantly compliment my new website’s design and performance.",
  },
  {
    name: "Miguel Herrera",
    role: "Photographer",
    avatar:
      "https://res.cloudinary.com/dqksqtluq/image/upload/v1759537067/ChatGPT_Image_Oct_3_2025_07_17_33_PM_uf1fo1.png",
    content:
      "Finally, a studio that builds real websites. My portfolio now stands out — it’s fast, stunning, and easy to update.",
  },
];

const TestimonialSection = () => {
  return (
    <section id="reviews" className="py-32 w-full">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col items-center gap-6">
          <Badge variant="outline">Client Feedback</Badge>
          <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
            What our clients say about SkyEdge4K.studio
          </h2>
          <p className="text-muted-foreground lg:text-lg">
            Real businesses. Real growth. Real results.
          </p>
        </div>

        <div className="relative mt-14 w-full after:absolute after:inset-x-0 after:-bottom-2 after:h-96 after:bg-linear-to-t after:from-background">
          <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 768: 2, 1024: 3}}
          >
            <Masonry gutter="20px" columnsCount={3}>
              {testimonials.map((testimonial, idx) => {
                return (
                  <Card
                    key={idx}
                    className={cn(
                      "p-5 shadow-md rounded-2xl w-full",
                      idx > 3 && idx <= 5 && "hidden md:block",
                      idx > 5 && "hidden lg:block"
                    )}
                  >
                    <div className="flex gap-4 leading-5">
                      <Avatar className="size-9 rounded-full ring-1 ring-input">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                      </Avatar>
                      <div className="text-sm">
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 leading-7 text-foreground/70">
                      <q>{testimonial.content}</q>
                    </div>
                  </Card>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  );
};

export {TestimonialSection};
