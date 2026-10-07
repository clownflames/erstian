import Link from "next/link";

import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { SiteHeader } from "@/components/site/site-header";
import { Shell } from "@/components/ui/section";
import { brand, copyrightLine } from "@/lib/content";

/**
 * Shared chrome for the standalone marketing pages.
 *
 * The same `SiteHeader` the home page uses, so there is one header in the app
 * rather than two that can drift. The legal pages keep a bespoke shell: a
 * document needs a contents rail and native anchor scrolling, which the
 * Lenis-driven header would interfere with.
 *
 * `SmoothScrollProvider` is here rather than in the root layout because the
 * legal pages deliberately have no client dependencies at all — legal copy that
 * depends on hydration is copy a crawler may never see.
 */

/**
 * Full page frame for the editorial subpages.
 *
 * Assembling the page here rather than per-section keeps every subpage
 * structurally identical: the only thing that varies between /about and
 * /contact is the copy in lib/pages.ts.
 */
export function Subpage({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <div className="relative flex min-h-svh flex-col">
        <a
          href="#main"
          className="label-xs sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-110 focus:bg-bone focus:px-5 focus:py-3 focus:text-ink"
        >
          Skip to content
        </a>

        {/* The header is fixed, so `main` carries the offset that clears it —
            the masthead's own top padding then stacks on top of that. */}
        <SiteHeader />

        <main id="main" className="flex-1 pt-[var(--nav-h)]">
          {children}
        </main>

        <PageFooter />
      </div>
    </SmoothScrollProvider>
  );
}

/**
 * Page masthead.
 *
 * `standfirst` sits in the right-hand column under a lead paragraph — the same
 * 12-column structure the home page uses for hero copy, so a subpage reads as
 * the same site rather than a template.
 */
export function PageMasthead({
  label,
  heading,
  lead,
  standfirst,
  meta,
}: {
  label: string;
  /** Explicit lines, so headline breaks stay art-directed. */
  heading: readonly string[];
  lead?: string;
  standfirst?: readonly string[];
  /** Small facts shown in the left column, e.g. counts or dates. */
  meta?: readonly { label: string; value: string }[];
}) {
  return (
    <div className="border-b border-line pt-16 pb-12 sm:pt-20 sm:pb-16">
      <Shell>
        <p className="label-xs flex items-center gap-3 text-fog">
          <span className="h-1.5 w-1.5 rounded-full bg-red" />
          {label}
        </p>

        <h1 className="text-display mt-8 font-display uppercase text-bone">
          {heading.map((line, i) => (
            <span key={`${line}-${i}`} className="block">
              {line}
            </span>
          ))}
        </h1>

        {(lead || standfirst) && (
          <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-6 border-t border-line pt-8 md:grid-cols-12">
            {meta && meta.length > 0 ? (
              <dl className="space-y-4 md:col-span-3">
                {meta.map((item) => (
                  <div key={item.label}>
                    <dt className="label-xs text-fog">{item.label}</dt>
                    <dd className="mt-2 text-small text-bone-dim">{item.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}

            <div className="space-y-4 md:col-span-7 md:col-start-6">
              {lead ? (
                <p className="text-lead max-w-[46ch] text-bone">{lead}</p>
              ) : null}
              {standfirst?.map((paragraph, i) => (
                <p key={i} className="max-w-[62ch] text-small text-fog">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}
      </Shell>
    </div>
  );
}

/** Wraps page content in the site's vertical rhythm. */
export function PageBody({
  children,
  className = "pt-12 sm:pt-16",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Shell className={className}>
      <div className="space-y-20 lg:space-y-28">{children}</div>
    </Shell>
  );
}

/** A titled block inside `PageBody`. */
export function PageSection({
  id,
  index,
  label,
  heading,
  children,
  aside,
}: {
  id?: string;
  index?: string;
  label?: string;
  heading?: readonly string[];
  children: React.ReactNode;
  /** Right-hand column copy, e.g. a section note. */
  aside?: React.ReactNode;
}) {
  // Every section needs a heading for the document outline to stay valid. A
  // section with a visible heading uses it; one that only has an eyebrow label
  // gets a visually hidden h2 carrying that label, so its h3 children (cards,
  // list items) still sit at the right depth instead of skipping a level.
  const headingId = id ? `${id}-heading` : undefined;
  const accessibleName = heading ? heading.join(" ") : label;

  return (
    <section
      id={id}
      aria-labelledby={accessibleName && headingId ? headingId : undefined}
      // Clears the fixed header. globals.css sets a global scroll-margin for
      // every [id]; this wins for these sections because it is more specific
      // and the value differs from the document pages' shorter bar.
      className="scroll-mt-[calc(var(--nav-h)+2rem)] border-t border-line pt-10"
    >
      <div className="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          {label ? (
            <p className="label-xs flex items-center gap-4 text-fog">
              {index ? <span className="text-signal">{index}</span> : null}
              {label}
            </p>
          ) : null}

          {heading ? (
            <h2
              id={headingId}
              className="text-h3 mt-6 font-display uppercase text-bone"
            >
              {heading.map((line, i) => (
                <span key={`${line}-${i}`} className="block">
                  {line}
                </span>
              ))}
            </h2>
          ) : accessibleName && headingId ? (
            <h2 id={headingId} className="sr-only">
              {accessibleName}
            </h2>
          ) : null}

          {aside ? <div className="mt-6">{aside}</div> : null}
        </div>

        <div className="lg:col-span-7 lg:col-start-6">{children}</div>
      </div>
    </section>
  );
}

/** Body copy block: paragraphs at a readable measure. */
export function Prose({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <div className="space-y-5">
      {paragraphs.map((paragraph, i) => (
        <p key={i} className="text-body max-w-[62ch] text-fog">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

/** Hairline-bordered list with a red dash marker. */
export function DashList({ items }: { items: readonly string[] }) {
  return (
    <ul className="max-w-[62ch] space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-4 text-body text-fog">
          <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-signal/70" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Numbered rows: label on the left, value on the right, hairline between. */
export function DataList({
  items,
}: {
  items: readonly { label: string; value: string; href?: string }[];
}) {
  return (
    <ul className="border-t border-line">
      {items.map((item) => {
        const body = (
          <>
            <span className="label-xs shrink-0 text-fog">{item.label}</span>
            <span className="flex flex-1 items-baseline justify-between gap-6">
              <span className="text-h4 text-bone">{item.value}</span>
              {item.href ? (
                <svg
                  aria-hidden
                  width="26"
                  height="12"
                  viewBox="0 0 26 12"
                  fill="none"
                  className="shrink-0 text-red transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                >
                  <path d="M0 6h24M19 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              ) : null}
            </span>
          </>
        );

        return (
          <li key={item.label} className="group border-b border-line">
            {item.href ? (
              <a
                href={item.href}
                className="relative flex flex-col gap-2 py-6 transition-colors duration-500 sm:flex-row sm:items-center sm:justify-between sm:gap-10"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 origin-left scale-x-0 bg-white/[0.03] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100"
                />
                {body}
              </a>
            ) : (
              <div className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
                {body}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

/** Two-column card grid with a hairline top rule. */
export function CardGrid({
  items,
}: {
  items: readonly {
    number?: string;
    title: string;
    body: string;
    meta?: readonly { label: string; value: string }[];
    links?: readonly string[];
  }[];
}) {
  return (
    <ul className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2">
      {items.map((item) => (
        <li key={item.title} className="border-t border-line pt-7">
          <div className="flex items-baseline justify-between gap-6">
            <h3 className="text-h4 text-bone">{item.title}</h3>
            {item.number ? (
              <span aria-hidden className="label-xs shrink-0 text-signal">
                {item.number}
              </span>
            ) : null}
          </div>

          <p className="mt-4 text-small text-fog">{item.body}</p>

          {item.meta ? (
            <dl className="mt-6 border-l border-line pl-4">
              {item.meta.map((entry) => (
                <div key={entry.label} className="label-xs not-last:mt-2">
                  <dt className="text-fog">{entry.label}</dt>
                  <dd className="mt-1 text-small text-bone-dim">{entry.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}

          {item.links ? (
            <ul className="mt-6 space-y-2">
              {item.links.map((link) => (
                <li key={link} className="flex gap-4 text-small text-bone-dim">
                  <span aria-hidden className="mt-[0.65em] h-px w-3 shrink-0 bg-signal/70" />
                  {link}
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

/** Closing band with two actions, used at the foot of every subpage. */
export function PageClosing({
  heading,
  body,
  primary,
  secondary,
}: {
  heading: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="border-t border-line pt-10">
      <div className="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2 className="text-h3 font-display uppercase text-bone">{heading}</h2>
          <p className="mt-5 max-w-[48ch] text-body text-fog">{body}</p>
        </div>

        <div className="flex flex-col items-start gap-5 lg:col-span-4 lg:col-start-9 lg:self-end">
          <Link
            href={primary.href}
            className="label-xs group inline-flex items-center gap-3 text-bone transition-colors duration-400 hover:text-signal"
          >
            {primary.label}
            <span
              aria-hidden
              className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
            >
              →
            </span>
          </Link>

          {secondary ? (
            <Link
              href={secondary.href}
              className="label-xs group inline-flex items-center gap-3 text-fog transition-colors duration-400 hover:text-signal"
            >
              {secondary.label}
              <span
                aria-hidden
                className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/**
 * Footer shared by the subpages.
 *
 * The home page gets the full `SiteFooter`; this is the short version for the
 * editorial pages, where a four-column sitemap under a giant wordmark would
 * push the closing band a screen below the fold.
 */
export function PageFooter() {
  return (
    <footer className="border-t border-line">
      <div className="shell py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-xs text-fog">{copyrightLine()}</p>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <Link
              href="/legal"
              className="label-xs text-bone-dim transition-colors duration-400 hover:text-signal"
            >
              Legal documents
            </Link>
            <a
              href={`mailto:${brand.email}`}
              className="label-xs text-bone-dim transition-colors duration-400 hover:text-signal"
            >
              {brand.email}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
