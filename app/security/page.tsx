import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { security } from "@/lib/legal/docs/security";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: security.title,
  description: security.description,
  path: security.path,
});

export default function SecurityPage() {
  return <LegalPage doc={security} />;
}
