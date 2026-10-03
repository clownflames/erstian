import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Inter_Tight } from "next/font/google";

import "./globals.css";
import { brand } from "@/lib/content";

const display = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});

const TITLE = "Erstian — Software That Solves Everyday Problems";
const DESCRIPTION =
  "Erstian builds practical software for businesses and everyday users — from productivity tools and business solutions to useful digital products for everyday life.";

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: TITLE,
    template: "%s — Erstian",
  },
  description: DESCRIPTION,
  applicationName: brand.name,
  keywords: [
    "Erstian",
    "software company",
    "business software",
    "productivity tools",
    "utility software",
    "software ecosystem",
  ],
  authors: [{ name: brand.name, url: brand.url }],
  creator: brand.name,
  publisher: brand.name,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: brand.url,
    siteName: brand.name,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${brand.name} — ${brand.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#07070a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-ink font-sans text-bone antialiased">
        {children}
      </body>
    </html>
  );
}
