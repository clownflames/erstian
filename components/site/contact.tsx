import { ActionLink } from "@/components/ui/action-link";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading, Shell } from "@/components/ui/section";
import { SectionLabel } from "@/components/ui/section-label";
import { contact } from "@/lib/content";

export function Contact() {
  return (
    <Section
      id="contact"
      labelledBy="contact-heading"
      className="py-[var(--spacing-section)]"
    >
      <Shell>
        <SectionLabel index={contact.index} label={contact.label} />

        <div className="mt-14 grid grid-cols-1 gap-x-14 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading lines={contact.heading} id="contact-heading" />
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <Reveal>
              <p className="max-w-[40ch] text-body text-fog">{contact.body}</p>
            </Reveal>
            <Reveal className="mt-8" delay={0.1}>
              <ActionLink href={contact.cta.href}>{contact.cta.label}</ActionLink>
            </Reveal>
          </div>
        </div>

        {/* Direct channels ------------------------------------------- */}
        <ul className="mt-20 border-t border-line lg:mt-28">
          {contact.channels.map((channel, i) => (
            <Reveal
              as="li"
              key={channel.label}
              index={i}
              className="group border-b border-line"
              amount={0.4}
            >
              <a
                href={channel.href}
                className="relative flex flex-col gap-2 py-8 transition-colors duration-500 sm:flex-row sm:items-center sm:justify-between sm:gap-10 lg:py-10"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 origin-left scale-x-0 bg-white/[0.03] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100"
                />

                <span className="label-xs shrink-0 text-fog">{channel.label}</span>

                <span className="flex flex-1 items-baseline justify-between gap-6">
                  <span className="font-display text-h3 tracking-tight text-bone transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                    {channel.value}
                  </span>
                  <svg
                    aria-hidden
                    width="26"
                    height="12"
                    viewBox="0 0 26 12"
                    fill="none"
                    className="shrink-0 text-red transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                  >
                    <path
                      d="M0 6h24M19 1l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </Shell>
    </Section>
  );
}
