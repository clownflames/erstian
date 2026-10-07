"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";

import { MaskedLines, Reveal } from "@/components/ui/reveal";
import { Section, Shell } from "@/components/ui/section";
import { faqs } from "@/lib/content";
import { DURATION, EASE } from "@/lib/motion";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();
  const reduced = useReducedMotion();

  return (
    <Section
      id="faq"
      labelledBy="faq-heading"
      className="py-[var(--spacing-section)]"
    >
      <Shell>
        <div className="grid grid-cols-1 gap-x-14 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label-xs text-fog">Support</p>
            <MaskedLines
              lines={["Questions,", "answered."]}
              className="text-h2 mt-6 block font-display uppercase text-bone"
            />
            <h2 id="faq-heading" className="sr-only">
              Frequently asked questions
            </h2>
            <Reveal className="mt-8 max-w-[32ch]" delay={0.1}>
              <p className="text-small text-fog">
                If something isn&rsquo;t covered here, write to us directly —
                we read everything.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="border-t border-line">
              {faqs.map((item, i) => {
                const isOpen = open === i;
                const buttonId = `${baseId}-q-${i}`;
                const panelId = `${baseId}-a-${i}`;

                return (
                  <Reveal
                    as="li"
                    key={item.question}
                    index={i}
                    className="border-b border-line"
                    amount={0.3}
                  >
                    <h3>
                      <button
                        type="button"
                        id={buttonId}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="group flex w-full items-start gap-6 py-6 text-left sm:gap-10 sm:py-8"
                      >
                        <span
                          aria-hidden
                          className="label-xs mt-2 shrink-0 text-fog transition-colors duration-500 group-hover:text-signal"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        <span
                          className={`flex-1 font-display text-h3 uppercase leading-[1.12] transition-colors duration-500 ${
                            isOpen
                              ? "text-bone"
                              : "text-bone-dim group-hover:text-bone"
                          }`}
                        >
                          {item.question}
                        </span>

                        <span
                          aria-hidden
                          className="relative mt-3 flex size-8 shrink-0 items-center justify-center"
                        >
                          <span className="absolute h-px w-4 bg-current" />
                          <motion.span
                            className="absolute h-4 w-px bg-current"
                            initial={false}
                            animate={{
                              scaleY: isOpen ? 0 : 1,
                              rotate: isOpen ? 90 : 0,
                            }}
                            transition={{
                              duration: reduced ? 0 : 0.5,
                              ease: EASE,
                            }}
                          />
                          <span className="absolute inset-0 border border-line transition-colors duration-500 group-hover:border-red" />
                        </span>
                      </button>
                    </h3>

                    {/* The panel is always mounted and animates between height
                        0 and auto rather than being unmounted by AnimatePresence.
                        Every answer is therefore present in the server HTML,
                        which is what the FAQPage structured data in lib/seo.ts
                        describes — schema that points at text absent from the
                        page is a manual-action risk with Google. Collapsed
                        content stays reachable by keyboard and screen reader
                        too, rather than being trapped behind a click.

                        Height animates via `grid-template-rows: 0fr → 1fr`
                        rather than a measured pixel height, so the panel
                        collapses without framer-motion ever resolving `auto`
                        and without a resize observer. */}
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="grid transition-[grid-template-rows,opacity] ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                        opacity: isOpen ? 1 : 0,
                        transitionDuration: reduced ? "0ms" : `${DURATION.fast}s`,
                      }}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <p className="max-w-[58ch] pb-8 text-body text-fog sm:pl-[calc(0.625rem+2.5rem)] lg:pb-10">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </Shell>
    </Section>
  );
}
