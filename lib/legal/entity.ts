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

/** Optional facts (registration number, address) are omitted when unset. */
export function optional(value: string): string | null {
  return value.trim() || null;
}
