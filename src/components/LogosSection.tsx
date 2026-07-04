"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const LogosSections = () => {
  const t = useTranslations("LogosSections");

  const logos = [
    { id: "logo-1", description: "Client 1", image: "https://res.cloudinary.com/dtza2wtax/image/upload/v1764280456/ChatGPT_Image_Sep_26_2025_02_57_43_PM_aufth7.png", className: "h-14 w-auto sm:h-16" },
    { id: "logo-2", description: "Client 2", image: "https://res.cloudinary.com/dtza2wtax/image/upload/v1764280453/ChatGPT_Image_Oct_3_2025_07_17_33_PM_ezkfg1.png", className: "h-14 w-auto sm:h-16" },
    { id: "logo-3", description: "Client 3", image: "https://res.cloudinary.com/dtza2wtax/image/upload/v1764280453/Untitled_design_weojka.png", className: "h-14 w-auto sm:h-16" },
    { id: "logo-4", description: "Client 4", image: "https://res.cloudinary.com/dtza2wtax/image/upload/v1764280444/MELDENNE_S_5_udjslu.png", className: "h-14 w-auto sm:h-16" },
    { id: "logo-5", description: "Client 5", image: "https://res.cloudinary.com/dtza2wtax/image/upload/v1764280444/MELDENNE_S_6_rhgeun.png", className: "h-14 w-auto sm:h-16" },
    { id: "logo-6", description: "Client 6", image: "https://res.cloudinary.com/dtza2wtax/image/upload/v1764280444/MELDENNE_S_7_zh3hms.png", className: "h-12 w-auto sm:h-14" },
    { id: "logo-7", description: "Client 7", image: "https://res.cloudinary.com/dtza2wtax/image/upload/v1764280443/MELDENNE_S_8_xlnyha.png", className: "h-14 w-auto sm:h-16" },
    { id: "logo-8", description: "Client 8", image: "https://res.cloudinary.com/dtza2wtax/image/upload/v1764280443/MELDENNE_S_9_i9w6i7.png", className: "h-14 w-auto sm:h-16" },
  ];

  return (
    <section className="py-16 sm:py-20 pt-0">
      <div className="container flex flex-col items-center text-center">
        <h1 dir="auto" className="text-foreground my-8 text-lg sm:text-xl font-extrabold tracking-tight">
          {t("title")}
        </h1>
      </div>

      <div className="relative mx-auto overflow-hidden pt-4 sm:pt-8 max-w-[95%] sm:max-w-5xl">
        <div className="flex w-max whitespace-nowrap animate-logo-marquee">
          <div className="flex shrink-0 items-center">
            {logos.map((logo) => (
              <div key={logo.id} className="flex shrink-0 items-center justify-center mx-2 sm:mx-4 relative h-14 sm:h-16 w-24">
                <Image
                  src={logo.image}
                  alt={logo.description}
                  fill
                  sizes="(max-width: 640px) 80px, 96px"
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="flex shrink-0 items-center" aria-hidden="true">
            {logos.map((logo) => (
              <div key={`dup-${logo.id}`} className="flex shrink-0 items-center justify-center mx-2 sm:mx-4 relative h-14 sm:h-16 w-24">
                <Image
                  src={logo.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 80px, 96px"
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="flex shrink-0 items-center" aria-hidden="true">
            {logos.map((logo) => (
              <div key={`dup2-${logo.id}`} className="flex shrink-0 items-center justify-center mx-2 sm:mx-4 relative h-14 sm:h-16 w-24">
                <Image
                  src={logo.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 80px, 96px"
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes logo-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.3333%); }
          }
          .animate-logo-marquee {
            animation: logo-marquee 30s linear infinite;
          }
        `}</style>

        <div className="bg-gradient-to-r from-background absolute inset-y-0 left-0 w-8 sm:w-12 to-transparent"></div>
        <div className="bg-gradient-to-l from-background absolute inset-y-0 right-0 w-8 sm:w-12 to-transparent"></div>
      </div>
    </section>
  );
};

export { LogosSections };