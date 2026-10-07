import { internbird } from "@/lib/content";
import { contactSection } from "@/lib/legal/shared";
import type { LegalDoc } from "@/lib/legal/types";

/**
 * Cookie Policy.
 *
 * Covers two surfaces with genuinely different behaviour: this website, which
 * sets nothing, and Internbird, which uses cookies because the platform cannot
 * function without them. Describing only the first was accurate but incomplete
 * once Internbird existed.
 */
export const cookies: LegalDoc = {
  slug: "cookies",
  path: "/cookies",
  title: "Cookie Policy",
  label: "Legal",
  group: "data",
  summary:
    "No cookies are set on erstian.com today — and what changes if a future product needs them.",
  description:
    "Which cookies erstian.com uses, which it does not, and what changes if a future product needs them.",
  effective: "2026-01-15",
  intro: [
    "This policy explains what cookies and similar technologies are, what each of our sites uses, and what to do about it.",
    `The honest summary: erstian.com sets no cookies at all, and ${internbird.name} uses only the cookies it needs to keep you signed in and remember your preferences. There is no advertising, no cross-site tracking and no profiling.`,
  ],
  related: ["privacy", "security", "terms"],
  sections: [
    {
      id: "what-are-cookies",
      heading: "1. What cookies are, and how they are categorised",
      blocks: [
        {
          type: "p",
          text: "A cookie is a small text file a website asks your browser to store and send back on later requests. Related technologies include local storage, session storage and pixels. All of them let a site remember something between page loads.",
        },
        {
          type: "p",
          text: 'Cookies are described by their category: "strictly necessary" cookies are needed for the site to work at all, and everything else requires your consent first under EU and UK rules.',
        },
      ],
    },
    {
      id: "what-we-use",
      heading: "2. What this website uses",
      blocks: [
        {
          type: "p",
          text: "No cookies. Specifically:",
        },
        {
          type: "ul",
          items: [
            "No analytics cookies. We do not know which pages you visit or where you came from.",
            "No advertising or retargeting cookies. We do not build a profile of you.",
            "No session or preference cookies. Your visit leaves nothing behind on your device.",
            "No social media cookies. We do not embed third-party social widgets.",
            "No consent management cookies, because there is nothing to consent to.",
          ],
        },
        {
          type: "p",
          text: "Our typefaces are served from our own domain rather than a third-party font service, so loading a page sends no request to Google Fonts.",
        },
      ],
    },
    {
      id: "internbird-cookies",
      heading: "3. What Internbird uses",
      blocks: [
        {
          type: "p",
          text: `${internbird.name} uses cookies and similar storage because the platform cannot work without them. They are limited to what the service needs:`,
        },
        {
          type: "definition",
          items: [
            {
              term: "Session and authentication",
              detail:
                "Keeps you signed in and protects forms against cross-site request forgery. Without these you would be logged out on every page, and the platform would be less safe, not more.",
            },
            {
              term: "Preferences",
              detail:
                "Remembers choices such as your theme, your notification settings and your last view, so the platform behaves the way you left it.",
            },
            {
              term: "Security and abuse prevention",
              detail:
                "Rate limiting and bot detection, applied to sign-in and submission endpoints.",
            },
          ],
        },
        {
          type: "p",
          text: "What Internbird does not do: no advertising cookies, no cross-site behavioural tracking, no third-party marketing pixels, and no sale of browsing data. We do not build a profile of you for advertising purposes.",
        },
        {
          type: "p",
          text: "Because these cookies are strictly necessary for the service to function, they are set without asking. If we ever introduce anything that is not necessary, we will ask first, in a banner that refuses as easily as it accepts, and this page will list every cookie with its purpose and lifetime.",
        },
      ],
    },
    {
      id: "third-party-images",
      heading: "4. Third-party images and what they expose",
      blocks: [
        {
          type: "p",
          text: "Photographs on this site are loaded from Unsplash's servers. That request is an ordinary HTTP request, not a cookie, but it does tell Unsplash your IP address, your browser and which page you were on. Unsplash may also set its own cookies in the process, under its own policy.",
        },
        {
          type: "p",
          text: "We are replacing these with images hosted on our own domain before launch. Until then, blocking requests to images.unsplash.com stops any information leaving your browser for them, and you will still be able to read everything on the site.",
        },
      ],
    },
    {
      id: "future-cookies",
      heading: "5. If a product needs cookies in future",
      blocks: [
        {
          type: "p",
          text: `Alongside ${internbird.name}, Erstian develops other products, and those may need cookies for things a service cannot do without — keeping you signed in, remembering preferences, or processing a payment. When that happens we will:`,
        },
        {
          type: "ul",
          items: [
            "List every cookie here with its purpose, its provider and how long it lasts.",
            "Ask for consent before setting anything non-essential, in a banner that refuses as easily as it accepts.",
            "Keep essential cookies working regardless of your choice, because without them the product will not function.",
          ],
        },
        {
          type: "p",
          text: "You can withdraw consent at any time without losing access to anything that does not depend on it.",
        },
      ],
    },
    {
      id: "control",
      heading: "6. How to control cookies",
      blocks: [
        {
          type: "p",
          text: "Every major browser lets you view, block and delete cookies and local storage. Because this site sets none, blocking them changes nothing here. We recommend keeping cookies enabled generally, as some services rely on them.",
        },
        {
          type: "p",
          text: "If you block or delete the cookies Internbird relies on, you will be signed out and your session will not persist. That is the only consequence — nothing is deleted from your account, and signing back in restores it.",
        },
        {
          type: "p",
          text: "Privacy-focused browsers such as Firefox with Total Cookie Protection, or Brave, block third-party cookies by default. Neither of our sites depends on third-party cookies.",
        },
      ],
    },
    {
      id: "changes",
      heading: "7. Changes to this policy",
      blocks: [
        {
          type: "p",
          text: "We will update this page whenever our cookie use changes, and revise the date at the top. If a change gives you a new choice about your data, we will ask for it rather than assume it.",
        },
      ],
    },
    contactSection(8),
  ],
};
