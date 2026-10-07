"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { useSmoothScroll } from "@/components/providers/smooth-scroll";
import { ActionLink } from "@/components/ui/action-link";
import { Logo } from "@/components/ui/logo";
import { brand, navLinks } from "@/lib/content";
import { EASE } from "@/lib/motion";

/**
 * Primary site header.
 *
 * Shared by the home page and every subpage, which is why the nav is entirely
 * routes rather than a mix of routes and `#hash` section links. The active item
 * comes from `usePathname` rather than scroll position: a link that navigates
 * away cannot also be "the section you are looking at".
 *
 * The scroll-progress hairline is the home page's only scroll-dependent state,
 * and it is cheap enough to keep everywhere.
 */
export function SiteHeader({ showProgress = false }: { showProgress?: boolean }) {
  // `scrollTo` is deliberately not destructured: the only in-page CTA below
  // (#contact) is handled inside ActionLink, which owns its own scroll logic.
  const { lock, unlock, progress } = useSmoothScroll();
  const pathname = usePathname();
  const reduced = useReducedMotion();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  /* --- condensed state ---------------------------------------------------- */
  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* --- mobile menu: scroll lock, escape, focus ---------------------------- */
  useEffect(() => {
    if (!menuOpen) return;

    lock();
    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const firstLink = panelRef.current?.querySelector<HTMLElement>("a");
    firstLink?.focus();

    return () => {
      unlock();
      body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, lock, unlock]);

  const isActive = (href: string) => pathname === href;

  /**
   * The "Get Started" CTA.
   *
   * On the home page it scrolls to the in-page contact section. Everywhere else
   * there is no `#contact` to scroll to, so it navigates to /contact — otherwise
   * the same link silently does nothing on every subpage.
   */
  const ctaHref = pathname === "/" ? "#contact" : "/contact";

  return (
    <>
      {/* Scroll progress ------------------------------------------------- */}
      {showProgress ? (
        <div
          aria-hidden
          className="pointer-events-none fixed inset-x-0 top-0 z-60 h-px bg-line/50"
        >
          <motion.div
            className="h-full origin-left bg-red"
            style={{ scaleX: reduced ? 1 : progress }}
            transition={{ duration: 0.1 }}
          />
        </div>
      ) : null}

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled || menuOpen
            ? "border-b border-line bg-ink/72 backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="shell flex h-[var(--nav-h)] items-center justify-between gap-6"
        >
          <Link href="/" aria-label={`${brand.name} — home`}>
            <Logo className="h-[1.05rem]" priority sizes="140px" />
          </Link>

          {/* Desktop links ------------------------------------------------ */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className="group relative flex items-center gap-2 px-4 py-2.5"
                  >
                    <span
                      className={`label-xs transition-colors duration-400 ${
                        active ? "text-bone" : "text-bone-dim group-hover:text-bone"
                      }`}
                    >
                      {link.label}
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

          <div className="flex items-center gap-3">
            <ActionLink
              href={ctaHref}
              tone="outline"
              withArrow={false}
              className="hidden !px-5 !py-2.5 text-label lg:inline-flex"
            >
              Get Started
            </ActionLink>

            <button
              ref={triggerRef}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="group relative flex h-10 w-10 items-center justify-center lg:hidden"
            >
              <span className="sr-only">
                {menuOpen ? "Close menu" : "Open menu"}
              </span>
              <span aria-hidden className="flex w-5 flex-col gap-[5px]">
                <span
                  className={`h-px w-full bg-bone transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    menuOpen ? "translate-y-[3px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-px w-full bg-bone transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    menuOpen ? "-translate-y-[3px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu ------------------------------------------------------ */}
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-40 flex flex-col bg-ink lg:hidden"
            initial={reduced ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            animate={reduced ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
            exit={reduced ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: reduced ? 0.2 : 0.7, ease: EASE }}
          >
            <div className="h-[var(--nav-h)] shrink-0" />

            <ul className="flex flex-1 flex-col justify-center gap-1 px-[var(--spacing-gutter)]">
              {navLinks.map((link, i) => {
                const active = isActive(link.href);

                return (
                  <motion.li
                    key={link.href}
                    initial={reduced ? undefined : { opacity: 0, y: 24 }}
                    animate={reduced ? undefined : { opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      ease: EASE,
                      delay: reduced ? 0 : 0.18 + i * 0.06,
                    }}
                    className="border-b border-line"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className="flex items-baseline gap-5 py-4"
                    >
                      <span aria-hidden className="label-xs text-signal">
                        0{i + 1}
                      </span>
                      <span
                        className={`text-hero-sub font-display uppercase leading-none ${
                          active ? "text-bone" : "text-bone"
                        }`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              className="px-[var(--spacing-gutter)] pb-10"
              initial={reduced ? undefined : { opacity: 0 }}
              animate={reduced ? undefined : { opacity: 1 }}
              transition={{ duration: 0.6, delay: reduced ? 0 : 0.55 }}
            >
              <ActionLink
                href={ctaHref}
                onNavigate={() => setMenuOpen(false)}
                className="w-full justify-center"
              >
                Get Started
              </ActionLink>

              <a
                href={`mailto:${brand.email}`}
                className="label-xs mt-6 block text-fog"
              >
                {brand.email}
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
