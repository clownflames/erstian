import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { accessibility } from "@/lib/legal/docs/accessibility";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: accessibility.title,
  description: accessibility.description,
  path: accessibility.path,
});

export default function AccessibilityPage() {
  return <LegalPage doc={accessibility} />;
}
