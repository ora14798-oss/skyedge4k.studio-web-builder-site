// lib/i18n/seo.tsx
import type { Metadata } from "next";
import config from "@/config";

interface TwitterMeta {
  title?: string;
  description?: string;
  images?: { url: string; width?: number; height?: number; alt?: string }[];
  creator?: string;
  card?: "summary" | "summary_large_image" | "app" | "player";
}

interface SEOTagsProps {
  title?: string;
  description?: string;
  keywords?: string[];
  openGraph?: Partial<Metadata["openGraph"]>;
  twitter?: TwitterMeta;
  canonicalUrlRelative?: string;
  extraTags?: Record<string, any>;
}

export const getSEOTags = ({
  title,
  description,
  keywords,
  openGraph,
  twitter,
  canonicalUrlRelative,
  extraTags,
}: SEOTagsProps): Metadata => {
  return {
    title:
      title || "SkyEdge 4K | Web Design & Digital Marketing Studio in Israel",
    description:
      description ||
      "SkyEdge 4K is a professional web design and digital marketing studio based in Kibbutz Hulata, Northern Israel. We build landing pages, business websites, and online stores with built-in CRM that grow your business.",
    other: {
      keywords: (
        keywords || [
          "web design Israel",
          "landing page design",
          "business website design",
          "online store with CRM",
          "SkyEdge 4K",
          "web development",
        ]
      ).join(", "),
    },

    applicationName: "SkyEdge 4K",
    metadataBase: new URL(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : "https://skyedge4k.com/",
    ),

    openGraph: {
      title:
        openGraph?.title ||
        title ||
        "SkyEdge 4K | Creative Web Design Studio",
      description:
        openGraph?.description ||
        description ||
        "We design and build high-performance landing pages, business websites, and online stores that attract real clients and drive measurable growth.",
      url: openGraph?.url || "https://skyedge4k.com/",
      siteName: "SkyEdge 4K",
      images: openGraph?.images || [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "SkyEdge 4K - Digital Marketing & Web Design Agency",
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      title:
        twitter?.title || title || "SkyEdge 4K | Web Design & Marketing Agency",
      description:
        twitter?.description ||
        description ||
        "SkyEdge 4K builds websites and marketing strategies that convert visitors into clients.",
      images: twitter?.images || [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "SkyEdge 4K - Digital Marketing & Web Design Agency",
        },
      ],
      card: twitter?.card || "summary_large_image",
      creator: twitter?.creator || "@skyedge4k",
    },

    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalUrlRelative },
    }),

    ...extraTags,
  };
};

// ----------------------
// 📦 SCHEMA MARKUP
// ----------------------
export const SchemaMarkup = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://skyedge4k.com",
          name: "SkyEdge 4K",
          description:
            "SkyEdge 4K is a creative digital marketing and web design studio in Kibbutz Hulata, Northern Israel. We help businesses grow through professional websites and marketing strategies.",
          url: "https://skyedge4k.com",
          telephone: "+57 3001614490",
          email: "skyedge4k@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Kibbutz Hulata",
            addressLocality: "Hulata",
            addressRegion: "Upper Galilee",
            postalCode: "12110",
            addressCountry: "IL",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 33.0511,
            longitude: 35.6092,
          },
          image: "https://skyedge4k.com/og-image.jpg",
          logo: "https://skyedge4k.com/logo.png",
          founder: {
            "@type": "Person",
            name: "Or Ahrone",
          },
          foundingDate: "2024-07-01",
          openingHours: "Mo-Fr 09:00-18:00",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Web Design & E-Commerce Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Landing Page Websites",
                  description:
                    "Professional, high-converting landing pages, custom-built or launched from our own premium templates.",
                },
                url: "https://skyedge4k.com/services#landing-page",
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Professional Business Websites",
                  description:
                    "Complete business websites, custom designed or built from our own premium templates.",
                },
                url: "https://skyedge4k.com/services#business-website",
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Online Store with CRM",
                  description:
                    "Fully functional online stores with a built-in CRM for easy self-management.",
                },
                url: "https://skyedge4k.com/services#online-store",
              },
            ],
          },
          sameAs: [
            "https://www.instagram.com/skyedge4k",
            "https://www.facebook.com/skyedge4k",
            "https://www.linkedin.com/company/skyedge4k",
          ],
        }),
      }}
    />
  );
};
