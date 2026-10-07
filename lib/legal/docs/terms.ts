import { brand, internbird } from "@/lib/content";
import { legalEntity, required } from "@/lib/legal/entity";
import { contactSection } from "@/lib/legal/shared";
import type { LegalDoc } from "@/lib/legal/types";

/**
 * Terms & Conditions — the master agreement every other document hangs off.
 *
 * Written for a business that takes payment: it covers paid orders, enrolment
 * and cancellation, because those are the clauses a payment provider and a
 * customer will both look for. Product-specific detail (a price, a cancellation
 * window, a delivery format) lives in the order or on the product page, and this
 * document says so rather than trying to enumerate products it may not know.
 *
 * Internbird is named explicitly in the product and eligibility sections because
 * it is a separate destination with its own sign-up flow — a reader who lands
 * there needs to know these terms apply before they enter any details.
 */
export const terms: LegalDoc = {
  slug: "terms",
  path: "/terms",
  title: "Terms & Conditions",
  label: "Legal",
  group: "terms",
  summary:
    "The agreement covering use of this website and Erstian's products and services, including Internbird.",
  description:
    "The terms governing use of erstian.com and Erstian's products and services — accounts, payments, enrolment, cancellation, refunds, and the Internbird platform.",
  effective: "2026-01-15",
  intro: [
    `These terms govern your use of ${brand.url} and any Erstian product or service, including ${internbird.name}. By using the website, registering an account or making a payment you accept them.`,
    `${internbird.prose} ${internbird.name} is covered by these terms — it is not a separate company, and it does not operate under separate rules.`,
  ],
  related: ["acceptable-use", "refunds", "privacy"],
  sections: [
    {
      id: "about-us",
      heading: "1. Who we are",
      blocks: [
        {
          type: "p",
          text: `These terms are between you and ${legalEntity.contractingName} ("Erstian", "we", "us"), the operator of ${brand.url} and of the ${internbird.name} platform. Our contact details are in the Contact section.`,
        },
        {
          type: "p",
          text: `${internbird.name} is a product/platform operated by Erstian. When you use ${internbird.name}, your agreement is with Erstian, and these terms apply to it.`,
        },
        {
          type: "p",
          text: "Where a product has its own additional terms — for example a training program with its own schedule or rules of participation — those are shown to you before you pay and form part of this agreement. If they conflict with these terms, the product-specific terms win for that product.",
        },
      ],
    },
    {
      id: "acceptance",
      heading: "2. Acceptance of these terms",
      blocks: [
        {
          type: "p",
          text: `By using ${brand.url}, creating an account, or making a payment you agree to these terms. If you do not agree, please do not use the service.`,
        },
        {
          type: "p",
          text: "If you use a service on behalf of an organisation, you confirm you are authorised to bind that organisation, and \"you\" in these terms refers to that organisation.",
        },
        {
          type: "p",
          text: "You must be old enough to enter a binding contract where you live to buy any paid service. If you are under 18, get a parent or guardian's agreement before doing so.",
        },
      ],
    },
    {
      id: "products",
      heading: "3. Products and services",
      blocks: [
        {
          type: "p",
          text: `Erstian develops and operates digital products and services, including ${internbird.name}. Certain products, features, programs or services may become available at different times, and we may add, change or discontinue any of them.`,
        },
        {
          type: "p",
          text: "Where a product is described on this site, that description is accurate as at the time it is written. It is not a promise that a specific feature will be added on a specific date, and it does not limit what you are entitled to under the order you have accepted.",
        },
        {
          type: "p",
          text: `Your order for a product is the contract for that product. It records what you bought, what you paid, and any product-specific terms. Nothing on this website obliges us to make a product available that we have not offered for sale.`,
        },
        {
          type: "p",
          text: "Where a paid product is withdrawn and you cannot reasonably continue to receive it, you are entitled to a refund for the unused portion, handled under our Refund & Cancellation Policy.",
        },
      ],
    },
    {
      id: "internbird",
      heading: "4. The Internbird platform",
      blocks: [
        {
          type: "p",
          text: internbird.prose,
        },
        {
          type: "p",
          text: "Using it means you may create an account and submit information about yourself — including your name, email address, phone number, education, skills and the documents you choose to share in order to be considered for opportunities.",
        },
        {
          type: "p",
          text: "What happens to that information, how long we keep it and who else sees it is set out in our Privacy Policy. Please read it before you register — it describes the Internbird-specific processing, not just this website's.",
        },
        {
          type: "ul",
          items: [
            `${internbird.name} lists opportunities. We do not guarantee that any listed internship, training program or role will result in an offer, placement or outcome.`,
            "We are not the employer and we are not an education provider for any third-party opportunity listed on the platform.",
            "Application content you submit is yours. You must have the right to share everything you upload — a CV, portfolio or document you did not write.",
            "Paid offerings on the platform, where offered, are subject to the order you place and the Refund & Cancellation Policy.",
          ],
        },
        {
          type: "p",
          text: `You can reach ${internbird.name} at ${internbird.url}.`,
        },
      ],
    },
    {
      id: "accounts",
      heading: "5. Accounts",
      blocks: [
        {
          type: "p",
          text: "Some services require an account. Where one is required you must register accurately and keep your details current — an unreachable email address means we cannot deliver your service or reach you about a problem with it.",
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
            "Do not share a login between multiple people in a way that breaks a product's terms or misrepresents who a user is.",
            "We may suspend an account that is being used unlawfully, fraudulently, or in a way that risks the service or another user. We will tell you why.",
          ],
        },
      ],
    },
    {
      id: "responsibilities",
      heading: "6. Your responsibilities",
      blocks: [
        {
          type: "p",
          text: `When you use our services — including ${internbird.name} — you agree to these responsibilities:`,
        },
        {
          type: "ul",
          items: [
            "Give information that is true, current and complete. Applications and profiles built on false details are your responsibility, not ours.",
            "Provide only information you are entitled to share, and get consent from anyone else whose information you submit.",
            "Comply with the law where you are, and with any rules of a specific program you have enrolled in.",
            "Do not misuse, reverse engineer, resell or attempt to gain unauthorised access to any service.",
            "Do not post content that is unlawful, infringing, misleading, or that targets other people.",
            "Keep your device and account reasonably secure. We cannot be responsible for losses caused by credentials you have shared.",
          ],
        },
        {
          type: "note",
          text: "Our Acceptable Use Policy expands on these rules and explains what happens if you breach them.",
        },
      ],
    },
    {
      id: "orders",
      heading: "7. Orders and enrolment",
      blocks: [
        {
          type: "p",
          text: "A paid service is sold to you when we confirm your order. Before you pay we will tell you, clearly:",
        },
        {
          type: "ul",
          items: [
            "What you are buying, in plain terms.",
            "The total price, and any taxes, fees or charges that apply.",
            "What you receive, how it is delivered, and when.",
            "The cancellation and refund terms for that specific order.",
            "Any eligibility requirements or prerequisites.",
          ],
        },
        {
          type: "p",
          text: "If any of that is unclear, ask us before you pay. We would rather answer a question before an order than resolve a dispute after one.",
        },
        {
          type: "p",
          text: "Where an order requires you to complete an enrolment step — submitting documents, confirming eligibility, or starting a program — your order is complete when that step is done. An unpaid or incomplete order does not reserve a place.",
        },
      ],
    },
    {
      id: "payments",
      heading: "8. Payments",
      blocks: [
        {
          type: "p",
          text: "We accept the payment methods shown at checkout. Payments are processed by a third-party payment provider on our behalf.",
        },
        {
          type: "p",
          text: "Card numbers, UPI PINs and banking credentials are entered on the payment provider's own secure page and are never received by or stored by Erstian. What we retain is limited to what we need to deliver your order and to handle billing — the transaction reference, amount, date, the email address on the order, and the service you bought.",
        },
        {
          type: "p",
          text: "You are responsible for the payment method you use, including any interest or charge your bank applies. We are not responsible for amounts your bank or card issuer charges on top of our price.",
        },
        {
          type: "p",
          text: "If a payment fails, is declined, or is charged but not completed, no order is confirmed. Tell us and we will either resolve it or refund you — see section 9 and our Refund & Cancellation Policy.",
        },
        {
          type: "note",
          text: "We do not store or have access to your card number, CVV, UPI PIN or net-banking password at any point. If you are asked for any of these by anyone claiming to represent Erstian, it is not us.",
        },
      ],
    },
    {
      id: "refunds",
      heading: "9. Cancellations and refunds",
      blocks: [
        {
          type: "p",
          text: "Our Refund & Cancellation Policy explains when you can cancel, when you are eligible for a refund, what is non-refundable, and how long a refund takes. It forms part of these terms.",
        },
        {
          type: "p",
          text: "Where a specific order states its own cancellation window, that window applies to that order. Where no window is stated, you may cancel at any time before the service is delivered, and we will refund amounts not yet delivered.",
        },
        {
          type: "p",
          text: "Our Refund & Cancellation Policy also covers failed payments, duplicate payments and amounts debited but not received — situations where you are not at fault and where a refund is the correct outcome.",
        },
      ],
    },
    {
      id: "pricing",
      heading: "10. Prices and taxes",
      blocks: [
        {
          type: "p",
          text: "Prices are shown before you pay and include the total we charge. Unless stated otherwise, they exclude any tax that applies to you, which we add at checkout where we are required to collect it.",
        },
        {
          type: "p",
          text: "Where you are charged tax you did not expect, contact us and we will review it. We cannot recover a tax already paid to a government authority on your behalf, but we will tell you exactly what it was for.",
        },
        {
          type: "p",
          text: "We may change prices for future orders. Changing a price does not affect an order you have already placed.",
        },
        {
          type: "p",
          text: "If we make a pricing mistake and you have already paid, we will contact you — usually to refund the difference. We will not charge you the higher amount after the fact.",
        },
      ],
    },
    {
      id: "subscriptions",
      heading: "11. Subscriptions and renewals",
      blocks: [
        {
          type: "p",
          text: "Where you buy a subscription, it renews automatically at the end of each billing period unless you cancel. The price, billing period and renewal terms are shown before you subscribe.",
        },
        {
          type: "p",
          text: "You can cancel at any time from your account, or by emailing us. We do not make you call a call centre or speak to an agent to cancel. Cancellation takes effect at the end of the period you have already paid for.",
        },
        {
          type: "p",
          text: "Where we are required to remind you before a renewal, we will. If a subscription renews and you did not intend it to, tell us promptly and we will refund it under our Refund & Cancellation Policy.",
        },
      ],
    },
    {
      id: "website-use",
      heading: "12. Acceptable use",
      blocks: [
        {
          type: "p",
          text: "You must not use this website or any service to break the law, infringe anyone else's rights, interfere with the service's operation, or access anything you are not authorised to access.",
        },
        {
          type: "p",
          text: "Our Acceptable Use Policy sets out the full list of restrictions, including around scraping, automated access, and content you submit. It forms part of these terms.",
        },
      ],
    },
    {
      id: "ip",
      heading: "13. Intellectual property",
      blocks: [
        {
          type: "p",
          text: `The website — its design, text, graphics, code and the ${brand.name} name and marks — and the ${internbird.name} platform, its software, interface, branding and content — belong to Erstian or our licensors. We own them or we have the right to use them, and we protect them.`,
        },
        {
          type: "p",
          text: `Content you submit to ${internbird.name} or to any other service remains yours. You grant us a licence to host, store, display and process it for the purpose of providing the service to you and operating the platform.`,
        },
        {
          type: "p",
          text: "Opportunity listings, employer names and third-party logos on the platform belong to their respective owners. Their appearance does not mean we endorse them or are affiliated with them beyond what the listing states.",
        },
        {
          type: "p",
          text: "Photographs on this site are licensed from Unsplash under the Unsplash License and remain the property of their photographers. Nothing here transfers ownership of our intellectual property to you.",
        },
      ],
    },
    {
      id: "content",
      heading: "14. Content you submit",
      blocks: [
        {
          type: "p",
          text: "You keep ownership of anything you upload. You are responsible for it, and for having the right to share it.",
        },
        {
          type: "p",
          text: "You grant us the licence in section 13. You also confirm that you are not submitting anything unlawful or that infringes someone else's rights, and that nothing you submit misrepresents your qualifications or identity.",
        },
        {
          type: "p",
          text: "We may remove content that breaches these terms or that we are required to remove by law or by a third party who holds rights in it. Where we can, we will tell you why.",
        },
      ],
    },
    {
      id: "availability",
      heading: "15. Service availability",
      blocks: [
        {
          type: "p",
          text: 'The website and our services are provided "as is" and "as available". We work to keep them available but do not guarantee uninterrupted access — planned maintenance, network failures and events outside our control will happen.',
        },
        {
          type: "p",
          text: "Where a service depends on a third party — a payment provider, an email provider, or an employer responding to an application — their availability and performance also affect yours, and we are not responsible for it.",
        },
        {
          type: "p",
          text: "We may change or suspend a feature. We will tell you in advance where that materially affects something you have already paid for.",
        },
      ],
    },
    {
      id: "third-parties",
      heading: "16. Third-party services",
      blocks: [
        {
          type: "p",
          text: "Our services link to and integrate with third-party services, including payment providers. We do not control them and are not responsible for their content, availability or practices. Using one is a separate relationship between you and that provider, on their terms.",
        },
        {
          type: "p",
          text: "External links on this website — including to platforms where opportunity listings are published — are provided for convenience. We do not endorse them and are not responsible for what happens if you follow one.",
        },
      ],
    },
    {
      id: "business",
      heading: "17. Business customers",
      blocks: [
        {
          type: "p",
          text: "If you use a service for your organisation, these terms still apply. Where you need additional commitments — a signed data processing agreement, security commitments, or an agreed support level — those are set out in a separate agreement that supplements, and where it conflicts replaces, these terms.",
        },
        {
          type: "p",
          text: "Our Data Processing Addendum applies where we process personal data on a business customer's behalf.",
        },
      ],
    },
    {
      id: "warranties",
      heading: "18. Disclaimers",
      blocks: [
        {
          type: "p",
          text: 'To the fullest extent the law allows, we exclude all express and implied warranties, including fitness for a particular purpose, non-infringement and uninterrupted availability, except where the law says we cannot.',
        },
        {
          type: "p",
          text: `We do not warrant that ${internbird.name} will produce any particular outcome. Listing an opportunity does not guarantee a response, an interview or an offer, and we do not control or endorse any third-party employer or program.`,
        },
        {
          type: "p",
          text: "Nothing on this website or in any product is professional, legal, financial, tax or career advice. Where we describe what a service is intended to do, that is a description, not a guarantee of a particular result.",
        },
        {
          type: "p",
          text: "Nothing in these terms excludes liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot lawfully be excluded.",
        },
      ],
    },
    {
      id: "liability",
      heading: "19. Limitation of liability",
      blocks: [
        {
          type: "p",
          text: "To the fullest extent the law allows, Erstian is not liable for any indirect or consequential loss, loss of profit, loss of business, loss of anticipated savings, loss of data, or loss arising from business interruption. This applies however the loss was caused and even if we were told it was possible.",
        },
        {
          type: "p",
          text: "Our total aggregate liability arising from or connected with the website or a service is limited to the amount you actually paid us in the 12 months before the event giving rise to the claim.",
        },
        {
          type: "p",
          text: "Some jurisdictions do not allow certain exclusions or limits. Where that applies, the exclusion applies only as far as the law permits and our liability is limited to the minimum the law allows — which may be more than the cap above.",
        },
        {
          type: "p",
          text: "The cap in this section does not apply where you have a right to a refund under our Refund & Cancellation Policy, or where the law makes the limitation unenforceable.",
        },
      ],
    },
    {
      id: "indemnity",
      heading: "20. Indemnity",
      blocks: [
        {
          type: "p",
          text: "You agree to indemnify Erstian against claims, damages and reasonable costs arising from your misuse of a service, your breach of these terms, your infringement of anyone else's rights, or content you submit — including anything you submit to Internbird.",
        },
      ],
    },
    {
      id: "suspension",
      heading: "21. Suspension and termination",
      blocks: [
        {
          type: "p",
          text: "You may stop using a service at any time. You can delete your account at any time; where an account deletion process is described in the product or Privacy Policy, we will follow it.",
        },
        {
          type: "p",
          text: "We may suspend or terminate access where you breach these terms, where continued operation would be unlawful, where you are using the service to infringe someone's rights, or where we are required to by law.",
        },
        {
          type: "p",
          text: "Where we terminate a paid service, we will tell you the reason and apply any refund due under our Refund & Cancellation Policy.",
        },
        {
          type: "p",
          text: "Termination does not affect your right to refunds for amounts already paid, or anything that by its nature should survive it — for example confidentiality of your data, which continues under our Privacy Policy.",
        },
      ],
    },
    {
      id: "changes-to-terms",
      heading: "22. Changes to these terms",
      blocks: [
        {
          type: "p",
          text: "We may revise these terms. The date at the top shows when they last changed.",
        },
        {
          type: "p",
          text: "For the website and for services you use from now on, revised terms apply from when we publish them. For a paid order, the terms in force when you placed it continue to govern it — unless the change is one we are entitled to apply immediately, in which case we will tell you why.",
        },
        {
          type: "p",
          text: "Where a change materially affects your rights, or reduces something you have paid for, we will tell you directly before it takes effect.",
        },
      ],
    },
    {
      id: "privacy-ref",
      heading: "23. Privacy",
      blocks: [
        {
          type: "p",
          text: "Our Privacy Policy explains what personal information we collect, including through Internbird, how we use it, who we share it with and what rights you have over it. It forms part of these terms.",
        },
        {
          type: "p",
          text: "Where those two documents conflict on the handling of personal data, the Privacy Policy governs.",
        },
      ],
    },
    {
      id: "general",
      heading: "24. General",
      blocks: [
        {
          type: "p",
          text: "If a clause is found unenforceable, the rest of these terms still apply. We may delay enforcing a right, but that is not a waiver of it.",
        },
        {
          type: "p",
          text: "You may not assign your rights under these terms without our written consent. We may assign ours to a successor of the business. If a provision is unenforceable in one jurisdiction, it does not affect it in another.",
        },
        {
          type: "p",
          text: "These terms are written in plain English. If you need them in another language, contact us and we will do our best to help.",
        },
      ],
    },
    {
      id: "law",
      heading: "25. Governing law and disputes",
      blocks: [
        {
          type: "p",
          text: `These terms are governed by the laws of ${required(legalEntity.governingLaw, "the applicable jurisdiction")}, and the courts of ${required(legalEntity.exclusiveCourts, "the competent jurisdiction")} have exclusive jurisdiction over any dispute arising from them.`,
        },
        {
          type: "p",
          text: "This does not affect any right you have to bring proceedings in the courts of your own country, or any mandatory consumer protection available where you live. If you are a consumer, this clause does not take that protection away.",
        },
        {
          type: "p",
          text: "Before starting court proceedings, please raise the problem with us. Most disputes are resolved faster and more satisfactorily by email, and we would rather fix the problem than defend it.",
        },
      ],
    },
    contactSection(26),
  ],
};
