import { legalEntity } from "@/lib/legal/entity";
import { contactSection } from "@/lib/legal/shared";
import type { LegalDoc } from "@/lib/legal/types";

/** Refund, cancellation and chargeback policy. */
export const refunds: LegalDoc = {
  slug: "refunds",
  path: "/refunds",
  title: "Refund Policy",
  label: "Legal",
  group: "business",
  summary:
    "How refunds, cancellations and chargebacks are handled on paid products — and why nothing is refundable yet.",
  description:
    "How Erstian handles refunds, cancellations and chargebacks on paid products and subscriptions.",
  effective: "2026-01-15",
  intro: [
    "This policy explains how refunds work for Erstian products. It applies to subscriptions and one-off purchases once those products are available.",
    "The website itself is free and there is nothing to refund. We will not take payment for a product before it exists.",
  ],
  related: ["terms", "dpa", "privacy"],
  sections: [
    {
      id: "scope",
      heading: "1. What this policy covers",
      blocks: [
        {
          type: "p",
          text: "It covers amounts paid to Erstian for products and subscriptions. It does not cover third-party purchases, such as app store fees or payments made to another provider, which are governed by that provider's own policy.",
        },
      ],
    },
    {
      id: "principle",
      heading: "2. Our approach",
      blocks: [
        {
          type: "p",
          text: "We would rather keep a customer than win a dispute, so we aim to resolve refund requests quickly and without friction. If something we sold you did not work, tell us and we will fix it or refund it.",
        },
        {
          type: "p",
          text: "We do not use refunds as a way of avoiding difficult conversations. If a product falls short, we would rather hear it from you than defend it.",
        },
      ],
    },
    {
      id: "subscriptions",
      heading: "3. Subscriptions and cancellation",
      blocks: [
        {
          type: "p",
          text: "Subscriptions renew automatically. You can cancel at any time from your account, and cancellation takes effect at the end of the period you have already paid for. We will not make you contact support to cancel.",
        },
        {
          type: "p",
          text: "If you cancel mid-period you keep access until that period ends. We do not refund the unused remainder of a period you have chosen to leave, unless the product was materially different from how we described it, or was unavailable for a significant part of the period through our own fault.",
        },
        {
          type: "p",
          text: "Cancelling does not delete your account or your data. We will tell you what we keep and for how long when you ask.",
        },
      ],
    },
    {
      id: "cooling-off",
      heading: "4. Cooling-off period",
      blocks: [
        {
          type: "p",
          text: "If you are a consumer in the UK or the European Union, you have the right to withdraw from a purchase within 14 days without giving a reason and receive a full refund. This statutory right is not affected by anything else in this policy.",
        },
        {
          type: "p",
          text: "You lose that right once you begin using a digital service in a way that makes immediate performance necessary, or once we have made clear that doing so waives it. We will tell you when that point is reached, and we will ask for your explicit confirmation before it applies.",
        },
        {
          type: "p",
          text: "Where you ask us to begin work during the cooling-off period, we will tell you what the likely refund position is before you do so.",
        },
      ],
    },
    {
      id: "how-to-request",
      heading: "5. Requesting a refund",
      blocks: [
        {
          type: "p",
          text: `Email ${legalEntity.privacyEmail} with the email address on the account and the reason. You do not need to fill in a form or contact an agent.`,
        },
        {
          type: "ol",
          items: [
            "We acknowledge your request within 3 business days.",
            "We tell you our decision within 10 business days of receiving it.",
            "Approved refunds go back to the original payment method within 10 business days of approval.",
            "Your bank determines how long the money then takes to appear; we cannot speed that up.",
          ],
        },
        {
          type: "p",
          text: "If we decline, we will say why. If you disagree, reply and ask for a review by a person who was not involved in the first decision.",
        },
      ],
    },
    {
      id: "chargebacks",
      heading: "6. Chargebacks",
      blocks: [
        {
          type: "p",
          text: "We would much rather resolve a problem directly than pay a chargeback fee, so please email us first. If you dispute a charge with your bank without contacting us, we will still respond, but we may be unable to issue the refund directly and the process will take longer.",
        },
      ],
    },
    {
      id: "fair-use",
      heading: "7. Fair use",
      blocks: [
        {
          type: "p",
          text: "Refunds are for genuine problems: the product does not work, it does not do what we said, or you were charged in error. Repeated refund requests used to consume a product and keep the money are not something we will accommodate, and we may refuse them.",
        },
      ],
    },
    {
      id: "changes",
      heading: "8. Changes to this policy",
      blocks: [
        {
          type: "p",
          text: "We will update this page when it changes and revise the date at the top. Changes do not apply retroactively to a purchase you already made under a previous version.",
        },
      ],
    },
    contactSection(9),
  ],
};
