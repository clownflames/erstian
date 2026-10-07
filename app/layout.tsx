import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Inter_Tight } from "next/font/google";

import "./globals.css";
import { JsonLd } from "@/components/seo/json-ld";
import { brand } from "@/lib/content";
import { DESCRIPTION, TITLE, siteJsonLd } from "@/lib/seo";

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

const TITLE_TEMPLATE = "%s — Erstian";

/**
 * Search Console / Bing / Pinterest / Facebook ownership verification.
 *
 * Each token is optional and read from the environment, so an unconfigured
 * provider emits no markup at all rather than an empty `<meta>` tag. Next maps
 * `google`, `yandex` and `me` to their own meta names; everything else goes
 * through `other` keyed by the exact meta name.
 */
const verification: Metadata["verification"] = (() => {
  const other: NonNullable<
    NonNullable<Metadata["verification"]>["other"]
  > = {};

  if (process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION) {
    other["msvalidate.01"] = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;
  }
  if (process.env.NEXT_PUBLIC_PINTEREST_SITE_VERIFICATION) {
    other["p:domain_verify"] = process.env.NEXT_PUBLIC_PINTEREST_SITE_VERIFICATION;
  }
  if (process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION) {
    other["facebook-domain-verification"] =
      process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION;
  }
  if (process.env.NEXT_PUBLIC_TIKTOK_SITE_VERIFICATION) {
    other["tiktok-developers-site-verification"] =
      process.env.NEXT_PUBLIC_TIKTOK_SITE_VERIFICATION;
  }

  return {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    }),
    ...(process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION && {
      yandex: process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION,
    }),
    ...(process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION && {
      me: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION,
    }),
    ...(Object.keys(other).length > 0 && { other }),
  };
})();

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: TITLE,
    template: TITLE_TEMPLATE,
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
  // No `alternates.canonical` here. A canonical set at the root layout is
  // inherited by every child route, which would declare all of them duplicates
  // of the home page. Each route sets its own via `pageMetadata()` in lib/seo.
  manifest: "/manifest.webmanifest",
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
  ...(Object.keys(verification).length > 0 ? { verification } : {}),
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
        <JsonLd data={siteJsonLd()} />
        {children}
      </body>
    </html>
  );
}
