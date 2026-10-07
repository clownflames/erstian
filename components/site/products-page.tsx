import Link from "next/link";

import {
  CardGrid,
  PageBody,
  PageClosing,
  PageMasthead,
  PageSection,
  Prose,
  Subpage,
} from "@/components/site/page-shell";
import { productsPage } from "@/lib/pages";

/**
 * /products — the live product first, then what is in development.
 *
 * Internbird gets its own block rather than a row in the development grid,
 * because it is the only entry a visitor can actually buy today. Prices and
 * checkout live on the Internbird site; this page's job is to say what it is,
 * who it is for, and where to get it.
 */
export function ProductsPage() {
  const live = productsPage.live;

  return (
    <Subpage>
      <PageMasthead
        label={productsPage.label}
        heading={productsPage.heading}
        lead={productsPage.lead}
        standfirst={[productsPage.standfirst]}
        meta={[
          { label: "Live products", value: "1" },
          { label: "In development", value: String(productsPage.categories.length - 1) },
        ]}
      />

      <PageBody>
        {/* Live product ---------------------------------------------- */}
        <PageSection id="internbird" label="Available now">
          <div className="border border-signal/50 bg-surface/40 p-7 sm:p-9">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
              <div>
                <p className="label-xs flex items-center gap-3 text-signal">
                  <span className="h-1.5 w-1.5 rounded-full bg-red" />
                  {live.status}
                </p>
                <h3 className="text-h3 mt-4 font-display uppercase text-bone">
                  {live.name}
                </h3>
              </div>

              <p className="label-xs shrink-0 text-fog">{live.audience}</p>
            </div>

            <p className="mt-6 max-w-[52ch] text-lead text-bone">{live.summary}</p>

            <div className="mt-6">
              <Prose paragraphs={[live.body]} />
            </div>

            <ul className="mt-8 border-t border-line">
              {live.features.map((feature: string, i: number) => (
                <li
                  key={feature}
                  className="flex items-baseline gap-5 border-b border-line py-4"
                >
                  <span aria-hidden className="label-xs shrink-0 text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-small text-bone-dim">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href={live.cta.href}
                className="label-xs group inline-flex items-center gap-3 bg-bone px-6 py-3.5 text-ink transition-colors duration-500 hover:bg-red hover:text-bone sm:px-8 sm:py-4"
              >
                {live.cta.label}
                <span
                  aria-hidden
                  className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

              <Link
                href={live.secondaryCta.href}
                className="label-xs group inline-flex items-center gap-3 text-fog transition-colors duration-400 hover:text-signal"
              >
                {live.secondaryCta.label}
                <span
                  aria-hidden
                  className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>

            <p className="mt-8 border-t border-line pt-6 text-small text-fog">
              {live.footnote}
            </p>
          </div>
        </PageSection>

        {/* In development -------------------------------------------- */}
        <PageSection
          id="in-development"
          label="In development"
          heading={["What we are", "still", "building."]}
        >
          <CardGrid
            items={productsPage.categories.map((category) => ({
              number: category.number,
              title: category.title.join(" "),
              body: category.body,
              meta: [
                { label: "Status", value: category.status },
                { label: "For", value: category.audience },
              ],
              links: category.lookingFor,
            }))}
          />
        </PageSection>

        {/* Shared standards ------------------------------------------- */}
        <PageSection
          id="standards"
          label="In common"
          heading={productsPage.principles.heading}
        >
          <CardGrid
            items={productsPage.principles.items.map((item) => ({
              number: item.number,
              title: item.title,
              body: item.body,
            }))}
          />
        </PageSection>

        {/* What is missing --------------------------------------------- */}
        <PageSection
          id="not-yet"
          label="Deliberately absent"
          heading={productsPage.notYet.heading}
        >
          <Prose paragraphs={productsPage.notYet.body} />
        </PageSection>

        <PageClosing
          heading={productsPage.closing.heading}
          body={productsPage.closing.body}
          primary={productsPage.closing.primary}
          secondary={productsPage.closing.secondary}
        />
      </PageBody>
    </Subpage>
  );
}
