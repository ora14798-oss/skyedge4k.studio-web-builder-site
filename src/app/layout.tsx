// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "@/components/Navbar";
import { getSEOTags, SchemaMarkup } from "@/lib/seo"; // import actual seo utilities

// 🧩 Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Updated SEO Metadata for SkyEdge 4K
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Schema.org for rich results */}
        <SchemaMarkup />

        {/* ✅ Favicon and basic site meta */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
