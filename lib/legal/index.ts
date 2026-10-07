import { acceptableUse } from "@/lib/legal/docs/acceptable-use";
import { accessibility } from "@/lib/legal/docs/accessibility";
import { cookies } from "@/lib/legal/docs/cookies";
import { dpa } from "@/lib/legal/docs/dpa";
import { disclaimer } from "@/lib/legal/docs/disclaimer";
import { privacy } from "@/lib/legal/docs/privacy";
import { refunds } from "@/lib/legal/docs/refunds";
import { security } from "@/lib/legal/docs/security";
import { terms } from "@/lib/legal/docs/terms";
import type { LegalDoc, LegalDocSlug, LegalGroupId } from "@/lib/legal/types";

export { legalEntity } from "@/lib/legal/entity";
export type {
  LegalBlock,
  LegalDefinition,
  LegalDoc,
  LegalDocSlug,
  LegalGroupId,
  LegalSection,
} from "@/lib/legal/types";

/**
 * Every legal document, in display order.
 *
 * One list rather than a keyed record: nothing in the app looks documents up by
 * slug at runtime — each route imports its own document directly — so a record
 * would only add a second thing to keep in step. Iteration order here drives
 * the /legal index, the sitemap and the related-docs rail.
 */
export const legalDocs: readonly LegalDoc[] = [
  privacy,
  terms,
  cookies,
  acceptableUse,
  security,
  accessibility,
  refunds,
  dpa,
  disclaimer,
];

/** Sibling documents for the rail at the foot of a page, in the order declared. */
export function relatedDocs(slug: LegalDocSlug): readonly LegalDoc[] {
  const doc = legalDocs.find((item) => item.slug === slug);
  if (!doc) return [];

  return doc.related
    .map((related) => legalDocs.find((entry) => entry.slug === related))
    .filter((entry): entry is LegalDoc => Boolean(entry));
}

/* --- /legal index ---------------------------------------------------------- */

export type LegalGroup = {
  id: LegalGroupId;
  title: string;
  note: string;
};

const GROUP_ORDER: readonly LegalGroup[] = [
  {
    id: "data",
    title: "Your data",
    note: "What we collect, what we do not, and what you can ask us to do about it.",
  },
  {
    id: "terms",
    title: "Terms of use",
    note: "The rules that apply when you use this site or a product, and how we enforce them.",
  },
  {
    id: "products",
    title: "Security & access",
    note: "How we protect the service, how accessible we aim to be, and where we fall short.",
  },
  {
    id: "business",
    title: "Business & billing",
    note: "Terms for organisations: how we process your data, and how refunds work.",
  },
];

/** Documents bucketed for the index page, in display order. Empty groups drop out. */
export function groupedDocs(): readonly {
  group: LegalGroup;
  docs: readonly LegalDoc[];
}[] {
  return GROUP_ORDER.map((group) => ({
    group,
    docs: legalDocs.filter((doc) => doc.group === group.id),
  })).filter((entry) => entry.docs.length > 0);
}
