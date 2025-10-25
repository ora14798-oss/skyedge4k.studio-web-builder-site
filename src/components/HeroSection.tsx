"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [videoSrc, setVideoSrc] = useState(
    "https://res.cloudinary.com/dqksqtluq/video/upload/v1759726154/eclipse-over-silent-falls.3840x2160_vx3nye.mp4"
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Serve smaller video for mobile
      if (window.innerWidth <= 768) {
        setVideoSrc(
          "https://res.cloudinary.com/dqksqtluq/video/upload/v1759726154/eclipse-over-silent-falls.720p.mp4"
        );
      }
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative w-screen bg-background pt-20 md:pt-8 pb-24 md:py-32 overflow-hidden"
    >
      {/* 🎥 Background Video */}
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute inset-0 z-0 h-full w-full object-cover bg-opacity-20"
        autoPlay
        muted
        loop
        playsInline
        poster="https://res.cloudinary.com/dqksqtluq/image/upload/v1759726154/eclipse-over-silent-falls-poster.jpg"
        src={videoSrc} // dynamically set source based on screen width
      />

      {/* 🔹 Content */}
      <div className="container relative z-20 mx-auto flex flex-col items-center justify-center text-center px-4">
        {/* Tag */}
        <Button
          variant="secondary"
          className="text-sm sm:text-md bg-muted/60 group mt-16 md:mt-24 flex w-fit items-center justify-center gap-3 rounded-full px-4 sm:px-5 py-1 tracking-tight"
        >
          <span className="bg-foreground size-2 rounded-full" />
          <span>Professional Web Design & SEO Agency</span>
        </Button>

        {/* 💥 Headline */}
        <h1 className="relative z-10 mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
          We design & build{" "}
          <span className="text-blue-500 font-extrabold">websites</span>
        </h1>

        {/* 🧠 Subtext (Made slightly bigger & bolder) */}
        <p className="text-white/95 mt-5 max-w-md sm:max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] leading-relaxed text-base sm:text-lg font-semibold px-2">
          <strong className="text-white">SkyEdge4K.Studio</strong> builds{" "}
          <strong className="text-white">high-performance websites</strong> with
          integrated <strong className="text-white">SEO</strong> and{" "}
          <strong className="text-white">Google Ads</strong> strategies that
          attract real clients and drive measurable growth for your business.
        </p>

        {/* CTA Buttons */}
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
      </div>
    </section>
  );
};

export { HeroSection };
