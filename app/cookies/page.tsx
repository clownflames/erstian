import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { cookies } from "@/lib/legal/docs/cookies";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: cookies.title,
  description: cookies.description,
  path: cookies.path,
});

export default function CookiePolicyPage() {
  return <LegalPage doc={cookies} />;
}
