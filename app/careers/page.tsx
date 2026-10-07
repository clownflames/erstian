import type { Metadata } from "next";

import { CareersPage } from "@/components/site/careers-page";
import { careersPage } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Careers",
  description: careersPage.standfirst,
  path: "/careers",
});

export default function Careers() {
  return <CareersPage />;
}
