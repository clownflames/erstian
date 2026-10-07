import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { refunds } from "@/lib/legal/docs/refunds";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: refunds.title,
  description: refunds.description,
  path: refunds.path,
});

export default function RefundPolicyPage() {
  return <LegalPage doc={refunds} />;
}
