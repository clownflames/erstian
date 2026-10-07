import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { privacy } from "@/lib/legal/docs/privacy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: privacy.title,
  description: privacy.description,
  path: privacy.path,
});

export default function PrivacyPolicyPage() {
  return <LegalPage doc={privacy} />;
}
