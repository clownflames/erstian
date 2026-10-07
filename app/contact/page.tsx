import type { Metadata } from "next";

import { ContactPage } from "@/components/site/contact-page";
import { contactPage } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: contactPage.standfirst,
  path: "/contact",
});

export default function Contact() {
  return <ContactPage />;
}
