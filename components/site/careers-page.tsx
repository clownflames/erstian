import {
  CardGrid,
  DataList,
  PageBody,
  PageClosing,
  PageMasthead,
  PageSection,
  Prose,
  Subpage,
} from "@/components/site/page-shell";
import { careersPage } from "@/lib/pages";

/** /careers — no open roles, and everything that implies. */
export function CareersPage() {
  return (
    <Subpage title="Careers">
      <PageMasthead
        label={careersPage.label}
        heading={careersPage.heading}
        lead={careersPage.lead}
        standfirst={[careersPage.standfirst]}
        meta={[
          { label: "Open roles", value: "None" },
          { label: "Internships", value: "None" },
        ]}
      />

      <PageBody>
        {/* Where we are --------------------------------------------- */}
        <PageSection
          id="status"
          label="Status"
          heading={careersPage.status.heading}
        >
          <Prose paragraphs={careersPage.status.body} />

          <div className="mt-10">
            <DataList items={careersPage.status.channels} />
          </div>
        </PageSection>

        {/* How we work ---------------------------------------------- */}
        <PageSection
          id="how-we-work"
          label="Culture"
          heading={careersPage.howWeWork.heading}
        >
          <CardGrid
            items={careersPage.howWeWork.items.map((item) => ({
              number: item.number,
              title: item.title,
              body: item.body,
            }))}
          />
        </PageSection>

        {/* What we look for ------------------------------------------ */}
        <PageSection
          id="looking-for"
          label="The profile"
          heading={careersPage.lookingFor.heading}
        >
          <Prose paragraphs={careersPage.lookingFor.body} />

          <div className="mt-10">
            <CardGrid
              items={careersPage.lookingFor.items.map((item) => ({
                title: item.title,
                body: item.body,
              }))}
            />
          </div>
        </PageSection>

        <PageClosing
          heading={careersPage.closing.heading}
          body={careersPage.closing.body}
          primary={careersPage.closing.primary}
          secondary={careersPage.closing.secondary}
        />
      </PageBody>
    </Subpage>
  );
}
