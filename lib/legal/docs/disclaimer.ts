import { brand } from "@/lib/content";
import { legalEntity, optional } from "@/lib/legal/entity";
import { contactSection } from "@/lib/legal/shared";
import type { LegalDoc } from "@/lib/legal/types";

/**
 * Disclaimer and Legal Notice.
 *
 * Two documents usually live under one heading. The legal notice is the
 * publisher identification some jurisdictions require; the disclaimer is the
 * limit on what a visitor may take from the words on the site. Both are here so
 * there is one document to publish rather than two near-identical ones.
 */
export const disclaimer: LegalDoc = {
  slug: "disclaimer",
  path: "/disclaimer",
  title: "Disclaimer & Legal Notice",
  label: "Legal",
  group: "terms",
  summary:
    "Who publishes this site, and the limits on what you should take from anything written on it.",
  description:
    "Erstian's legal notice and website disclaimer — publisher identification, and the limits on relying on the content of erstian.com.",
  effective: "2026-01-15",
  intro: [
    "This page does two things. It identifies who publishes this website, which some jurisdictions require. And it says how far you can rely on anything written here.",
    "The second half matters more. A company at the beginning of its journey writes a lot of things that are not yet true, and this page is where we say so.",
  ],
  related: ["terms", "acceptable-use", "privacy"],
  sections: [
    {
      id: "notice",
      heading: "1. Legal notice",
      blocks: [
        {
          type: "p",
          text: `This website is published by ${legalEntity.contractingName}, ${brand.url}.`,
        },
        ...(optional(legalEntity.registeredAddress)
          ? [
              {
                type: "p" as const,
                text: `Registered office: ${optional(legalEntity.registeredAddress)}`,
              },
            ]
          : []),
        ...(optional(legalEntity.registrationNumber)
          ? [
              {
                type: "p" as const,
                text: `Company registration number: ${optional(legalEntity.registrationNumber)}.`,
              },
            ]
          : []),
        {
          type: "p",
          text: `You can reach us at ${legalEntity.privacyEmail}.`,
        },
        {
          type: "p",
          text: "Responsible for the content of this website, and for anything you send us that describes a product you would like us to build.",
        },
      ],
    },
    {
      id: "content",
      heading: "2. No reliance on content",
      blocks: [
        {
          type: "p",
          text: "The content of this website is general information. It is provided so you can understand what Erstian is and what it is trying to build. It is not professional, legal, financial, tax or security advice, and it should not be relied on as any of those.",
        },
        {
          type: "p",
          text: "Where we describe what a product does, that is a description of intent. Descriptions of unreleased products are not commitments: features change, timelines move, and some ideas do not survive contact with real users.",
        },
        {
          type: "p",
          text: "Our Terms & Conditions set out the full position, including the disclaimers and limits of liability that apply when you use this site or a product.",
        },
      ],
    },
    {
      id: "forward-looking",
      heading: "3. Forward-looking statements",
      blocks: [
        {
          type: "p",
          text: "Statements about what Erstian plans to build, when it might be ready, or how large it might become are forward-looking. They reflect what we intend, not what has happened, and they are not promises.",
        },
        {
          type: "p",
          text: "If we say a product is coming, we mean we are working on it. If we give a date, we mean that is when we currently expect it. We will revise both when reality disagrees, and we will not pretend otherwise afterwards.",
        },
      ],
    },
    {
      id: "external",
      heading: "4. External links",
      blocks: [
        {
          type: "p",
          text: "This site links to other websites. We do not control them, we are not responsible for their content, and including a link is not an endorsement. Where a link points somewhere you would be entering a relationship with a third party, their terms apply to you — not ours.",
        },
        {
          type: "p",
          text: "Photographs are served from Unsplash under the Unsplash License and remain the property of their photographers. We do not control how that content is hosted or served.",
        },
      ],
    },
    {
      id: "availability",
      heading: "5. Availability and accuracy",
      blocks: [
        {
          type: "p",
          text: "We try to keep this site available and correct. It is provided as is, without any guarantee that it will always be reachable or that every word will always be accurate.",
        },
        {
          type: "p",
          text: "If you find something wrong on this site, tell us and we will correct it. That includes the legal documents on this page.",
        },
      ],
    },
    {
      id: "trademarks",
      heading: "6. Names and trade marks",
      blocks: [
        {
          type: "p",
          text: `The ${brand.name} name, wordmark and marks belong to Erstian. Other names mentioned on this site belong to their owners and are used to identify who they belong to.`,
        },
        {
          type: "p",
          text: "Nothing on this site grants you a right to use any of our marks. Ask us first.",
        },
      ],
    },
    contactSection(7),
  ],
};
