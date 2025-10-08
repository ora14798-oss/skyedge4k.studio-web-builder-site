// lib/i18n/seo.tsx
import { Metadata } from "next";
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
    title: title || "SkyEdge 4K | Web Design, SEO & Marketing Agency in Cartagena",
    description:
      description ||
      "SkyEdge 4K is a professional web design and digital marketing agency based in Cartagena, Colombia. We build high-performance websites, manage SEO, Google Ads, and social media strategies that grow your business.",
    other: {
      keywords: (
        keywords || [
          "web design Cartagena",
          "SEO agency Colombia",
          "digital marketing Cartagena",
          "Google Ads management",
          "social media management",
          "SkyEdge 4K",
          "marketing strategy Colombia",
          "web development",
        ]
      ).join(", "),
    },

    applicationName: "SkyEdge 4K",
    metadataBase: new URL(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : "https://skyedge4k.com/"
    ),

    openGraph: {
      title:
        openGraph?.title ||
        title ||
        "SkyEdge 4K | Creative Web Design & SEO Agency",
      description:
        openGraph?.description ||
        description ||
        "We design and build high-performance websites with integrated SEO and Google Ads strategies that attract real clients and drive measurable growth.",
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
        twitter?.title ||
        title ||
        "SkyEdge 4K | Web Design & Marketing Agency",
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
            "SkyEdge 4K is a creative digital marketing and web design agency in Cartagena, Colombia. We help businesses grow through professional websites, SEO, and marketing strategies.",
          url: "https://skyedge4k.com",
          telephone: "+57 3001614490",
          email: "skyedge4k@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Cartagena, Bolívar",
            addressLocality: "Cartagena",
            addressRegion: "Bolívar",
            postalCode: "130001",
            addressCountry: "CO",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 10.3910,
            longitude: -75.4794,
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
            name: "Digital Marketing & Creative Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Web Design & Development",
                  description:
                    "Custom websites and eCommerce stores optimized for performance and conversions.",
                },
                url: "https://skyedge4k.com/services#web-design",
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "SEO Optimization",
                  description:
                    "Professional SEO strategies to boost your visibility and bring organic traffic.",
                },
                url: "https://skyedge4k.com/services#seo",
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Social Media Management",
                  description:
                    "We manage and grow your social media presence with strategic content and ads.",
                },
                url: "https://skyedge4k.com/services#social-media",
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Google Ads Campaigns",
                  description:
                    "Google Ads setup and optimization to increase leads and conversions.",
                },
                url: "https://skyedge4k.com/services#google-ads",
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "3D Virtual Tours",
                  description:
                    "Immersive 3D tours for real estate and construction projects.",
                },
                url: "https://skyedge4k.com/services#3d-virtual-tours",
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
