import { brand } from "@/lib/content";
import { legalEntity, optional } from "@/lib/legal/entity";
import type { LegalSection } from "@/lib/legal/types";

/**
 * Contact block shared by every document.
 *
 * Deliberately identical across the set: a reader who finds it in one document
 * recognises it in the next, and there is only one place to change when the
 * registered address is filled in. The section number is passed in so it
 * continues the document's own numbering.
 */
export function contactSection(number: number): LegalSection {
  const registration = optional(legalEntity.registrationNumber);
  const address = optional(legalEntity.registeredAddress);

  const paragraphs: string[] = [
    `Questions about this document can be sent to ${legalEntity.privacyEmail}. We read every message and aim to respond within 30 days.`,
    "If you have a billing or refund question, email " +
      `${legalEntity.billingEmail} with the email address on your account and the order or transaction reference, and we will pick it up from there.`,
    "If you are in the EEA, the UK or Switzerland and are unhappy with how we have handled your data, you may also complain to your local supervisory authority.",
  ];

  return {
    id: "contact",
    heading: `${number}. Contact`,
    blocks: [
      { type: "p", text: `${legalEntity.contractingName} — ${brand.url}` },
      ...(address ? [{ type: "p" as const, text: address }] : []),
      ...(registration
        ? [
            {
              type: "p" as const,
              text: `Registration number: ${registration}.`,
            },
          ]
        : []),
      { type: "p", text: `General and privacy: ${legalEntity.privacyEmail}` },
      { type: "p", text: `Billing and refunds: ${legalEntity.billingEmail}` },
      { type: "p", text: `Security reports: ${legalEntity.securityEmail}` },
      ...paragraphs.map((text) => ({ type: "p" as const, text })),
    ],
  };
}
