import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { disclaimer } from "@/lib/legal/docs/disclaimer";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: disclaimer.title,
  description: disclaimer.description,
  path: disclaimer.path,
});

export default function DisclaimerPage() {
  return <LegalPage doc={disclaimer} />;
}
