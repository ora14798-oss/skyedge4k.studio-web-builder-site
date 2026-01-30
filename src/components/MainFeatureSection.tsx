"use client";

import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { ChevronDown, ChevronUp, ImageIcon } from "lucide-react";

const MainFeatureSection = () => {
  const t = useTranslations("MainFeature");
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // marquee items helper
  const marqueeItems = [
    t("marquee.item1"),
    t("marquee.item2"),
    t("marquee.item3"),
    t("marquee.item4"),
    t("marquee.item5"),
    t("marquee.item6"),
    t("marquee.item7"),
    t("marquee.item8"),
    t("marquee.item9"),
    t("marquee.item10"),
    t("marquee.item11"),
    t("marquee.item12"),
  ];

  const portfolioImages = [
    "v1764280443/creat_a_phot_of_a_home_page_of_a_website_for_car_rental_company_wlnpzx.jpg",
    "v1764280200/Screenshot_2025-09-02_122800_sofmhz.png",
    "v1764280202/Screenshot_2025-09-02_121055_pptpsn.png",
    "v1764280201/Screenshot_2025-09-02_120816_makgy8.png",
    "v1764280197/Screenshot_2025-10-05_214037_dffjny.png",
    "v1764280196/Screenshot_2025-10-05_214309_x4kgfz.png",
    "v1764280195/Screenshot_2025-10-05_214130_vpsdg9.png",
    "v1764281752/create_a_phot_of_a_home_page_of_a_website_for_lip-gloss_product_phg7uk.jpg",
    "v1764280195/Screenshot_2025-10-05_214218_gtm16t.png",
  ];

  return (
    <section
      id="whatwedo"
      className="bg-gradient-to-br from-primary text-white to-red-400 relative w-screen overflow-hidden pb-0"
    >
      {/* 🔹 Thin top bar with infinite moving text */}
      <div className="relative bg-[#1f171f] overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee text-sm font-medium text-white py-2 tracking-wide">
          <div className="flex shrink-0">
            {marqueeItems.map((item, idx) => (
              <span key={idx} className="mx-8">{item}</span>
            ))}
          </div>

          <div className="flex shrink-0">
            {marqueeItems.map((item, idx) => (
              <span key={`dup-${idx}`} className="mx-8">{item}</span>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: 200%;
            animation: marquee 70s linear infinite;
          }
        `}</style>
      </div>

      {/* Features Section */}
      <div className="bg-white text-foreground py-15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {t("features.title")}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t("features.description")}
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {/* Custom Web Development */}
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                      />
                    </svg>
                  </div>
                  {t("features.dev.title")}
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  {t("features.dev.desc")}
                </dd>
              </div>

              {/* SEO */}
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  </div>
                  {t("features.seo.title")}
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  {t("features.seo.desc")}
                </dd>
              </div>

              {/* Ads */}
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                  </div>
                  {t("features.ads.title")}
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  {t("features.ads.desc")}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      
      {/* ⭐ FEATURED VIDEO SECTION */}
      <div className="w-full bg-black py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t("video.title")}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            {t("video.desc")}
          </p>

          <AspectRatio ratio={16 / 9}>
            <video
              src="https://res.cloudinary.com/dtza2wtax/video/upload/v1764394277/Sequence_01_2_gbwq2z.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-xl w-full h-full object-cover shadow-xl"
            />
          </AspectRatio>
        </div>
      </div>

      {/* ⭐ Portfolio Image Grid - Collapsible for Mobile */}
      <div className="relative w-full bg-gradient-to-b from-black to-gray-900 py-10 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Mobile Toggle Button (Visible only on small screens) */}
          <div className="flex justify-center mb-8 sm:hidden">
            <Button 
              onClick={() => setIsGalleryOpen(!isGalleryOpen)}
              variant="outline"
              className="border-white/20 text-white bg-white/10 hover:bg-white/20 rounded-full px-6 py-6"
            >
              <ImageIcon className="mr-2 h-4 w-4" />
              {isGalleryOpen ? t("portfolio.hide") : t("portfolio.show")}
              {isGalleryOpen ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
            </Button>
          </div>

          {/* Image Grid - Responsive logic */}
          <div className={`${isGalleryOpen ? 'grid' : 'hidden'} sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500`}>
            {portfolioImages.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl shadow-lg group aspect-[4/3] sm:aspect-auto"
              >
                <img
                  src={`https://res.cloudinary.com/dtza2wtax/image/upload/${img}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={`Portfolio example ${i + 1}`}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-primary py-16 sm:py-24 overflow-hidden">
        <video
          src="https://res.cloudinary.com/dtza2wtax/video/upload/v1764280473/itachi-shillouette-in-front-of-the-red-moon.3840x2160_rb24gp.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute right-(-8) top-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t("cta.title")}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
              {t("cta.description")}
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                asChild
                className="h-fit bg-white text-foreground rounded-full px-8 py-4 text-lg font-semibold hover:bg-gray-200 shadow-sm"
              >
                <a href="#contact">{t("cta.button")}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { MainFeatureSection };