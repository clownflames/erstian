"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ActionLink } from "@/components/ui/action-link";
import { MaskedLines, Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { RedDot, Section, SectionHeading, Shell } from "@/components/ui/section";
import { SectionLabel } from "@/components/ui/section-label";
import { ModulePreview, moduleVariants } from "@/components/visuals/module-preview";
import { products } from "@/lib/content";

/** Module 3 is the one open slot — the rest are placeholders. */
const ACTIVE_INDEX = 2;

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
            const active = i === ACTIVE_INDEX;
            return (
              <StaggerItem key={variant} index={i}>
                <article
                  className={`group relative h-full bg-ink p-6 transition-colors duration-700 sm:p-7 ${
                    active ? "bg-surface" : "hover:bg-ink-raise"
                  }`}
                  aria-label={
                    active
                      ? "Module 03 — coming soon"
                      : `Module 0${i + 1} — in development`
                  }
                >
                  {active ? (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 border border-red/70"
                    />
                  ) : null}

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-label tracking-[0.22em] text-fog">
                      0{i + 1}
                    </span>
                    {active ? (
                      <span className="label-xs flex items-center gap-2 text-signal">
                        <RedDot />
                        Coming soon
                      </span>
                    ) : (
                      <span className="label-xs text-fog">In development</span>
                    )}
                  </div>

                  <div
                    className={`mt-6 aspect-[200/120] w-full transition-all duration-700 ${
                      active
                        ? "opacity-90"
                        : "opacity-30 blur-[1.5px] group-hover:opacity-60 group-hover:blur-0"
                    }`}
                  >
                    <ModulePreview variant={variant} active={active} />
                  </div>

                  <div className="mt-6 h-px w-full bg-line" />

                  <div className="mt-4 flex items-center gap-3">
                    <span
                      aria-hidden
                      className={`h-px w-6 transition-all duration-700 ${
                        active ? "w-12 bg-red" : "bg-ash"
                      }`}
                    />
                    <span
                      className={`label-xs transition-colors duration-700 ${
                        active ? "text-bone" : "text-fog"
                      }`}
                    >
                      {active ? "In progress" : "Planned"}
                    </span>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Coming soon ----------------------------------------------- */}
        <div className="mt-20 lg:mt-28">
          <h2 className="text-mega font-display uppercase text-bone">
            <MaskedLines lines={["Coming", "soon."]} stagger={0.1} amount={0.15} />
          </h2>
          <Marquee />
        </div>

        <Reveal className="mt-14 flex flex-col items-start gap-6 sm:flex-row sm:items-center lg:mt-20">
          <ActionLink href={products.cta.href}>{products.cta.label}</ActionLink>
          <p className="max-w-[34ch] text-small text-fog">
            We&rsquo;ll share progress publicly as the first generation of
            products takes shape.
          </p>
        </Reveal>
      </Shell>
    </Section>
  );
}

/** Slow horizontal ticker of the same statement, edge to edge. */
function Marquee() {
  const reduced = useReducedMotion();

  const phrase = "Coming soon — Erstian —";

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
