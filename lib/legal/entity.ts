import { brand } from "@/lib/content";

/**
 * Legal copy for the public documents.
 *
 * Same rule as lib/content.ts: Erstian is a company at the beginning of its
 * journey. Nothing here may promise shipped products, customers, uptime
 * commitments or processing capabilities that do not exist yet. Where a clause
 * has to describe future behaviour (subscriptions, refunds, accounts) it is
 * written in the present tense and scoped to "Products" as they are released.
 *
 * ------------------------------------------------------------------
 * OWNER ACTION REQUIRED — read this file (`legalEntity`) before launch.
 * Every fact below that only the site owner can supply is declared once here.
 * Anything required that is left empty renders as a visible
 * `[… TO BE CONFIRMED]` marker rather than a blank clause, so an incomplete
 * document cannot ship unnoticed. This is a starting template, not legal
 * advice — have a qualified lawyer review it against your actual entity,
 * jurisdiction and business model before you take payment from anyone.
 * ------------------------------------------------------------------
 */

export const legalEntity = {
  /** Name the contracts are made under. */
  contractingName: brand.legalName,

  /** Company registration / tax identifier. Leave blank if not registered. */
  registrationNumber: "",

  /** Registered office address, formatted as a single line. Blank if n/a. */
  registeredAddress: "",

  /** Privacy contact, when it differs from the public enquiry address. */
  privacyEmail: brand.email,

  /**
   * Address for vulnerability reports. Kept separate from the enquiry inbox so
   * a security disclosure is never mistaken for sales correspondence.
   */
  securityEmail: "security@erstian.com",

  /**
   * Country whose laws govern the Terms, and the courts that hear disputes.
   * These two materially change the Terms, so they cannot be guessed.
   */
  governingLaw: "",
  exclusiveCourts: "",
} as const;

/**
 * Renders a fact the owner must supply. An unset value stays visibly marked so
 * a half-finished legal document is caught in review rather than published.
 */
export function required(value: string, label: string): string {
  return value.trim() || `[${label} — TO BE CONFIRMED]`;
}

/**
 * Facts that must be filled in before this site can ship.
 *
 * Checked once at module load rather than left to the `required()` marker alone.
 * The marker is a good tripwire for a human reading the rendered page, but it
 * does nothing for CI: a build with an empty governing-law field passes today and
 * ships a Terms page with a bracketed placeholder in a binding clause. Throwing
 * here turns that into a failed build.
 *
 * To ship before you have these, the escape hatch is explicit and loud — set
 * `ALLOW_INCOMPLETE_LEGAL_ENTITY=1` in the build environment. Do not set it in
 * `.env` for a production deploy.
 */
const REQUIRED_FIELDS = [
  "registrationNumber",
  "registeredAddress",
  "governingLaw",
  "exclusiveCourts",
] as const satisfies readonly (keyof typeof legalEntity)[];

if (process.env.ALLOW_INCOMPLETE_LEGAL_ENTITY !== "1") {
  const missing = REQUIRED_FIELDS.filter((field) => !legalEntity[field].trim());

  if (missing.length > 0) {
    throw new Error(
      [
        "",
        "lib/legal/entity.ts is incomplete — refusing to build.",
        "",
        `  Missing: ${missing.join(", ")}`,
        "",
        "  These are facts only the site owner can supply. Fill them in at the",
        "  top of lib/legal/entity.ts, or set ALLOW_INCOMPLETE_LEGAL_ENTITY=1 to",
        "  build anyway. The second option ships documents with visible",
        "  \"TO BE CONFIRMED\" markers in binding clauses.",
        "",
      ].join("\n"),
    );
  }
}

/** Optional facts (registration number, address) are omitted when unset. */
export function optional(value: string): string | null {
  return value.trim() || null;
}
