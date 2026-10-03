"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { useSiteIntro } from "@/components/providers/site-intro";
import { ActionLink } from "@/components/ui/action-link";
import { MaskedLines } from "@/components/ui/reveal";
import { GridLines } from "@/components/ui/section";
import { HeroVisual } from "@/components/visuals/hero-visual";
import { hero } from "@/lib/content";
import { DURATION, EASE } from "@/lib/motion";

export function Hero() {
  const { done } = useSiteIntro();
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // The type drifts up and dissolves as the hero leaves — a cinematic exit.
  const typeY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const typeOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  const start = done ? 0 : 0.1;

  return (
    <section
      ref={sectionRef}
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-[var(--nav-h)]"
    >
      <GridLines className="opacity-70" />
      <HeroVisual />

      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        style={reduced ? undefined : { scale: visualScale }}
      />

      {/* Masthead --------------------------------------------------- */}
      <motion.div
        className="shell relative z-10 flex items-center justify-between gap-6 pt-8 sm:pt-10"
        initial={reduced ? undefined : { opacity: 0 }}
        animate={reduced ? undefined : { opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: start + 0.1 }}
      >
        <p className="label-xs flex items-center gap-3 text-bone-dim">
          <span className="h-1.5 w-1.5 rounded-full bg-red animate-blink" />
          {hero.label}
        </p>
        <p className="label-xs hidden text-fog sm:block">
          Products in development
        </p>
      </motion.div>

      {/* Headline --------------------------------------------------- */}
      <motion.div
        className="relative z-10 mt-auto pt-10 sm:pt-16 lg:pt-20"
        style={reduced ? undefined : { y: typeY, opacity: typeOpacity }}
      >
        <div className="shell">
          <h1
            id="hero-heading"
            className="text-display font-display uppercase text-bone"
          >
            <MaskedLines
              lines={hero.headline}
              className="block"
              delay={start + 0.25}
              stagger={0.1}
              amount={0.1}
            />
          </h1>

          {/* Support copy ------------------------------------------- */}
          <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-6 border-t border-line pt-8 md:grid-cols-12 md:pt-10">
            <motion.p
              className="text-lead max-w-[34ch] text-bone md:col-span-5 md:col-start-1"
              initial={reduced ? undefined : { opacity: 0, y: 20 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: start + 0.72 }}
            >
              {hero.lead}
            </motion.p>

            <motion.p
              className="max-w-[52ch] self-end text-small text-fog md:col-span-5 md:col-start-7"
              initial={reduced ? undefined : { opacity: 0, y: 20 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: start + 0.82 }}
            >
              {hero.body}
            </motion.p>
          </div>

          {/* Actions ------------------------------------------------- */}
          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            initial={reduced ? undefined : { opacity: 0, y: 20 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: start + 0.92 }}
          >
            <ActionLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ActionLink>
            <ActionLink href={hero.secondaryCta.href} tone="outline">
              {hero.secondaryCta.label}
            </ActionLink>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer rail ------------------------------------------------ */}
      <motion.div
        className="relative z-10 mt-10 sm:mt-16 lg:mt-20"
        style={reduced ? undefined : { opacity: hintOpacity }}
      >
        <div className="shell flex items-end justify-between gap-6 border-t border-line py-6">
          <motion.a
            href={hero.primaryCta.href}
            onClick={(e) => {
              const target = document.querySelector<HTMLElement>(
                hero.primaryCta.href,
              );
              if (!target) return;
              e.preventDefault();
              target.scrollIntoView({ behavior: "smooth" });
            }}
            className="group label-xs flex items-center gap-3 text-fog transition-colors duration-500 hover:text-bone"
            initial={reduced ? undefined : { opacity: 0 }}
            animate={reduced ? undefined : { opacity: 1 }}
            transition={{ duration: DURATION.base, ease: EASE, delay: start + 1.15 }}
          >
            {hero.scrollHint}
            <motion.span
              aria-hidden
              className="inline-block"
              animate={reduced ? undefined : { y: [0, 5, 0] }}
              transition={{
                duration: 2.1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: start + 1.3,
              }}
            >
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
                <path
                  d="M5 0v17M1 13.5 5 17.5l4-4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </motion.span>
          </motion.a>

          <motion.ul
            className="label-xs hidden items-center gap-6 text-fog md:flex"
            initial={reduced ? undefined : { opacity: 0 }}
            animate={reduced ? undefined : { opacity: 1 }}
            transition={{ duration: DURATION.base, ease: EASE, delay: start + 1.2 }}
          >
            <li>Business</li>
            <li aria-hidden className="h-1 w-1 rounded-full bg-red/70" />
            <li>Productivity</li>
            <li aria-hidden className="h-1 w-1 rounded-full bg-red/70" />
            <li>Utility</li>
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}
