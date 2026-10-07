import type { MetadataRoute } from "next";

import { legalDocs } from "@/lib/legal";
import { subpages } from "@/lib/pages";
import { absoluteUrl } from "@/lib/seo";

/**
 * The home page changes whenever site copy is edited, so it reports the build
 * timestamp. Legal pages carry a fixed effective date instead — their content
 * only moves when the document is actually revised, and inflating that on every
 * deploy would train crawlers to ignore the field. The marketing subpages sit in
 * between: they change when the story does, not on every commit.
 */
const HOME_LAST_MODIFIED = new Date();
const PAGE_LAST_MODIFIED = new Date("2026-01-15");

/** Legal documents report their own effective date, not the build timestamp. */
const legalEntries = legalDocs.map((doc) => ({
  url: absoluteUrl(doc.path),
  lastModified: new Date(doc.effective),
  changeFrequency: "yearly" as const,
  priority: 0.3,
}));

/** The /legal hub: every other legal document is reachable from it. */
const legalIndexEntry = {
  url: absoluteUrl("/legal"),
  lastModified: PAGE_LAST_MODIFIED,
  changeFrequency: "monthly" as const,
  priority: 0.5,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: HOME_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
    },
    // No `alternates` block: this site is single-language, and per Google's
    // guidance the field is only for hreflang variants.
    ...subpages.map((page) => ({
      url: absoluteUrl(page.href),
      lastModified: PAGE_LAST_MODIFIED,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    legalIndexEntry,
    ...legalEntries,
  ];
}
