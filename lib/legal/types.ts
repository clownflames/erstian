/**
 * Shapes for the public legal documents.
 *
 * Legal copy is authored as data rather than markup so the same text can be
 * rendered by the page shell, summarised on the /legal index and listed in the
 * sitemap without being written twice. It also keeps every word inside the
 * server component tree — nothing here needs hydration.
 */

/** A paragraph, list, callout or definition group inside a section. */
export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: readonly string[] }
  | { type: "ol"; items: readonly string[] }
  /** A boxed aside. Used for warnings and for "if you are a business" notes. */
  | { type: "note"; text: string }
  | { type: "definition"; items: readonly LegalDefinition[] };

export type LegalDefinition = {
  term: string;
  detail: string;
};

export type LegalSection = {
  /** Anchor id, also used to build the on-page table of contents. */
  id: string;
  heading: string;
  blocks: readonly LegalBlock[];
};

/**
 * Every document that can exist at /legal.
 *
 * Declared as a string union up front so `LegalDoc` can be typed without
 * importing the registry that holds it — the same trick the original single
 * file used, kept because the circular alternative is worse.
 */
export type LegalDocSlug =
  | "privacy"
  | "cookies"
  | "terms"
  | "acceptable-use"
  | "refunds"
  | "dpa"
  | "security"
  | "accessibility"
  | "disclaimer";

/** Buckets used to organise the /legal index. */
export type LegalGroupId = "data" | "terms" | "products" | "business";

export type LegalDoc = {
  slug: LegalDocSlug;
  /** Site-relative route. */
  path: string;
  /** Browser title and H1. The root layout appends the brand suffix. */
  title: string;
  /** Small label above the H1. */
  label: string;
  /** Which section of the /legal index this document sits in. */
  group: LegalGroupId;
  /**
   * One sentence written for someone deciding whether to open the document.
   * This is the only description shown on the index, so it has to stand alone.
   */
  summary: string;
  description: string;
  /** ISO date the document took effect. */
  effective: string;
  /** Paragraphs under the H1, before the contents list. */
  intro: readonly string[];
  /** Siblings offered in the rail at the foot of the page. */
  related: readonly LegalDocSlug[];
  sections: readonly LegalSection[];
};
