import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { terms } from "@/lib/legal/docs/terms";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: terms.title,
  description: terms.description,
  path: terms.path,
});

export default function TermsPage() {
  return <LegalPage doc={terms} />;
}
