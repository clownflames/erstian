import { brand } from "@/lib/content";
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
    "Erstian's accessibility commitment for erstian.com: the standard we work to, known limitations, and how to report a barrier.",
  effective: "2026-01-15",
  intro: [
    "We want this site to be usable by everyone, including people who browse with a keyboard, a screen reader, magnification, or reduced motion and contrast settings.",
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
                "Web Content Accessibility Guidelines (WCAG) 2.2, Level AA. WCAG 2.2 is the current W3C recommendation and is what the European Accessibility Act and the UK Public Sector Bodies regulations point at.",
            },
            {
              term: "Conformance status",
              detail:
                "Partially conformant. The site meets the requirements listed as met below. The known gaps in section 3 are real and unfixed.",
            },
            {
              term: "Applies to",
              detail: `This statement covers ${brand.url} and every page linked from it, including the legal documents. It does not cover third-party sites we link to, which we do not control.`,
            },
            {
              term: "Last reviewed",
              detail: "Reviewed whenever the site's structure changes, and at minimum annually.",
            },
          ],
        },
      ],
    },
    {
      id: "measures",
      heading: "2. How we build",
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
      heading: "3. Known limitations",
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
      heading: "4. Alternatives and format",
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
      heading: "5. Feedback and enforcement",
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
      heading: "6. Changes to this statement",
      blocks: [
        {
          type: "p",
          text: "We revise this statement whenever the site changes or our targets change, and update the date at the top. Improvements appear in the \"known limitations\" list as they are made, and leave it once they are done.",
        },
      ],
    },
    contactSection(7),
  ],
};
