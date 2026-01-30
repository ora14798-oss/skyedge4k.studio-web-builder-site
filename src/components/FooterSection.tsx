"use client";

import {
  Facebook,
  Globe,
  Instagram,
  MessageCircle,
  Twitter,
} from "lucide-react";
import { useTranslations } from "next-intl";

const FooterSection = () => {
  const t = useTranslations("Footer");

  return (
    <section className="py-32 w-full bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-900 to-black opacity-90"></div>

      <div className="relative container max-w-7xl px-6 mx-auto">
        <footer className="py-12 border-t border-white/10">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Brand Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold tracking-tight">
                  SkyEdge4K.studio
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-sm">
                {t("brandDescription")}
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">{t("services.title")}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">{t("services.dev")}</a></li>
                <li><a href="#" className="hover:text-white transition">{t("services.seo")}</a></li>
                <li><a href="#" className="hover:text-white transition">{t("services.ads")}</a></li>
                <li><a href="#" className="hover:text-white transition">{t("services.strategy")}</a></li>
                <li><a href="#" className="hover:text-white transition">{t("services.tours")}</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">{t("company.title")}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white transition">{t("company.home")}</a></li>
                <li><a href="#whatwedo" className="hover:text-white transition">{t("company.about")}</a></li>
                <li><a href="#reviews" className="hover:text-white transition">{t("company.reviews")}</a></li>
                <li><a href="#pricing" className="hover:text-white transition">{t("company.pricing")}</a></li>
                <li><a href="#contact" className="hover:text-white transition">{t("company.contact")}</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">{t("legal.title")}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy-policy" className="hover:text-white transition">{t("legal.privacy")}</a></li>
                <li><a href="/terms" className="hover:text-white transition">{t("legal.terms")}</a></li>
                <li><a href="/cookies" className="hover:text-white transition">{t("legal.cookies")}</a></li>
              </ul>
            </div>
          </div>

          {/* Social and Contact Line */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left text-gray-400 text-sm">
              <p className="font-medium text-white mb-1">Anaheim California, USA - Cartagena, Colombia - CDMX</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a href="tel:+16574528646" className="hover:text-white transition">+57 300 161 4490</a>
                <a href="mailto:skyedge4k@gmail.com" className="hover:text-white transition">skyedge4k@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/people/SkyEdge4KStudio/61578244506155/#" target="_blank" className="text-gray-400 hover:text-blue-400 transition"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/skyedge4k.studio" target="_blank" className="text-gray-400 hover:text-pink-400 transition"><Instagram size={20} /></a>
              <a href="https://x.com/skyedge4k" target="_blank" className="text-gray-400 hover:text-sky-400 transition"><Twitter size={20} /></a>
              <a href="https://www.tiktok.com/@skyedge4k.studio" target="_blank" className="text-gray-400 hover:text-white transition"><Globe size={20} /></a>
              <a href="https://wa.me/573001614490" target="_blank" className="text-gray-400 hover:text-green-400 transition"><MessageCircle size={20} /></a>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="mt-12 text-center text-gray-500 text-xs">
            <p>
              © {new Date().getFullYear()} SkyEdge4K.studio. {t("allRights")}
              <br />
              {t("builtWith")}
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { FooterSection };