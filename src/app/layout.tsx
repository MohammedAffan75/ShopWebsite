import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/data/site.config";
import { ClientProviders } from "@/components/ClientProviders";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#420A29",
};

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.business.name }],
  metadataBase: new URL(siteConfig.seo.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: siteConfig.seo.siteUrl,
    siteName: siteConfig.business.name,
    images: [
      {
        url: "/images/placeholders/shop-outside.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.business.name} - Shop Front in Mavinakere, Raichur`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: ["/images/placeholders/shop-outside.svg"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/placeholders/shop-outside.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TailorShop",
    "name": siteConfig.business.name,
    "alternateName": siteConfig.business.nameKannada,
    "image": [
      `${siteConfig.seo.siteUrl}/images/placeholders/shop-outside.svg`,
      `${siteConfig.seo.siteUrl}/images/placeholders/new-1.svg`
    ],
    "telephone": "+91-9353763089",
    "url": siteConfig.business.links.websiteUrl,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${siteConfig.business.address.doorNo}, ${siteConfig.business.address.street}`,
      "addressLocality": siteConfig.business.address.city,
      "addressRegion": siteConfig.business.address.state,
      "postalCode": siteConfig.business.address.pincode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 16.2076,
      "longitude": 77.3463
    },
    "hasMap": siteConfig.business.links.googleMapsListing,
    "priceRange": "₹₹ - Pocket-Friendly & Reasonable",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "10:00",
        "closes": "20:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "10"
    },
    "review": siteConfig.testimonials.map((t) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": t.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating.toString(),
        "bestRating": "5"
      },
      "reviewBody": t.comment.en
    })),
    "makesOffer": siteConfig.services.map((s) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": s.title.en,
        "description": s.description.en
      }
    }))
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FAF6F0] text-[#2C061B] antialiased selection:bg-[#D4AF37] selection:text-[#2C061B]">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
