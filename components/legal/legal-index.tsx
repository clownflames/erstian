import Link from "next/link";

import { Logo } from "@/components/ui/logo";
import { Shell } from "@/components/ui/section";
import { brand } from "@/lib/content";
import { groupedDocs } from "@/lib/legal";

/**
 * The /legal index.
 *
 * A single page listing every document with a one-line summary, grouped by
 * subject. Exists because nine separate links scattered across a footer is a
 * poor way to answer "what does Erstian do with my data?" — this page lets
 * someone read the summaries and then decide which document to open.
 */
export function LegalIndex() {
  const groups = groupedDocs();

  return (
    <div className="relative flex min-h-svh flex-col">
      <a
        href="#legal"
        className="label-xs sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-110 focus:bg-bone focus:px-5 focus:py-3 focus:text-ink"
      >
        Skip to content
      </a>

      {/* Page bar ------------------------------------------------------- */}
      <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur-xl backdrop-saturate-150">
        <div className="shell flex h-[var(--nav-h)] items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Link href="/" aria-label={`${brand.name} — home`}>
              <Logo className="h-[1.05rem]" priority sizes="140px" />
            </Link>
            <span className="label-xs hidden text-fog sm:inline">Legal</span>
          </div>

          <Link
            href="/"
            className="label-xs group flex items-center gap-2 text-bone-dim transition-colors duration-400 hover:text-bone"
          >
            <span aria-hidden>←</span>
            Back to site
          </Link>
        </div>
      </header>

      <main id="legal" className="flex-1 pb-[var(--spacing-section)]">
        {/* Masthead ------------------------------------------------------ */}
        <div className="border-b border-line pt-16 pb-12 sm:pt-20 sm:pb-16">
          <Shell>
            <p className="label-xs flex items-center gap-3 text-fog">
              <span className="h-1.5 w-1.5 rounded-full bg-red" />
              Legal
            </p>

            <h1 className="text-display mt-8 max-w-[14ch] font-display uppercase text-bone">
              Every document, in one place
            </h1>

            <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-6 border-t border-line pt-8 md:grid-cols-12">
              <p className="label-xs text-fog md:col-span-3">
                {groups.reduce((n, entry) => n + entry.docs.length, 0)} documents
                <span className="mt-1 block text-small text-fog">
                  {groups.length} subjects
                </span>
              </p>

              <div className="space-y-4 md:col-span-7 md:col-start-6">
                <p className="text-lead max-w-[46ch] text-bone">
                  Everything Erstian publishes about your data, your money and
                  how we operate, written to be read rather than to be survived.
                </p>
                <p className="max-w-[62ch] text-small text-fog">
                  Every document here is the operative version. If you have a
                  copy of one saved from earlier, check this page before relying
                  on it — the date at the top of each document tells you when it
                  last changed.
                </p>
              </div>
            </div>
          </Shell>
        </div>

        {/* Groups -------------------------------------------------------- */}
        <Shell className="pt-12 sm:pt-16">
          <div className="space-y-20 lg:space-y-28">
            {groups.map((entry) => (
              <section
                key={entry.group.id}
                aria-labelledby={`group-${entry.group.id}`}
                className="border-t border-line pt-10"
              >
                <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    <h2
                      id={`group-${entry.group.id}`}
                      className="text-h3 font-display uppercase text-bone"
                    >
                      {entry.group.title}
                    </h2>
                    <p className="mt-4 max-w-[34ch] text-small text-fog">
                      {entry.group.note}
                    </p>
                  </div>

                  <ul className="lg:col-span-7 lg:col-start-6">
                    {entry.docs.map((doc) => (
                      <li key={doc.slug}>
                        <Link
                          href={doc.path}
                          className="group block border-t border-line py-7 last:border-b"
                        >
                          <div className="flex items-baseline justify-between gap-6">
                            <h3 className="text-h4 text-bone transition-colors duration-400 group-hover:text-signal">
                              {doc.title}
                            </h3>
                            <span
                              aria-hidden
                              className="text-signal transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                            >
                              →
                            </span>
                          </div>

                          <p className="mt-3 max-w-[54ch] text-small text-fog">
                            {doc.summary}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            ))}
          </div>
        </Shell>

        {/* Footer band --------------------------------------------------- */}
        <Shell className="mt-24">
          <div className="grid grid-cols-1 gap-x-12 gap-y-8 border-t border-line pt-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="text-h4 text-bone">
                Something here unclear, or wrong?
              </p>
              <p className="mt-4 max-w-[46ch] text-body text-fog">
                Write to us and say so. A legal document nobody can follow is
                not doing its job, and we would rather fix it than defend it.
              </p>
            </div>

            <div className="lg:col-span-4 lg:col-start-9 lg:self-end">
              <a
                href={`mailto:${brand.email}`}
                className="label-xs inline-flex items-center gap-2 text-bone transition-colors duration-400 hover:text-signal"
              >
                {brand.email}
                <span aria-hidden>→</span>
              </a>
              <p className="label-xs mt-4 text-fog">
                <Link
                  href="/#contact"
                  className="transition-colors duration-400 hover:text-signal"
                >
                  Or use the contact page
                </Link>
              </p>
            </div>
          </div>
        </Shell>
      </main>

      {/* Footer --------------------------------------------------------- */}
      <footer className="border-t border-line">
        <div className="shell flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-xs text-fog">
            © {new Date().getFullYear()} {brand.legalName}. All rights reserved.
          </p>
          <Link
            href="/"
            className="label-xs text-bone-dim transition-colors duration-400 hover:text-signal"
          >
            {brand.name} — home
          </Link>
        </div>
      </footer>
    </div>
  );
}
