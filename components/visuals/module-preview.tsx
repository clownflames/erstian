/**
 * Schematic module previews — deliberately abstract blocks rather than product
 * screenshots. Nothing here represents a shipped interface.
 */

type Variant = "bars" | "grid" | "chart" | "list" | "form" | "orbit";

const line = "rgba(255,255,255,0.16)";
const faint = "rgba(255,255,255,0.08)";
const red = "#e2000a";

export function ModulePreview({
  variant,
  active = false,
}: {
  variant: Variant;
  active?: boolean;
}) {
  const stroke = active ? "rgba(255,255,255,0.3)" : line;

  return (
    <svg viewBox="0 0 200 120" fill="none" aria-hidden className="size-full">
      {variant === "bars" ? (
        <g stroke={stroke} strokeWidth="1">
          <rect x="14" y="16" width="60" height="88" />
          <rect x="88" y="16" width="44" height="88" stroke={faint} />
          <rect x="146" y="16" width="40" height="88" stroke={faint} />
          <line x1="26" y1="32" x2="60" y2="32" stroke={faint} />
          <line x1="26" y1="44" x2="52" y2="44" stroke={faint} />
          <rect x="26" y="60" width="34" height="6" fill={red} stroke="none" />
          <line x1="26" y1="80" x2="62" y2="80" stroke={faint} />
          <line x1="26" y1="90" x2="48" y2="90" stroke={faint} />
        </g>
      ) : null}

      {variant === "grid" ? (
        <g stroke={stroke} strokeWidth="1">
          <rect x="14" y="16" width="172" height="88" />
          <line x1="71" y1="16" x2="71" y2="104" stroke={faint} />
          <line x1="129" y1="16" x2="129" y2="104" stroke={faint} />
          <line x1="14" y1="45" x2="186" y2="45" stroke={faint} />
          <line x1="14" y1="74" x2="186" y2="74" stroke={faint} />
          <rect x="14" y="45" width="57" height="29" fill={red} fillOpacity="0.14" />
          <rect x="71" y="74" width="58" height="30" stroke={faint} />
        </g>
      ) : null}

      {variant === "chart" ? (
        <g stroke={stroke} strokeWidth="1">
          <line x1="14" y1="104" x2="186" y2="104" />
          <line x1="14" y1="16" x2="14" y2="104" stroke={faint} />
          <path d="M14 88 L48 70 L82 78 L116 48 L150 58 L186 28" />
          <circle cx="186" cy="28" r="4" fill={red} stroke="none" />
          <line x1="14" y1="60" x2="186" y2="60" stroke={faint} strokeDasharray="3 5" />
        </g>
      ) : null}

      {variant === "list" ? (
        <g stroke={stroke} strokeWidth="1">
          <rect x="14" y="16" width="172" height="20" stroke={faint} />
          <rect x="14" y="44" width="172" height="20" />
          <rect x="14" y="72" width="172" height="20" stroke={faint} />
          <rect x="24" y="23" width="8" height="6" fill={red} stroke="none" />
          <rect x="24" y="51" width="8" height="6" stroke={faint} />
          <rect x="24" y="79" width="8" height="6" stroke={faint} />
          <line x1="42" y1="26" x2="120" y2="26" stroke={faint} />
          <line x1="42" y1="54" x2="150" y2="54" stroke={faint} />
          <line x1="42" y1="82" x2="104" y2="82" stroke={faint} />
        </g>
      ) : null}

      {variant === "form" ? (
        <g stroke={stroke} strokeWidth="1">
          <rect x="14" y="20" width="172" height="30" stroke={faint} />
          <rect x="14" y="58" width="172" height="30" />
          <rect x="24" y="28" width="60" height="5" fill={red} stroke="none" />
          <line x1="24" y1="72" x2="96" y2="72" stroke={faint} />
          <rect x="120" y="64" width="52" height="18" stroke={faint} />
        </g>
      ) : null}

      {variant === "orbit" ? (
        <g stroke={stroke} strokeWidth="1">
          <circle cx="100" cy="60" r="14" />
          <circle cx="100" cy="60" r="32" stroke={faint} />
          <circle cx="100" cy="60" r="50" stroke={faint} />
          <circle cx="100" cy="10" r="3.5" fill={red} stroke="none" />
          <circle cx="143" cy="85" r="3" stroke={faint} />
          <line x1="100" y1="60" x2="100" y2="10" stroke={faint} />
          <line x1="100" y1="60" x2="143" y2="85" stroke={faint} />
        </g>
      ) : null}
    </svg>
  );
}

export const moduleVariants: Variant[] = [
  "bars",
  "grid",
  "chart",
  "list",
  "form",
  "orbit",
];
