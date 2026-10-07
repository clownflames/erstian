"use client";

import { useEffect } from "react";

import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { ActionLink } from "@/components/ui/action-link";
import { MaskedLines } from "@/components/ui/reveal";
import { Logo } from "@/components/ui/logo";
import { Shell } from "@/components/ui/section";

/**
 * Route-level error boundary.
 *
 * Without this, an unhandled render error serves Next's default error page: no
 * styles, no navigation, no way back. That is the single worst page on a site
 * whose entire pitch is "software that works", so it gets the same chrome as
 * the 404 and a real recovery action.
 *
 * `reset()` retries the segment without a full reload, which covers the common
 * case of a transient failure. The link out is there for when it does not.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // The boundary exists so this is where an unexpected failure surfaces. Log
    // it rather than swallowing it: without a log, a broken deploy looks
    // identical to a page that was never visited.
    console.error(error);
  }, [error]);

  return (
    <SmoothScrollProvider>
      <main className="relative flex min-h-[100svh] flex-col">
        <div className="shell flex h-[var(--nav-h)] items-center">
          <Logo className="h-[1.05rem]" priority sizes="120px" />
        </div>

        <Shell className="flex flex-1 flex-col justify-center py-24">
          <p className="label-xs flex items-center gap-3 text-bone-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-red" />
            Error 500
          </p>

          <MaskedLines
            lines={["Something", "broke."]}
            className="text-display mt-10 block font-display uppercase text-bone"
          />

          <p className="mt-8 max-w-[46ch] text-lead text-fog">
            This page failed to load. That is our fault, not yours. Try again,
            and if it keeps happening tell us — we would like to know.
          </p>

          {error.digest ? (
            <p className="label-xs mt-6 text-fog">
              Reference: {error.digest}
            </p>
          ) : null}

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            {/* A real <button>, not ActionLink: reset() re-renders this segment
                in place, and an anchor to "/" would navigate away instead,
                throwing away the state the retry is meant to recover. The
                styling mirrors ActionLink's solid tone minus the hover wipe,
                which is driven by pointer state that a button does not report
                the same way. */}
            <button
              type="button"
              onClick={reset}
              className="inline-flex select-none items-center justify-center bg-bone px-6 py-3.5 text-label font-medium tracking-[0.16em] uppercase text-ink transition-colors duration-500 hover:bg-red hover:text-bone sm:px-8 sm:py-4"
            >
              Try again
            </button>

            <ActionLink href="/" tone="outline">
              Back to home
            </ActionLink>
          </div>
        </Shell>
      </main>
    </SmoothScrollProvider>
  );
}
