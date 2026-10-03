"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { createContext, useContext, useEffect, useState } from "react";

import { Logo } from "@/components/ui/logo";
import { EASE } from "@/lib/motion";

const IntroContext = createContext<{ done: boolean }>({ done: true });

/**
 * A short, self-contained opening sequence: the mark resolves, a hairline
 * draws across, then the whole plate wipes upward to reveal the page.
 * Rendered client-side only, so the server HTML is never blocked by it.
 */
export function SiteIntroProvider({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    // Scheduled rather than synchronous so the first paint always shows the plate.
    const timer = window.setTimeout(() => setDone(true), reduced ? 0 : 1150);
    return () => window.clearTimeout(timer);
  }, [reduced]);

  return (
    <IntroContext.Provider value={{ done }}>
      {children}
      <AnimatePresence>
        {!done ? <IntroPlate reduced={!!reduced} /> : null}
      </AnimatePresence>
    </IntroContext.Provider>
  );
}

export function useSiteIntro() {
  return useContext(IntroContext);
}

function IntroPlate({ reduced }: { reduced: boolean }) {
  if (reduced) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-ink"
      initial={{ clipPath: "inset(0 0 0% 0)" }}
      exit={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 1, ease: EASE }}
    >
      <motion.div
        className="mask-line"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.05 }}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
          style={{ transformOrigin: "left" }}
        >
          <Logo className="h-[1.4rem]" priority sizes="180px" />
        </motion.div>
      </motion.div>

      <div className="relative mt-8 h-px w-[min(220px,42vw)] overflow-hidden bg-line">
        <motion.div
          className="absolute inset-y-0 left-0 w-full bg-red"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.2 }}
          style={{ transformOrigin: "left" }}
        />
      </div>

      <motion.span
        className="label-xs mt-5 text-fog"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.45 }}
      >
        Erstian
      </motion.span>
    </motion.div>
  );
}
