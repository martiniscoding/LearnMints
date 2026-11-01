import type { Metadata, Viewport } from "next";
import { Anek_Latin, IBM_Plex_Sans } from "next/font/google";
import {
  site,
  keywords,
  faqJsonLd,
  organizationJsonLd,
  softwareJsonLd,
  websiteJsonLd,
} from "@/lib/site";
import "./globals.css";

const anek = Anek_Latin({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-anek",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-plex",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [...keywords],
  applicationName: site.name,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "education",
  classification: "Learning Management System",
  alternates: {
    canonical: "/",
    languages: { "en-IN": "/", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.shortDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.name}: a micro teaching platform for independent tutors in India.`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: site.twitter,
    creator: site.twitter,
    title: `${site.name} — ${site.tagline}`,
    description: site.shortDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    title: site.name,
    statusBarStyle: "default",
  },
  formatDetection: { telephone: false, address: false, email: false },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eaeef9" },
    { media: "(prefers-color-scheme: dark)", color: "#050e3a" },
  ],
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [organizationJsonLd, websiteJsonLd, softwareJsonLd, faqJsonLd].map(
    ({ ["@context"]: _ctx, ...rest }) => rest,
  ),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${anek.variable} ${plex.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script
          type="application/ld+json"
          // Structured data is built from our own constants, never user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
