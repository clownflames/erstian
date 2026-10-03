import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading, Shell } from "@/components/ui/section";
import { SectionLabel } from "@/components/ui/section-label";
import { CardGlyph } from "@/components/visuals/card-glyph";
import { whatWeBuild } from "@/lib/content";

export function WhatWeBuild() {
  return (
    <Section
      id="what-we-build"
      labelledBy="what-we-build-heading"
      className="py-[var(--spacing-section)]"
    >
      <Shell>
        <div className="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionLabel index={whatWeBuild.index} label={whatWeBuild.label} />
            <SectionHeading
              lines={whatWeBuild.heading}
              id="what-we-build-heading"
              className="mt-14"
            />
          </div>
          <Reveal className="self-end lg:col-span-4 lg:col-start-9" delay={0.1}>
            <p className="text-lead max-w-[36ch] text-bone-dim">
              {whatWeBuild.lead}
            </p>
          </Reveal>
        </div>

        {/* Category rows --------------------------------------------- */}
        <ul
          className="mt-16 border-t border-line lg:mt-24"
          aria-label="Categories of software Erstian builds"
        >
          {whatWeBuild.items.map((item, i) => (
            <li key={item.number}>
              <Reveal
                as="article"
                className="group relative border-b border-line"
                index={i}
                amount={0.2}
                tabIndex={0}
                ariaLabelledBy={`wwb-${item.number}`}
              >
                {/* Hover wash */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 origin-left scale-x-0 bg-gradient-to-r from-white/[0.045] to-transparent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100"
                />
                {/* Red seam */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-0 w-px origin-top scale-y-0 bg-red transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100 group-focus-visible:scale-y-100"
                />

                <div className="grid grid-cols-1 items-start gap-x-10 gap-y-6 py-9 md:grid-cols-12 md:py-12">
                  {/* Index */}
                  <div className="flex items-center gap-4 md:col-span-1">
                    <span
                      aria-hidden
                      className="label-xs text-signal transition-colors duration-500 group-hover:text-red-hot"
                    >
                      {item.number}
                    </span>
                    <span
                      aria-hidden
                      className="h-px flex-1 bg-line transition-colors duration-500 group-hover:bg-red/40 md:hidden"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    id={`wwb-${item.number}`}
                    className="text-h2 font-display uppercase text-bone transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:col-span-4"
                  >
                    {item.title.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>

                  {/* Body — always in the accessibility tree */}
                  <p className="max-w-[42ch] text-body text-fog transition-colors duration-700 group-hover:text-bone-dim md:col-span-4">
                    {item.body}
                  </p>

                  {/* Glyph + affordance */}
                  <div className="flex items-center justify-between gap-6 md:col-span-3 md:justify-end">
                    <div className="h-[86px] w-[112px] opacity-45 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-[136px] group-hover:opacity-100 group-focus-visible:w-[136px] group-focus-visible:opacity-100">
                      <CardGlyph variant={i as 0 | 1 | 2 | 3} />
                    </div>
                    <span
                      aria-hidden
                      className="relative flex size-11 shrink-0 items-center justify-center border border-line text-bone transition-colors duration-500 group-hover:border-red group-hover:text-red"
                    >
                      <span className="absolute h-px w-3.5 bg-current" />
                      <span className="absolute h-3.5 w-px bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-90 group-hover:scale-y-0" />
                    </span>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Shell>
    </Section>
  );
}
