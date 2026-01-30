"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("ContactForm");
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setSubmitted(true);
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      setError(t("error"));
      console.error("EmailJS error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center space-y-4 py-8">
        <div className="text-2xl font-semibold text-white mb-2">
          {t("successTitle")}
        </div>
        <p className="text-white/80">
          {t("successMessage")}
        </p>
        <p className="text-white/80">
          {t("successSub")}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl" id="contact">
      <h3 className="text-xl font-semibold mb-6 text-white">
        {t("title")}
      </h3>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white/80 mb-1">
            {t("labels.name")}
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
            placeholder={t("placeholders.name")}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white/80 mb-1">
            {t("labels.email")}
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
            placeholder={t("placeholders.email")}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white/80 mb-1">
            {t("labels.phone")}
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full p-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
            placeholder={t("placeholders.phone")}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white/80 mb-1">
            {t("labels.message")}
          </label>
          <textarea
            name="message"
            required
            className="w-full p-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[100px]"
            placeholder={t("placeholders.message")}
          />
        </div>

        {error && <div className="text-red-400 text-sm">{error}</div>}

        <Button
          type="submit"
          variant="secondary"
          className="w-full font-bold"
          disabled={isSubmitting}
        >
          {isSubmitting ? t("sending") : t("submit")}
        </Button>
      </form>
    </div>
  );
}