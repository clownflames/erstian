import type { Metadata } from "next";

import { LegalIndex } from "@/components/legal/legal-index";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Legal",
  description:
    "Every Erstian legal document in one place — privacy, terms, cookies, acceptable use, security, accessibility, refunds, data processing and the site disclaimer.",
  path: "/legal",
});

export default function LegalPage() {
  return <LegalIndex />;
}
