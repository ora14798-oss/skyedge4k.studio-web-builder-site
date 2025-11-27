"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

const LogosSections = () => {
  const logos = [
    {
      id: "logo-1",
      description: "Client 1",
      image:
        "https://res.cloudinary.com/dtza2wtax/image/upload/v1764280456/ChatGPT_Image_Sep_26_2025_02_57_43_PM_aufth7.png",
      className: "h-14 w-auto sm:h-16",
    },
    {
      id: "logo-2",
      description: "Client 2",
      image:
        "https://res.cloudinary.com/dtza2wtax/image/upload/v1764280453/ChatGPT_Image_Oct_3_2025_07_17_33_PM_ezkfg1.png",
      className: "h-14 w-auto sm:h-16",
    },
    {
      id: "logo-3",
      description: "Client 3",
      image:
        "https://res.cloudinary.com/dtza2wtax/image/upload/v1764280453/Untitled_design_weojka.png",
      className: "h-14 w-auto sm:h-16",
    },
    {
      id: "logo-4",
      description: "Client 4",
      image:
        "https://res.cloudinary.com/dtza2wtax/image/upload/v1764280444/MELDENNE_S_5_udjslu.png",
      className: "h-14 w-auto sm:h-16",
    },
    {
      id: "logo-5",
      description: "Client 5",
      image:
        "https://res.cloudinary.com/dtza2wtax/image/upload/v1764280444/MELDENNE_S_6_rhgeun.png",
      className: "h-14 w-auto sm:h-16",
    },
    {
      id: "logo-6",
      description: "Client 6",
      image:
        "https://res.cloudinary.com/dtza2wtax/image/upload/v1764280444/MELDENNE_S_7_zh3hms.png",
      className: "h-12 w-auto sm:h-14",
    },
    {
      id: "logo-7",
      description: "Client 7",
      image:
        "https://res.cloudinary.com/dtza2wtax/image/upload/v1764280443/MELDENNE_S_8_xlnyha.png",
      className: "h-14 w-auto sm:h-16",
    },
    {
      id: "logo-8",
      description: "Client 8",
      image:
        "https://res.cloudinary.com/dtza2wtax/image/upload/v1764280443/MELDENNE_S_9_i9w6i7.png",
      className: "h-14 w-auto sm:h-16",
    },
  ];

  const testimonials = [
    {
      quote:
        "SkyEdge4K.studio transformed our online presence. Our new custom-coded website loads fast, looks amazing, and ranks higher on Google within weeks.",
      name: "Laura Gómez, Dental Clinic Owner",
      image:
        "https://res.cloudinary.com/dtza2wtax/image/upload/v1764280453/ChatGPT_Image_Oct_3_2025_07_17_33_PM_ezkfg1.png",
    },
    {
      quote:
        "We stopped paying monthly fees for WordPress and Shopify. Now we own a fully coded website that converts better and costs less over time.",
      name: "Carlos Rivera, Founder of MELDENNE'S",
      image:
        "https://res.cloudinary.com/dtza2wtax/image/upload/v1764280443/MELDENNE_S_9_i9w6i7.png",
    },
    {
      quote:
        "Their SEO strategy and Google Ads campaign brought us real leads. We saw a 200% increase in client inquiries in the first month.",
      name: "Sofía Morales, Director of Clean It",
      image:
        "https://res.cloudinary.com/dtza2wtax/image/upload/v1764280444/MELDENNE_S_6_rhgeun.png",
    },
  ];

  return (
    <section className="py-16 sm:py-20 pt-0">
      {/* 🌟 Section Header */}
      <div className="container flex flex-col items-center text-center">
        <h1 className="text-foreground my-8 text-lg sm:text-xl font-extrabold tracking-tight">
          JOIN OUR SATISFIED CLIENTS
        </h1>
      </div>

      {/* 🧩 Logos Carousel */}
      <div className="relative mx-auto flex items-center justify-center pt-4 sm:pt-8 max-w-[95%] sm:max-w-5xl">
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ playOnInit: true, speed: 2 })]}
        >
          <CarouselContent className="ml-0">
            {logos.map((logo) => (
              <CarouselItem
                key={logo.id}
                className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
              >
                <div className="flex shrink-0 items-center justify-center mx-2 sm:mx-4">
                  <img
                    src={logo.image}
                    alt={logo.description}
                    className={logo.className}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Fading edges */}
        <div className="bg-gradient-to-r from-background absolute inset-y-0 left-0 w-8 sm:w-12 to-transparent"></div>
        <div className="bg-gradient-to-l from-background absolute inset-y-0 right-0 w-8 sm:w-12 to-transparent"></div>
      </div>

      <Separator className="my-12 sm:my-20 mx-auto max-w-[90%] sm:max-w-5xl" />

      {/* 💬 Testimonials */}
      <div className="px-4 sm:px-0">
        <Carousel
          opts={{ loop: true }}
          className="mx-auto w-full max-w-[95%] sm:max-w-6xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div
                  className={cn(
                    "relative border-border w-full border-r px-6 sm:px-8 text-center sm:text-left",
                    index == 0 && "lg:border-l"
                  )}
                >
                  <h5 className="text-muted-foreground mb-8 sm:mb-14 mt-5 text-base sm:text-lg tracking-tight">
                    {testimonial.quote}
                  </h5>
                  <div className="mt-auto">
                    <p className="text-foreground text-base sm:text-lg font-semibold tracking-tight">
                      {testimonial.name}
                    </p>
                    <img
                      className="mx-auto my-5 w-32 sm:w-40 md:mx-0"
                      alt="Company logo"
                      src={testimonial.image}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { LogosSections };
