import type { Metadata } from "next";
import Link from "next/link";

import { ActionLink } from "@/components/ui/action-link";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { MaskedLines } from "@/components/ui/reveal";
import { Logo } from "@/components/ui/logo";
import { Shell } from "@/components/ui/section";
import { subpages } from "@/lib/pages";

export const metadata: Metadata = {
  // `absolute` opts out of the root layout's "%s — Erstian" template. Without
  // it this renders as "Page not found — Erstian — Erstian".
  title: { absolute: "Page not found" },
  description: "The page you requested could not be found.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <SmoothScrollProvider>
      <main className="relative flex min-h-[100svh] flex-col">
        <div className="shell flex h-[var(--nav-h)] items-center justify-between gap-6">
          <Link href="/" aria-label="Erstian — home">
            <Logo className="h-[1.05rem]" priority sizes="120px" />
          </Link>
          <Link
            href="/legal"
            className="label-xs text-bone-dim transition-colors duration-400 hover:text-signal"
          >
            Legal documents
          </Link>
        </div>

        <Shell className="flex flex-1 flex-col justify-center py-24">
          <p className="label-xs flex items-center gap-3 text-bone-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-red" />
            Error 404
          </p>

          <MaskedLines
            lines={["This page", "doesn't exist."]}
            className="text-display mt-10 block font-display uppercase text-bone"
          />

          <p className="mt-8 max-w-[44ch] text-lead text-fog">
            The address may have changed, or the page may never have been here.
            Everything we have so far is listed below.
          </p>

          <div className="mt-10">
            <ActionLink href="/">Back to home</ActionLink>
          </div>

          {/* Every real route, so a mistyped URL lands somewhere useful. */}
          <nav aria-labelledby="notfound-links" className="mt-20 border-t border-line pt-10">
            <h2 id="notfound-links" className="label-xs text-fog">
              Every page on this site
            </h2>

            <ul className="mt-6 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ...subpages.map((page) => ({ label: page.label, href: page.href })),
                { label: "Legal documents", href: "/legal" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between gap-4 border-b border-line py-4 text-small text-bone-dim transition-colors duration-400 hover:text-bone"
                  >
                    {item.label}
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
          </nav>
        </Shell>
      </main>
    </SmoothScrollProvider>
  );
}
