import { SiteIntroProvider } from "@/components/providers/site-intro";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
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

        <SiteHeader />

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
    </SmoothScrollProvider>
  );
}
