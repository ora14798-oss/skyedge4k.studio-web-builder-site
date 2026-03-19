"use client";

import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  content: string;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="p-5 shadow-md rounded-2xl w-full border-border/50 bg-card h-full">
      <div className="flex gap-4 leading-5">
        <Avatar className="size-9 rounded-full ring-1 ring-input">
          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
        </Avatar>
        <div className="text-sm">
          <p className="font-medium text-foreground">{testimonial.name}</p>
          <p className="text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
      <div className="mt-8 leading-7 text-foreground/70 italic">
        <q>{testimonial.content}</q>
      </div>
    </Card>
  );
}

const TestimonialSection = () => {
  const t = useTranslations("Testimonials");
  const [mounted, setMounted] = useState(false);

  const testimonials = t.raw("items") as Testimonial[];
  const displayTestimonials = testimonials.slice(0, 6);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="reviews" className="py-32 w-full">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col items-center gap-6">
          <Badge variant="outline">{t("badge")}</Badge>
          <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
            {t("title")}
          </h2>
          <p className="text-muted-foreground lg:text-lg">
            {t("subtitle")}
          </p>
        </div>

        <div className="relative mt-14 w-full after:absolute after:inset-x-0 after:-bottom-2 after:h-96 after:bg-linear-to-t after:from-background">
          {mounted ? (
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}>
              <Masonry gutter="20px">
                {displayTestimonials.map((testimonial, idx) => (
                  <div key={`${testimonial.name}-${idx}`} className="w-full">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {displayTestimonials.map((testimonial, idx) => (
                <div key={`${testimonial.name}-${idx}`} className="w-full">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export { TestimonialSection };