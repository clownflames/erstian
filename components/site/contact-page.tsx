import Link from "next/link";

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

        {/* Internbird pointer ------------------------------------------ */}
        <PageSection id="internbird" label="Internbird">
          <p className="text-lead max-w-[46ch] text-bone">
            Questions about an Internbird account, application or payment?
          </p>
          <p className="mt-5 max-w-[52ch] text-body text-fog">
            {contactPage.internbird.note}
          </p>

          <Link
            href={contactPage.internbird.url}
            className="label-xs group mt-8 inline-flex items-center gap-3 border border-line px-6 py-3.5 text-bone transition-colors duration-500 hover:border-transparent hover:bg-bone hover:text-ink"
          >
            Go to {contactPage.internbird.name}
            <span
              aria-hidden
              className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
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
