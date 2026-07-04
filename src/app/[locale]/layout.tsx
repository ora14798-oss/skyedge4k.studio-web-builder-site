// src/app/[locale]/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "@/components/Navbar";
import { getSEOTags } from "@/lib/seo";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

// 🧩 Fonts - display: swap for faster text rendering
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ✅ Updated SEO Metadata
export const metadata: Metadata = getSEOTags({
  title: "SkyEdge 4K | Web Design & Digital Marketing Studio in Israel",
  description:
    "SkyEdge 4K is a professional web design and digital marketing studio based in Kibbutz Hulata, Northern Israel. We build landing pages, business websites, and online stores with built-in CRM that grow your business.",
  canonicalUrlRelative: "/",
  keywords: [
    "web design",
    "digital marketing Israel",
    "landing page design",
    "business website design",
    "online store with CRM",
    "SkyEdge 4K",
    "web development",
    "branding services",
    "creative studio Israel",
  ],
});

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming locale is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Fetch translations for the current locale
  const messages = await getMessages();

  return (
    <>
      <div className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </div>
    </>
  );
}