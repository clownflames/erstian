"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useState } from "react";

import { useSmoothScroll } from "@/components/providers/smooth-scroll";
import { EASE } from "@/lib/motion";

type Tone = "solid" | "outline";

/**
 * Primary / secondary action.
 *
 * · solid   — bone plate, wipes up to brand red on hover, label flips to white
 * · outline — hairline border, wipes across to bone on hover, label flips to ink
 *
 * In-page hashes are intercepted so Lenis keeps ownership of the scroll;
 * external links and `mailto:` fall through natively.
 */
export function ActionLink({
  href,
  children,
  tone = "solid",
  className = "",
  withArrow = true,
  onNavigate,
}: {
  href: string;
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  withArrow?: boolean;
  onNavigate?: () => void;
}) {
  const { scrollTo } = useSmoothScroll();
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const isHash = href.startsWith("#");

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (!isHash) return;
      const target = document.querySelector<HTMLElement>(href);
      if (!target) return;
      event.preventDefault();
      onNavigate?.();
      // Let the menu close paint before the scroll begins.
      window.requestAnimationFrame(() => scrollTo(target, 0));
    },
    [href, isHash, onNavigate, scrollTo],
  );

  const solid = tone === "solid";

  return (
    <a
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className={[
        "group relative inline-flex select-none items-center justify-center gap-4 overflow-hidden",
        "px-6 py-3.5 text-label font-medium tracking-[0.16em] uppercase sm:px-8 sm:py-4",
        solid
          ? "bg-bone text-ink transition-colors duration-500 group-hover:text-bone"
          : "border border-line text-bone transition-colors duration-500 group-hover:border-transparent group-hover:text-ink",
        className,
      ].join(" ")}
    >
      <motion.span
        aria-hidden
        className={`absolute inset-0 ${solid ? "bg-red" : "bg-bone"}`}
        initial={false}
        animate={
          solid
            ? { scaleY: hovered ? 1 : 0, originY: hovered ? 0 : 1 }
            : { scaleX: hovered ? 1 : 0, originX: hovered ? 0 : 1 }
        }
        transition={{ duration: reduced ? 0 : 0.55, ease: EASE }}
      />

      <span className="relative z-10">{children}</span>

      {withArrow ? (
        <span
          aria-hidden
          className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
        >
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
            <path d="M0 5h16M12 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </span>
      ) : null}
    </a>
  );
}

/** Understated text link with a red rule that draws in from the left. */
export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { scrollTo } = useSmoothScroll();

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (!href.startsWith("#")) return;
      const target = document.querySelector<HTMLElement>(href);
      if (!target) return;
      event.preventDefault();
      window.requestAnimationFrame(() => scrollTo(target, 0));
    },
    [href, scrollTo],
  );

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`group inline-flex items-center gap-2 text-label uppercase transition-colors duration-500 hover:text-bone ${className}`}
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-red transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:origin-left group-hover:scale-x-100" />
      </span>
      <svg
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        aria-hidden
        className="text-red transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
      >
        <path d="M0 4h12M8.5 1L12 4l-3.5 3" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    </a>
  );
}
