import Image from "next/image";

import { photoSrc, type Photo } from "@/lib/images";
import { cn } from "@/lib/utils";

type MonochromeImageProps = {
  photo: Photo;
  /** Aspect ratio of the slot, e.g. "16 / 9". Reserves space before load. */
  ratio?: string;
  /** Same semantics as the next/image `sizes` prop. */
  sizes: string;
  className?: string;
  imgClassName?: string;
  /** Focal point for the crop, e.g. "50% 40%". */
  position?: string;
  priority?: boolean;
};

/**
 * A photograph folded into the site palette.
 *
 * The frame is reduced to greyscale, then pushed down in brightness and up in
 * contrast so it sits inside the near-black identity without contributing a hue
 * of its own. A vignette matched to the hero's and the grain the vector plates
 * already carry finish the composition.
 *
 * The container is `isolate`d so the blended layers stop at the plate's edge
 * instead of mixing with the page behind it.
 */
export function MonochromeImage({
  photo,
  ratio = "4 / 3",
  sizes,
  className,
  imgClassName,
  position,
  priority,
}: MonochromeImageProps) {
  // An empty alt means the picture carries no information, so the whole plate is
  // dropped from the accessibility tree rather than announced.
  const decorative = photo.alt === "";

  return (
    <figure className={cn("relative", className)} aria-hidden={decorative}>
      <div
        className="relative isolate overflow-hidden border border-line bg-ink-raise"
        style={{ aspectRatio: ratio }}
      >
        <Image
          src={photoSrc(photo)}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(
            "object-cover brightness-[0.92] grayscale contrast-[1.12]",
            imgClassName,
          )}
          style={{ objectPosition: position }}
        />

        {/* Vignette, matched to the hero --------------------------- */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(115%_95%_at_50%_45%,transparent_42%,rgba(7,7,10,0.55)_84%,rgba(7,7,10,0.78)_100%)]"
        />

        {/* Grain, as on the vector plates --------------------------- */}
        <span
          aria-hidden
          className="grain pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-overlay"
        />
      </div>
    </figure>
  );
}