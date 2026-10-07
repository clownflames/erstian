import type { Metadata } from "next";

import { SiteIntroProvider } from "@/components/providers/site-intro";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { JsonLd } from "@/components/seo/json-ld";
import { About } from "@/components/site/about";
import { AboutCompany } from "@/components/site/about-company";
import { Approach } from "@/components/site/approach";
import { ComingSoon } from "@/components/site/coming-soon";
import { Contact } from "@/components/site/contact";
import { Faq } from "@/components/site/faq";
import { Hero } from "@/components/site/hero";
import { Products } from "@/components/site/products";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { ForBusiness, ForEverydayUsers } from "@/components/site/solutions";
import { Vision } from "@/components/site/vision";
import { WhatWeBuild } from "@/components/site/what-we-build";
import { WhyErstian } from "@/components/site/why-erstian";
import { DESCRIPTION, TITLE, absoluteUrl, faqPageJsonLd } from "@/lib/seo";

/**
 * The root layout deliberately declares no canonical, so the home page states
 * its own. `absolute` keeps the default title from picking up the
 * "%s — Erstian" template, which would render "… — Erstian — Erstian".
 */
export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/") },
};

export default function Home() {
  return (
    <SmoothScrollProvider>
      <SiteIntroProvider>
        <a
          href="#main"
          className="label-xs sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-110 focus:bg-bone focus:px-5 focus:py-3 focus:text-ink"
        >
          Skip to content
        </a>

        <SiteHeader showProgress />

        <main id="main">
          <Hero />
          <About />
          <WhatWeBuild />
          <Approach />
          <Products />
          <ForBusiness />
          <ForEverydayUsers />
          <WhyErstian />
          <Vision />
          <AboutCompany />
          <ComingSoon />
          <Contact />
          <Faq />
        </main>

        <SiteFooter />
      </SiteIntroProvider>
      {/* FAQPage markup belongs to this route only — see faqPageJsonLd(). */}
      <JsonLd data={faqPageJsonLd()} />
    </SmoothScrollProvider>
  );
}
