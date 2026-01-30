// src/app/[locale]/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "@/components/Navbar";
import { getSEOTags, SchemaMarkup } from "@/lib/seo";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

// 🧩 Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Updated SEO Metadata
export const metadata: Metadata = getSEOTags({
  title: "SkyEdge 4K | Web Design, SEO & Marketing Agency in USA & Colombia",
  description:
    "SkyEdge 4K is a professional web design and digital marketing agency based in Cartagena, Colombia & California, USA. We build high-performance websites, manage SEO, Google Ads, and social media strategies that grow your business.",
  canonicalUrlRelative: "/",
  keywords: [
    "web design",
    "SEO agency Colombia & USA",
    "digital marketing Cartagena & California",
    "social media management",
    "Google Ads campaigns",
    "marketing strategy",
    "SkyEdge 4K",
    "web development",
    "branding services",
    "creative studio Cartagena",
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
    <html lang={locale}>
      <head>
        <SchemaMarkup />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}