import { contactSection } from "@/lib/legal/shared";
import type { LegalDoc } from "@/lib/legal/types";

/**
 * Cookie Policy.
 *
 * The short version of this document is in its second intro paragraph, on
 * purpose. A reader who wants the summary should not have to reach section 2.
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
    "This policy explains what cookies and similar technologies are, what this website uses, and what to do about it.",
    "The honest summary: erstian.com currently sets no cookies at all. There is no analytics, no advertising and no consent banner, because a banner with nothing to consent to would only be theatre.",
  ],
  related: ["privacy", "security", "terms"],
  sections: [
    {
      id: "what-are-cookies",
      heading: "1. What cookies are",
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
      id: "third-party-images",
      heading: "3. Third-party images and what they expose",
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
      id: "future-products",
      heading: "4. When products need cookies",
      blocks: [
        {
          type: "p",
          text: "Products are likely to need cookies for things a website cannot do without — keeping you signed in, remembering your preferences, or processing a subscription. When that happens we will:",
        },
        {
          type: "ul",
          items: [
            "Publish a cookie policy listing every cookie, its purpose, its provider and how long it lasts.",
            "Ask for consent before setting anything non-essential, in a banner that refuses as easily as it accepts.",
            "Keep essential cookies working regardless of your choice, because without them the product will not function.",
          ],
        },
        {
          type: "p",
          text: "You can withdraw consent at any time without losing access to anything that does not depend on it.",
        },
        {
          type: "note",
          text: "When a product does introduce cookies, this page will be rewritten with a real table of what is set, rather than being left to describe a policy we do not yet have.",
        },
      ],
    },
    {
      id: "control",
      heading: "5. How to control cookies",
      blocks: [
        {
          type: "p",
          text: "Every major browser lets you view, block and delete cookies and local storage. Because this site sets none, blocking them changes nothing here. We recommend keeping cookies enabled generally, as some sites rely on them.",
        },
        {
          type: "p",
          text: "Privacy-focused browsers such as Firefox with Total Cookie Protection, or Brave, block third-party cookies by default. Nothing on this site depends on that behaviour.",
        },
      ],
    },
    {
      id: "changes",
      heading: "6. Changes to this policy",
      blocks: [
        {
          type: "p",
          text: "We will update this page whenever our cookie use changes, and revise the date at the top. If a change gives you a new choice about your data, we will ask for it rather than assume it.",
        },
      ],
    },
    contactSection(7),
  ],
};
