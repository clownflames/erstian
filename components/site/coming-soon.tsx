"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { ActionLink } from "@/components/ui/action-link";
import { MaskedLines, Reveal } from "@/components/ui/reveal";
import { GridLines, Section, Shell } from "@/components/ui/section";
import { comingSoon } from "@/lib/content";
import { EASE } from "@/lib/motion";

/** Section 10 — the climax. Full viewport, nothing else competing for attention. */
export function ComingSoon() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const haloScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.55, 1, 0.55]);
  const haloOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.42, 0.15]);
  const sweep = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  return (
    <Section
      ref={ref}
      labelledBy="coming-soon-heading"
      hairline={false}
      className="relative flex min-h-[100svh] items-center overflow-hidden py-[calc(var(--spacing-section)/1.2)]"
    >
      <GridLines className="opacity-60" />

      {/* Halo -------------------------------------------------------- */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[86vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(226,0,10,0.30)_0%,rgba(226,0,10,0.07)_40%,transparent_68%)]"
        style={reduced ? undefined : { scale: haloScale, opacity: haloOpacity }}
      />

      {/* Slow diagonal sweep */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_42%,rgba(255,255,255,0.028)_50%,transparent_58%)]"
        style={reduced ? undefined : { x: sweep }}
      />

      <Shell className="relative">
        <div className="flex flex-col items-center text-center">
          <motion.p
            className="label-xs flex items-center gap-3 text-bone-dim"
            initial={reduced ? undefined : { opacity: 0, y: 12 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <span className="h-1 w-1 rounded-full bg-red animate-blink" />
            Section 10
          </motion.p>

          <h2 id="coming-soon-heading" className="text-mega mt-8 font-display uppercase text-bone">
            <MaskedLines lines={comingSoon.heading} stagger={0.11} amount={0.3} />
          </h2>

          <Reveal className="mt-10 max-w-[46ch]" delay={0.2}>
            <p className="text-lead text-bone">{comingSoon.body}</p>
          </Reveal>

          <Reveal className="mt-5 max-w-[52ch]" delay={0.28}>
            <p className="text-body text-fog">{comingSoon.note}</p>
          </Reveal>

          <Reveal
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
            delay={0.36}
          >
            <ActionLink href={comingSoon.primaryCta.href}>
              {comingSoon.primaryCta.label}
            </ActionLink>
            <ActionLink href={comingSoon.secondaryCta.href} tone="outline">
              {comingSoon.secondaryCta.label}
            </ActionLink>
          </Reveal>
        </div>
      </Shell>
    </Section>
  );
}
