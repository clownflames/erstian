import { brand } from "@/lib/content";
import { legalEntity, required } from "@/lib/legal/entity";
import { contactSection } from "@/lib/legal/shared";
import type { LegalDoc } from "@/lib/legal/types";

/** Terms & Conditions — the master agreement every other document hangs off. */
export const terms: LegalDoc = {
  slug: "terms",
  path: "/terms",
  title: "Terms & Conditions",
  label: "Legal",
  group: "terms",
  summary:
    "The agreement covering use of this website and, once released, Erstian products and subscriptions.",
  description:
    "The terms governing use of the Erstian website and, once released, Erstian products and subscriptions.",
  effective: "2026-01-15",
  intro: [
    `These terms govern your use of ${brand.url} and any Erstian product or subscription we make available. By using the website you accept them.`,
    "Our current status matters to these terms: Erstian is at the beginning of its journey and our first products are still being developed. Where that affects what you can rely on, it is called out below rather than buried.",
  ],
  related: ["acceptable-use", "refunds", "privacy"],
  sections: [
    {
      id: "acceptance",
      heading: "1. Acceptance",
      blocks: [
        {
          type: "p",
          text: `These terms apply to everyone who uses ${brand.url}. By using the site you agree to them. If you do not agree, please do not use the site. If you use the site on behalf of an organisation, you confirm you are authorised to bind that organisation.`,
        },
        {
          type: "p",
          text: `These terms are between you and ${legalEntity.contractingName} ("Erstian", "we", "us"). Our contact details are in the Contact section.`,
        },
      ],
    },
    {
      id: "status",
      heading: "2. The current state of Erstian",
      blocks: [
        {
          type: "p",
          text: "Erstian is an early-stage software company. Our first products are under development, and nothing on this website is an offer to supply a product that is not yet available.",
        },
        {
          type: "p",
          text: "We publish information about our plans honestly and without exaggeration. We will not describe a product as shipped, customers as served, or results as proven before they are.",
        },
      ],
    },
    {
      id: "eligibility",
      heading: "3. Eligibility and accounts",
      blocks: [
        {
          type: "p",
          text: "The website is available to anyone. Products may have their own eligibility rules, stated in their own terms.",
        },
        {
          type: "p",
          text: "Some products will require an account. Where one is required, you must be old enough to enter a contract where you live, and you must give accurate registration information and keep it current.",
        },
        {
          type: "p",
          text: "You are responsible for activity under your account and for keeping your credentials confidential. Tell us promptly if you believe your account has been accessed without your permission.",
        },
        {
          type: "ul",
          items: [
            "One person or organisation per account unless we agree otherwise in writing.",
            "You may not share, resell or transfer an account without our written consent.",
            "We may suspend an account that is being used unlawfully or that puts the service at risk. We will tell you why.",
          ],
        },
      ],
    },
    {
      id: "website-use",
      heading: "4. Acceptable use of the website",
      blocks: [
        {
          type: "p",
          text: "The website and its content are provided for lawful use only. You must not:",
        },
        {
          type: "ul",
          items: [
            "Break the law, or infringe anyone else's rights.",
            "Attempt to gain unauthorised access to the site, its servers or any connected system.",
            "Introduce malicious code, or interfere with the site's operation.",
            "Copy, scrape or republish substantial parts of the site without written permission.",
            "Use the site to send unsolicited bulk communications.",
          ],
        },
        {
          type: "p",
          text: "Our Acceptable Use Policy sets out these restrictions in full, along with what happens if you breach them.",
        },
      ],
    },
    {
      id: "ip",
      heading: "5. Intellectual property",
      blocks: [
        {
          type: "p",
          text: `The website — its design, text, graphics, code and the ${brand.name} name and marks — belongs to Erstian or our licensors. We own it or we have the right to use it, and we protect it.`,
        },
        {
          type: "p",
          text: "Photographs on the site are licensed from Unsplash under the Unsplash License and remain the property of their photographers.",
        },
        {
          type: "p",
          text: "Nothing in these terms transfers ownership of our intellectual property to you.",
        },
      ],
    },
    {
      id: "licence",
      heading: "6. Licence we give you",
      blocks: [
        {
          type: "p",
          text: "We give you a personal, non-exclusive, non-transferable, revocable licence to view the website and to download or print pages for your own reference. You may not resell it, republish it, or use it to build a competing product without our written permission.",
        },
        {
          type: "p",
          text: "Product licences are separate and are set out in your order or subscription.",
        },
      ],
    },
    {
      id: "products",
      heading: "7. Products and availability",
      blocks: [
        {
          type: "p",
          text: "We may change, suspend or withdraw any part of the website or any product. Where a paid product is withdrawn, your right to a refund for the unused period is unaffected.",
        },
        {
          type: "p",
          text: "Pre-release software is provided as it is. Where we offer a beta or preview, we will say so clearly, and it may contain errors, lose data or be withdrawn at any time. It is not suitable for anything you cannot afford to lose.",
        },
        {
          type: "p",
          text: "Product features and specifications are described honestly but may change as development continues. Descriptions on this site are not a promise that a feature will ship, or ship on any particular date.",
        },
      ],
    },
    {
      id: "fees",
      heading: "8. Prices, subscriptions and payment",
      blocks: [
        {
          type: "p",
          text: "Some products will be paid. Where one is, we will state the price and billing period before you commit to anything. Unless stated otherwise, prices exclude any sales tax or value-added tax that applies where you are.",
        },
        {
          type: "p",
          text: "Subscriptions renew automatically at the end of each billing period unless you cancel first. We will remind you before a renewal where we are required to, and you can cancel at any time from your account.",
        },
        {
          type: "p",
          text: "If a payment fails we will try again and notify you. If it fails repeatedly, we may suspend the subscription. We will restore it as soon as payment is resolved.",
        },
        {
          type: "p",
          text: "Refunds are handled under our Refund Policy, which forms part of these terms.",
        },
      ],
    },
    {
      id: "business",
      heading: "9. Business customers",
      blocks: [
        {
          type: "p",
          text: "If you use a product for your organisation, these terms still apply. Where a business customer needs additional commitments — a signed data processing agreement, security commitments, or an agreed support level — those are set out in a separate agreement that supplements, and where it conflicts replaces, these terms.",
        },
        {
          type: "p",
          text: "Our Data Processing Addendum applies where we process personal data on a business customer's behalf.",
        },
      ],
    },
    {
      id: "third-parties",
      heading: "10. Third-party services",
      blocks: [
        {
          type: "p",
          text: "Our products may link to or integrate with third-party services. We do not control them and are not responsible for their content, availability or practices. Using one is a separate relationship between you and that provider, on their terms.",
        },
        {
          type: "p",
          text: "Our website links to external sites, including social platforms. We do not endorse them and we are not responsible for what happens if you follow a link.",
        },
      ],
    },
    {
      id: "warranties",
      heading: "11. Disclaimers",
      blocks: [
        {
          type: "p",
          text: 'The website is provided "as is" and "as available". To the fullest extent the law allows, we exclude all express and implied warranties, including fitness for a particular purpose, non-infringement and uninterrupted availability.',
        },
        {
          type: "p",
          text: "We do not warrant that the website will be error-free, that it will always be available, or that it will be free of malware. Product warranties, where offered, are stated in your order and replace this section for that product.",
        },
        {
          type: "p",
          text: "Nothing on this website is professional advice. Where we describe what a product is intended to do, that is a description, not a guarantee of any particular result.",
        },
        {
          type: "p",
          text: "Nothing in these terms excludes liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot lawfully be excluded.",
        },
      ],
    },
    {
      id: "liability",
      heading: "12. Limitation of liability",
      blocks: [
        {
          type: "p",
          text: "To the fullest extent the law allows, Erstian is not liable for any indirect or consequential loss, loss of profit, loss of business, loss of anticipated savings, loss of data, or loss arising from business interruption. This applies however the loss was caused and even if we were told it was possible.",
        },
        {
          type: "p",
          text: "Our total aggregate liability arising from or connected with the website or a product is limited to the greater of the amount you paid us in the 12 months before the event giving rise to the claim, and 100 US dollars.",
        },
        {
          type: "p",
          text: "Some jurisdictions do not allow certain exclusions. Where that applies, the exclusion applies only as far as the law permits and our liability is limited to the minimum the law allows.",
        },
      ],
    },
    {
      id: "indemnity",
      heading: "13. Indemnity",
      blocks: [
        {
          type: "p",
          text: "You agree to indemnify Erstian against claims, damages and reasonable costs arising from your misuse of the website or a product, your breach of these terms, or your infringement of anyone else's rights.",
        },
      ],
    },
    {
      id: "changes-to-terms",
      heading: "14. Changes to these terms",
      blocks: [
        {
          type: "p",
          text: "We may revise these terms. The date at the top shows when they last changed. For the website, the revised terms apply from when we publish them. For a subscription, the terms in force when you subscribed continue to govern that subscription until you renew after the change takes effect, unless the change is one we are entitled to apply immediately and we tell you why.",
        },
      ],
    },
    {
      id: "termination",
      heading: "15. Suspension and termination",
      blocks: [
        {
          type: "p",
          text: "You may stop using the website at any time. We may suspend or terminate access where you breach these terms, where continued operation would be unlawful, or where we are required to by law. Where we terminate a paid subscription, we will tell you the reason and apply any refund due under the Refund Policy.",
        },
      ],
    },
    {
      id: "law",
      heading: "16. Governing law and disputes",
      blocks: [
        {
          type: "p",
          text: `These terms are governed by the laws of ${required(legalEntity.governingLaw, "GOVERNING LAW")}, and the courts of ${required(legalEntity.exclusiveCourts, "JURISDICTION")} have exclusive jurisdiction over any dispute arising from them.`,
        },
        {
          type: "p",
          text: "This does not affect any right you have to bring proceedings in the courts of your own country, or mandatory consumer protections available where you live. If you are a consumer, this clause does not take away that protection.",
        },
        {
          type: "p",
          text: "Before starting court proceedings, please raise the problem with us. Most disputes are resolved faster and more satisfactorily by email.",
        },
      ],
    },
    {
      id: "general",
      heading: "17. General",
      blocks: [
        {
          type: "p",
          text: "If a clause is found unenforceable, the rest of these terms still apply. We may delay enforcing a right, but that is not a waiver of it. You may not assign your rights under these terms without our written consent; we may assign ours to a successor of the business. If a provision is unenforceable in one jurisdiction it does not affect it in another.",
        },
        {
          type: "p",
          text: "These terms are written in plain English. If you need them in another language, contact us and we will do our best to help.",
        },
      ],
    },
    contactSection(18),
  ],
};
