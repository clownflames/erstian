import { brand, internbird } from "@/lib/content";
import { legalEntity } from "@/lib/legal/entity";
import { contactSection } from "@/lib/legal/shared";
import type { LegalDoc } from "@/lib/legal/types";

/**
 * Refund & Cancellation Policy.
 *
 * Written for a business that takes payment through a third-party gateway.
 * The failed / duplicate / debited-but-not-received section is the part that
 * matters most in practice: those are the cases where a customer is not at
 * fault, and a policy that only explains voluntary cancellations reads as though
 * the merchant might argue about a gateway error.
 *
 * Two things deliberately avoided:
 *   · A fixed settlement time. We control when we *initiate* a refund, not when
 *     the customer's bank credits it, and promising a number we cannot keep is
 *     how refund policies lose trust.
 *   · A blanket "no refunds" clause. The non-refundable cases below are the ones
 *     that are genuinely reasonable — work already delivered, services consumed —
 *     rather than a catch-all.
 */
export const refunds: LegalDoc = {
  slug: "refunds",
  path: "/refunds",
  title: "Refund & Cancellation Policy",
  label: "Legal",
  group: "business",
  summary:
    "When you can cancel, when you are eligible for a refund, and what happens if a payment fails or is duplicated.",
  description:
    "How Erstian handles cancellations, refunds, failed payments and duplicate charges on paid products and services, including Internbird.",
  effective: "2026-01-15",
  intro: [
    "This policy explains how cancellations and refunds work for paid products and services offered by Erstian, including Internbird. It applies whether you paid through our website, the Internbird platform, or by another method we have agreed with you.",
    "The principle underneath it: we would rather resolve a problem directly than win an argument, and where we have taken money for something we have not delivered, we give it back.",
  ],
  related: ["terms", "privacy", "dpa"],
  sections: [
    {
      id: "scope",
      heading: "1. What this policy covers",
      blocks: [
        {
          type: "p",
          text: "It covers amounts paid to Erstian for any paid product, service, program or subscription, including paid offerings on Internbird.",
        },
        {
          type: "p",
          text: "It does not cover purchases made from a third party — such as an application fee paid directly to an employer or a fee charged by another platform — which are governed by that provider's own policy. We will tell you where a cost is not ours before you pay it.",
        },
        {
          type: "p",
          text: "Where a specific order states its own cancellation window or refund terms, those apply to that order in addition to this policy.",
        },
      ],
    },
    {
      id: "principle",
      heading: "2. Our approach",
      blocks: [
        {
          type: "p",
          text: "We would rather keep a customer than win a dispute. If something you paid for did not work, did not match how we described it, or was unavailable for a significant part of the period, tell us and we will fix it or refund it.",
        },
        {
          type: "p",
          text: "We do not use refund policy as a way of avoiding difficult conversations, and we do not require you to argue your way to an outcome that is clearly right.",
        },
      ],
    },
    {
      id: "eligibility",
      heading: "3. When you can request a refund",
      blocks: [
        {
          type: "p",
          text: "You can request a refund in any of these situations:",
        },
        {
          type: "ul",
          items: [
            "The service was not delivered, or delivery failed for a reason attributable to us.",
            "The service was materially different from how we described it before you paid.",
            "You were charged for something you did not buy, or a duplicate charge was made.",
            "An amount was debited from your account but the payment did not complete, and we have not already returned it.",
            "The service was unavailable for a significant part of the period you paid for, through our fault.",
            "We withdrew or discontinued the service you paid for, and you cannot reasonably continue to receive it.",
            "We were unable to provide a specific feature you paid for, and told you so.",
          ],
        },
        {
          type: "p",
          text: "We will assess each request on its merits. Where a situation is listed above, we do not usually need you to justify it further.",
        },
      ],
    },
    {
      id: "cancellation",
      heading: "4. Cancellation",
      blocks: [
        {
          type: "p",
          text: "You can cancel a paid order or service at any time by contacting us. You do not need to explain why, and you do not need to speak to a retention agent.",
        },
        {
          type: "ul",
          items: [
            "Where an order states a specific cancellation window — for example a program that can be cancelled up to a stated number of days before it starts — that window applies to that order.",
            "Where no window is stated, you may cancel at any time before the service begins, and we will refund amounts for it not yet delivered.",
            "Where you cancel after a service has begun, we refund the portion of the period not yet used, less any portion already consumed.",
            "For a subscription, cancellation takes effect at the end of the period you have already paid for. We will not require you to contact support to do it.",
          ],
        },
        {
          type: "p",
          text: "Cancelling does not delete your account or your data. Ask us and we will tell you what we retain and for how long, or delete it.",
        },
      ],
    },
    {
      id: "non-refundable",
      heading: "5. Situations that are normally not refundable",
      blocks: [
        {
          type: "p",
          text: "These are the cases where we will normally decline a refund. We say them plainly so there is no surprise later:",
        },
        {
          type: "ul",
          items: [
            "The service has been fully delivered and used — for example a completed training session, a delivered report, or a consultation that has taken place.",
            "You have consumed the benefit of a period you paid for and then cancelled without a change of mind during that period.",
            "You are leaving a period you chose to leave early, where the product was as described and available as promised.",
            "You have already been refunded for the same order, or the amount was reversed to you by your bank.",
            "The request is for a service you did not purchase from Erstian.",
            "Repeated requests, having consumed a service and kept the money, are treated as abuse of this policy and may be refused.",
          ],
        },
        {
          type: "p",
          text: "If we decline, we will tell you why and point to the specific point above. If you disagree, reply and ask for a review by someone who was not involved in the first decision.",
        },
        {
          type: "note",
          text: "Nothing in this section limits your statutory rights, including any right to cancel or obtain a refund that cannot be excluded by law where you live.",
        },
      ],
    },
    {
      id: "failed-payments",
      heading: "6. Failed, duplicate and reversed payments",
      blocks: [
        {
          type: "p",
          text: "These are situations where money has moved or should have, but the service has not been delivered correctly. We treat them as our problem to resolve.",
        },
        {
          type: "definition",
          items: [
            {
              term: "Payment declined or failed",
              detail:
                "No order is confirmed and nothing is owed. If your bank nonetheless shows a pending or completed debit that does not clear, send us the transaction reference and we will trace it and release the funds.",
            },
            {
              term: "Amount debited, order not confirmed",
              detail:
                "If you have been charged and we have not confirmed the order, contact us with your transaction reference. Either we will confirm the order or refund you. We will not leave a successful charge with no order behind it.",
            },
            {
              term: "Duplicate payment",
              detail:
                "If the same amount has been charged more than once for one order — including where a payment page was reloaded or a network retry occurred — tell us. We will refund the duplicate in full.",
            },
            {
              term: "Payment reversed or chargeback",
              detail:
                "If you dispute a charge with your bank, tell us at the same time. We would much rather resolve it with you directly. We will still respond to the bank, and we will not treat an honest dispute as a breach of these terms.",
            },
            {
              term: "Gateway error after debit",
              detail:
                "Where a gateway reports an error but the amount has been debited, the debit is treated as a failed payment under this section. Send us the reference and we will resolve it.",
            },
            {
              term: "Charged for the wrong amount",
              detail:
                "If you were charged more than the total shown at checkout, tell us and we will refund the difference.",
            },
          ],
        },
        {
          type: "p",
          text: `Please include your name, the email address on the order, the date, the amount and the payment reference or transaction ID from your bank or the payment provider. That is everything we need to find the payment. Send it to ${legalEntity.billingEmail}.`,
        },
      ],
    },
    {
      id: "process",
      heading: "7. How to request a refund",
      blocks: [
        {
          type: "p",
          text: `Email ${legalEntity.billingEmail} with the email address on your account, the order or transaction reference, and the reason. You do not need to fill in a form. If you are asking us to delete your account as well, say so in the same message.`,
        },
        {
          type: "p",
          text: "What happens next:",
        },
        {
          type: "ol",
          items: [
            "We acknowledge your request within 3 business days.",
            "We confirm the payment we have located, so you know we are looking at the right one.",
            "We tell you our decision within 10 business days of receiving the request.",
            "If approved, we initiate the refund through the same payment provider, to the original payment method.",
          ],
        },
        {
          type: "p",
          text: "We aim to initiate an approved refund within 10 business days of approval. Our provider's own stated processing time then applies before the amount appears in your account.",
        },
        {
          type: "note",
          text: "Once we have initiated a refund, the time it takes to appear in your account is controlled by your bank or card issuer, not by us. Some banks take several business days; a few take longer. We will give you the refund reference so you can chase it with them if it has not landed.",
        },
      ],
    },
    {
      id: "chargebacks",
      heading: "8. Chargebacks",
      blocks: [
        {
          type: "p",
          text: "We would much rather resolve a problem directly than pay a chargeback fee, so please email us first. If you dispute a charge with your bank without contacting us, we will still respond — but we may be unable to refund directly, and the process takes considerably longer.",
        },
      ],
    },
    {
      id: "changes",
      heading: "9. Changes to this policy",
      blocks: [
        {
          type: "p",
          text: "We will update this page when it changes and revise the date at the top. Changes do not apply retroactively to an order you already made under a previous version — the version in force when you purchased governs that purchase.",
        },
      ],
    },
    {
      id: "help",
      heading: "10. If you are not happy with the outcome",
      blocks: [
        {
          type: "p",
          text: "Reply and ask for a review by someone who was not involved in the first decision. If a consumer protection body applies where you live, you also have the right to raise the matter with them.",
        },
        {
          type: "p",
          text: `This policy is part of our Terms & Conditions, which govern the rest of your use of ${brand.url} and ${internbird.name}.`,
        },
      ],
    },
    contactSection(11),
  ],
};
