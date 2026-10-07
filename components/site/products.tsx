"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ActionLink } from "@/components/ui/action-link";
import { MaskedLines, Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { RedDot, Section, SectionHeading, Shell } from "@/components/ui/section";
import { SectionLabel } from "@/components/ui/section-label";
import { ModulePreview, moduleVariants } from "@/components/visuals/module-preview";
import { internbird, products } from "@/lib/content";

/**
 * Section 04 — the product module field.
 *
 * Module 01 is Internbird and carries the only "Available" state in the field.
 * That matters beyond the visual: a grid where every tile says "in development"
 * reads as a company with nothing to sell, which is not true and is exactly the
 * impression that makes a payment review harder. The active/in-development split
 * mirrors reality — one live product, the rest in the pipeline.
 */
const INTERNBIRD_INDEX = 0;

export function Products() {
  return (
    <Section
      id="products"
      labelledBy="products-heading"
      className="overflow-hidden py-[var(--spacing-section)]"
    >
      <Shell>
        <div className="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionLabel index={products.index} label={products.label} />
            <SectionHeading
              lines={products.heading}
              id="products-heading"
              className="mt-14"
            />
          </div>

          <div className="self-end space-y-5 lg:col-span-4 lg:col-start-9">
            <Reveal>
              <p className="text-lead max-w-[38ch] text-bone">{products.body}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-[38ch] text-small text-fog">{products.note}</p>
            </Reveal>
          </div>
        </div>

        {/* Module field ---------------------------------------------- */}
        <Stagger
          className="mt-16 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:mt-24 lg:grid-cols-3"
          stagger={0.07}
        >
          {moduleVariants.map((variant, i) => {
            const live = i === INTERNBIRD_INDEX;
            const name = live ? internbird.name : `Module 0${i + 1}`;

            return (
              <StaggerItem key={variant} index={i}>
                <article
                  className={`group relative h-full bg-ink p-6 transition-colors duration-700 sm:p-7 ${
                    live ? "bg-surface" : "hover:bg-ink-raise"
                  }`}
                  aria-label={
                    live
                      ? `${internbird.name} — available now`
                      : `Module 0${i + 1} — in development`
                  }
                >
                  {live ? (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 border border-red/70"
                    />
                  ) : null}

                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-label tracking-[0.22em] text-fog">
                      0{i + 1}
                    </span>
                    {live ? (
                      <span className="label-xs flex items-center gap-2 text-signal">
                        <RedDot />
                        Available now
                      </span>
                    ) : (
                      <span className="label-xs text-fog">In development</span>
                    )}
                  </div>

                  <div
                    className={`mt-6 aspect-[200/120] w-full transition-all duration-700 ${
                      live
                        ? "opacity-90"
                        : "opacity-30 blur-[1.5px] group-hover:opacity-60 group-hover:blur-0"
                    }`}
                  >
                    <ModulePreview variant={variant} active={live} />
                  </div>

                  <div className="mt-6 h-px w-full bg-line" />

                  <div className="mt-4 flex items-center justify-between gap-4">
                    <span
                      aria-hidden
                      className={`h-px transition-all duration-700 ${
                        live ? "w-12 bg-red" : "w-6 bg-ash"
                      }`}
                    />
                    <span
                      className={`label-xs transition-colors duration-700 ${
                        live ? "text-bone" : "text-fog"
                      }`}
                    >
                      {name}
                    </span>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* In development --------------------------------------------- */}
        <div className="mt-20 lg:mt-28">
          <h2 className="text-mega font-display uppercase text-bone">
            <MaskedLines
              lines={["In", "development."]}
              stagger={0.1}
              amount={0.15}
            />
          </h2>
          <Marquee />
        </div>

        <Reveal className="mt-14 flex flex-col items-start gap-6 sm:flex-row sm:items-center lg:mt-20">
          <ActionLink href={products.cta.href}>{products.cta.label}</ActionLink>
          <ActionLink href={products.secondaryCta.href} tone="outline">
            {products.secondaryCta.label}
          </ActionLink>
        </Reveal>
      </Shell>
    </Section>
  );
}

/**
 * Slow ticker.
 *
 * Now a statement about the pipeline rather than a bare "coming soon", so the
 * marquee does not contradict the live Internbird module directly above it.
 */
function Marquee() {
  const reduced = useReducedMotion();

  const phrase = "In development — Erstian —";

  return (
    <div
      aria-hidden
      className="mt-6 w-full overflow-hidden border-y border-line py-5"
    >
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap will-change-transform"
        animate={reduced ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1].map((copy) =>
          Array.from({ length: 8 }, (_, i) => (
            <span
              key={`${copy}-${i}`}
              className="label-xs flex items-center gap-10 text-fog"
            >
              {phrase}
              <span className="inline-block size-1 rounded-full bg-red/70" />
            </span>
          )),
        )}
      </motion.div>
    </div>
  );
}
