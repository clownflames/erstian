import {
  DashList,
  PageBody,
  PageClosing,
  PageMasthead,
  PageSection,
  Prose,
  Subpage,
} from "@/components/site/page-shell";
import { updatesPage } from "@/lib/pages";

const DATE_FORMAT = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function formatDate(iso: string) {
  return DATE_FORMAT.format(new Date(`${iso}T00:00:00Z`));
}

/** Status pill. Tone follows the state so the ordering reads at a glance. */
const STATE_TONE: Record<string, string> = {
  Live: "border-signal/60 text-signal",
  "In progress": "border-line text-bone-dim",
  Planned: "border-line text-fog",
};

/** /updates — a build log rather than a press page. */
export function UpdatesPage() {
  return (
    <Subpage>
      <PageMasthead
        label={updatesPage.label}
        heading={updatesPage.heading}
        lead={updatesPage.lead}
        standfirst={[updatesPage.standfirst]}
        meta={[
          { label: "Entries", value: String(updatesPage.entries.length) },
          { label: "Last entry", value: formatDate("2026-01-15") },
        ]}
      />

      <PageBody>
        <PageSection id="log" label="The log">
          <ol className="border-t border-line">
            {updatesPage.entries.map((entry) => (
              <li key={entry.version} className="border-b border-line py-9 sm:py-11">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10">
                  <h2 className="text-h4 text-bone">{entry.title}</h2>

                  <p className="label-xs flex shrink-0 flex-wrap items-center gap-4">
                    <span
                      className={`border px-3 py-1.5 ${
                        STATE_TONE[entry.state] ?? "border-line text-fog"
                      }`}
                    >
                      {entry.state}
                    </span>
                    <time dateTime={entry.date} className="text-fog">
                      {formatDate(entry.date)}
                    </time>
                  </p>
                </div>

                <p className="label-xs mt-4 text-fog">{entry.version}</p>

                <div className="mt-6">
                  <Prose paragraphs={entry.body} />
                </div>
              </li>
            ))}
          </ol>
        </PageSection>

        <PageSection
          id="standing"
          label="Our commitment"
          heading={updatesPage.standing.heading}
        >
          <Prose
            paragraphs={[
              "Some things should not need announcing each time. These are the four, and we will publish each one when it happens rather than when it suits us.",
            ]}
          />
          <div className="mt-8">
            <DashList items={updatesPage.standing.items} />
          </div>
        </PageSection>

        <PageClosing
          heading={updatesPage.closing.heading}
          body={updatesPage.closing.body}
          primary={updatesPage.closing.primary}
          secondary={updatesPage.closing.secondary}
        />
      </PageBody>
    </Subpage>
  );
}
