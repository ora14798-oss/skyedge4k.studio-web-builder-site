"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl"; // Import translations
import LanguageSwitcher from "./LanguageSwitcher"; 

const HeroSection = () => {
  const t = useTranslations("Hero"); // Hook to access Hero translations
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 50) {
      setIsVisible(false); 
    } else {
      setIsVisible(true); 
    }
  });

  const videoSrc =
    "https://res.cloudinary.com/dtza2wtax/video/upload/v1764280467/eclipse-over-silent-falls.3840x2160_batyxf.mp4";

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative w-screen bg-background pt-20 md:pt-8 pb-24 md:py-32 overflow-hidden"
    >
      {/* Floating Language Switcher - 150px from top */}
      <motion.div
        className="fixed top-[150px] right-4 z-[100]"
        initial={{ x: 0, opacity: 1 }}
        animate={{ 
          x: isVisible ? 0 : 200, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <LanguageSwitcher />
      </motion.div>

      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="https://res.cloudinary.com/dqksqtluq/image/upload/v1761423475/Screenshot_2025-10-25_151717_guyrra.png"
        src={videoSrc}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
          zIndex: 0,
          backgroundColor: "black",
        }}
      >
        Your browser does not support the video tag.
      </video>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="container relative z-20 mx-auto flex flex-col items-center justify-center text-center px-4"
      >
        <Button
          variant="secondary"
          className="text-sm sm:text-md bg-muted/60 group mt-16 md:mt-24 flex w-fit items-center justify-center gap-3 rounded-full px-4 sm:px-5 py-1 tracking-tight"
        >
          <span className="bg-foreground size-2 rounded-full" />
          <span>{t("badge")}</span>
        </Button>

        <h1 className="relative z-10 mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
          {t("titlePart1")}{" "}
          <span className="text-blue-500 font-extrabold">{t("titleHighlight")}</span>
        </h1>

        <p className="text-white/95 mt-5 max-w-md sm:max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] leading-relaxed text-base sm:text-lg font-semibold px-2">
          <strong className="text-white">SkyEdge4K.Studio</strong> {t("description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
          <Button
            variant="secondary"
            className="text-sm sm:text-md group flex w-full sm:w-fit items-center justify-center gap-2 rounded-full px-5 py-2 tracking-tight"
          >
            <a href="#contact">{t("btnProject")}</a>
            <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-2 group-hover:rotate-0" />
          </Button>

          <Button
            variant="default"
            className="text-sm sm:text-md group flex w-full sm:w-fit items-center justify-center gap-2 rounded-full px-5 py-2 tracking-tight"
          >
            <a href="#contact">{t("btnCall")}</a>
            <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-2 group-hover:rotate-0" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export { HeroSection };