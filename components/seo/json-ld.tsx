type JsonLdProps = {
  data: Record<string, unknown>;
};

/**
 * Emits a schema.org JSON-LD block.
 *
 * `<` is escaped to `<` so the payload can never terminate the script
 * element early — the one escape JSON.stringify does not perform on its own.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}