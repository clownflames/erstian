"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { MaskedLines, Reveal } from "@/components/ui/reveal";
import { GridLines, Section, SectionHeading, Shell } from "@/components/ui/section";
import { SectionLabel } from "@/components/ui/section-label";
import { vision } from "@/lib/content";
import { EASE } from "@/lib/motion";

export function Vision() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1.15, 0.7]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [0.1, 0.3, 0.1]);
  const closerScale = useTransform(scrollYProgress, [0.2, 0.75], [0.92, 1]);

  return (
    <Section
      id="vision"
      ref={ref}
      labelledBy="vision-heading"
      className="relative overflow-hidden py-[var(--spacing-section)]"
    >
      <GridLines className="opacity-50" />

      {/* Slow breathing bloom */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[38%] size-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(226,0,10,0.28)_0%,rgba(226,0,10,0.06)_42%,transparent_70%)] blur-[1px]"
        style={reduced ? undefined : { scale: glowScale, opacity: glowOpacity }}
      />

      <Shell className="relative">
        <SectionLabel index={vision.index} label={vision.label} />

        <div className="mt-14">
          <SectionHeading lines={vision.heading} size="h2" />
        </div>

        {/* Statement -------------------------------------------------- */}
        <div className="mt-16 border-t border-line pt-12 lg:mt-24">
          <Reveal className="max-w-[36ch] text-lead text-bone-dim">
            {vision.lead}
          </Reveal>

          <h2 className="text-h2 mt-8 font-display uppercase text-bone">
            <MaskedLines
              lines={[
                "Build software that",
                "people find useful",
                "enough to keep",
                "using.",
              ]}
              stagger={0.1}
            />
          </h2>

          <Reveal className="mt-12 max-w-[48ch] text-body text-fog" delay={0.1}>
            {vision.body}
          </Reveal>
        </div>

        {/* Closer ------------------------------------------------------ */}
        <motion.div
          className="mt-24 lg:mt-36"
          style={reduced ? undefined : { scale: closerScale }}
        >
          <span aria-hidden className="block h-px w-full bg-line" />
          <h2 className="text-h2 pt-10 font-display uppercase text-bone">
            <motion.span
              className="block"
              initial={reduced ? undefined : { opacity: 0.06, y: 40 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.5, ease: EASE }}
            >
              {vision.closer}
            </motion.span>
          </h2>
        </motion.div>
      </Shell>
    </Section>
  );
}
