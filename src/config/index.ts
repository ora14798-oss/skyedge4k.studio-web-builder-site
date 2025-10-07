// config/index.ts

const siteConfig = {
  appName: "SkyEdge4K Studio",
  appDescription:
    "Professional drone photography and videography services for real estate, events, inspections, and cinematic productions.",
  domainName: "skyedge4k.com",
  twitterHandle: "@skyedge4k",
  locale: "en_US",

  businessInfo: {
    foundingDate: "2023-01-01",
    founder: "SkyEdge4K Studio Team",
    phone: "+57-300-123-4567",
    email: "skyedge4k@gmail.com",
    address: {
      streetAddress: "Cra. 10 #32-15",
      addressLocality: "Cartagena",
      addressRegion: "Bolívar",
      postalCode: "130001",
      addressCountry: "CO",
    },
    geo: {
      latitude: "10.3910",
      longitude: "-75.4794",
    },
    openingHours: "Mo,Tu,We,Th,Fr 09:00-17:00",
  },

  services: [
    {
      name: "Real Estate Aerial Photography",
      description: "High-quality aerial photography for real estate listings",
    },
    {
      name: "Event Videography",
      description: "Cinematic drone coverage for special events and occasions",
    },
    {
      name: "Inspection Services",
      description:
        "Detailed aerial inspections for roofs, infrastructure, and properties",
    },
  ],

  socials: [
    "https://www.facebook.com/skyedge4kstudio",
    "https://www.instagram.com/skyedge4kstudio",
    "https://www.youtube.com/@skyedge4kstudio",
    "https://twitter.com/skyedge4k",
    "https://www.tiktok.com/@skyedge4kstudio",
  ],

  logoUrl: "https://res.cloudinary.com/.../logo.png", // ✅ Replace with real Cloudinary logo
  keywords: [
    "digital marketing agency",
    "web development Colombia",
    "SEO services",
    "Google Ads management",
    "social media management",
    "3D virtual tours",
    "drone photography",
    "drone videography",
    "content creation",
    "SkyEdge4K Studio",
  ],
};

export default siteConfig;
