import { brand, internbird } from "@/lib/content";
import { legalEntity } from "@/lib/legal/entity";
import { contactSection } from "@/lib/legal/shared";
import type { LegalDoc } from "@/lib/legal/types";

/**
 * Privacy Policy.
 *
 * Covers two things that genuinely collect different data:
 *
 *   1. This website — no accounts, no analytics, no cookies.
 *   2. Internbird — accounts, applications, documents and payments.
 *
 * Conflating them was the old policy's problem: it described a brochure site and
 * so said nothing about the service that actually holds student records. Both
 * are set out separately here, with Internbird's processing given the detail it
 * needs.
 *
 * The payment section is deliberately precise about the boundary: Erstian never
 * receives card numbers, CVVs, UPI PINs or banking passwords, because those are
 * entered on the payment provider's own hosted page. Claiming to store them would
 * be both false and alarming.
 */
export const privacy: LegalDoc = {
  slug: "privacy",
  path: "/privacy",
  title: "Privacy Policy",
  label: "Legal",
  group: "data",
  summary:
    "What we collect on this site and on Internbird, what we never touch, and how to get your data deleted.",
  description:
    "How Erstian collects, uses, shares and protects personal information — on erstian.com and on the Internbird platform, including payments and applications.",
  effective: "2026-01-15",
  intro: [
    "This policy explains what happens to your personal information when you use Erstian's services — this website and the Internbird platform. It is written to be read: where a clause is complicated, we have tried to say it plainly.",
    `The short version: this website asks for nothing. ${internbird.name} needs real information — who you are, what you are looking for, and what you have paid for — and this policy explains exactly what, why and for how long.`,
  ],
  related: ["cookies", "security", "dpa"],
  sections: [
    {
      id: "scope",
      heading: "1. Scope of this policy",
      blocks: [
        {
          type: "p",
          text: `This policy applies to ${brand.url} and to ${internbird.name} at ${internbird.url}. It does not apply to third-party websites we link to, which have their own policies.`,
        },
        {
          type: "p",
          text: `${internbird.name} is a product/platform operated by Erstian. There is one policy for both, because there is one company behind both.`,
        },
        {
          type: "p",
          text: "Our Data Processing Addendum applies separately where we process personal data on a business customer's behalf rather than our own.",
        },
      ],
    },
    {
      id: "who-we-are",
      heading: "2. Who we are",
      blocks: [
        {
          type: "p",
          text: `${legalEntity.contractingName} ("Erstian", "we", "us") operates ${brand.url} and ${internbird.name}. For the purposes of applicable data protection law, we are the controller for the personal information described in this policy.`,
        },
        {
          type: "p",
          text: "Our privacy contact is listed in the Contact section of this policy.",
        },
      ],
    },
    {
      id: "what-we-collect",
      heading: "3. Information we collect",
      blocks: [
        {
          type: "p",
          text: "What we collect depends on which part of Erstian you use. This website collects almost nothing; the Internbird platform collects what a service like it genuinely needs to work.",
        },
      ],
    },
    {
      id: "website-data",
      heading: "3.1 This website",
      blocks: [
        {
          type: "p",
          text: "If you email us, we receive what you put in the message: your email address, your name if you included it, and anything else you chose to write. We use it to reply and to keep a record of the conversation.",
        },
        {
          type: "p",
          text: "Our hosting provider records standard server logs — your IP address, the page requested, your browser, and the time — to keep the site secure and diagnose faults. These are kept on a short rolling cycle and are not used to profile you.",
        },
        {
          type: "ul",
          items: [
            "We do not run analytics scripts, advertising pixels, session recorders or fingerprinting on this website.",
            "We do not buy, rent or license data about visitors.",
            "Our typefaces are served from our own domain, so your browser does not contact Google Fonts.",
            "This website sets no cookies of its own. Our Cookie Policy explains what that means in practice.",
          ],
        },
        {
          type: "p",
          text: "This website displays photographs loaded from Unsplash's content delivery network under the Unsplash License. When your browser requests one, Unsplash — not us — receives the request, including your IP address and the page you were viewing, and applies its own privacy policy.",
        },
      ],
    },
    {
      id: "internbird-data",
      heading: "3.2 Internbird",
      blocks: [
        {
          type: "p",
          text: `When you create an account on ${internbird.name} or apply through it, we may collect:`,
        },
        {
          type: "definition",
          items: [
            {
              term: "Account information",
              detail:
                "Name, email address, phone number, and the password you choose. We store your password as a one-way hash — we cannot read it back, and neither can anyone who obtains our database.",
            },
            {
              term: "Profile information",
              detail:
                "The education, skills, interests and preferences you add to your profile, so we can match you to relevant internships, training programs and career opportunities.",
            },
            {
              term: "Application information",
              detail:
                "What you submit when you apply — including résumés, cover letters, portfolios, transcripts and other documents you choose to upload. Once submitted, this may be shared with the employer or program you applied to.",
            },
            {
              term: "Communication",
              detail:
                "Messages you send us or receive through the platform, and notifications we send you about your applications and account.",
            },
            {
              term: "Transaction information",
              detail:
                "The fact of a purchase, the amount, the date, the order reference, and the payment status — so we can deliver your order, handle refunds and keep our own accounting accurate.",
            },
            {
              term: "Device and usage information",
              detail:
                "Your IP address, browser type and version, device type, and pages viewed within the platform, collected for security, troubleshooting and understanding which features are useful.",
            },
          ],
        },
        {
          type: "note",
          text: "You choose what to put in a profile or an application. Anything you leave out, we do not have — which also means you will be matched on less.",
        },
      ],
    },
    {
      id: "payment-data",
      heading: "3.3 Payment information",
      blocks: [
        {
          type: "p",
          text: "Payments on our services are processed by a third-party payment provider using its own secure, hosted checkout.",
        },
        {
          type: "p",
          text: "Erstian does not receive and does not store your card number, card expiry, CVV, UPI PIN, net-banking password, or any banking credential. Those are entered directly on the payment provider's page and never pass through our servers.",
        },
        {
          type: "p",
          text: "What the payment provider shares back with us is limited to what we need to confirm the payment happened and to administer your order — typically the payment reference, the amount, the date, and a status. We treat the payment provider's own privacy policy as applying to the details it collects.",
        },
        {
          type: "p",
          text: "We retain transaction and account information for as long as your account is open and for the period afterwards required by tax and accounting law. We do not keep card details to " +
            "make re-payment easier, because keeping them would mean holding something we have no reason to hold.",
        },
      ],
    },
    {
      id: "how-we-use",
      heading: "4. Why we use it",
      blocks: [
        {
          type: "ul",
          items: [
            "To provide the service you have asked for — an account, your matches, your applications, your purchases.",
            "To match you to internships, training programs and career opportunities relevant to you.",
            "To pass your application to the employer or program you applied to, which is what applying means.",
            "To take payment, deliver what you bought, handle refunds and keep financial records.",
            "To keep the service secure, prevent fraud and abuse, and investigate errors.",
            "To meet our legal obligations, such as retaining business and accounting records.",
            "To answer your messages and provide support.",
            "To understand which features are used so we can improve the product.",
          ],
        },
        {
          type: "p",
          text: "We do not sell your personal information. We do not use it to build advertising profiles, and we do not share it with advertisers. We have not done any of these and do not intend to.",
        },
      ],
    },
    {
      id: "legal-basis",
      heading: "5. Why we are allowed to use it",
      blocks: [
        {
          type: "p",
          text: "Under applicable data protection law we need a lawful reason to use your information. We rely on the following:",
        },
        {
          type: "definition",
          items: [
            {
              term: "Performance of a contract",
              detail:
                "The processing needed to give you an account, deliver a service, take payment and process a refund — because you asked us to.",
            },
            {
              term: "Legitimate interests",
              detail:
                "Keeping the service secure, preventing fraud, troubleshooting, improving the product and understanding usage — balanced against your interests and privacy.",
            },
            {
              term: "Legal obligation",
              detail:
                "Retaining accounting, tax and business records, and responding to lawful requests from authorities.",
            },
            {
              term: "Consent",
              detail:
                "Used only where we specifically ask for it, and you can withdraw it at any time without affecting what we have already done lawfully.",
            },
          ],
        },
        {
          type: "p",
          text: "Where we rely on consent and you withdraw it, we stop using your information for that purpose. Where we rely on legitimate interests, you can ask what those interests are.",
        },
      ],
    },
    {
      id: "sharing",
      heading: "6. Who we share it with",
      blocks: [
        {
          type: "p",
          text: "We share personal information only with the parties who need it for the reason you gave it to us:",
        },
        {
          type: "ul",
          items: [
            "Employers, universities and program providers you apply to through Internbird — they receive what you submit in that application.",
            "Our payment provider, to take payment and process refunds.",
            "Our hosting and infrastructure providers, which store and serve the platform.",
            "Our email provider, which delivers messages you ask us to send.",
            "Professional advisers and authorities, where we are legally required to disclose.",
          ],
        },
        {
          type: "p",
          text: "Some of these providers act on our instructions under written contracts that limit them to that purpose. Others, such as an employer you apply to, act as independent recipients for your application.",
        },
        {
          type: "p",
          text: "We do not disclose personal information to anyone else unless we are legally required to. If we are, we will tell you unless the law forbids us from doing so.",
        },
      ],
    },
    {
      id: "cookies",
      heading: "7. Cookies",
      blocks: [
        {
          type: "p",
          text: "This website sets no cookies of its own. The Internbird platform uses cookies and similar technologies that are necessary for it to work — keeping you signed in and remembering your preferences.",
        },
        {
          type: "p",
          text: "Our Cookie Policy explains what this means in practice and what will change if we ever need anything beyond what the service requires.",
        },
      ],
    },
    {
      id: "retention",
      heading: "8. How long we keep it",
      blocks: [
        {
          type: "p",
          text: "We keep information for as long as we need it for the purpose it was collected, and no longer:",
        },
        {
          type: "ul",
          items: [
            "Account and profile information: while your account is open, and for a reasonable period after you close it so we can reactivate it or answer questions about past activity.",
            "Applications and submitted documents: while your account is open, and as needed to support applications that are still in progress. You can delete a document at any time.",
            "Transaction records: for the period required by tax and accounting law, even after you close your account.",
            "Server logs: on a short rolling cycle, up to 30 days.",
            "Support correspondence: as long as needed to deal with the matter it concerns.",
          ],
        },
        {
          type: "p",
          text: "We do not keep data simply because we are able to.",
        },
      ],
    },
    {
      id: "security",
      heading: "9. How we protect it",
      blocks: [
        {
          type: "p",
          text: "The practical measures are set out in our Security Policy. In summary: data in transit is encrypted over HTTPS, passwords are stored as one-way hashes rather than readable text, access to production systems is restricted, and payment credentials never reach our servers at all because the payment provider handles them on its own hosted page.",
        },
        {
          type: "p",
          text: "No system is perfectly secure. Where a breach affects your personal information we will investigate, tell you, and notify the relevant authority where the law requires it.",
        },
      ],
    },
    {
      id: "transfers",
      heading: "10. International transfers",
      blocks: [
        {
          type: "p",
          text: "Some of our providers process information outside India and the European Economic Area. Where they do, we rely on appropriate safeguards such as standard contractual clauses or an adequacy decision.",
        },
        {
          type: "p",
          text: "You can ask which providers these are using the Contact section.",
        },
      ],
    },
    {
      id: "your-rights",
      heading: "11. Your rights",
      blocks: [
        {
          type: "p",
          text: "You have the following rights over your personal information:",
        },
        {
          type: "ul",
          items: [
            "Access — ask what we hold about you and get a copy.",
            "Rectification — have inaccurate information corrected.",
            "Erasure — have your information deleted, including closing your account.",
            "Restriction — limit how we use it while a dispute is resolved.",
            "Portability — receive it in a portable, machine-readable form.",
            "Objection — object to processing based on legitimate interests, and to direct marketing at any time.",
            "Withdraw consent — where we rely on it, without affecting what we have already done lawfully.",
            "Complaint — to your local supervisory authority where you are in the EEA, the UK or Switzerland.",
          ],
        },
        {
          type: "p",
          text: `Send any request to ${legalEntity.privacyEmail}. We respond within the period the law requires, and we do not charge you for it. We may ask you to confirm your identity so we do not disclose your information to the wrong person.`,
        },
        {
          type: "p",
          text: "Deleting your Internbird account: you can do this from your account, or email us and we will action it. Deletion removes your profile and submitted documents. We may keep a small amount — such as transaction records — where tax or accounting law requires it, and we will tell you what we kept if you ask.",
        },
        {
          type: "note",
          text: "If you apply for an opportunity, we cannot delete your application from an employer's own systems on request. We will tell you who you applied to so you can ask them directly.",
        },
      ],
    },
    {
      id: "children",
      heading: "12. Children",
      blocks: [
        {
          type: "p",
          text: `${internbird.name} is aimed at students, including school and college students, who may be under 18. We do not knowingly collect personal information from anyone under 13, and we do not knowingly offer paid services to anyone under 18 without the agreement of a parent or guardian.`,
        },
        {
          type: "p",
          text: "If you believe a child under 13 has given us personal information, contact us and we will delete it.",
        },
      ],
    },
    {
      id: "changes",
      heading: "13. Changes to this policy",
      blocks: [
        {
          type: "p",
          text: "We will update this page when our practices change, and revise the date at the top. If a change materially affects how we use information we already hold, we will tell you directly before it takes effect.",
        },
      ],
    },
    contactSection(14),
  ],
};
