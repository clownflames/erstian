import type { Metadata } from "next";

import { brand, faqs, footer, internbird } from "@/lib/content";

/** Real social profiles, currently none. See `organizationJsonLd`. */
const SOCIAL_PROFILES = footer.social.map((item) => item.href);

/**
 * Single source of truth for the site's search-facing strings and structured
 * data. The root layout, every route and the sitemap all read from here so a
 * title or description can never drift between the tab, the SERP and the JSON-LD.
 */

export const TITLE = "Erstian — Software That Solves Everyday Problems";

/**
 * Homepage description.
 *
 * Leads with Internbird because it is the live, purchasable offering. A
 * description that lists only in-development software sends the wrong signal to
 * both people and crawlers about what Erstian actually is today.
 */
export const DESCRIPTION =
  "Erstian develops and operates practical software for students, businesses and everyday users — including Internbird, a platform for discovering internships, training programs and career opportunities.";

/** Absolute URL for a site-relative path. Drives every canonical and og:url. */
export function absoluteUrl(path: string): string {
  return new URL(path, brand.url).toString();
}

const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: `${brand.name} — ${brand.tagline}`,
} as const;

type PageMetadataInput = {
  /** Rendered as `<title>` via the root layout's "%s — Erstian" template. */
  title: string;
  description: string;
  /** Site-relative path, e.g. "/privacy". Also becomes the canonical URL. */
  path: string;
  /**
   * Route-specific keywords.
   *
   * Merged with the site-wide list from the root layout rather than replacing
   * it, so a page can add terms without dropping Erstian's. Kept off the legal
   * documents deliberately — keyword-stuffing a privacy policy is both
   * ineffective and a bad signal.
   */
  keywords?: readonly string[];
};

/**
 * Per-route metadata.
 *
 * Every route must set its own canonical. The root layout deliberately does not
 * declare one: a canonical defined at the layout is inherited by all children,
 * so it would tag every page as a duplicate of the home page.
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = `${title} — ${brand.name}`;

  return {
    title,
    description,
    ...(keywords && keywords.length > 0 ? { keywords: [...keywords] } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: brand.name,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${brand.url}${OG_IMAGE.url}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

/* --- Structured data -------------------------------------------------------
 *
 * Referenced by `@id` rather than repeated inline so the Organization and
 * WebSite nodes merge into one entity instead of competing as duplicates.
 */

const ID = {
  organization: `${brand.url}/#organization`,
  website: `${brand.url}/#website`,
  faq: `${brand.url}/#faq`,
} as const;

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": ID.organization,
    name: brand.name,
    legalName: brand.legalName,
    url: brand.url,
    description: DESCRIPTION,
    slogan: brand.tagline,
    email: brand.email,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/logo.png"),
      contentUrl: absoluteUrl("/logo.png"),
      width: 2172,
      height: 724,
    },
    image: absoluteUrl("/og.png"),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: brand.email,
        url: brand.url,
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "billing and refunds",
        email: brand.businessEmail,
        url: brand.url,
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "business enquiries",
        email: brand.businessEmail,
        url: brand.url,
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "security reports",
        email: brand.securityEmail,
        url: brand.url,
        availableLanguage: ["English"],
      },
    ],
    /**
     * Internbird as a `brand` of Erstian, not a separate `Organization`.
     *
     * `brand` is the correct schema.org type for a product line, and it carries
     * `parentOrganization` — which is exactly the relationship: a platform
     * Erstian operates. Emitting a second top-level Organization would tell
     * search engines Internbird is a distinct legal entity, which contradicts
     * what our Terms, Privacy Policy and Disclaimer all state.
     */
    brand: {
      "@type": "Brand",
      name: internbird.name,
      url: internbird.url,
      description: internbird.summary,
      parentOrganization: { "@id": ID.organization },
    },
    // `sameAs` lists only real Erstian profiles, read from `footer.social` so
    // the structured data and the visible footer can never disagree. It is
    // currently empty, and stays absent rather than emitting an empty array —
    // pointing at a platform's home page would tell search engines that Erstian
    // is the same entity as the platform itself.
    ...(SOCIAL_PROFILES.length > 0 ? { sameAs: SOCIAL_PROFILES } : {}),
  };
}

export function webSiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": ID.website,
    url: brand.url,
    name: brand.name,
    description: DESCRIPTION,
    inLanguage: "en-US",
    publisher: { "@id": ID.organization },
    // No `potentialAction`/SearchAction: the site has no search feature, and
    // declaring one that does not exist is a structured-data error.
  };
}

export function faqJsonLd() {
  return {
    "@type": "FAQPage",
    "@id": ID.faq,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/**
 * Site-wide structured data, emitted from the root layout.
 *
 * Only Organization and WebSite live here. Both describe the site as a whole,
 * so they are valid on every route. Page-specific types must NOT be added to
 * this graph: FAQPage markup on a page that has no FAQ content is a structured
 * data error, not a harmless extra.
 */
export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationJsonLd(), webSiteJsonLd()],
  };
}

/**
 * Home page FAQ structured data.
 *
 * Valid only because every answer ships in the server HTML —
 * components/site/faq.tsx keeps each panel mounted and animates its height, so
 * closed answers are still present for a crawler to read. Structured data that
 * points at text hidden behind an interaction is a manual-action risk.
 *
 * Emitted from app/page.tsx, not the layout, so it never appears on routes with
 * no FAQ section.
 */
export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    ...faqJsonLd(),
  };
}