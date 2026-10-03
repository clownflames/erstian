"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Logo } from "@/components/ui/logo";
import { useSmoothScroll } from "@/components/providers/smooth-scroll";
import { brand, footer } from "@/lib/content";
import { EASE } from "@/lib/motion";

export function SiteFooter() {
  const { scrollTo } = useSmoothScroll();
  const reduced = useReducedMotion();

  const handleAnchor = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;
    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;
    event.preventDefault();
    scrollTo(target, 0);
  };

  const year = 2026;

  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink">
      {/* Wordmark block --------------------------------------------- */}
      <div className="shell pt-20 lg:pt-28">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-6">
            <Logo
              className="h-[clamp(1.9rem,4.6vw,3.4rem)]"
              sizes="(max-width: 640px) 250px, 440px"
            />
            <p className="max-w-[24ch] text-lead text-bone-dim">
              {footer.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="lg:max-w-[46%]">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
              {footer.columns.map((column) => (
                <div key={column.title}>
                  <h2 className="label-xs text-fog">{column.title}</h2>
                  <ul className="mt-5 space-y-3">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          onClick={(e) => handleAnchor(e, link.href)}
                          className="group relative inline-flex text-small text-bone-dim transition-colors duration-400 hover:text-bone"
                        >
                          {link.label}
                          <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-red transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:origin-left group-hover:scale-x-100" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Social ------------------------------------------------------- */}
      <div className="shell mt-16 lg:mt-24">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-line pt-8">
          <span className="label-xs text-fog">Elsewhere</span>
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
            {footer.social.map((item, i) => (
              <motion.li
                key={item.label}
                initial={reduced ? undefined : { opacity: 0, y: 10 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.05 }}
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center gap-2 text-small text-bone-dim transition-colors duration-400 hover:text-bone"
                >
                  {item.label}
                  <svg
                    aria-hidden
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="text-fog transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
                  >
                    <path
                      d="M3 9 9 3M9 3H4.5M9 3v4.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>
                </a>
              </motion.li>
            ))}
          </ul>

          <a
            href={`mailto:${brand.email}`}
            className="label-xs ml-auto text-bone transition-colors duration-400 hover:text-signal"
          >
            {brand.email}
          </a>
        </div>
      </div>

      {/* Bottom bar --------------------------------------------------- */}
      <div className="shell mt-14 pb-10 lg:mt-20">
        <div className="flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-xs text-fog">{footer.legal}</p>
          <p className="label-xs text-fog">Built from the ground up · {year}</p>
        </div>
      </div>

      {/* Oversized wordmark, clipped by the viewport bottom ------------ */}
      <div aria-hidden className="relative select-none">
        <span className="pointer-events-none block translate-y-[18%] text-center font-display text-[clamp(5rem,19vw,17rem)] font-bold uppercase leading-[0.78] tracking-[-0.05em] watermark">
          Erstian
        </span>
      </div>
    </footer>
  );
}
