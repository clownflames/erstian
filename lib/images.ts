/**
 * Photography registry.
 *
 * Every photograph on the site is hotlinked from the Unsplash CDN under the
 * Unsplash License (https://unsplash.com/license): free for commercial and
 * non-commercial use, no permission required and no attribution required.
 *
 * Content rule (same rule as lib/content.ts): no photograph may depict a
 * shipped Erstian product, a customer, a metric, an award, a partnership or a
 * headcount large enough to imply years of operation. Prefer hardware, texture
 * and unbranded workspaces over anything that reads as an achievement.
 *
 * Selection rule: MonochromeImage darkens every frame, so each photo needs
 * enough tonal range to survive that. Measured mean luminance across a 32x32
 * sample sits between roughly 60 and 150 for every entry below — anything under
 * ~50 renders as an almost-black plate that reads as a failed load.
 */

export type Photo = {
  /** Unsplash photo id, without the `photo-` prefix. */
  id: string;
  /**
   * Describes what is actually visible. Use an empty string when the picture
   * is purely atmospheric — the plate is then hidden from assistive tech
   * rather than announced as decoration.
   */
  alt: string;
  /** Longest edge to request from the CDN, in px. */
  width: number;
};

export const photos = {
  /** Section 01 — atmospheric band. Hardware macro, no subject or UI. */
  about: {
    id: "1518770660439-4636190af475",
    alt: "",
    width: 2000,
  },

  /** Section 02 — one plate per category. */
  businessSoftware: {
    id: "1550751827-4bd374c3f58b",
    alt: "Patch cables crossing a switch in a dim server room.",
    width: 700,
  },
  productivity: {
    id: "1593642532400-2682810df593",
    alt: "A desk seen from above with an open laptop, a phone and a notebook.",
    width: 700,
  },
  utility: {
    id: "1587560699334-cc4ff634909a",
    alt: "A single laptop on a dark desk, the rest of the room out of focus.",
    width: 700,
  },
  futureProducts: {
    id: "1504639725590-34d0984388bd",
    alt: "Out-of-focus screens glowing in a dark room.",
    width: 700,
  },

  /** Section 05 — the environment Erstian builds for. */
  forBusiness: {
    id: "1553877522-43269d4ea984",
    alt: "An empty meeting room with a long table and chairs.",
    width: 1200,
  },

  /** Section 06 — the everyday side of the same problem. */
  forEverydayUsers: {
    id: "1593642532842-98d0fd5ebc1a",
    alt: "A laptop resting on someone's lap on a leather sofa.",
    width: 1200,
  },

  /** Section 09 — the space we are building out. */
  company: {
    id: "1531973576160-7125cd663d86",
    alt: "",
    width: 2000,
  },
} as const satisfies Record<string, Photo>;

/**
 * Plates for `whatWeBuild.items`. The order is significant and must stay in
 * step with the item order in lib/content.ts.
 */
export const categoryPhotos = [
  photos.businessSoftware,
  photos.productivity,
  photos.utility,
  photos.futureProducts,
] as const;

const CDN = "https://images.unsplash.com/photo-";

/**
 * Source URL for `next/image`.
 *
 * `fit=max` asks Unsplash for the whole frame bounded to `width` rather than a
 * crop, leaving all framing to CSS — one URL then serves every breakpoint
 * without the optimiser fetching a crop it cannot reuse.
 */
export function photoSrc(photo: Photo): string {
  return `${CDN}${photo.id}?w=${photo.width}&q=80&fm=jpg&fit=max`;
}