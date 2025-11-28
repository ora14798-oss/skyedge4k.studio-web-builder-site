"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

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
      {/* Background video for ALL devices */}
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

      {/* Content Overlay */}
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
          <span>Professional Web Design & SEO Agency</span>
        </Button>

        <h1 className="relative z-10 mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
          We design & build{" "}
          <span className="text-blue-500 font-extrabold">websites</span>
        </h1>

        <p className="text-white/95 mt-5 max-w-md sm:max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] leading-relaxed text-base sm:text-lg font-semibold px-2">
          <strong className="text-white">SkyEdge4K.Studio</strong> builds{" "}
          <strong className="text-white">high-performance websites</strong> with
          integrated <strong className="text-white">SEO</strong> and{" "}
          <strong className="text-white">Google Ads</strong> strategies that
          attract real clients and drive measurable growth for your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
          <Button
            variant="secondary"
            className="text-sm sm:text-md group flex w-full sm:w-fit items-center justify-center gap-2 rounded-full px-5 py-2 tracking-tight"
          >
            <a href="#contact">Start Your Website Project</a>
            <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-2 group-hover:rotate-0" />
          </Button>

          <Button
            variant="default"
            className="text-sm sm:text-md group flex w-full sm:w-fit items-center justify-center gap-2 rounded-full px-5 py-2 tracking-tight"
          >
            <a href="#contact">Get a Free Strategy Call</a>
            <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-2 group-hover:rotate-0" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export { HeroSection };
