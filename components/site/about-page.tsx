import {
  PageBody,
  PageClosing,
  PageMasthead,
  PageSection,
  Prose,
  Subpage,
} from "@/components/site/page-shell";
import { aboutPage } from "@/lib/pages";

/** /about — who Erstian is and how it works. */
export function AboutPage() {
  return (
    <Subpage title="About">
      <PageMasthead
        label={aboutPage.label}
        heading={aboutPage.heading}
        lead={aboutPage.lead}
        standfirst={[aboutPage.standfirst]}
        meta={[
          { label: "Founded", value: "2026" },
          { label: "Stage", value: "Pre-launch" },
        ]}
      />

      <PageBody>
        {aboutPage.sections.map((section) => (
          <PageSection
            key={section.index}
            id={section.index}
            index={section.index}
            label={section.label}
            heading={section.heading}
          >
            <Prose paragraphs={section.body} />
          </PageSection>
        ))}

        <PageClosing
          heading={aboutPage.closing.heading}
          body={aboutPage.closing.body}
          primary={aboutPage.closing.primary}
          secondary={aboutPage.closing.secondary}
        />
      </PageBody>
    </Subpage>
  );
}
