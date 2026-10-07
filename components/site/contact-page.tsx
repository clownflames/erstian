import {
  CardGrid,
  DashList,
  DataList,
  PageBody,
  PageClosing,
  PageMasthead,
  PageSection,
  Prose,
  Subpage,
} from "@/components/site/page-shell";
import { contactPage } from "@/lib/pages";

/** /contact — channels, what happens after you write, and how to be useful. */
export function ContactPage() {
  return (
    <Subpage>
      <PageMasthead
        label={contactPage.label}
        heading={contactPage.heading}
        lead={contactPage.lead}
        standfirst={[contactPage.standfirst]}
        meta={[
          { label: "Channels", value: String(contactPage.channels.length) },
          { label: "Form", value: "None, by choice" },
        ]}
      />

      <PageBody>
        {/* Channels --------------------------------------------------- */}
        <PageSection id="channels" label="Where to write">
          <DataList
            items={contactPage.channels.map((channel) => ({
              label: channel.label,
              value: channel.value,
              href: channel.href,
            }))}
          />

          <div className="mt-12">
            <CardGrid
              items={contactPage.channels.map((channel) => ({
                title: channel.label,
                body: channel.bestFor,
                meta: [{ label: "Reply", value: channel.response }],
              }))}
            />
          </div>
        </PageSection>

        {/* What happens next ------------------------------------------ */}
        <PageSection
          id="expectations"
          label="After you write"
          heading={contactPage.expectations.heading}
        >
          <CardGrid
            items={contactPage.expectations.steps.map((step) => ({
              number: step.number,
              title: step.title,
              body: step.body,
            }))}
          />
        </PageSection>

        {/* Being helpful ---------------------------------------------- */}
        <PageSection
          id="helpful"
          label="Helpful detail"
          heading={contactPage.helpful.heading}
        >
          <DashList items={contactPage.helpful.items} />
        </PageSection>

        {/* The honest note --------------------------------------------- */}
        <PageSection
          id="note"
          label="Worth saying"
          heading={contactPage.note.heading}
        >
          <Prose paragraphs={[contactPage.note.body]} />
        </PageSection>

        <PageClosing
          heading={contactPage.closing.heading}
          body={contactPage.closing.body}
          primary={contactPage.closing.primary}
          secondary={contactPage.closing.secondary}
        />
      </PageBody>
    </Subpage>
  );
}
