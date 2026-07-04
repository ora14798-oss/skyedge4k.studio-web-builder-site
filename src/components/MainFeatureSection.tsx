"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AboutFoundersSection } from "./AboutFoundersSection";

const CLOUDINARY_BASE = "https://res.cloudinary.com/dtza2wtax/image/upload";
const PORTFOLIO_VIDEO_URL = "https://res.cloudinary.com/dtza2wtax/video/upload/v1764394277/Sequence_01_2_gbwq2z.mp4";

const MainFeatureSection = () => {
  const t = useTranslations("MainFeature");
  const [active, setActive] = useState(0);
  const [aspectRatios, setAspectRatios] = useState<Record<string, number>>({});

  const handleImageLoad = (id: string) => (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.naturalWidth && img.naturalHeight) {
      setAspectRatios((prev) => ({ ...prev, [id]: img.naturalWidth / img.naturalHeight }));
    }
  };

  const handleVideoLoad = (id: string) => (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video.videoWidth && video.videoHeight) {
      setAspectRatios((prev) => ({ ...prev, [id]: video.videoWidth / video.videoHeight }));
    }
  };

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

  const portfolioSlides = [
    { id: "video", type: "video" as const, src: PORTFOLIO_VIDEO_URL },
    ...portfolioImages.map((img, i) => ({
      id: `img-${i}`,
      type: "image" as const,
      src: `${CLOUDINARY_BASE}/${img}`,
    })),
  ];

  const goTo = (index: number) => {
    const n = portfolioSlides.length;
    setActive(((index % n) + n) % n);
  };

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
              <span key={idx} dir="auto" className="mx-8">{item}</span>
            ))}
          </div>

          <div className="flex shrink-0">
            {marqueeItems.map((item, idx) => (
              <span key={`dup-${idx}`} dir="auto" className="mx-8">{item}</span>
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
            width: max-content;
            animation: marquee 70s linear infinite;
          }
        `}</style>
      </div>

      {/* Features Section */}
      <div className="bg-white text-foreground py-15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 dir="auto" className="text-4xl font-bold tracking-tight sm:text-5xl">
              {t("features.title")}
            </h2>
            <p dir="auto" className="mt-6 text-lg leading-8 text-gray-600">
              {t("features.description")}
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {/* Landing Page Websites */}
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
                  <span dir="auto">{t("features.landing.title")}</span>
                </dt>
                <dd dir="auto" className="mt-4 text-base leading-7 text-gray-600">
                  {t("features.landing.desc")}
                </dd>
              </div>

              {/* Professional Business Websites */}
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
                        d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                      />
                    </svg>
                  </div>
                  <span dir="auto">{t("features.website.title")}</span>
                </dt>
                <dd dir="auto" className="mt-4 text-base leading-7 text-gray-600">
                  {t("features.website.desc")}
                </dd>
              </div>

              {/* Online Store with CRM */}
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
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 1.98-4.685 2.57-7.135.108-.45-.233-.885-.696-.885H5.25M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </div>
                  <span dir="auto">{t("features.store.title")}</span>
                </dt>
                <dd dir="auto" className="mt-4 text-base leading-7 text-gray-600">
                  {t("features.store.desc")}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      
      {/* ⭐ PREMIUM PORTFOLIO CAROUSEL */}
      <div className="w-full overflow-hidden bg-gradient-to-b from-black to-gray-900 py-16 sm:py-24">
        <div className="mx-auto mb-12 max-w-5xl px-6 text-center sm:mb-16">
          <h2 dir="auto" className="text-4xl font-bold text-white mb-6">
            {t("video.title")}
          </h2>
          <p dir="auto" className="text-gray-300 max-w-2xl mx-auto">
            {t("video.desc")}
          </p>
        </div>

        <div className="relative flex h-80 w-full items-center justify-center sm:h-96 md:h-[28rem] lg:h-[30rem]">
          {/* Center glow */}
          <motion.div
            className="pointer-events-none absolute h-72 w-72 rounded-full bg-white blur-2xl sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[26rem] lg:w-[26rem]"
            animate={{ scale: [1, 1.05, 1], opacity: [0.7, 0.9, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Cards */}
          {portfolioSlides.map((slide, index) => {
            const n = portfolioSlides.length;
            let offset = index - active;
            if (offset > n / 2) offset -= n;
            if (offset < -n / 2) offset += n;
            const dist = Math.abs(offset);
            const scale = dist === 0 ? 1.8 : Math.max(0.45, 1.1 - (dist - 1) * 0.35);
            const visible = dist <= 3;

            return (
              <div
                key={slide.id}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ zIndex: 50 - dist }}
              >
                <motion.div
                  className="relative w-[254px] overflow-hidden rounded-2xl bg-black shadow-2xl sm:w-[286px] md:w-[318px] lg:w-[350px]"
                  style={{
                    aspectRatio: aspectRatios[slide.id] ?? 16 / 9,
                    pointerEvents: visible ? "auto" : "none",
                    cursor: dist === 0 ? "default" : "pointer",
                  }}
                  animate={{
                    x: `${offset * 115}%`,
                    y: `${dist * 6}%`,
                    scale,
                    opacity: visible ? 1 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 30 }}
                  whileHover={{ scale: scale * 1.06 }}
                  onClick={() => goTo(index)}
                >
                  {slide.type === "video" ? (
                    <video
                      src={slide.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      onLoadedMetadata={handleVideoLoad(slide.id)}
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  ) : (
                    <Image
                      src={slide.src}
                      fill
                      unoptimized
                      className="object-contain"
                      alt={`Portfolio example ${index}`}
                      loading="eager"
                      onLoad={handleImageLoad(slide.id)}
                    />
                  )}

                  <motion.div
                    className="pointer-events-none absolute inset-0 bg-black"
                    animate={{ opacity: dist === 0 ? 0 : 0.55 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Arrows */}
        <div className="relative z-[60] mt-8 flex items-center justify-center gap-6 sm:mt-10">
          <Button
            onClick={() => goTo(active - 1)}
            size="icon"
            aria-label="Previous"
            className="h-11 w-11 rounded-full bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:bg-white hover:shadow-[0_0_28px_rgba(255,255,255,0.7)] sm:h-12 sm:w-12"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
          <Button
            onClick={() => goTo(active + 1)}
            size="icon"
            aria-label="Next"
            className="h-11 w-11 rounded-full bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:bg-white hover:shadow-[0_0_28px_rgba(255,255,255,0.7)] sm:h-12 sm:w-12"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </div>

        <div className="mx-auto mt-16 h-px w-full max-w-5xl bg-white/25 sm:mt-20" />
      </div>

      <AboutFoundersSection />

      {/* CTA Section */}
      <div className="relative bg-primary py-16 sm:py-24 overflow-hidden">
        <video
          src="https://res.cloudinary.com/dtza2wtax/video/upload/v1764280473/itachi-shillouette-in-front-of-the-red-moon.3840x2160_rb24gp.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute right-(-8) top-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 dir="auto" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t("cta.title")}
            </h2>
            <p dir="auto" className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
              {t("cta.description")}
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                asChild
                className="h-fit bg-white text-foreground rounded-full px-8 py-4 text-lg font-semibold hover:bg-gray-200 shadow-sm"
              >
                <a href="#contact" dir="auto">{t("cta.button")}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { MainFeatureSection };