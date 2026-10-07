import { brand, internbird } from "@/lib/content";
import { legalEntity, optional } from "@/lib/legal/entity";
import { contactSection } from "@/lib/legal/shared";
import type { LegalDoc } from "@/lib/legal/types";

/**
 * Disclaimer & Legal Notice.
 *
 * Two documents usually live under one heading. The legal notice is the
 * publisher identification some jurisdictions require; the disclaimer is the
 * limit on what a visitor may take from the words on the site. Both are here so
 * there is one document to publish rather than two near-identical ones.
 *
 * The forward-looking section used to lean on "we are early-stage and nothing
 * is true yet". That is no longer how this business reads — Internbird is live
 * and paid — so the section now covers only the forward-looking parts, which is
 * the part that genuinely needs it: plans for products that do not exist yet.
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
    "Erstian's legal notice and website disclaimer — publisher identification, reliance on content, and the limits of what is published on erstian.com.",
  effective: "2026-01-15",
  intro: [
    "This page does two things. It identifies who publishes this website, which some jurisdictions require. And it says how far you can rely on anything written here.",
    "Where a product is described in development, this page is where we explain that a description of intent is not a commitment to ship.",
  ],
  related: ["terms", "acceptable-use", "privacy"],
  sections: [
    {
      id: "notice",
      heading: "1. Legal notice",
      blocks: [
        {
          type: "p",
          text: `This website is published by ${legalEntity.contractingName}, ${brand.url}. ${internbird.name} is a product/platform operated by Erstian, available at ${internbird.url}.`,
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
                text: `Registration number: ${optional(legalEntity.registrationNumber)}.`,
              },
            ]
          : []),
        {
          type: "p",
          text: `You can reach us at ${legalEntity.privacyEmail}.`,
        },
        {
          type: "p",
          text: "Erstian is responsible for the content of this website and for the services it operates, including Internbird.",
        },
      ],
    },
    {
      id: "content",
      heading: "2. No reliance on content",
      blocks: [
        {
          type: "p",
          text: "The content of this website is general information. It is provided so you can understand what Erstian operates and what it is building. It is not professional, legal, financial, tax or career advice, and it should not be relied on as any of those.",
        },
        {
          type: "p",
          text: "Where we describe what a product is intended to do, that is a description of intent. For a product in development, it is not a commitment: features change, timelines move, and some ideas do not survive contact with real users.",
        },
        {
          type: "p",
          text: `Descriptions of ${internbird.name} that are published on this site are summaries. The operative terms for using it are our Terms & Conditions and our Privacy Policy, and what you are shown at the point of purchase is what your order commits us to.`,
        },
        {
          type: "p",
          text: "Our Terms & Conditions set out the full position, including the disclaimers and limits of liability that apply when you use this site or a service.",
        },
      ],
    },
    {
      id: "forward-looking",
      heading: "3. Forward-looking statements",
      blocks: [
        {
          type: "p",
          text: "Statements about what Erstian plans to build, when something might be ready, or how large it might become are forward-looking. They reflect what we intend, not what has happened, and they are not promises.",
        },
        {
          type: "p",
          text: "If we say a product is in development, we mean we are working on it. If we give a date, we mean that is when we currently expect it. We will revise both when reality disagrees, and we will not pretend otherwise afterwards.",
        },
        {
          type: "p",
          text: `This section applies to products not yet released. It does not apply to ${internbird.name}, which is live — what you buy there is governed by your order and these terms.`,
        },
      ],
    },
    {
      id: "outcomes",
      heading: "4. Listings, outcomes and third parties",
      blocks: [
        {
          type: "p",
          text: `Where ${internbird.name} lists internships, training programs or career opportunities, those listings come from third parties. Listing an opportunity does not guarantee a response, an interview, an offer, a place, or any particular outcome.`,
        },
        {
          type: "p",
          text: "We are not the employer, and — where a listing relates to a training or academic program — we are not the education provider. Your relationship with them is separate from your relationship with us, on their terms.",
        },
        {
          type: "p",
          text: "We do not control third-party listings and are not responsible for what an employer or program does after an application is submitted.",
        },
      ],
    },
    {
      id: "external",
      heading: "5. External links",
      blocks: [
        {
          type: "p",
          text: "This site links to other websites. We do not control them, we are not responsible for their content, and including a link is not an endorsement. Where a link takes you into a relationship with a third party, their terms apply to you — not ours.",
        },
        {
          type: "p",
          text: "Photographs are served from Unsplash under the Unsplash License and remain the property of their photographers. We do not control how that content is hosted or served.",
        },
      ],
    },
    {
      id: "availability",
      heading: "6. Availability and accuracy",
      blocks: [
        {
          type: "p",
          text: "We try to keep this site and our services available and correct. It is provided as is, without any guarantee that it will always be reachable or that every word will always be accurate.",
        },
        {
          type: "p",
          text: "If you find something wrong on this site, tell us and we will correct it. That includes the legal documents on this page.",
        },
      ],
    },
    {
      id: "trademarks",
      heading: "7. Names and trade marks",
      blocks: [
        {
          type: "p",
          text: `The ${brand.name} name, wordmark and marks, and the ${internbird.name} name and marks, belong to Erstian. Other names mentioned on this site belong to their owners and are used to identify who they belong to.`,
        },
        {
          type: "p",
          text: "Nothing on this site grants you a right to use any of our marks. Ask us first.",
        },
      ],
    },
    contactSection(8),
  ],
};
