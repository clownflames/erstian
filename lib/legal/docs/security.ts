import { brand, internbird } from "@/lib/content";
import { legalEntity } from "@/lib/legal/entity";
import { contactSection } from "@/lib/legal/shared";
import type { LegalDoc } from "@/lib/legal/types";

/**
 * Security Policy.
 *
 * Every control claimed here is one that applies to the site and the Internbird
 * platform as they run today. Where a control is not yet in place, it is named as
 * such in section 3 rather than being quietly omitted — a security page that
 * lists only strengths tells a reviewer nothing useful.
 *
 * No certifications are claimed. Erstian does not hold SOC 2, ISO 27001 or PCI
 * DSS certification, has not had an independent penetration test, and does not
 * operate 24/7 monitoring. Stating that explicitly is both accurate and the thing
 * a careful reviewer wants to hear.
 */
export const security: LegalDoc = {
  slug: "security",
  path: "/security",
  title: "Security Policy",
  label: "Security",
  group: "products",
  summary:
    "The security measures we actually apply, what is not yet in place, and how to report a vulnerability.",
  description:
    "How Erstian protects erstian.com and the Internbird platform — access control, password storage, payment security, data handling, and how to report a vulnerability.",
  effective: "2026-01-15",
  intro: [
    `This policy describes how Erstian protects ${brand.url} and ${internbird.name}, and how to report a problem to us.`,
    "It is written to describe what is actually in place. Where a control is not yet implemented, section 3 says so rather than leaving you to assume. If you are assessing us for a security review, we will answer your questions directly.",
  ],
  related: ["privacy", "acceptable-use", "accessibility"],
  sections: [
    {
      id: "commitment",
      heading: "1. Our approach",
      blocks: [
        {
          type: "p",
          text: "We treat security as part of the work rather than a phase after it. That means designing for it, reviewing it, and saying so plainly when something goes wrong.",
        },
        {
          type: "p",
          text: "We would rather fix a problem quietly than announce that we fixed one — except where the law requires us to notify affected people, in which case we will.",
        },
      ],
    },
    {
      id: "today",
      heading: "2. Measures in place",
      blocks: [
        {
          type: "p",
          text: `These apply to ${brand.url} and ${internbird.name} as they operate today:`,
        },
        {
          type: "definition",
          items: [
            {
              term: "Encryption in transit",
              detail:
                "HTTPS with TLS on every route, with HTTP redirected to HTTPS and no mixed content. Traffic between your browser and our servers, and between our servers and our providers, is encrypted.",
            },
            {
              term: "Password storage",
              detail:
                "Passwords are stored as one-way salted hashes, never as readable text. Our database holds a hash, not a password, so a copy of it does not reveal your password. Plaintext password storage is treated as a serious incident.",
            },
            {
              term: "Authentication",
              detail:
                "Accounts are identified by a unique email address or username, and sessions are issued server-side rather than trusted from the client. Session values are generated to be unpredictable and expire.",
            },
            {
              term: "Access control",
              detail:
                "Access to production systems and production data is restricted to people who need it for their work, protected by multi-factor authentication where the provider supports it, and limited to the minimum data each task requires.",
            },
            {
              term: "Authorization checks",
              detail:
                "Access to a user's own data is checked on the server against who is asking. Hiding a control in the interface is never the protection — the check happens where the data is.",
            },
            {
              term: "Input validation",
              detail:
                "Input is validated on the server before it is used or stored, and output is encoded on the way out, so that submitted content cannot be used to attack the page that displays it.",
            },
            {
              term: "Infrastructure isolation",
              detail:
                "Hosting runs on a managed platform that provides network-level separation between tenants, so one customer's environment is not shared with another's.",
            },
            {
              term: "Rate limiting",
              detail:
                "Requests to sensitive endpoints — sign-in, registration, and anything that sends a message or triggers work — are rate limited to reduce the impact of automated abuse.",
            },
            {
              term: "Dependency management",
              detail:
                "Third-party code is kept to a small, deliberate set and its versions are tracked, so a known vulnerability in a dependency can be identified and updated.",
            },
            {
              term: "Logging and monitoring",
              detail:
                "Server and application logs record errors and security-relevant events — including failed sign-in attempts — so that misuse can be investigated. Logs are not used to profile visitors.",
            },
            {
              term: "Backups",
              detail:
                "Data and configuration are backed up on a schedule, and the value of a backup is verified by restoring from it rather than only by confirming the job ran.",
            },
          ],
        },
      ],
    },
    {
      id: "payments",
      heading: "3. Payment security",
      blocks: [
        {
          type: "p",
          text: "Payments are handled by a third-party payment provider on infrastructure we do not operate.",
        },
        {
          type: "ul",
          items: [
            "Card numbers, card expiry dates, CVVs, UPI PINs and net-banking credentials are entered on the payment provider's own hosted checkout page and are never received by or stored on our servers.",
            "Erstian does not hold, process or have access to card data. This is why we do not claim PCI DSS certification of our own — cardholder data is out of our systems by design.",
            "Payment pages are served over HTTPS, and we do not transmit or log payment credentials.",
            "What we retain is limited to what is needed to deliver an order and administer billing: the transaction reference, amount, date, status, the email address on the order, and the service purchased.",
            "Refunds are issued back through the same provider, to the original payment method.",
          ],
        },
        {
          type: "note",
          text: "If anyone contacts you claiming to be Erstian or our payment provider and asks for a card number, CVV, UPI PIN or banking password, it is not us. We will never ask for those. Payment only ever happens on the provider's checkout page.",
        },
      ],
    },
    {
      id: "not-yet",
      heading: "4. What we do not yet have",
      blocks: [
        {
          type: "p",
          text: "Stated plainly, because a security page that lists only strengths is not useful to the person deciding whether to trust us with their data:",
        },
        {
          type: "ul",
          items: [
            "We hold no formal security certifications. We do not have SOC 2, ISO 27001 or ISO 27017 certification, and we will not claim one until we do.",
            "We have not commissioned an independent penetration test. We would rather say so than imply a review that has not happened.",
            "We do not operate 24/7 security monitoring with a dedicated response team. At our size the people who build the system are the people who respond to it.",
            "We do not publish a formal uptime or security SLA. There is no commitment we have measured well enough to promise.",
          ],
        },
        {
          type: "p",
          text: "This section shortens as each item becomes true. If it is out of date when you read it, that is a fault — tell us.",
        },
      ],
    },
    {
      id: "reporting",
      heading: "5. Reporting a vulnerability",
      blocks: [
        {
          type: "p",
          text: `Report anything you think is a vulnerability to ${legalEntity.securityEmail}, on ${brand.url} or on ${internbird.name}. If that mailbox is unmonitored, write to ${legalEntity.privacyEmail} instead and say plainly that it is a security report, so it reaches whoever handles them.`,
        },
        {
          type: "p",
          text: "Please include:",
        },
        {
          type: "ul",
          items: [
            "What you found, and the steps to reproduce it.",
            "Which URL or feature it affects.",
            "What an attacker could do with it.",
            "Whether anyone else knows, and whether it is already public.",
          ],
        },
        {
          type: "p",
          text: `You can also reach us through the contact channel on ${internbird.url} if you would rather not email.`,
        },
      ],
    },
    {
      id: "safe-harbour",
      heading: "6. What we will do",
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
      heading: "7. What not to do",
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
            "Automated scanning of the live site or platform, beyond a single ordinary scan.",
            "Submitting applications or content on behalf of someone else.",
            "Disclosing the issue publicly before we have had a fair chance to fix it.",
          ],
        },
        {
          type: "p",
          text: "A good-faith report that stops when we ask is not an attack. We would rather talk than sue.",
        },
      ],
    },
    {
      id: "disclosure",
      heading: "8. Disclosure and incident response",
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
          text: "Where an incident affects personal information, our Privacy Policy describes what we will do and who we are required to notify. We will tell affected users, not only the regulator, where the law allows us to.",
        },
      ],
    },
    {
      id: "changes",
      heading: "9. Changes to this policy",
      blocks: [
        {
          type: "p",
          text: "We will update this page when our security posture changes, and revise the date at the top. If a change affects a commitment we have made to you, we will tell you directly.",
        },
      ],
    },
    contactSection(10),
  ],
};
