"use client";

import { motion, useReducedMotion } from "framer-motion";

import { DURATION, EASE } from "@/lib/motion";

/**
 * The `01 / ABOUT ERSTIAN` marker that opens every numbered section.
 * The index wipes up out of its own mask while the label fades in beside it.
 */
export function SectionLabel({
  index,
  label,
  className = "",
  align = "left",
}: {
  index?: string;
  label: string;
  className?: string;
  align?: "left" | "right";
}) {
  const reduced = useReducedMotion();

  return (
    <div
      className={`flex items-center gap-4 ${
        align === "right" ? "justify-end" : "justify-start"
      } ${className}`}
    >
      {index ? (
        <span className="mask-line !pb-[0.18em]">
          <motion.span
            className="label-xs block text-signal"
            initial={reduced ? undefined : { y: "115%" }}
            whileInView={reduced ? undefined : { y: "0%" }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1, ease: EASE, delay: 0.05 }}
          >
            {index}
          </motion.span>
        </span>
      ) : null}

      <motion.span
        aria-hidden
        className="h-px w-8 origin-left bg-line"
        initial={reduced ? undefined : { scaleX: 0 }}
        whileInView={reduced ? undefined : { scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
      />

      <motion.span
        className="label-xs text-bone-dim"
        initial={reduced ? undefined : { opacity: 0, y: 6 }}
        whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: DURATION.base, ease: EASE, delay: 0.25 }}
      >
        {label}
      </motion.span>
    </div>
  );
}
