// lib/i18n/seo.tsx
import {Metadata} from "next";
import config from "@/config";

interface TwitterMeta {
  title?: string;
  description?: string;
  images?: {url: string; width?: number; height?: number; alt?: string}[];
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
    title: title || config.appName,
    description: description || config.appDescription,

    other: {
      keywords: (keywords || config.keywords).join(", "),
    },

    applicationName: config.appName,
    metadataBase: new URL(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : `https://${config.domainName}/`
    ),

    openGraph: {
      title: openGraph?.title || title || config.appName,
      description:
        openGraph?.description || description || config.appDescription,
      url: openGraph?.url || `https://${config.domainName}/`,
      siteName: config.appName,
      images: openGraph?.images || [
        {
          url: config.logoUrl,
          width: 1200,
          height: 630,
          alt: `${config.appName} - Digital Marketing & Creative Studio`,
        },
      ],
      locale: config.locale,
      type: "website",
    },

    twitter: {
      title: twitter?.title || title || config.appName,
      description: twitter?.description || description || config.appDescription,
      images: twitter?.images || [
        {
          url: config.logoUrl,
          width: 1200,
          height: 630,
          alt: `${config.appName} - Digital Marketing & Creative Studio`,
        },
      ],
      card: twitter?.card || "summary_large_image",
      creator: twitter?.creator || config.twitterHandle,
    },

    ...(canonicalUrlRelative && {
      alternates: {canonical: canonicalUrlRelative},
    }),

    ...extraTags,
  };
};

export const SchemaMarkup = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "LocalBusiness",
          "@id": `https://${config.domainName}`,
          name: config.appName,
          description: config.appDescription,
          url: `https://${config.domainName}`,
          telephone: config.businessInfo.phone,
          email: config.businessInfo.email,
          address: {
            "@type": "PostalAddress",
            ...config.businessInfo.address,
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: config.businessInfo.geo.latitude,
            longitude: config.businessInfo.geo.longitude,
          },
          image: config.logoUrl,
          logo: config.logoUrl,
          founder: {
            "@type": "Person",
            name: config.businessInfo.founder,
          },
          foundingDate: config.businessInfo.foundingDate,
          openingHours: config.businessInfo.openingHours,
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Digital Marketing & Creative Services",
            itemListElement: config.services.map((service) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: service.name,
                description: service.description,
              },
              url: `https://${config.domainName}/services#${service.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`,
            })),
          },
          sameAs: config.socials,
        }),
      }}
    />
  );
};
