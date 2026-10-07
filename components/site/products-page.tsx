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

/** /products — the categories being built, and the standards they share. */
export function ProductsPage() {
  return (
    <Subpage>
      <PageMasthead
        label={productsPage.label}
        heading={productsPage.heading}
        lead={productsPage.lead}
        standfirst={[productsPage.standfirst]}
        meta={[
          { label: "Categories", value: String(productsPage.categories.length) },
          { label: "Available now", value: "None" },
        ]}
      />

      <PageBody>
        {/* Categories -------------------------------------------------- */}
        <PageSection id="categories" label="What we build">
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
