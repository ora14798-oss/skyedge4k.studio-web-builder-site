"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "./contact-form";

export function CTASectionForm() {
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
        src="https://res.cloudinary.com/dqksqtluq/video/upload/v1759872027/itachi-shillouette-in-front-of-the-red-moon.3840x2160_i3hao6.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* 🌫 Soft Fade Overlay (Top & Bottom) */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Top fade – subtle dark gradient */}
        <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-blue-950/60 via-transparent to-transparent"></div>

        {/* Bottom fade – soft transparency to blend with next section */}
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent"></div>
      </div>

      {/* 🎨 Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-sky-900/70 z-0"></div>

      {/* ✨ Section Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 📝 Text Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Boost Your Business with a High-Performance Website?
            </h2>

            <p className="text-lg text-white/90 mb-6">
              At <strong className="text-blue-600">SkyEdge4K</strong>, we design and
              develop stunning, fast, and SEO-optimized websites that not only
              look amazing they{" "}
              <em className="text-white">convert visitors into real clients</em>.
              Whether you need a corporate site, landing page, or e-commerce
              store, our web team in Colombia and in the USA crafts digital experiences that
              elevate your brand and grow your sales.
            </p>

            <ul className="space-y-3 mb-6 text-white/90">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Modern responsive websites that look perfect on every device
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Fast loading, SEO optimized pages built for Google ranking
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Conversion-focused design that turns traffic into customers
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Custom development for businesses, e-commerce & landing pages
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Full support from concept to launch and beyond
              </li>
            </ul>

            <p className="text-lg text-white/90 mb-8 font-medium">
              Your website is your brand’s first impression. Let’s make it
              unforgettable.
            </p>

            {/* 📍 Contact Info */}
            <div className="space-y-2 text-white/90 text-sm">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <a
                  href="https://maps.app.goo.gl/XzHbnBju9W9kqbhcA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline transition-transform duration-300 ease-in-out hover:scale-105"
                >
                  Anaheim California, USA & Cartagena, Colombia
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a
                  href="https://wa.me/573001614490"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition-transform duration-300 ease-in-out hover:scale-105 font-semibold"
                >
                 Our number in Colombia: +57 300 161 4490
                </a>
              </p>
              <p className="flex items-center gap-2">
    <Phone className="w-4 h-4" />
    <a
      href="tel:+16574528646"
      className="hover:underline transition-transform duration-300 ease-in-out hover:scale-105 font-semibold"
    >
      Our number in the USA: +1 (657) 452-8646
    </a>
  </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:skyedge4k@gmail.com"
                  className="hover:underline transition-transform duration-300 ease-in-out hover:scale-105"
                >
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
