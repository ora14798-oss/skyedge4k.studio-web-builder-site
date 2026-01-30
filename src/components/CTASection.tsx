"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const CTASection = () => {
  const t = useTranslations("CTASection");

  return (
    <section className="w-full">
      <div className="relative flex w-full items-center justify-center bg-[url('https://res.cloudinary.com/dqksqtluq/image/upload/v1759705000/skyedge-bg-cta.webp')] bg-cover bg-center py-20 md:py-32 text-center md:p-24 overflow-hidden">
        {/* 🎥 Background Video */}
        <video
          src="https://res.cloudinary.com/dtza2wtax/video/upload/v1764280462/sakura-with-full-moon.3840x2160_tvfyv9.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Text Content */}
        <div className="relative z-20 w-full px-6">
          <h1 className="mb-6 text-balance text-white text-3xl font-bold md:text-5xl leading-tight">
            {t("title")}
          </h1>

          <p className="text-white/90 font-medium md:text-lg max-w-2xl mx-auto">
            {t("description")}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              variant="default"
              asChild
              className="bg-white text-black hover:bg-sky-400 hover:text-white transition-all duration-300"
            >
              <a href="#contact">{t("button")}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CTASection };