import { brand } from "@/lib/content";
import { legalEntity } from "@/lib/legal/entity";
import { contactSection } from "@/lib/legal/shared";
import type { LegalDoc } from "@/lib/legal/types";

/**
 * Data Processing Addendum.
 *
 * Applies where a business customer gives us personal data to process on their
 * behalf — the situation where Erstian is the processor and the customer is the
 * controller. It supplements the Terms and takes precedence over them where the
 * two conflict on processing.
 */
export const dpa: LegalDoc = {
  slug: "dpa",
  path: "/dpa",
  title: "Data Processing Addendum",
  label: "Legal",
  group: "business",
  summary:
    "The processing terms that apply when a business customer sends us their own users' data to handle.",
  description:
    "How Erstian processes personal data on a business customer's behalf: roles, instructions, subprocessors, security and deletion.",
  effective: "2026-01-15",
  intro: [
    "This addendum applies where a business customer uses an Erstian product and we process personal data on that customer's behalf. It is part of the contract between us, and where it conflicts with the Terms & Conditions on the subject of processing, it wins.",
    "No product is available yet, so there is nothing to sign today. This is the document we will use, written now so you can read it before you need it.",
  ],
  related: ["privacy", "security", "terms"],
  sections: [
    {
      id: "scope",
      heading: "1. Scope and roles",
      blocks: [
        {
          type: "definition",
          items: [
            {
              term: "Customer data",
              detail:
                "Personal data you provide to us, or that your end users provide to you and that you then send to us, for us to process to deliver the product.",
            },
            {
              term: "Controller",
              detail:
                "You, for customer data. You decide why it is processed and on what basis, and you are the one who owes your users their rights.",
            },
            {
              term: "Processor",
              detail:
                "Erstian, for customer data. We process it only on your documented instructions.",
            },
            {
              term: "Personal data",
              detail:
                "Has the meaning given in the UK and EU GDPR. Special category data is covered by this addendum only where you have asked us to process it and the law allows it.",
            },
          ],
        },
      ],
    },
    {
      id: "instructions",
      heading: "2. Our obligations as processor",
      blocks: [
        {
          type: "p",
          text: "We will:",
        },
        {
          type: "ul",
          items: [
            "Process customer data only on your documented instructions, including about international transfers, unless the law requires otherwise — in which case we will tell you before processing unless that law forbids it.",
            "Ensure that anyone we authorise to process it is bound by confidentiality obligations no less protective than those in this addendum.",
            "Provide the information you need to demonstrate compliance with Article 28 GDPR, and let you take your own compliance audits with reasonable notice.",
            "Assist you with data subject requests, security obligations and breach notification — see sections 4 and 5.",
            "Make all information available to you so we can pass an audit, and not appoint a subprocessor without the notice described in section 3.",
          ],
        },
      ],
    },
    {
      id: "subprocessors",
      heading: "3. Subprocessors",
      blocks: [
        {
          type: "p",
          text: "We use a small number of infrastructure providers to run the product. Each one processes customer data only on our instructions, under a written contract that limits it to that purpose.",
        },
        {
          type: "p",
          text: "We will give you at least 30 days' notice before adding or replacing a subprocessor, and publish the current list in our privacy notice. If you object on reasonable data protection grounds and we cannot resolve it, you may terminate the affected part of the service without penalty.",
        },
        {
          type: "p",
          text: `Ask ${legalEntity.privacyEmail} for the current list at any time, including the processing each provider carries out and the country it runs in.`,
        },
      ],
    },
    {
      id: "rights",
      heading: "4. Data subject requests",
      blocks: [
        {
          type: "p",
          text: "Where a data subject contacts us directly about customer data, we will forward the request to you without undue delay and will not respond substantively ourselves unless you instruct us to or the law requires it.",
        },
        {
          type: "p",
          text: "Taking a request off your hands is assistance under Article 28(3)(f) GDPR, and we provide it at no additional charge. Getting the underlying data out in a structured format is a separate export you can request at any time.",
        },
      ],
    },
    {
      id: "security",
      heading: "5. Security and breach",
      blocks: [
        {
          type: "p",
          text: "We take the technical and organisational measures set out in our Security Policy, and we will not reduce them during the life of this addendum.",
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
      heading: "6. International transfers",
      blocks: [
        {
          type: "p",
          text: "If a subprocessor processes customer data outside the UK or European Economic Area, we put an appropriate transfer mechanism in place first — the European Commission's standard contractual clauses, or an adequacy decision where one applies.",
        },
        {
          type: "p",
          text: "Where we rely on standard contractual clauses, you may ask for a copy and for information about any supplementary measures we have put in place.",
        },
      ],
    },
    {
      id: "deletion",
      heading: "7. End of the agreement",
      blocks: [
        {
          type: "p",
          text: "When this addendum ends, we will delete or return customer data at your choice, and delete remaining copies within 90 days unless the law requires us to keep them. If we keep anything, we will tell you what and why, and keep it protected the whole time.",
        },
        {
          type: "p",
          text: "Where you ask us to return data, we will do it in a commonly used, machine-readable format, so it is genuinely portable rather than technically exportable.",
        },
      ],
    },
    {
      id: "order",
      heading: "8. Order of precedence",
      blocks: [
        {
          type: "p",
          text: "If this addendum conflicts with the Terms & Conditions, this addendum governs in respect of the processing of customer data. Nothing in it reduces your rights or ours under applicable data protection law.",
        },
        {
          type: "p",
          text: `This addendum is governed by the same law and forum as the Terms & Conditions, and ${brand.url} is where the operative version of both is published.`,
        },
      ],
    },
    contactSection(9),
  ],
};
