"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

import { DURATION, EASE, fadeRise, maskLine } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger index. */
  index?: number;
  delay?: number;
  distance?: number;
  as?: "div" | "li" | "section" | "article" | "p" | "span";
  amount?: number;
  id?: string;
  tabIndex?: number;
  ariaLabelledBy?: string;
};

const TAGS = {
  div: motion.div,
  li: motion.li,
  section: motion.section,
  article: motion.article,
  p: motion.p,
  span: motion.span,
} as const;

/** Fade + translate entrance. The workhorse for body copy and media. */
export function Reveal({
  children,
  className,
  index = 0,
  delay = 0,
  distance = 28,
  as = "div",
  amount = 0.35,
  id,
  tabIndex,
  ariaLabelledBy,
}: RevealProps) {
  const reduced = useReducedMotion();
  const Component = TAGS[as];

  const shared = {
    id,
    tabIndex,
    "aria-labelledby": ariaLabelledBy,
  };

  if (reduced) {
    return (
      <Component className={className} {...shared}>
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={className}
      {...shared}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: DURATION.slow,
        ease: EASE,
        delay: delay + index * 0.07,
      }}
    >
      {children}
    </Component>
  );
}

type MaskedLinesProps = {
  /** One entry per visual line. Keep lines short enough to never wrap. */
  lines: readonly string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  amount?: number;
};

/**
 * Headline reveal: each line sits in its own overflow mask and slides up from
 * below. The negative bottom margin keeps the mask optically tight against the
 * cap-height without clipping descenders.
 */
export function MaskedLines({
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.085,
  amount = 0.4,
}: MaskedLinesProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <span className={className}>
        {lines.map((line, i) => (
          <span key={`${line}-${i}`} className={`block ${lineClassName ?? ""}`}>
            {line}
          </span>
        ))}
      </span>
    );
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {lines.map((line, i) => (
        <span key={`${line}-${i}`} className="mask-line">
          <motion.span
            className={`block will-change-transform ${lineClassName ?? ""}`}
            variants={maskLine as Variants}
            custom={i}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/** Staggered container for lists — hands each child its own `index`. */
export function Stagger({
  children,
  className,
  delay = 0,
  stagger = 0.08,
  amount = 0.25,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  amount?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} variants={fadeRise} custom={index}>
      {children}
    </motion.div>
  );
}

/**
 * A hairline that draws itself in from the left. Used as a section divider and
 * as an underline for interactive rows.
 */
export function DrawLine({
  className,
  delay = 0,
  origin = "left",
}: {
  className?: string;
  delay?: number;
  origin?: "left" | "center";
}) {
  const reduced = useReducedMotion();

  if (reduced) return <span aria-hidden className={className} />;

  return (
    <motion.span
      aria-hidden
      className={`block h-px origin-${origin} bg-current ${className ?? ""}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 1.4, ease: EASE, delay }}
    />
  );
}

/**
 * Wipe reveal for visual panels — the equivalent of an image reveal mask for
 * vector compositions. The panel uncovers from the bottom edge upward.
 */
export function MaskReveal({
  children,
  className,
  delay = 0,
  amount = 0.25,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0.4 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 1.4, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Slow drift applied to decorative layers — disabled for reduced motion. */
export function Parallax({
  children,
  className,
  distance = 60,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ y: distance }}
      whileInView={{ y: -distance }}
      viewport={{ once: false, amount: 0 }}
      transition={{ duration: 1.1, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
