// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { getSEOTags, SchemaMarkup } from "@/lib/seo"; // import actual seo utilities
import { Analytics } from "@vercel/analytics/next";

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
  title: "SkyEdge 4K | Web Design, SEO & Marketing Agency in Cartagena",
  description:
    "SkyEdge 4K is a professional web design and digital marketing agency based in Cartagena, Colombia. We build high-performance websites, manage SEO, Google Ads, and social media strategies that grow your business.",
  canonicalUrlRelative: "/",
  keywords: [
    "web design Cartagena",
    "SEO agency Colombia",
    "digital marketing Cartagena",
    "social media management",
    "Google Ads campaigns",
    "marketing strategy",
    "SkyEdge 4K",
    "web development",
    "branding services",
    "creative studio Cartagena",
    "3D virtual tours Colombia",
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
      </body>
    </html>
  );
}
