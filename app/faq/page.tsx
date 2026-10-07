import type { Metadata } from "next";

import { FaqPage } from "@/components/site/faq-page";
import { JsonLd } from "@/components/seo/json-ld";
import { faqPage } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "FAQ",
  description: faqPage.standfirst,
  path: "/faq",
});

export default function Faq() {
  return (
    <>
      <FaqPage />
      {/* Every answer on this route is rendered in full rather than behind an
          interaction, so FAQPage markup here describes text a crawler can read. */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqPage.groups.flatMap((group) =>
            group.items.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          ),
        }}
      />
    </>
  );
}
