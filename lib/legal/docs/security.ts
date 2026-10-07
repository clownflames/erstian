import { brand } from "@/lib/content";
import { legalEntity } from "@/lib/legal/entity";
import { contactSection } from "@/lib/legal/shared";
import type { LegalDoc } from "@/lib/legal/types";

/**
 * Security Policy and vulnerability disclosure.
 *
 * Written to describe what is true today rather than what a company of our
 * size might do in three years. Every control claimed here is one we can point
 * at; the "what we do not yet have" section is where anything not-yet-built
 * lives, which is the part that makes the rest of it worth reading.
 */
export const security: LegalDoc = {
  slug: "security",
  path: "/security",
  title: "Security Policy",
  label: "Security",
  group: "products",
  summary:
    "How we protect this site, how to report a vulnerability, and what we are deliberately not yet able to promise.",
  description:
    "Erstian's approach to security on erstian.com: current controls, how to report a vulnerability responsibly, and what is not yet in place.",
  effective: "2026-01-15",
  intro: [
    "This policy explains how we handle security on this website, and — when we have products — how to tell us about a vulnerability in them.",
    `It is written honestly. Where a control does not exist yet, it says so rather than implying otherwise. If you are assessing Erstian for a security review, we will answer your questions directly.`,
  ],
  related: ["privacy", "acceptable-use", "accessibility"],
  sections: [
    {
      id: "commitment",
      heading: "1. Our commitment",
      blocks: [
        {
          type: "p",
          text: "We treat security as part of the work rather than a phase that comes after it. That means we design for it, we review it, and when something goes wrong we say so.",
        },
        {
          type: "p",
          text: "We would rather fix a problem quietly than announce that we fixed one, except where the law requires us to notify affected people — in which case we will.",
        },
      ],
    },
    {
      id: "today",
      heading: "2. What we do today",
      blocks: [
        {
          type: "p",
          text: `These are the controls in place on ${brand.url} as it stands:`,
        },
        {
          type: "ul",
          items: [
            "HTTPS on every route, with HTTP redirected to HTTPS and no mixed content.",
            "A content security policy and other security headers, so the browser is told what it may load.",
            "Hosting on a managed platform with isolated tenants and network-level separation.",
            "Access to accounts protected by multi-factor authentication wherever the provider supports it.",
            "A short, deliberate set of third-party services, so the surface area stays small and auditable.",
            "No analytics or advertising scripts, which removes whole categories of third-party risk.",
            "Backups of the site, tested by restoring from them rather than only by confirming they ran.",
          ],
        },
      ],
    },
    {
      id: "not-yet",
      heading: "3. What we do not yet have",
      blocks: [
        {
          type: "p",
          text: "Stated plainly, because a security policy that only lists strengths is not useful to the person deciding whether to trust you:",
        },
        {
          type: "ul",
          items: [
            "No customer-facing product exists yet, so there is no encryption-at-rest design, key management or tenant isolation to describe.",
            "No formal SOC 2 or ISO 27001 certification. We will not claim one until we have it.",
            "No published uptime or security SLA. There is nothing to commit to until there is a service.",
            "No separate incident response team. At our size the people who write the code are the people who respond to it, and we would rather say that than imply a process we have never run.",
          ],
        },
        {
          type: "note",
          text: "This section shrinks as each item becomes real. If it is out of date when you read it, that is a fault — tell us.",
        },
      ],
    },
    {
      id: "reporting",
      heading: "4. Reporting a vulnerability",
      blocks: [
        {
          type: "p",
          text: `Report anything you think is a vulnerability to ${legalEntity.securityEmail}. If that mailbox turns out to be unmonitored, write to ${legalEntity.privacyEmail} instead and say plainly that it is a security report, so it reaches whoever handles them.`,
        },
        {
          type: "p",
          text: "Please include:",
        },
        {
          type: "ul",
          items: [
            "What you found, and the steps to reproduce it.",
            "Which page or feature it affects.",
            "What an attacker could do with it.",
            "Whether anyone else knows, and whether it is already public.",
          ],
        },
      ],
    },
    {
      id: "safe-harbour",
      heading: "5. What we will do",
      blocks: [
        {
          type: "ol",
          items: [
            "We acknowledge your report within 2 business days.",
            "We confirm whether we believe it is valid, and tell you either way.",
            "We keep you updated while we fix it, and we will credit you in the release notes unless you would rather we did not.",
            "We tell you when the fix is live.",
          ],
        },
        {
          type: "p",
          text: "We will not pursue legal action against you for good-faith research that respects other people's data and the availability of the service.",
        },
      ],
    },
    {
      id: "what-not-to-do",
      heading: "6. What not to do",
      blocks: [
        {
          type: "p",
          text: "Testing is welcome. Harm is not. Please avoid:",
        },
        {
          type: "ul",
          items: [
            "Accessing data that is not yours, beyond the minimum needed to demonstrate the issue.",
            "Degrading the service, running denial-of-service tests, or sending mail to anyone other than us.",
            "Pointless repeated automated scanning of the live site.",
            "Disclosing the issue publicly before we have had a fair chance to fix it.",
          ],
        },
        {
          type: "p",
          text: "We would rather talk than sue. A good-faith report that stops when we ask is not an attack.",
        },
      ],
    },
    {
      id: "disclosure",
      heading: "7. Disclosure and incident response",
      blocks: [
        {
          type: "p",
          text: "We aim to acknowledge a report within 2 business days, give an initial assessment within 10, and fix a genuine issue as fast as we responsibly can. Severity sets the order, not who shouted loudest.",
        },
        {
          type: "p",
          text: "If a report turns out not to be a vulnerability, we will say so and explain why rather than leaving you guessing.",
        },
        {
          type: "p",
          text: "Where a genuine incident affects your personal data, our Privacy Policy describes what we will do and who we are required to notify.",
        },
      ],
    },
    {
      id: "changes",
      heading: "8. Changes to this policy",
      blocks: [
        {
          type: "p",
          text: "We will update this page when our security posture changes, and revise the date at the top. If a change affects a commitment we have made to you, we will tell you directly.",
        },
      ],
    },
    contactSection(9),
  ],
};
