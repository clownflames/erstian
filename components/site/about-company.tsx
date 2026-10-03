"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { MaskedLines, Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading, Shell } from "@/components/ui/section";
import { SectionLabel } from "@/components/ui/section-label";
import { company } from "@/lib/content";

export function AboutCompany() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const markerY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section
      id="company"
      ref={ref}
      labelledBy="company-heading"
      className="py-[var(--spacing-section)]"
    >
      <Shell>
        <div className="grid grid-cols-1 gap-x-14 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionLabel index={company.index} label={company.label} />
            <SectionHeading
              lines={company.heading}
              id="company-heading"
              className="mt-14"
            />
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="space-y-6 border-t border-line pt-8">
              {company.paragraphs.map((paragraph, i) => (
                <Reveal
                  as="p"
                  key={paragraph.slice(0, 24)}
                  index={i}
                  className={
                    i === 0
                      ? "text-lead max-w-[42ch] text-bone"
                      : "max-w-[46ch] text-body text-fog"
                  }
                >
                  {paragraph}
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Emphasised line ------------------------------------------- */}
        <div className="relative mt-20 border-t border-line pt-12 lg:mt-28">
          <span
            aria-hidden
            className="absolute left-0 top-0 h-px w-full overflow-hidden"
          >
            <motion.span
              className="block h-full origin-left bg-red"
              style={reduced ? undefined : { scaleX: markerY }}
            />
          </span>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <MaskedLines
              lines={["It's to build products", "people choose to use."]}
              className="text-h2 block font-display uppercase text-bone"
              stagger={0.1}
            />

            <Reveal className="shrink-0 lg:max-w-[30ch] lg:pb-3" delay={0.2}>
              <p className="text-small text-fog">
                That standard is the reason we start small — so each product can
                earn its place before the next one begins.
              </p>
            </Reveal>
          </div>
        </div>
      </Shell>
    </Section>
  );
}
