import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { dpa } from "@/lib/legal/docs/dpa";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: dpa.title,
  description: dpa.description,
  path: dpa.path,
});

export default function DpaPage() {
  return <LegalPage doc={dpa} />;
}
