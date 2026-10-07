import type { Metadata } from "next";

import { AboutPage } from "@/components/site/about-page";
import { aboutPage } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: aboutPage.standfirst,
  path: "/about",
});

export default function About() {
  return <AboutPage />;
}
