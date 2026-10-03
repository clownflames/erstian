/** Shared motion language — one easing curve, a few durations. */

export const EASE = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.76, 0, 0.24, 1] as const;

export const DURATION = {
  fast: 0.5,
  base: 0.9,
  slow: 1.25,
} as const;

/** Fade + rise — the default entrance for editorial blocks. */
export const fadeRise = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASE,
      delay: i * 0.07,
    },
  }),
};

/** Masked line reveal, used by every oversized heading. */
export const maskLine = {
  hidden: { y: "110%" },
  show: (i: number = 0) => ({
    y: "0%",
    transition: {
      duration: 1.15,
      ease: EASE,
      delay: i * 0.085,
    },
  }),
};

/** Viewport defaults — trigger slightly before the element is centred. */
export const viewportOnce = { once: true, amount: 0.35 } as const;
export const viewportSoft = { once: true, amount: 0.15 } as const;
