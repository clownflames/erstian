"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/lib/content";

/**
 * Secondary navigation for the subpages.
 *
 * Distinct from `SiteHeader` in intent: the header carries the site's primary
 * actions and the wordmark, while this is the editorial "you are reading a
 * document" affordance — a compact list of the pages themselves, sitting in the
 * masthead rather than in a sticky bar. Keeping it out of a second sticky
 * element also avoids two fixed bars fighting over `scroll-mt`.
 *
 * Rendered as a server-compatible list of routes; `usePathname` is the only
 * reason this needs to be a client component.
 */
export function SubpageNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Pages">
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
        {navLinks.map((page) => {
          const active = pathname === page.href;

          return (
            <li key={page.href}>
              <Link
                href={page.href}
                aria-current={active ? "page" : undefined}
                className={`label-xs inline-flex items-center gap-2 transition-colors duration-400 ${
                  active ? "text-bone" : "text-fog hover:text-bone"
                }`}
              >
                {active ? (
                  <span aria-hidden className="h-1 w-1 rounded-full bg-signal" />
                ) : null}
                {page.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
