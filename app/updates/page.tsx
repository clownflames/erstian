import type { Metadata } from "next";

import { UpdatesPage } from "@/components/site/updates-page";
import { updatesPage } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Updates",
  description: updatesPage.standfirst,
  path: "/updates",
});

export default function Updates() {
  return <UpdatesPage />;
}
