"use client";

import Lenis from "lenis";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type SmoothScrollValue = {
  /** Scrolls to an element or hash, offset for the fixed header. */
  scrollTo: (target: string | HTMLElement, offset?: number) => void;
  /** Locks scrolling (used by the mobile menu). */
  lock: () => void;
  /** Releases the scroll lock. */
  unlock: () => void;
  /** 0 → 1 progress through the document. */
  progress: number;
};

const SmoothScrollContext = createContext<SmoothScrollValue | null>(null);

const NAV_OFFSET = -8;

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.085,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
      smoothWheel: true,
      syncTouch: false,
    });

    lenisRef.current = lenis;
    const unsubscribe = lenis.on("scroll", ({ scroll, limit }) => {
      setProgress(limit > 0 ? Math.min(1, Math.max(0, scroll / limit)) : 0);
    });

    return () => {
      unsubscribe();
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = useCallback(
    (target: string | HTMLElement, extraOffset = 0) => {
      const lenis = lenisRef.current;
      const element =
        typeof target === "string"
          ? document.querySelector<HTMLElement>(target)
          : target;

      if (!element) return;

      if (lenis) {
        lenis.scrollTo(element, {
          offset: NAV_OFFSET + extraOffset,
          duration: 1.35,
        });
        return;
      }

      element.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [],
  );

  const lock = useCallback(() => {
    lenisRef.current?.stop();
  }, []);

  const unlock = useCallback(() => {
    lenisRef.current?.start();
  }, []);

  const value = useMemo(
    () => ({ scrollTo, lock, unlock, progress }),
    [scrollTo, lock, unlock, progress],
  );

  return (
    <SmoothScrollContext.Provider value={value}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

export function useSmoothScroll() {
  const ctx = useContext(SmoothScrollContext);
  if (!ctx) {
    throw new Error("useSmoothScroll must be used inside SmoothScrollProvider");
  }
  return ctx;
}
