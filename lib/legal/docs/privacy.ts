import { legalEntity } from "@/lib/legal/entity";
import { contactSection } from "@/lib/legal/shared";
import type { LegalDoc } from "@/lib/legal/types";

/**
 * Privacy Policy.
 *
 * Same rule as lib/content.ts: Erstian is at the beginning of its journey.
 * Nothing here may promise a product, customer, uptime commitment or
 * processing capability that does not exist yet.
 */

export const privacy: LegalDoc = {
  slug: "privacy",
  path: "/privacy",
  title: "Privacy Policy",
  label: "Legal",
  group: "data",
  summary:
    "What we collect when you visit erstian.com, what we do not collect, and how to get it deleted.",
  description:
    "How Erstian collects, uses and protects personal information when you visit erstian.com, including what we do and do not collect.",
  effective: "2026-01-15",
  intro: [
    "This policy explains what happens to your personal information when you visit this website. It is written to be read: where a clause is complicated, we have tried to say it plainly instead of hiding behind it.",
    "In short: this website is a brochure for software that is still being built. It does not ask you to create an account, and it collects no analytics or advertising trackers.",
  ],
  related: ["cookies", "security", "terms"],
  sections: [
    {
      id: "scope",
      heading: "1. Scope of this policy",
      blocks: [
        {
          type: "p",
          text: "This policy applies to erstian.com and to the pages linked from it. It does not apply to third-party websites we link to, which have their own policies.",
        },
        {
          type: "p",
          text: "When we release a product, that product's own privacy notice will apply to data it processes. Where a product processes personal data, that notice is the one that governs it, and we will publish it before the product accepts any data.",
        },
      ],
    },
    {
      id: "who-we-are",
      heading: "2. Who we are",
      blocks: [
        {
          type: "p",
          text: `${legalEntity.contractingName} ("Erstian", "we", "us") is the organisation responsible for this website. For the purposes of the UK GDPR and the EU GDPR, we are the data controller for the limited processing described here.`,
        },
        {
          type: "p",
          text: "If you need to reach our data protection contact, use the email address in the Contact section of this policy.",
        },
      ],
    },
    {
      id: "what-we-collect",
      heading: "3. Information we collect",
      blocks: [
        {
          type: "p",
          text: "There are three categories, and only the first two exist today.",
        },
      ],
    },
    {
      id: "you-send-us",
      heading: "3.1 Information you send us",
      blocks: [
        {
          type: "p",
          text: "If you email us, we receive what you put in the message: your email address, your name if you included it, and anything else you choose to write. We use it only to reply and to keep a record of the conversation.",
        },
      ],
    },
    {
      id: "collected-automatically",
      heading: "3.2 Information collected automatically",
      blocks: [
        {
          type: "p",
          text: "Our hosting provider records standard server logs — your IP address, the page requested, the user agent, and the time — to keep the site secure and to diagnose faults. These are kept on a short rolling cycle and are not used to profile you.",
        },
        {
          type: "p",
          text: "We do not run analytics scripts, advertising pixels, session recorders or fingerprinting on this website.",
        },
      ],
    },
    {
      id: "from-third-parties",
      heading: "3.3 Information received from third parties",
      blocks: [
        {
          type: "p",
          text: "None. We do not buy, rent or license data about visitors.",
        },
      ],
    },
    {
      id: "images",
      heading: "3.4 Photographs served from Unsplash",
      blocks: [
        {
          type: "p",
          text: "This website displays photographs loaded directly from Unsplash's content delivery network, under the Unsplash License. When your browser requests one of those images, Unsplash — not us — receives the request, including your IP address and the address of the page you were viewing, and applies its own privacy policy.",
        },
        {
          type: "p",
          text: "We do not control what Unsplash does with that data and we do not receive it. It is disclosed here because it is a real transfer of your information to a third party that occurs simply by loading this page.",
        },
        {
          type: "p",
          text: "We will move to self-hosted images before launch. Until then, if you would rather the page not contact Unsplash at all, blocking that request in your browser will not prevent you reading anything on this site.",
        },
      ],
    },
    {
      id: "fonts",
      heading: "3.5 Fonts",
      blocks: [
        {
          type: "p",
          text: "Our typefaces are downloaded at build time and served from our own domain. Your browser does not contact Google Fonts, so no information about you is shared with Google when you load a page.",
        },
      ],
    },
    {
      id: "how-we-use",
      heading: "4. Why we use it, and on what basis",
      blocks: [
        {
          type: "p",
          text: "We use the information described above for three purposes and no others:",
        },
        {
          type: "ul",
          items: [
            "To respond to messages you send us — necessary to take the steps you asked for (legitimate interests, and performance of a contract where we have entered one).",
            "To keep the website secure and available, and to investigate errors — our legitimate interests in operating a secure service.",
            "To meet our legal obligations, such as retaining business correspondence — legal obligation.",
          ],
        },
        {
          type: "p",
          text: "We do not use your information for automated decision-making or profiling, and we have no basis for doing so on this website.",
        },
      ],
    },
    {
      id: "cookies",
      heading: "5. Cookies and similar technologies",
      blocks: [
        {
          type: "p",
          text: "This website sets no cookies of its own. Our Cookie Policy explains what that means in practice and what will change if a future product needs cookies.",
        },
      ],
    },
    {
      id: "sharing",
      heading: "6. Who we share it with",
      blocks: [
        {
          type: "p",
          text: "We share personal information only with the service providers who need it to run the site, and only for that purpose:",
        },
        {
          type: "ul",
          items: [
            "Our hosting provider, which stores the site and its server logs.",
            "Our email provider, which delivers and stores messages you send us.",
            "Unsplash, which receives image requests as described in section 3.4.",
          ],
        },
        {
          type: "p",
          text: "Some of these providers process data on our behalf under a written contract that limits them to acting on our instructions. Others act as independent controllers for the specific request they handle.",
        },
        {
          type: "p",
          text: "We do not sell personal information, and we have never done so. We will not disclose it to anyone else unless we are legally required to, and if we are, we will tell you unless the law forbids us from doing so.",
        },
      ],
    },
    {
      id: "transfers",
      heading: "7. International transfers",
      blocks: [
        {
          type: "p",
          text: "Some of our providers process data outside the UK and European Economic Area. Where they do, we rely on the providers' standard contractual clauses or an adequacy decision to keep the transfer lawful. You can ask which providers these are using the Contact section.",
        },
      ],
    },
    {
      id: "retention",
      heading: "8. How long we keep it",
      blocks: [
        {
          type: "ul",
          items: [
            "Server logs: kept on a short rolling cycle of up to 30 days, then deleted.",
            "Emails: kept for as long as needed to deal with the matter they concern, and where they are business records, for the period required by tax or company law.",
            "Anything else: only for as long as we need it for the purpose it was collected.",
          ],
        },
        {
          type: "p",
          text: "We do not keep data just because we are able to.",
        },
      ],
    },
    {
      id: "security",
      heading: "9. How we protect it",
      blocks: [
        {
          type: "p",
          text: "The site is served over HTTPS. Access to our email and hosting accounts is restricted, and we keep only the data needed to operate the service. No system is perfectly secure, and where a breach affects your data we will notify you and the relevant authority as the law requires.",
        },
        {
          type: "p",
          text: "Our Security Policy sets out how to report a vulnerability to us.",
        },
      ],
    },
    {
      id: "your-rights",
      heading: "10. Your rights",
      blocks: [
        {
          type: "p",
          text: "Under the UK and EU data protection laws you have the right to:",
        },
        {
          type: "ul",
          items: [
            "Ask what personal information we hold about you and get a copy (access).",
            "Have inaccurate information corrected (rectification).",
            "Have information deleted (erasure).",
            "Restrict how we use it while a dispute is resolved (restriction).",
            "Receive it in a portable, machine-readable form (portability).",
            "Object to processing based on legitimate interests, and to direct marketing at any time (objection).",
            "Withdraw consent, where we rely on it — though we do not rely on consent anywhere on this website.",
            "Complain to your supervisory authority.",
          ],
        },
        {
          type: "p",
          text: `Send any request to ${legalEntity.privacyEmail}. We will respond within 30 days and we will not charge you for it. We may ask you to confirm your identity so we do not disclose your information to the wrong person.`,
        },
        {
          type: "p",
          text: "If you want data deleted rather than sent, say so in your request and we will delete it instead of exporting it.",
        },
      ],
    },
    {
      id: "children",
      heading: "11. Children",
      blocks: [
        {
          type: "p",
          text: "This website is not directed at children under 13, and we do not knowingly collect personal information from them. If you believe a child has sent us personal information, contact us and we will delete it.",
        },
      ],
    },
    {
      id: "changes",
      heading: "12. Changes to this policy",
      blocks: [
        {
          type: "p",
          text: "We will update this page when our practices change, and revise the date at the top. If a change materially affects how we use information we already hold, we will tell you directly before it takes effect.",
        },
      ],
    },
    contactSection(13),
  ],
};
