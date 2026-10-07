import { brand, internbird } from "@/lib/content";
import { legalEntity } from "@/lib/legal/entity";
import { contactSection } from "@/lib/legal/shared";
import type { LegalDoc } from "@/lib/legal/types";

/**
 * Accessibility Statement.
 *
 * Written against WCAG 2.2 Level AA. The conformance claim is deliberately
 * "partially conformant" rather than "fully": naming the specific gaps is more
 * useful to a reader with a disability than a badge, and it is the only version
 * of this claim that stays true as the site changes.
 *
 * Scope is this website. Internbird is a separate application with accounts and
 * forms, so it gets its own section rather than being implied to inherit a
 * conformance level it has not been assessed against.
 */
export const accessibility: LegalDoc = {
  slug: "accessibility",
  path: "/accessibility",
  title: "Accessibility Statement",
  label: "Legal",
  group: "products",
  summary:
    "Our accessibility target for erstian.com, what is not yet perfect, and how to tell us about a barrier.",
  description:
    "Erstian's accessibility commitment for erstian.com and Internbird: the standard we work to, known limitations, and how to report a barrier.",
  effective: "2026-01-15",
  intro: [
    "We want our services to be usable by everyone, including people who browse with a keyboard, a screen reader, magnification, or reduced motion and contrast settings.",
    "This statement says what we aim for, what we have got right, and what we have not fixed yet. It is a working document, not a badge.",
  ],
  related: ["security", "privacy", "terms"],
  sections: [
    {
      id: "standard",
      heading: "1. Our target",
      blocks: [
        {
          type: "definition",
          items: [
            {
              term: "Standard",
              detail:
                "Web Content Accessibility Guidelines (WCAG) 2.2, Level AA — the current W3C recommendation, and what the European Accessibility Act and the UK Public Sector Bodies regulations point at.",
            },
            {
              term: "Conformance status",
              detail:
                "Partially conformant on erstian.com. The requirements listed as met below are met; the known gaps in section 4 are real and unfixed. The status of Internbird is assessed separately — see section 2.",
            },
            {
              term: "Applies to",
              detail: `This statement covers ${brand.url} and every page linked from it, including the legal documents. It does not cover ${internbird.name}, which is a separate application, nor third-party sites we link to.`,
            },
            {
              term: "Last reviewed",
              detail:
                "Reviewed whenever the site's structure changes, and at minimum annually.",
            },
          ],
        },
      ],
    },
    {
      id: "internbird",
      heading: "2. Internbird",
      blocks: [
        {
          type: "p",
          text: `${internbird.name} is a separate application operated by Erstian. Because it is functionally different — it has accounts, forms and user-submitted content — we assess it separately rather than folding it into this statement.`,
        },
        {
          type: "p",
          text: "Our aim is the same WCAG 2.2 Level AA target, approached from what a screen-reader or keyboard user actually needs on a platform with sign-in, application forms and document upload. We are still working toward it.",
        },
        {
          type: "p",
          text: "This statement does not describe how accessible Internbird currently is, and we are not going to imply a conformance level we have not assessed. If you need accommodation to use Internbird — for example a form completed another way — contact us and we will help.",
        },
        {
          type: "note",
          text: "Being honest that this is unfinished is more useful than a claim of full conformance. Where an accessibility barrier blocks someone from applying for an opportunity, that is worth telling us immediately.",
        },
      ],
    },
    {
      id: "measures",
      heading: "3. How we build",
      blocks: [
        {
          type: "p",
          text: "Accessibility is treated as part of the build rather than a pass at the end:",
        },
        {
          type: "ul",
          items: [
            "Semantic HTML first. Headings, lists, links and landmarks come from real elements, not styling.",
            "One H1 per page, with a heading order that descends without skipping levels.",
            "Every interactive element reachable and operable by keyboard, with a visible focus indicator.",
            "Every image either described or explicitly marked as decorative.",
            "A skip link to the main content on every page.",
            "Colour never used as the only way information is conveyed.",
            "Body text meets a contrast ratio of at least 4.5:1; large text at least 3:1.",
            "Layouts that reflow at 320px wide and remain usable at 200% zoom.",
            "Animation suppressed for visitors whose system asks for reduced motion.",
          ],
        },
        {
          type: "p",
          text: "We test with a keyboard only, with a screen reader, and with automated checks — then fix what the automated check found, because it is the easiest place for us to start.",
        },
      ],
    },
    {
      id: "known-gaps",
      heading: "4. Known limitations",
      blocks: [
        {
          type: "p",
          text: "Known gaps, and the work planned against each:",
        },
        {
          type: "ul",
          items: [
            "Some of the large display type uses tight letter-spacing at very small viewport sizes, which can make individual words harder to parse. We are revisiting the fluid type scale.",
            "Photographs are decorative and carry no alt text, so a screen reader user gets nothing where a sighted user gets an image. Where an image conveys meaning, it is described; where it does not, it is hidden rather than announced as decoration.",
            "Documents such as this one are long. There is no search or filter within a page, so finding a specific clause means using your browser's find function.",
            "Third-party content, including images loaded from Unsplash, is outside our control and inherits that provider's own accessibility.",
          ],
        },
        {
          type: "note",
          text: "If you hit a barrier that is not listed here, that is a gap in this statement as much as it is in the site. Please tell us.",
        },
      ],
    },
    {
      id: "alternatives",
      heading: "5. Alternatives and format",
      blocks: [
        {
          type: "p",
          text: "If any part of this site does not work for you, tell us what you were trying to do and we will help you get it another way — by email, by a phone call, or by putting the information in a format that suits you better.",
        },
        {
          type: "p",
          text: "We will aim to respond to an accessibility request within 5 business days, and we will not charge for it.",
        },
      ],
    },
    {
      id: "feedback",
      heading: "6. Feedback and enforcement",
      blocks: [
        {
          type: "p",
          text: `Tell us about a barrier at ${legalEntity.privacyEmail}, with the page address and what happened. We read every message. We will fix what we can, explain what we cannot, and tell you when it is fixed.`,
        },
        {
          type: "p",
          text: "If you are in the UK and we have not responded satisfactorily, you can contact the Equality and Human Rights Commission. If you are elsewhere in the EU, you can complain to the accessibility body for your country.",
        },
      ],
    },
    {
      id: "changes",
      heading: "7. Changes to this statement",
      blocks: [
        {
          type: "p",
          text: "We revise this statement whenever the site changes or our targets change, and update the date at the top. Improvements appear in the \"known limitations\" list as they are made, and leave it once they are done.",
        },
      ],
    },
    contactSection(8),
  ],
};
