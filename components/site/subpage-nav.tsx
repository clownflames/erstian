"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/ui/logo";
import { brand } from "@/lib/content";
import { subpages } from "@/lib/pages";

/**
 * Header for the standalone marketing pages.
 *
 * Two things it has to handle that the home header does not:
 *
 *   1. Every link is a real route rather than a hash, so they are `next/link`
 *      and client-side navigation applies.
 *   2. The active page comes from `usePathname`, not from scroll position.
 *
 * The mobile panel is rendered only while open rather than animated through a
 * mount, which keeps it out of the server HTML — appropriate here because every
 * link is a normal anchor that works without JavaScript.
 */
export function SubpageHeader({ title }: { title: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Escape closes the menu, and the page behind it must not scroll while it is.
  useEffect(() => {
    if (!open) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur-xl backdrop-saturate-150">
      <div className="shell flex h-[var(--nav-h)] items-center justify-between gap-6">
        {/* The page title sits outside the link. Inside it, the visible text
            would have to match the link's `aria-label`, which names the
            destination rather than the page — a label/content mismatch that
            assistive tech reads as a mislabelled control. */}
        <div className="flex items-center gap-3">
          <Link href="/" aria-label={`${brand.name} — home`}>
            <Logo className="h-[1.05rem]" priority sizes="140px" />
          </Link>
          <span className="label-xs hidden text-fog sm:inline">{title}</span>
        </div>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {subpages.map((page) => {
              const active = pathname === page.href;

              return (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    aria-current={active ? "page" : undefined}
                    className="group relative flex items-center gap-2 px-4 py-2.5"
                  >
                    <span
                      className={`label-xs transition-colors duration-400 ${
                        active ? "text-bone" : "text-bone-dim group-hover:text-bone"
                      }`}
                    >
                      {page.label}
                    </span>
                    <span
                      aria-hidden
                      className={`h-1.5 w-1.5 rounded-full bg-signal transition-opacity duration-400 ${
                        active ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <span
                      aria-hidden
                      className="absolute inset-x-4 bottom-1.5 h-px origin-left scale-x-0 bg-bone/40 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="label-xs hidden items-center gap-2 text-bone-dim transition-colors duration-400 hover:text-bone sm:flex"
          >
            <span aria-hidden>←</span>
            Home
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="subpage-menu"
            className="relative flex h-10 w-10 items-center justify-center lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="flex w-5 flex-col gap-[5px]">
              <span
                className={`h-px w-full bg-bone transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-full bg-bone transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div id="subpage-menu" ref={panelRef} className="border-t border-line bg-ink lg:hidden">
          <nav aria-label="Site" className="shell py-4">
            <ul className="flex flex-col">
              {subpages.map((page) => {
                const active = pathname === page.href;

                return (
                  <li key={page.href} className="border-b border-line last:border-b-0">
                    <Link
                      href={page.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-5 py-3.5"
                    >
                      <span
                        aria-hidden
                        className={`label-xs transition-colors duration-400 ${
                          active ? "text-signal" : "text-fog"
                        }`}
                      >
                        {String(subpages.indexOf(page) + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-h4 font-display uppercase leading-none transition-colors duration-400 ${
                          active ? "text-bone" : "text-bone-dim"
                        }`}
                      >
                        {page.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="label-xs mt-6 inline-block text-fog transition-colors duration-400 hover:text-signal"
            >
              ← Back to home
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
