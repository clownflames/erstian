import Image from "next/image";

/**
 * The Erstian mark ships as dark ink on an opaque white canvas (2172 × 724).
 * Two pieces of CSS treatment adapt it to the dark identity without touching
 * the asset itself:
 *
 *   1. `invert` + two hue rotations + `contrast` turns the white canvas pure
 *      black, the letterforms pure white, and lands the red accents back on
 *      the brand red (#EA0B00 — measured, not approximated).
 *   2. `mix-blend-mode: screen` makes that pure-black canvas disappear against
 *      any dark surface, so the mark reads correctly over gradients, hairlines
 *      and blurred panels alike.
 *
 * The visible wordmark occupies 80.94% × 30.39% of the source image, offset by
 * (9.44%, 32.87%). The wrapper crops to that box so the mark can be sized by
 * height alone.
 */

const CROP = {
  width: 1758,
  height: 220,
  /** rendered width / wrapper width */
  imgWidth: "123.549%",
  imgHeight: "329.057%",
  imgLeft: "-11.663%",
  imgTop: "-108.157%",
} as const;

export function Logo({
  className,
  priority = false,
  sizes = "200px",
}: {
  /** Applied to the cropped box. Set a height; width follows the aspect ratio. */
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <span
      className={`relative block w-fit overflow-hidden ${className ?? ""}`}
      style={{ aspectRatio: `${CROP.width} / ${CROP.height}` }}
    >
      <Image
        src="/logo.png"
        alt="Erstian"
        width={CROP.width}
        height={CROP.height}
        priority={priority}
        sizes={sizes}
        draggable={false}
        className="absolute max-w-none select-none [mix-blend-mode:screen] [filter:invert(1)_hue-rotate(180deg)_saturate(3.2)_contrast(2)_hue-rotate(15deg)]"
        style={{
          width: CROP.imgWidth,
          height: CROP.imgHeight,
          left: CROP.imgLeft,
          top: CROP.imgTop,
        }}
      />
    </span>
  );
}
