import { FaqGroups } from "@/components/site/faq-groups";
import {
  PageBody,
  PageClosing,
  PageMasthead,
  Subpage,
} from "@/components/site/page-shell";
import { faqPage } from "@/lib/pages";

/**
 * /faq — the full answer list.
 *
 * A server component that renders every question and answer into the HTML. The
 * home page accordion animates rather than unmounts for the same reason: the
 * FAQPage structured data this route emits describes text that a crawler has to
 * be able to read. See lib/seo.ts.
 */
export function FaqPage() {
  const total = faqPage.groups.reduce((n, group) => n + group.items.length, 0);

  return (
    <Subpage>
      <PageMasthead
        label={faqPage.label}
        heading={faqPage.heading}
        lead={faqPage.lead}
        standfirst={[faqPage.standfirst]}
        meta={[
          { label: "Questions", value: String(total) },
          { label: "Subjects", value: String(faqPage.groups.length) },
        ]}
      />

      <PageBody>
        <FaqGroups groups={faqPage.groups} />

        <PageClosing
          heading={faqPage.closing.heading}
          body={faqPage.closing.body}
          primary={faqPage.closing.primary}
          secondary={faqPage.closing.secondary}
        />
      </PageBody>
    </Subpage>
  );
}
