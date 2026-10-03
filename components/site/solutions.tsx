import { ActionLink } from "@/components/ui/action-link";
import { MaskReveal, Reveal } from "@/components/ui/reveal";
import { GridLines, Section, SectionHeading, Shell } from "@/components/ui/section";
import { SectionLabel } from "@/components/ui/section-label";
import { BusinessVisual } from "@/components/visuals/business-visual";
import { EverydayVisual } from "@/components/visuals/everyday-visual";
import { MonochromeImage } from "@/components/visuals/monochrome-image";
import { forBusiness, forEverydayUsers } from "@/lib/content";
import { photos } from "@/lib/images";

export function ForBusiness() {
  return (
    <Section
      id="solutions"
      labelledBy="business-heading"
      className="py-[var(--spacing-section)]"
    >
      <GridLines className="opacity-50" />

      <Shell className="relative">
        <div className="grid grid-cols-1 items-start gap-x-14 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionLabel index={forBusiness.index} label={forBusiness.label} />

            <SectionHeading
              lines={forBusiness.heading}
              id="business-heading"
              className="mt-14"
            />

            <div className="mt-10 max-w-[46ch] space-y-5 border-t border-line pt-8">
              {forBusiness.paragraphs.map((paragraph, i) => (
                <Reveal
                  as="p"
                  key={paragraph.slice(0, 24)}
                  index={i}
                  className={
                    i === 0
                      ? "text-lead text-bone"
                      : "text-body text-fog"
                  }
                >
                  {paragraph}
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10" delay={0.15}>
              <ActionLink href={forBusiness.cta.href} tone="outline">
                {forBusiness.cta.label}
              </ActionLink>
            </Reveal>
          </div>

          <MaskReveal className="lg:col-span-5 lg:col-start-8" delay={0.1}>
            <div className="space-y-10">
              <MonochromeImage
                photo={photos.forBusiness}
                ratio="3 / 2"
                sizes="(max-width: 1023px) 100vw, 42vw"
              />
              <BusinessVisual />
            </div>
          </MaskReveal>
        </div>
      </Shell>
    </Section>
  );
}

export function ForEverydayUsers() {
  return (
    <Section
      id="everyday"
      labelledBy="everyday-heading"
      className="py-[var(--spacing-section)]"
    >
      <Shell>
        <div className="grid grid-cols-1 items-center gap-x-14 gap-y-14 lg:grid-cols-12">
          <MaskReveal className="order-2 lg:order-1 lg:col-span-5" delay={0.1}>
            <div className="space-y-10">
              <MonochromeImage
                photo={photos.forEverydayUsers}
                ratio="3 / 2"
                sizes="(max-width: 1023px) 100vw, 42vw"
              />
              <EverydayVisual />
            </div>
          </MaskReveal>

          <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
            <SectionLabel
              index={forEverydayUsers.index}
              label={forEverydayUsers.label}
            />

            <SectionHeading
              lines={forEverydayUsers.heading}
              id="everyday-heading"
              className="mt-14"
            />

            <div className="mt-10 max-w-[46ch] space-y-5 border-t border-line pt-8">
              {forEverydayUsers.paragraphs.map((paragraph, i) => (
                <Reveal
                  as="p"
                  key={paragraph.slice(0, 24)}
                  index={i}
                  className={
                    i === 0
                      ? "text-lead text-bone"
                      : "text-body text-fog"
                  }
                >
                  {paragraph}
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10" delay={0.15}>
              <ActionLink href={forEverydayUsers.cta.href} tone="outline">
                {forEverydayUsers.cta.label}
              </ActionLink>
            </Reveal>
          </div>
        </div>
      </Shell>
    </Section>
  );
}
