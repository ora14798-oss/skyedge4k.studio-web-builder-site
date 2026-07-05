"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

const STORY_PARAGRAPH_COUNT = 5;

const AboutFoundersSection = () => {
  const t = useTranslations("AboutFounders");

  return (
    <section id="ourstory" className="w-full bg-background py-10 sm:py-14">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <Badge variant="outline" dir="auto">{t("badge")}</Badge>
          <h2 dir="auto" className="text-2xl font-semibold tracking-tight text-foreground lg:text-4xl">
            {t("title")}
          </h2>
          <p dir="auto" className="max-w-2xl text-sm text-muted-foreground lg:text-base">
            {t("subtitle")}
          </p>
        </div>

        {/* Mobile: collage as full-bleed background behind the story */}
        <div className="relative mt-6 min-h-[680px] overflow-hidden rounded-3xl border-2 sm:hidden">
          <Image
            src="/orr-fernanda-collage.png"
            alt="Orr and Fernanda"
            fill
            className="object-cover opacity-40"
          />

          <div className="absolute inset-0 z-10 flex flex-col justify-center gap-2 px-6 py-6">
            <h3
              dir="auto"
              className="text-lg font-bold text-red-600 [text-shadow:_0_0_1px_rgba(0,0,0,0.9)]"
            >
              {t("storyTitle")}
            </h3>
            {Array.from({ length: STORY_PARAGRAPH_COUNT }).map((_, i) => (
              <p
                key={i}
                dir="auto"
                className="text-center text-xs leading-5 text-black [text-shadow:_0_0_1px_rgba(0,0,0,0.9)]"
              >
                {t.rich(`storyParagraphs.${i}`, {
                  bold: (chunks) => <strong className="font-semibold text-black">{chunks}</strong>,
                })}
              </p>
            ))}
          </div>
        </div>

        {/* Desktop / tablet: side-by-side layout */}
        <div className="mt-6 hidden overflow-hidden rounded-3xl border-2 shadow-sm sm:flex sm:h-[58vh] sm:min-h-[380px] sm:flex-row">
          <div className="relative h-full w-auto flex-shrink-0 bg-muted sm:aspect-[1333/1999]">
            <Image
              src="/orr-fernanda-collage.png"
              alt="Orr and Fernanda"
              fill
              className="object-contain"
            />
          </div>

          <div className="flex flex-1 flex-col justify-center gap-3 overflow-y-auto px-10 py-8">
            <h3 dir="auto" className="text-xl font-bold text-foreground">
              {t("storyTitle")}
            </h3>
            {Array.from({ length: STORY_PARAGRAPH_COUNT }).map((_, i) => (
              <p key={i} dir="auto" className="text-sm leading-6 text-muted-foreground">
                {t.rich(`storyParagraphs.${i}`, {
                  bold: (chunks) => <strong className="font-semibold text-foreground">{chunks}</strong>,
                })}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutFoundersSection };
