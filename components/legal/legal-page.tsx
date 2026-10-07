import Link from "next/link";

import { Logo } from "@/components/ui/logo";
import { Shell } from "@/components/ui/section";
import { brand } from "@/lib/content";
import { relatedDocs, type LegalBlock, type LegalDoc } from "@/lib/legal";

/**
 * Shell for the legal documents.
 *
 * A server component with no client dependencies, deliberately. Two reasons:
 *
 *   1. Every word ships in the initial HTML. Legal copy that depends on
 *      hydration is legal copy a crawler may never see.
 *   2. Native anchor scrolling works. The marketing pages route clicks through
 *      Lenis, which hijacks `#` navigation; on a document with a table of
 *      contents the browser's own behaviour is both more predictable and
 *      keyboard-accessible.
 */

const DATE_FORMAT = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function formatDate(iso: string) {
  return DATE_FORMAT.format(new Date(`${iso}T00:00:00Z`));
}

/** Rough reading time, at an unhurried 200 words per minute. */
function readingTime(doc: LegalDoc): number {
  const words = doc.sections.reduce((total, section) => {
    return (
      total +
      section.blocks.reduce((sectionTotal, block) => {
        switch (block.type) {
          case "p":
          case "note":
            return sectionTotal + block.text.split(/\s+/).length;
          case "ul":
          case "ol":
            return (
              sectionTotal +
              block.items.reduce((n, item) => n + item.split(/\s+/).length, 0)
            );
          case "definition":
            return (
              sectionTotal +
              block.items.reduce(
                (n, item) =>
                  n + item.term.split(/\s+/).length + item.detail.split(/\s+/).length,
                0,
              )
            );
        }
      }, 0)
    );
  }, 0);

  return Math.max(1, Math.round(words / 200));
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "p":
      return <p className="text-body max-w-[70ch] text-fog">{block.text}</p>;

    case "ul":
      return (
        <ul className="max-w-[68ch] space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-4 text-body text-fog">
              <span
                aria-hidden
                className="mt-[0.7em] h-px w-3 shrink-0 bg-signal/70"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="max-w-[68ch] space-y-3">
          {block.items.map((item, i) => (
            <li key={item} className="flex gap-4 text-body text-fog">
              <span
                aria-hidden
                className="label-xs shrink-0 pt-[0.55em] text-signal"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );

    case "note":
      return (
        <aside className="max-w-[68ch] border-l-2 border-signal bg-surface/40 py-4 pr-5 pl-5">
          <p className="label-xs mb-3 text-signal">Worth knowing</p>
          <p className="text-small text-bone-dim">{block.text}</p>
        </aside>
      );

    case "definition":
      return (
        <dl className="max-w-[68ch] divide-y divide-line border-t border-line">
          {block.items.map((item) => (
            <div key={item.term} className="grid gap-2 py-5 sm:grid-cols-12 sm:gap-8">
              <dt className="text-h4 text-bone sm:col-span-4">{item.term}</dt>
              <dd className="text-small text-fog sm:col-span-8">{item.detail}</dd>
            </div>
          ))}
        </dl>
      );
  }
}

function Section_({ section }: { section: LegalDoc["sections"][number] }) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="scroll-mt-32 border-t border-line py-10 first:border-t-0 first:pt-0 sm:py-12"
    >
      <h2
        id={`${section.id}-heading`}
        className="text-h4 max-w-[34ch] font-display uppercase text-bone"
      >
        {section.heading}
      </h2>

      <div className="mt-5 space-y-4">
        {section.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>
    </section>
  );
}

export function LegalPage({ doc }: { doc: LegalDoc }) {
  const siblings = relatedDocs(doc.slug);

  return (
    <div className="relative flex min-h-svh flex-col">
      <a
        href="#doc"
        className="label-xs sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-110 focus:bg-bone focus:px-5 focus:py-3 focus:text-ink"
      >
        Skip to content
      </a>

      {/* Page bar ------------------------------------------------------- */}
      <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur-xl backdrop-saturate-150">
        <div className="shell flex h-[var(--nav-h)] items-center justify-between gap-6">
          {/* Title sits outside the link: inside it, the visible text would
              have to match an `aria-label` that names the destination, which
              reads as a mislabelled control. */}
          <div className="flex items-center gap-3">
            <Link href="/" aria-label={`${brand.name} — home`}>
              <Logo className="h-[1.05rem]" priority sizes="140px" />
            </Link>
            <span className="label-xs hidden text-fog sm:inline">{doc.title}</span>
          </div>

          <Link
            href="/legal"
            className="label-xs group hidden items-center gap-2 text-bone-dim transition-colors duration-400 hover:text-bone sm:flex"
          >
            All legal documents
            <span aria-hidden>→</span>
          </Link>

          <Link
            href="/"
            className="label-xs group flex items-center gap-2 text-bone-dim transition-colors duration-400 hover:text-bone"
          >
            <span aria-hidden>←</span>
            Back to site
          </Link>
        </div>
      </header>

      <main id="doc" className="flex-1 pb-[var(--spacing-section)]">
        {/* Masthead ------------------------------------------------------ */}
        <div className="border-b border-line pt-16 pb-12 sm:pt-20 sm:pb-16">
          <Shell>
            <p className="label-xs flex items-center gap-3 text-fog">
              <span className="h-1.5 w-1.5 rounded-full bg-red" />
              {doc.label}
            </p>

            <h1 className="text-display mt-8 max-w-[16ch] font-display uppercase text-bone">
              {doc.title}
            </h1>

            <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-6 border-t border-line pt-8 md:grid-cols-12">
              <p className="label-xs text-fog md:col-span-3">
                Last updated
                <time dateTime={doc.effective} className="mt-2 block text-small text-bone-dim">
                  {formatDate(doc.effective)}
                </time>
                <span className="mt-1 block text-small text-fog">
                  About {readingTime(doc)} min read
                </span>
              </p>

              <div className="space-y-4 md:col-span-7 md:col-start-6">
                {doc.intro.map((paragraph, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "text-lead max-w-[46ch] text-bone"
                        : "max-w-[62ch] text-small text-fog"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Shell>
        </div>

        {/* Contents + body ---------------------------------------------- */}
        <Shell className="pt-12 sm:pt-16">
          <div className="grid grid-cols-1 gap-x-14 gap-y-12 lg:grid-cols-12">
            <nav aria-labelledby="contents-heading" className="lg:col-span-3">
              <div className="lg:sticky lg:top-[calc(var(--nav-h)+2rem)]">
                <h2
                  id="contents-heading"
                  className="label-xs border-b border-line pb-4 text-fog"
                >
                  Contents
                </h2>

                <ol className="mt-5 space-y-3">
                  {doc.sections.map((section, i) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="group flex gap-4 text-small text-bone-dim transition-colors duration-400 hover:text-bone"
                      >
                        <span
                          aria-hidden
                          className="label-xs shrink-0 pt-0.5 text-fog transition-colors duration-400 group-hover:text-signal"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="max-w-[34ch]">{section.heading}</span>
                      </a>
                    </li>
                  ))}
                </ol>

                <Link
                  href="/#contact"
                  className="label-xs mt-8 inline-block text-bone transition-colors duration-400 hover:text-signal"
                >
                  Questions? Contact us →
                </Link>
              </div>
            </nav>

            <div className="lg:col-span-8 lg:col-start-5">
              {doc.sections.map((section) => (
                <Section_ key={section.id} section={section} />
              ))}
            </div>
          </div>
        </Shell>

        {/* Sibling documents -------------------------------------------- */}
        <Shell className="mt-20">
          <div className="border-t border-line pt-10">
            <h2 className="label-xs text-fog">Related documents</h2>

            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-3">
              {siblings.map((sibling) => (
                <li key={sibling.path}>
                  <Link
                    href={sibling.path}
                    className="group flex items-center justify-between gap-4 border-b border-line py-4 text-small text-bone-dim transition-colors duration-400 hover:text-bone"
                  >
                    {sibling.title}
                    <span
                      aria-hidden
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/legal"
              className="label-xs mt-8 inline-flex items-center gap-2 text-bone transition-colors duration-400 hover:text-signal"
            >
              See every legal document
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Shell>
      </main>

      {/* Footer --------------------------------------------------------- */}
      <footer className="border-t border-line">
        <div className="shell flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-xs text-fog">
            © {new Date().getFullYear()} {brand.legalName}. All rights reserved.
          </p>
          <a
            href={`mailto:${brand.email}`}
            className="label-xs text-bone-dim transition-colors duration-400 hover:text-signal"
          >
            {brand.email}
          </a>
        </div>
      </footer>
    </div>
  );
}
