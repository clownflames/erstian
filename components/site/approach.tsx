"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import { MaskedLines, Reveal } from "@/components/ui/reveal";
import { Section, Shell } from "@/components/ui/section";
import { SectionLabel } from "@/components/ui/section-label";
import { approach } from "@/lib/content";
import { EASE } from "@/lib/motion";

export function Approach() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.55"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  const railScale = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <Section
      id="approach"
      ref={ref}
      labelledBy="approach-heading"
      className="py-[var(--spacing-section)]"
    >
      <Shell>
        <div className="grid grid-cols-1 gap-x-12 lg:grid-cols-12">
          {/* Sticky rail --------------------------------------------- */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--nav-h)+3.5rem)]">
              <SectionLabel index={approach.index} label={approach.label} />

              <h2
                id="approach-heading"
                className="text-h2 mt-14 font-display uppercase text-bone"
              >
                <MaskedLines lines={approach.heading} delay={0.1} className="block" />
              </h2>

              <Reveal className="mt-8 max-w-[34ch] text-lead text-bone-dim" delay={0.15}>
                {approach.lead}
              </Reveal>

              {/* Progress rail */}
              <div className="mt-12 hidden items-center gap-5 lg:flex">
                <div className="relative h-[168px] w-px bg-line">
                  <motion.span
                    className="absolute inset-x-0 top-0 origin-top bg-red"
                    style={{ scaleY: railScale }}
                  />
                </div>
                <ol className="flex flex-col justify-between py-0.5 text-label text-fog">
                  {approach.steps.map((step) => (
                    <li key={step.number} className="flex items-center gap-3">
                      <span className="font-mono tracking-[0.22em]">
                        {step.number}
                      </span>
                      <span className="h-px w-4 bg-line" />
                      <span>{step.title}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Steps --------------------------------------------------- */}
          <ol className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
            {approach.steps.map((step) => (
              <ApproachStep
                key={step.number}
                step={step}
                total={approach.steps.length}
              />
            ))}
          </ol>
        </div>
      </Shell>
    </Section>
  );
}

function ApproachStep({
  step,
  total,
}: {
  step: { number: string; title: string; body: string };
  total: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.3", "end 0.75"],
  });

  /* Emphasis is expressed through colour, position and the marker — never
     through opacity on text. Every resting state keeps its contrast ratio, so
     a dimmed step is still comfortably readable. */
  const y = useTransform(scrollYProgress, [0, 0.5], [30, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.985, 1]);
  const markerOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const markerScale = useTransform(scrollYProgress, [0, 0.4], [0.4, 1]);
  const railFill = useTransform(scrollYProgress, [0, 0.55], ["0%", "100%"]);

  /* Both ends of every colour ramp clear 4.5:1 on the near-black canvas, so a
     step never becomes unreadable while it waits for its turn. */
  const titleColor = useTransform(
    scrollYProgress,
    [0, 0.45],
    ["#a4a6ad", "#f4f3f0"],
  );
  const bodyColor = useTransform(
    scrollYProgress,
    [0, 0.45],
    ["#7e818a", "#a4a6ad"],
  );

  return (
    <li
      ref={ref}
      className="relative flex min-h-[54vh] items-center border-b border-line lg:min-h-[62vh]"
    >
      {/* Connector */}
      <span
        aria-hidden
        className="absolute left-0 top-0 hidden h-full w-px bg-line lg:block"
      />
      <motion.span
        aria-hidden
        className="absolute left-0 top-0 hidden w-px origin-top bg-red lg:block"
        style={reduced ? undefined : { height: "100%", scaleY: railFill }}
      />

      <motion.div
        className="w-full py-12 lg:py-16 lg:pl-12"
        style={reduced ? undefined : { y, scale }}
      >
        <div className="flex items-start gap-6">
          <motion.span
            aria-hidden
            className="mt-2 block size-2 shrink-0 bg-red"
            style={reduced ? undefined : { opacity: markerOpacity, scale: markerScale }}
          />
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <span className="font-mono text-label tracking-[0.22em] text-fog">
                {step.number}
                <span className="text-fog"> / {String(total).padStart(2, "0")}</span>
              </span>
              <span aria-hidden className="h-px flex-1 bg-line" />
            </div>

            <motion.h3
              className="mt-6 text-h2 font-display uppercase"
              style={reduced ? { color: "#f4f3f0" } : { color: titleColor }}
            >
              <span className="mask-line">
                <motion.span
                  className="block"
                  initial={reduced ? undefined : { y: "110%" }}
                  whileInView={reduced ? undefined : { y: "0%" }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 1.05, ease: EASE }}
                >
                  {step.title}
                </motion.span>
              </span>
            </motion.h3>

            <motion.p
              className="mt-5 max-w-[40ch] text-lead"
              style={reduced ? { color: "#a4a6ad" } : { color: bodyColor }}
            >
              {step.body}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </li>
  );
}
