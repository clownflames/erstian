import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { acceptableUse } from "@/lib/legal/docs/acceptable-use";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: acceptableUse.title,
  description: acceptableUse.description,
  path: acceptableUse.path,
});

export default function AcceptableUsePage() {
  return <LegalPage doc={acceptableUse} />;
}
