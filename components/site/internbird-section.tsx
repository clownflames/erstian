"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { ActionLink } from "@/components/ui/action-link";
import { MaskedLines, Reveal } from "@/components/ui/reveal";
import { GridLines, Section, Shell } from "@/components/ui/section";
import { SectionLabel } from "@/components/ui/section-label";
import { internbird, internbirdSection } from "@/lib/content";

/**
 * Section 05 — Internbird.
 *
 * The one product band on the home page, because Internbird is the only Erstian
 * offering a visitor can use right now. Everything around it describes products
 * in development; this one is described as live, with a working link out.
 *
 * Visually it deliberately keeps the composition of the other numbered
 * sections — same label, same masked headline, same 12-column grid — so it
 * reads as part of the site rather than as a third-party widget dropped into it.
 */
export function InternbirdSection() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const ghostY = useTransform(scrollYProgress, [0, 1], [60, -70]);
  const ghostOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.45, 0]);

  return (
    <Section
      id="internbird"
      ref={ref}
      labelledBy="internbird-heading"
      className="relative overflow-hidden py-[var(--spacing-section)]"
    >
      <GridLines className="opacity-60" />

      {/* Oversized ghost index, matching the About section's treatment */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-4%] top-[8%] watermark select-none font-display text-[26vw] font-bold leading-none tracking-[-0.05em]"
        style={reduced ? undefined : { y: ghostY, opacity: ghostOpacity }}
      >
        {internbirdSection.index}
      </motion.div>

      <Shell className="relative">
        <SectionLabel
          index={internbirdSection.index}
          label={internbirdSection.label}
        />

        <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12">
          {/* Heading ------------------------------------------------- */}
          <div className="lg:col-span-6">
            <h2
              id="internbird-heading"
              className="text-h2 font-display uppercase text-bone"
            >
              <MaskedLines lines={internbirdSection.heading} />
            </h2>

            <Reveal className="mt-8 max-w-[44ch] text-lead text-bone" delay={0.15}>
              {internbirdSection.lead}
            </Reveal>

            <Reveal className="mt-6 max-w-[50ch] text-body text-fog" delay={0.22}>
              {internbirdSection.body}
            </Reveal>

            <Reveal className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center" delay={0.3}>
              <ActionLink href={internbirdSection.cta.href}>
                {internbirdSection.cta.label}
              </ActionLink>
              <ActionLink
                href={internbirdSection.secondaryCta.href}
                tone="outline"
              >
                {internbirdSection.secondaryCta.label}
              </ActionLink>
            </Reveal>
          </div>

          {/* What it does -------------------------------------------- */}
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="label-xs text-fog">What Internbird does</p>

            <ul className="mt-6 border-t border-line">
              {internbirdSection.features.map((feature, i) => (
                <Reveal
                  as="li"
                  key={feature}
                  index={i}
                  className="flex items-baseline gap-5 border-b border-line py-5"
                  amount={0.5}
                >
                  <span aria-hidden className="label-xs shrink-0 text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-h4 text-bone">{feature}</span>
                </Reveal>
              ))}
            </ul>

            {/* Operating relationship, stated plainly. This is the sentence
                that stops a reader wondering whether Internbird is a different
                company — and it is also the sentence a payment provider needs
                to see. */}
            <Reveal className="mt-8" delay={0.2}>
              <p className="max-w-[46ch] text-small text-bone-dim">
                Internbird is a product/platform operated by Erstian.
              </p>
            </Reveal>

            <Reveal className="mt-4" delay={0.26}>
              <p className="max-w-[46ch] text-small text-fog">
                {internbirdSection.footnote}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Live domain, given its own line. External links elsewhere on the
            site carry an arrow glyph; this one is spelled out because a URL is
            the most reassuring thing we can show a student before they sign up
            or pay. */}
        <Reveal className="mt-16 border-t border-line pt-8 lg:mt-24" delay={0.1}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="label-xs text-fog">
              {internbird.name} — live at
            </p>
            <a
              href={internbird.url}
              className="group flex items-center gap-3 text-h4 text-bone transition-colors duration-400 hover:text-signal"
            >
              <span className="break-all">{internbird.url}</span>
              <span
                aria-hidden
                className="shrink-0 text-signal transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </Reveal>
      </Shell>
    </Section>
  );
}
