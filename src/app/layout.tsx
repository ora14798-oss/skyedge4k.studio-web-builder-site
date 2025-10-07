import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/Navbar";
import {getSEOTags, SchemaMarkup} from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = getSEOTags({
  title: "SkyEdge4K.Studio - Digital Marketing Agency & Creative Studio",
  description:
    "SkyEdge4K.Studio is a full-service digital agency offering SEO, social media management, content creation, web development, paid ads, branding strategies, and 3D virtual tours. Helping businesses worldwide grow their online presence.",
  canonicalUrlRelative: "/",
  keywords: [
    "digital marketing agency",
    "SEO services",
    "social media management",
    "content creation",
    "web development",
    "ecommerce websites",
    "Google Ads management",
    "Facebook Ads services",
    "paid advertising",
    "branding and strategy",
    "3D virtual tours",
    "real estate marketing",
    "creative marketing agency",
    "SkyEdge4K.Studio",
    "digital growth solutions",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
