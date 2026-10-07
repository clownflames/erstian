import { brand, internbird } from "@/lib/content";
import { legalEntity } from "@/lib/legal/entity";
import { contactSection } from "@/lib/legal/shared";
import type { LegalDoc } from "@/lib/legal/types";

/**
 * Data Processing Addendum.
 *
 * Scope is stated up front and narrowly, because a DPA that implied every
 * website visitor was covered would be wrong. This addendum applies only where a
 * business customer gives us their own users' personal data to process on their
 * behalf. Ordinary use of Internbird is not covered — that relationship is
 * Erstian-to-individual, governed by the Privacy Policy, and pretending
 * otherwise would misdescribe it to a reviewer.
 *
 * No compliance certification is claimed. The terms below describe what we
 * undertake to do, which is a promise rather than a certification.
 */
export const dpa: LegalDoc = {
  slug: "dpa",
  path: "/dpa",
  title: "Data Processing Addendum",
  label: "Legal",
  group: "business",
  summary:
    "The processing terms that apply when a business gives us its own users' data to handle. Not a general-user policy.",
  description:
    "How Erstian processes personal data on a business customer's behalf: scope, roles, subprocessors, security, breach handling, transfers and deletion.",
  effective: "2026-01-15",
  intro: [
    "This addendum applies where a business customer uses an Erstian service and we process personal data belonging to that customer's own users or staff. It supplements our Terms & Conditions and takes precedence over them on the subject of processing.",
    "It does not apply to ordinary individual use of our services. If you use Internbird as a student, Erstian is the party deciding how your information is used and our Privacy Policy is the document that governs it — not this one.",
  ],
  related: ["privacy", "security", "terms"],
  sections: [
    {
      id: "scope",
      heading: "1. Scope and roles",
      blocks: [
        {
          type: "p",
          text: "Where it applies, this addendum governs the relationship as follows:",
        },
        {
          type: "definition",
          items: [
            {
              term: "Customer data",
              detail:
                "Personal data you provide to us, or that your own users or employees provide to you and that you send to us, for us to process in order to deliver the service to you.",
            },
            {
              term: "Controller",
              detail:
                "You, in respect of customer data. You decide why it is processed and on what basis, and you are the party responsible for your own users' rights.",
            },
            {
              term: "Processor",
              detail:
                "Erstian, in respect of customer data. We process it only on your documented instructions.",
            },
            {
              term: "Personal data",
              detail:
                "Has the meaning given in applicable data protection law. Special category data is in scope only where you have instructed us to process it and the law allows it.",
            },
            {
              term: "Services",
              detail:
                "The Erstian products you have contracted for. This may include Internbird configured for your organisation, where your students or staff use it as part of a programme you administer.",
            },
          ],
        },
        {
          type: "note",
          text: "Where Erstian acts as a controller in its own right — for example for its own accounts, or for the individual users of Internbird who are not your employees or members — the Privacy Policy governs that processing, not this addendum.",
        },
      ],
    },
    {
      id: "categories",
      heading: "2. Categories of data and processing",
      blocks: [
        {
          type: "p",
          text: "Depending on the services, we may process:",
        },
        {
          type: "ul",
          items: [
            "Identity and contact details: name, work email address, job title, organisation.",
            "Account and authentication data: credentials, which we hold only as one-way hashes.",
            "Usage data: pages or features accessed, timestamps, and device and browser information.",
            "Support correspondence and anything you ask us to process on your users' behalf.",
            "Transaction records, where the services include paid elements — limited to the reference, amount, date, status and the email address on the order.",
          ],
        },
        {
          type: "p",
          text: "The purposes for which we process customer data are to provide and support the services, secure them, and comply with our legal obligations. We do not process customer data for our own advertising, and we do not sell it.",
        },
        {
          type: "p",
          text: `Where the services include ${internbird.name} used by your own students or staff, we may also process the profile, application and document information those individuals submit, and we may pass applications to third-party employers or programme providers on your users' behalf. We process that information as a processor on your instructions, and the access controls in our Security Policy apply to it.`,
        },
      ],
    },
    {
      id: "instructions",
      heading: "3. Our obligations as processor",
      blocks: [
        {
          type: "p",
          text: "We will:",
        },
        {
          type: "ul",
          items: [
            "Process customer data only on your documented instructions, including instructions about international transfers, unless the law requires otherwise — in which case we will tell you before processing unless that law forbids it.",
            "Ensure anyone we authorise to process it is bound by confidentiality obligations no less protective than those here.",
            "Provide the information you need to demonstrate compliance with Article 28 GDPR where it applies, and let you take your own audits with reasonable notice.",
            "Assist you with data subject requests, security obligations and breach notification, as described in sections 5 and 6.",
            "Make available the information necessary for you to pass an audit, and not appoint a subprocessor without the notice described in section 4.",
            "Notify you if we become aware that instructions given to us infringe applicable data protection law.",
          ],
        },
      ],
    },
    {
      id: "subprocessors",
      heading: "4. Subprocessors",
      blocks: [
        {
          type: "p",
          text: "We use a small number of infrastructure providers to operate the services — hosting, database, email delivery and payment processing. Each processes customer data only on our instructions, under a written contract that limits it to that purpose.",
        },
        {
          type: "p",
          text: "We will give you at least 30 days' notice before adding or replacing a subprocessor. If you object on reasonable data protection grounds and we cannot resolve the concern, you may terminate the affected part of the service without penalty.",
        },
        {
          type: "p",
          text: `Ask ${legalEntity.privacyEmail} for the current subprocessor list, including what each provider processes and where it operates.`,
        },
        {
          type: "note",
          text: "Our payment provider is a subprocessor for transaction data. Card credentials never reach us at all — they are collected on the provider's hosted page.",
        },
      ],
    },
    {
      id: "rights",
      heading: "5. Data subject requests",
      blocks: [
        {
          type: "p",
          text: "Where a data subject contacts us directly about customer data, we will forward the request to you without undue delay and will not respond substantively ourselves unless you instruct us to or the law requires it.",
        },
        {
          type: "p",
          text: "Handling a request on your behalf is assistance we provide at no additional charge. Providing the underlying data in a structured, portable format is a separate export you can request at any time.",
        },
      ],
    },
    {
      id: "security",
      heading: "6. Security and personal data breaches",
      blocks: [
        {
          type: "p",
          text: "We maintain the technical and organisational measures set out in our Security Policy, and we will not materially reduce them during the life of this addendum.",
        },
        {
          type: "p",
          text: "On becoming aware of a personal data breach affecting customer data, we will notify you without undue delay and in any case within 72 hours of confirming it, and give you the information you need to meet your own notification obligations:",
        },
        {
          type: "ul",
          items: [
            "The nature of the breach, and the categories and approximate number of people affected.",
            "The name and contact details of our point of contact.",
            "A description of the likely consequences.",
            "A description of what we are doing about it.",
          ],
        },
        {
          type: "note",
          text: "Notification is not an admission of fault. We will give you the facts as we know them and keep you updated as we learn more — including when the answer turns out to be less bad than we feared.",
        },
      ],
    },
    {
      id: "transfers",
      heading: "7. International transfers",
      blocks: [
        {
          type: "p",
          text: "Where a subprocessor processes customer data outside India or the European Economic Area, we put an appropriate transfer mechanism in place first — standard contractual clauses, an adequacy decision where one applies, or another lawful safeguard.",
        },
        {
          type: "p",
          text: "Where we rely on standard contractual clauses, you may ask for a copy and for information about any supplementary measures we have put in place.",
        },
      ],
    },
    {
      id: "deletion",
      heading: "8. Deletion and end of the agreement",
      blocks: [
        {
          type: "p",
          text: "When this addendum ends, we will delete or return customer data at your choice, and delete remaining copies within 90 days unless the law requires us to keep them. If we retain anything, we will tell you what and why, and keep it protected throughout.",
        },
        {
          type: "p",
          text: "Where you ask us to return data, we will provide it in a commonly used, machine-readable format, so it is genuinely portable rather than technically exportable.",
        },
        {
          type: "p",
          text: "Where an individual user's own data is held on your behalf, you remain responsible for instructing us to delete or return it. We do not delete an individual's account on a controller's behalf without that instruction.",
        },
      ],
    },
    {
      id: "order",
      heading: "9. Order of precedence and governing terms",
      blocks: [
        {
          type: "p",
          text: "If this addendum conflicts with the Terms & Conditions, this addendum governs in respect of the processing of customer data. Nothing in it reduces your rights or ours under applicable data protection law.",
        },
        {
          type: "p",
          text: `This addendum is governed by the same law and forum as the Terms & Conditions, and ${brand.url} is where the operative version of both is published.`,
        },
        {
          type: "p",
          text: "A signed agreement between us takes precedence over this published version. Where we have not signed one, this document describes what we will do.",
        },
      ],
    },
    contactSection(10),
  ],
};
