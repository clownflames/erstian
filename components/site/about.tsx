"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading, Section, Shell } from "@/components/ui/section";
import { SectionLabel } from "@/components/ui/section-label";
import { MonochromeImage } from "@/components/visuals/monochrome-image";
import { about } from "@/lib/content";
import { photos } from "@/lib/images";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const ghostY = useTransform(scrollYProgress, [0, 1], [70, -90]);
  const ghostOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 0]);

  return (
    <Section
      id="about"
      ref={ref}
      labelledBy="about-heading"
      className="overflow-x-clip py-[var(--spacing-section)]"
    >
      {/* Oversized ghost index, drifting behind the composition */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-4%] top-[6%] watermark select-none font-display text-[26vw] font-bold leading-none tracking-[-0.05em]"
        style={reduced ? undefined : { y: ghostY, opacity: ghostOpacity }}
      >
        {about.index}
      </motion.div>

      <Shell className="relative">
        <SectionLabel index={about.index} label={about.label} />

        <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12">
          {/* Heading ------------------------------------------------- */}
          <div className="lg:col-span-7">
            <SectionHeading lines={about.heading} id="about-heading" />

            <Reveal
              className="mt-8 max-w-[46ch] text-lead text-bone"
              delay={0.15}
            >
              {about.intro}
            </Reveal>
          </div>

          {/* Supporting column --------------------------------------- */}
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-3">
            <ul className="border-t border-line">
              {about.points.map((point, i) => (
                <Reveal
                  as="li"
                  key={point}
                  index={i}
                  className="flex items-baseline gap-5 border-b border-line py-5"
                  amount={0.6}
                >
                  <span aria-hidden className="label-xs shrink-0 text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-h4 text-bone">{point}</span>
                </Reveal>
              ))}
            </ul>

            <Reveal className="mt-8 text-body text-bone-dim" delay={0.2}>
              {about.closing}
            </Reveal>
          </div>
        </div>

        {/* Atmospheric plate ----------------------------------------- */}
        <Reveal className="mt-16 lg:mt-24" delay={0.1} distance={40}>
          <MonochromeImage
            photo={photos.about}
            ratio="21 / 9"
            sizes="100vw"
            position="50% 55%"
          />
        </Reveal>

        {/* Closing band ---------------------------------------------- */}
        <div className="mt-20 border-t border-line pt-10 lg:mt-28">
          <div className="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="text-h3 text-bone">{about.focus}</p>
            </Reveal>

            <div className="hidden lg:col-span-1 lg:flex lg:justify-center">
              <span aria-hidden className="h-full w-px bg-line" />
            </div>

            <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.1}>
              <p className="max-w-[44ch] text-body text-fog">
                Every product we make starts with a specific problem someone
                actually has — and ends with software that earns its place in
                someone&rsquo;s day.
              </p>
            </Reveal>
          </div>
        </div>
      </Shell>
    </Section>
  );
}
