import type { ReactNode } from "react";

import { MaskedLines, Reveal } from "@/components/ui/reveal";

/** Consistent vertical rhythm + optional hairline cap for every section. */
export function Section({
  id,
  children,
  className = "",
  hairline = true,
  as: Tag = "section",
  labelledBy,
  ref,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  hairline?: boolean;
  as?: "section" | "div";
  labelledBy?: string;
  ref?: React.Ref<HTMLElement>;
}) {
  return (
    <Tag
      id={id}
      ref={ref as never}
      aria-labelledby={labelledBy}
      className={`relative scroll-mt-24 ${hairline ? "border-t border-line" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Page gutter + max-width. */
export function Shell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`shell ${className}`}>{children}</div>;
}

/**
 * Decorative 12-column hairline field, aligned to the content gutter so it
 * reads as structure rather than texture.
 */
export function GridLines({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-y-0 left-1/2 w-full max-w-[var(--site-max)] -translate-x-1/2 px-[var(--spacing-gutter)] ${className}`}
    >
      <div className="grid-lines h-full w-full" />
    </div>
  );
}

/** Section heading built from explicit lines so breaks stay art-directed. */
export function SectionHeading({
  lines,
  id,
  className = "",
  size = "h2",
  delay = 0,
}: {
  lines: readonly string[];
  id?: string;
  className?: string;
  size?: "h2" | "h3" | "hero";
  delay?: number;
}) {
  const sizeClass =
    size === "hero" ? "text-display" : size === "h3" ? "text-h3" : "text-h2";

  return (
    <h2
      id={id}
      className={`${sizeClass} font-display uppercase text-bone ${className}`}
    >
      <MaskedLines lines={lines} delay={delay} className="block" />
    </h2>
  );
}

/** Small red status dot used beside "in development" style labels. */
export function RedDot({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`relative inline-flex size-1.5 ${className}`}>
      <span className="absolute inset-0 rounded-full bg-red animate-pulse-soft" />
    </span>
  );
}

export { Reveal, MaskedLines };
