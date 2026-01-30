"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./contact-form";
import { useTranslations } from "next-intl";

export function CTASectionForm() {
  const t = useTranslations("CTASectionForm");

  return (
    <section
      id="contact"
      className="relative w-screen bg-background py-16 md:py-20 overflow-hidden scroll-mt-20 mx-4 shadow-2xl"
    >
      {/* 🎥 Background Video */}
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="https://res.cloudinary.com/dtza2wtax/video/upload/v1764280452/full-moon-samurai.3840x2160_lrly9p.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* 🌫 Overlays */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-blue-950/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-sky-900/70 z-0"></div>

      {/* ✨ Section Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 📝 Text Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("title")}
            </h2>

            <p className="text-lg text-white/90 mb-6">
              {t.rich("description", {
                strong: (chunks) => <strong className="text-blue-400">{chunks}</strong>,
                em: (chunks) => <em className="text-white not-italic font-bold">{chunks}</em>
              })}
            </p>

            <ul className="space-y-3 mb-6 text-white/90">
              {t.raw("bullets").map((bullet: string, index: number) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2 text-blue-400">✓</span>
                  {bullet}
                </li>
              ))}
            </ul>

            <p className="text-lg text-white/90 mb-8 font-medium">
              {t("closing")}
            </p>

            {/* 📍 Contact Info */}
            <div className="space-y-2 text-white/90 text-sm">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="font-semibold">USA - COL - CDMX</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="https://wa.me/573001614490" className="hover:underline transition-all hover:text-blue-300 font-semibold">
                  {t("phoneCol")}: +57 300 161 4490
                </a>
              </p>
              
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:skyedge4k@gmail.com" className="hover:underline transition-all hover:text-blue-300">
                  skyedge4k@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* 🧾 Contact Form */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}