import type { Metadata } from "next";
import Link from "next/link";

import { ActionLink } from "@/components/ui/action-link";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { MaskedLines } from "@/components/ui/reveal";
import { Logo } from "@/components/ui/logo";
import { Shell } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Page not found — Erstian",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <SmoothScrollProvider>
      <main className="relative flex min-h-[100svh] flex-col">
        <div className="shell flex h-[var(--nav-h)] items-center">
          <Link href="/" aria-label="Erstian — home">
            <Logo className="h-[1.05rem]" priority sizes="120px" />
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
            Everything we have so far lives on the home page.
          </p>

          <div className="mt-10">
            <ActionLink href="/">Back to home</ActionLink>
          </div>
        </Shell>
      </main>
    </SmoothScrollProvider>
  );
}
