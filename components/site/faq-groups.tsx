import Link from "next/link";

type FaqItem = { question: string; answer: string };

type FaqGroup = { label: string; items: readonly FaqItem[] };

/**
 * Every question and answer, rendered in full.
 *
 * Server component, no accordions. Two reasons:
 *
 *   1. The FAQPage structured data emitted on /faq describes text that has to
 *      exist in the HTML. A collapsed panel whose content is not in the
 *      document is a structured-data error, not a harmless extra.
 *   2. On a page whose entire job is to be read and searched, open-by-default
 *      beats an interaction. Ctrl-F works on all of it.
 *
 * Each group gets its own heading and anchor so a question can be linked to
 * directly from the contact page or a footer.
 */
export function FaqGroups({
  groups,
}: {
  groups: readonly FaqGroup[];
}) {
  return (
    <div className="space-y-20 lg:space-y-28">
      {groups.map((group, groupIndex) => (
        <section
          key={group.label}
          id={`faq-${groupIndex + 1}`}
          aria-labelledby={`faq-${groupIndex + 1}-heading`}
          className="scroll-mt-32 border-t border-line pt-10"
        >
          <div className="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2
                id={`faq-${groupIndex + 1}-heading`}
                className="text-h3 font-display uppercase text-bone"
              >
                {group.label}
              </h2>
              <p className="label-xs mt-5 text-fog">
                {group.items.length} question
                {group.items.length === 1 ? "" : "s"}
              </p>
            </div>

            <dl className="lg:col-span-7 lg:col-start-6">
              {group.items.map((item) => (
                <div
                  key={item.question}
                  className="border-b border-line py-6 first:pt-0"
                >
                  <dt className="text-h4 text-bone">{item.question}</dt>
                  <dd className="mt-3 text-body max-w-[62ch] text-fog">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ))}

      <aside className="border-t border-line pt-10">
        <p className="text-small max-w-[62ch] text-fog">
          Documents that cover these topics in full are listed on the{" "}
          <Link
            href="/legal"
            className="text-bone underline decoration-line underline-offset-4 transition-colors duration-400 hover:decoration-signal"
          >
            legal index
          </Link>
          .
        </p>
      </aside>
    </div>
  );
}
