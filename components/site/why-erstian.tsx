"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { MaskedLines, Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading, Shell } from "@/components/ui/section";
import { SectionLabel } from "@/components/ui/section-label";
import { whyErstian } from "@/lib/content";
import { EASE } from "@/lib/motion";

export function WhyErstian() {
  const reduced = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsDesktop(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  const horizontal = isDesktop && !reduced;

  return (
    <Section
      id="why"
      labelledBy="why-heading"
      className={`pt-[var(--spacing-section)] ${
        horizontal ? "" : "pb-[var(--spacing-section)]"
      }`}
    >
      <Shell>
        <div className="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionLabel index={whyErstian.index} label={whyErstian.label} />
            <SectionHeading
              lines={whyErstian.heading}
              id="why-heading"
              className="mt-14"
            />
          </div>
          <Reveal className="self-end lg:col-span-4 lg:col-start-9" delay={0.1}>
            <p className="max-w-[36ch] text-small text-fog">
              Five commitments that decide what we build, and — just as often —
              what we choose not to.
            </p>
          </Reveal>
        </div>
      </Shell>

      {horizontal ? <HorizontalPrinciples /> : <VerticalPrinciples />}
    </Section>
  );
}

/* -------------------------------------------------------------------------- */

function HorizontalPrinciples() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    restDelta: 0.001,
  });

  const { scrollWidth } = useTrackWidth(trackRef);
  const x = useTransform(smooth, [0, 1], [0, -scrollWidth]);
  const railScale = useTransform(smooth, [0, 1], [0, 1]);

  return (
    <div ref={trackRef} className="relative mt-16 lg:mt-24">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <motion.div
          data-track
          className="flex w-max items-stretch gap-px pl-[var(--spacing-gutter)] will-change-transform"
          style={{ x }}
        >
          {whyErstian.principles.map((principle, i) => (
            <article
              key={principle.number}
              className="group relative flex h-[min(58vh,540px)] w-[74vw] max-w-[900px] shrink-0 flex-col justify-between border-y border-line px-8 py-10 transition-colors duration-700 hover:bg-white/[0.02] sm:px-12 lg:border-y-0 lg:border-r lg:px-14"
              aria-labelledby={`why-${principle.number}`}
            >
              {/* Ghost index */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-10 opacity-70 watermark select-none font-display text-[clamp(7rem,17vw,15rem)] font-bold leading-none tracking-[-0.05em] transition-opacity duration-700 group-hover:opacity-100"
              >
                {principle.number}
              </span>

              <div className="relative flex items-center gap-4">
                <span className="label-xs text-signal">{principle.number}</span>
                <span aria-hidden className="h-px w-10 bg-line" />
                <span className="label-xs text-fog">
                  0{i + 1} / 0{whyErstian.principles.length}
                </span>
              </div>

              <div className="relative">
                <h3
                  id={`why-${principle.number}`}
                  className="text-h2 font-display uppercase text-bone"
                >
                  <span className="mask-line">
                    <motion.span
                      className="block"
                      initial={{ y: "110%" }}
                      whileInView={{ y: "0%" }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 1, ease: EASE }}
                    >
                      {principle.title}
                    </motion.span>
                  </span>
                </h3>
                <p className="mt-6 max-w-[38ch] text-lead text-fog">
                  {principle.body}
                </p>
              </div>

              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-px w-0 bg-red transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"
              />
            </article>
          ))}

          {/* Trailing closer so the last card can settle on the left edge */}
          <div className="w-[var(--spacing-gutter)] shrink-0" aria-hidden />
        </motion.div>

        {/* Rail */}
        <div className="shell absolute inset-x-0 bottom-10">
          <div className="h-px w-full bg-line">
            <motion.div
              className="h-full origin-left bg-red"
              style={{ scaleX: railScale }}
            />
          </div>
          <div className="mt-3 flex justify-between">
            <span className="label-xs text-fog">Keep scrolling</span>
            <span className="label-xs text-fog">
              0{whyErstian.principles.length} principles
            </span>
          </div>
        </div>
      </div>

      {/* Scroll runway */}
      <div
        aria-hidden
        style={{ height: `${whyErstian.principles.length * 62}vh` }}
      />
    </div>
  );
}

function VerticalPrinciples() {
  return (
    <ul className="shell mt-14 border-t border-line lg:mt-20">
      {whyErstian.principles.map((principle, i) => (
        <Reveal
          as="li"
          key={principle.number}
          index={i}
          className="group border-b border-line py-9 sm:py-12"
          amount={0.3}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-10">
            <span className="label-xs shrink-0 pt-2 text-signal">
              {principle.number}
            </span>

            <div className="flex-1">
              <MaskedLines
                lines={[principle.title]}
                className="text-h3 block font-display uppercase text-bone"
              />
              <p className="mt-4 max-w-[42ch] text-body text-fog">
                {principle.body}
              </p>
            </div>

            <span
              aria-hidden
              className="hidden size-11 shrink-0 items-center justify-center border border-line text-bone transition-colors duration-500 group-hover:border-red group-hover:text-red sm:flex"
            >
              +
            </span>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

/** Measures the track so the pinned run covers exactly its own width. */
function useTrackWidth(ref: React.RefObject<HTMLDivElement | null>) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const measure = () => {
      const track = node.querySelector<HTMLElement>("[data-track]");
      setWidth(track ? Math.max(0, track.scrollWidth - window.innerWidth) : 0);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    const track = node.querySelector<HTMLElement>("[data-track]");
    if (track) observer.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [ref]);

  return { scrollWidth: width };
}
