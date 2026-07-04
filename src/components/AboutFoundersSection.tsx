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

        <div className="mt-6 flex h-[62vh] min-h-[380px] flex-col overflow-hidden rounded-3xl border-2 shadow-sm sm:h-[58vh] sm:flex-row">
          <div className="relative h-48 w-full flex-shrink-0 bg-muted sm:h-full sm:w-auto sm:aspect-[1333/1999]">
            <Image
              src="/orr-fernanda-collage.png"
              alt="Orr and Fernanda"
              fill
              className="object-contain"
            />
          </div>

          <div className="flex flex-1 flex-col justify-center gap-2 overflow-y-auto px-6 py-6 sm:gap-3 sm:px-10 sm:py-8">
            <h3 dir="auto" className="text-lg font-bold text-foreground sm:text-xl">
              {t("storyTitle")}
            </h3>
            {Array.from({ length: STORY_PARAGRAPH_COUNT }).map((_, i) => (
              <p
                key={i}
                dir="auto"
                className="text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6"
              >
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
