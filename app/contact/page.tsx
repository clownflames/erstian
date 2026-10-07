import type { Metadata } from "next";

import { ContactPage } from "@/components/site/contact-page";
import { internbird } from "@/lib/content";
import { contactPage } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: contactPage.standfirst,
  path: "/contact",
  // Payment and support queries are the most likely reason someone lands here,
  // so the terms that match those intents are worth naming.
  keywords: [
    internbird.name,
    "contact support",
    "refund request",
    "payment help",
    "billing support",
  ],
});

export default function Contact() {
  return <ContactPage />;
}
