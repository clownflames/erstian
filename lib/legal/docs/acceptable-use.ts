import { brand, internbird } from "@/lib/content";
import { legalEntity } from "@/lib/legal/entity";
import { contactSection } from "@/lib/legal/shared";
import type { LegalDoc } from "@/lib/legal/types";

/**
 * Acceptable Use Policy.
 *
 * Split out of the Terms so it can be the document a moderation or enforcement
 * decision actually cites. It is incorporated into the Terms by reference, which
 * is why the Terms link to it rather than repeating it.
 *
 * The rules that apply specifically to Internbird — false qualifications,
 * impersonation, applications submitted for other people — are called out
 * separately, because those are the ways a student marketplace actually gets
 * misused and generic wording would not cover them.
 */
export const acceptableUse: LegalDoc = {
  slug: "acceptable-use",
  path: "/acceptable-use",
  title: "Acceptable Use Policy",
  label: "Legal",
  group: "terms",
  summary:
    "What you may not do on erstian.com or any Erstian product, and what happens if you do.",
  description:
    "The uses Erstian prohibits across its website and services — including Internbird — how we enforce it, and how to report a breach.",
  effective: "2026-01-15",
  intro: [
    "This policy sets out what you may not do with our website and services. It forms part of our Terms & Conditions — using either means you accept it.",
    "The rule underneath all of it: do not use Erstian to cause harm, to break the law, or to take something that belongs to someone else. Everything below is that rule written out.",
  ],
  related: ["terms", "security", "disclaimer"],
  sections: [
    {
      id: "scope",
      heading: "1. Scope",
      blocks: [
        {
          type: "p",
          text: `This policy applies to ${brand.url}, to every Erstian product and service including ${internbird.name}, and to anyone using them on our behalf — including an employee, contractor or agent acting for your organisation.`,
        },
        {
          type: "p",
          text: "It applies in addition to our Terms & Conditions. Where the two conflict on what is prohibited, the stricter rule applies.",
        },
      ],
    },
    {
      id: "prohibited",
      heading: "2. Prohibited uses",
      blocks: [
        {
          type: "p",
          text: "You may not use the website or any service to:",
        },
        {
          type: "ul",
          items: [
            "Break the law, or assist anyone else in breaking it.",
            "Infringe the intellectual property, privacy or other rights of anyone.",
            "Send unsolicited bulk email, SMS or messages, or use a service for spam.",
            "Harvest, scrape or collect personal information about people who have not consented to it.",
            "Upload or distribute malware, ransomware, or code intended to damage or spy on a system.",
            "Gain or attempt to gain unauthorised access to any account, system or data.",
            "Probe, scan or test the vulnerability of our systems without our written permission, except as set out in our Security Policy.",
            "Circumvent, disable or interfere with any security control, rate limit, payment flow or usage restriction.",
            "Resell, sublicense, rent or provide access to a service except under an agreement that permits it.",
            "Deceive others about the origin of content or the identity of its author, including impersonating us, a student, or an employer.",
            "Use a service to build or train a competing product, or to benchmark it for publication without our agreement.",
            "Make a payment using a payment method that does not belong to you, or attempt to obtain a refund for a service you did not purchase.",
          ],
        },
      ],
    },
    {
      id: "internbird-rules",
      heading: "3. Rules specific to Internbird",
      blocks: [
        {
          type: "p",
          text: `Internbird exists so students can be matched to opportunities honestly. These rules protect that, and they are the ones most likely to be relevant to you if you use ${internbird.name}:`,
        },
        {
          type: "ul",
          items: [
            "Only create an account for yourself. Do not register on someone else's behalf, and do not share a login to get around a limit.",
            "Give accurate information about your education, skills and experience. Submitting qualifications you do not hold, or experience you did not have, is a misrepresentation — and it hurts the students who play by the rules.",
            "Only upload documents you created or are entitled to share. Do not upload another person's résumé, marksheet or identity document.",
            "Apply in your own name. Do not submit applications, accept offers, or sign documents on behalf of someone else.",
            "Do not use the platform to contact employers or students for anything other than the opportunity you applied for. It is not a marketing channel and we will remove misuse of it.",
            "Do not post, comment or submit content that is unlawful, offensive, discriminatory, or that targets or harasses anyone.",
            "Do not attempt to review, rate, or influence listings in exchange for benefit, or misrepresent an employer or program.",
            "Resubmitting the same application repeatedly through different routes to gain an advantage is not permitted.",
          ],
        },
        {
          type: "note",
          text: "Where a misrepresentation affects an employer's or university's decision, we may suspend the account, remove content, notify the relevant party, and refuse a refund for services already consumed. We will tell you which rule we believe was breached and give you a chance to respond.",
        },
      ],
    },
    {
      id: "responsible",
      heading: "4. Responsible use",
      blocks: [
        {
          type: "p",
          text: "These are not prohibitions so much as expectations. If you operate a service for an organisation:",
        },
        {
          type: "ul",
          items: [
            "Give your own users clear rules that match ours, and enforce them.",
            "Keep accurate records of who holds access, and remove it when someone leaves.",
            "Protect credentials with the same care you would apply to a bank account, and use multi-factor authentication wherever we offer it.",
            "Tell us promptly if you believe an account or integration key has been exposed.",
            "Have a plan for what happens to your data if you decide to leave.",
          ],
        },
        {
          type: "note",
          text: "We would rather help you fix a problem than switch it off. If any part of this policy is getting in the way of something legitimate, contact us and we will look for a way to make it work.",
        },
      ],
    },
    {
      id: "enforcement",
      heading: "5. How we enforce",
      blocks: [
        {
          type: "p",
          text: "When we believe this policy has been breached, we may — in proportion to the breach — take any of these steps:",
        },
        {
          type: "ol",
          items: [
            "Ask you to stop, or to change what you are doing.",
            "Remove content, or suspend a specific application, submission or integration key.",
            "Suspend or terminate an account, with a refund for any unused paid period where one is due under our Refund & Cancellation Policy.",
            "Notify an employer, university or program where a misrepresentation has affected their decision.",
            "Report the activity to a regulator or law enforcement body where we are legally required to.",
          ],
        },
        {
          type: "p",
          text: "Where we suspend or terminate, we will tell you which part of the policy we believe was breached. If we get it wrong, reply and ask for a review by someone who was not involved in the first decision.",
        },
      ],
    },
    {
      id: "reporting",
      heading: "6. Reporting a concern",
      blocks: [
        {
          type: "p",
          text: `If you think someone is breaching this policy — a false listing, a fabricated application, or anything else — email ${legalEntity.privacyEmail} with what you saw and where.`,
        },
        {
          type: "p",
          text: "We read every report. We cannot promise anonymity, and we will tell you if we need more detail, but we will not share your identity with the person you reported without a lawful reason to do so.",
        },
      ],
    },
    {
      id: "changes",
      heading: "7. Changes to this policy",
      blocks: [
        {
          type: "p",
          text: "We will update this page when it changes and revise the date at the top. A new restriction does not apply retroactively to conduct that was permitted when it happened.",
        },
      ],
    },
    contactSection(8),
  ],
};
