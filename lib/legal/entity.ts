import { brand } from "@/lib/content";

/**
 * Legal copy for the public documents.
 *
 * Content rule (same as lib/content.ts): Erstian develops and operates digital
 * products and services, including Internbird. These documents describe an
 * operating business. Where a clause has to describe something that varies by
 * product — availability, cancellation windows, refund eligibility — it is
 * scoped to the specific product rather than to the whole business, because
 * Internbird's paid offerings are not the same thing as a software subscription.
 *
 * ------------------------------------------------------------------
 * WHAT IS AND IS NOT DECLARED HERE
 *
 * Facts Erstian can state without inventing them live in `legalEntity`. Facts
 * that only the owner can supply are left as empty strings and are *omitted*
 * from the rendered page rather than printed as a placeholder — a bracketed
 * "TO BE CONFIRMED" inside a binding clause is worse than a document that
 * simply does not mention a detail it does not have.
 *
 * Populate these once the entity exists:
 *   · registrationNumber  — GSTIN / CIN / equivalent, if registered
 *   · registeredAddress   — registered or principal place of business
 *
 * Until then the documents describe the party by name and contact address,
 * which is accurate and complete enough to form a contract.
 *
 * This is a starting template, not legal advice. Have a qualified lawyer
 * review it against your actual entity, jurisdiction and business model before
 * you take payment from anyone.
 * ------------------------------------------------------------------
 */

/**
 * The governing-law position.
 *
 * Stated as India because that is the jurisdiction Erstian operates in and the
 * one its payment and banking relationships sit inside. It is a declared
 * position, not a verified registration: confirm it with your lawyer before
 * launch, and change both values together if it moves. `terms` and `refunds`
 * both read from here, so the two can never disagree.
 */
export const legalJurisdiction = {
  /** Short name, used inline: "the laws of {lawsOf}". */
  lawsOf: "India",
  /** Used in the jurisdiction clause. */
  courtsOf: "India",
} as const;

export const legalEntity = {
  /** Name the contracts are made under. */
  contractingName: brand.legalName,

  /**
   * GSTIN / CIN / equivalent registration identifier.
   *
   * Empty until the entity is registered. Omitted from every document while
   * unset — see `optional()`. This is deliberately not filled with a plausible
   * looking value; a wrong registration number on a live legal page is a
   * misrepresentation.
   */
  registrationNumber: "",

  /**
   * Registered or principal place of business, as a single line.
   *
   * Empty until declared. Omitted while unset, for the same reason as above.
   */
  registeredAddress: "",

  /** Privacy and general enquiries. */
  privacyEmail: brand.email,

  /**
   * Address for vulnerability reports. Kept separate from the enquiry inbox so
   * a security disclosure is never mistaken for sales correspondence.
   */
  securityEmail: "security@erstian.com",

  /** Refunds, cancellations and billing disputes. */
  billingEmail: brand.businessEmail,

  governingLaw: legalJurisdiction.lawsOf,
  exclusiveCourts: legalJurisdiction.courtsOf,
} as const;

/**
 * Optional facts (registration number, address) are omitted when unset.
 *
 * Returns null rather than a placeholder string so the caller skips the
 * paragraph entirely. A document that omits a detail it does not have is
 * accurate; one that prints "[TO BE CONFIRMED]" is not.
 */
export function optional(value: string): string | null {
  return value.trim() || null;
}

/**
 * Required facts fall back to neutral wording rather than a visible marker.
 *
 * Used only for values that are declared by design (governing law,
 * jurisdiction) and therefore always non-empty. Kept as a function so the
 * contract holds if a future edit empties one of them — the fallback is
 * "applicable law" and "the competent courts", both of which are true
 * regardless of where Erstian is incorporated.
 */
export function required(value: string, neutralFallback: string): string {
  return value.trim() || neutralFallback;
}
