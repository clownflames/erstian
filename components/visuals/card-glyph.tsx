/**
 * Four abstract glyphs — one per product category. Pure SVG, no bitmaps:
 * they read as schematic diagrams rather than icons.
 */

const stroke = "rgba(255,255,255,0.28)";
const faint = "rgba(255,255,255,0.12)";
const red = "#e2000a";

export function CardGlyph({ variant }: { variant: 0 | 1 | 2 | 3 }) {
  const common = {
    fill: "none",
    strokeWidth: 1,
    vectorEffect: "non-scaling-stroke" as const,
  };

  return (
    <svg
      viewBox="0 0 160 120"
      className="size-full"
      fill="none"
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      {variant === 0 ? (
        /* Workflow — a routed process with one live node */
        <g {...common}>
          <path d="M8 22h44M8 60h74M8 98h58" stroke={faint} />
          <rect x="60" y="14" width="34" height="16" stroke={stroke} />
          <rect x="90" y="52" width="34" height="16" stroke={red} />
          <rect x="74" y="90" width="34" height="16" stroke={stroke} />
          <path d="M52 22h8M82 60h8M66 98h8" stroke={stroke} />
          <rect x="128" y="54" width="8" height="12" fill={red} stroke="none" />
          <path d="M124 60h4" stroke={red} />
        </g>
      ) : null}

      {variant === 1 ? (
        /* Productivity — stacked intervals converging on a focus block */
        <g {...common}>
          <rect x="10" y="16" width="86" height="10" stroke={faint} />
          <rect x="10" y="34" width="120" height="10" stroke={stroke} />
          <rect x="10" y="52" width="66" height="10" stroke={faint} />
          <rect x="10" y="70" width="98" height="10" stroke={stroke} />
          <rect x="10" y="88" width="52" height="10" stroke={faint} />
          <rect x="84" y="46" width="42" height="18" stroke={red} />
          <path d="M10 112h140" stroke={faint} />
        </g>
      ) : null}

      {variant === 2 ? (
        /* Utility — a solved primitive: input, transform, output */
        <g {...common}>
          <rect x="14" y="40" width="34" height="40" stroke={stroke} />
          <path d="M62 60h34" stroke={faint} />
          <path d="M92 54l8 6-8 6" stroke={stroke} />
          <rect x="112" y="40" width="34" height="40" stroke={red} />
          <path d="M24 52h14M24 60h14M24 68h8" stroke={faint} />
          <path d="M122 52h14M122 60h14M122 68h8" stroke={faint} />
          <circle cx="145" cy="30" r="4" fill={red} stroke="none" />
        </g>
      ) : null}

      {variant === 3 ? (
        /* Future — an expanding orbit with unexplored vectors */
        <g {...common}>
          <circle cx="80" cy="60" r="18" stroke={red} />
          <circle cx="80" cy="60" r="36" stroke={faint} />
          <circle cx="80" cy="60" r="54" stroke={faint} />
          <path d="M80 60 134 26" stroke={stroke} />
          <path d="M80 60 26 94" stroke={faint} />
          <circle cx="134" cy="26" r="3.5" fill={red} stroke="none" />
          <circle cx="26" cy="94" r="3" fill={stroke} stroke="none" />
          <path d="M80 6v10M80 104v10M6 60h10M144 60h10" stroke={faint} />
        </g>
      ) : null}
    </svg>
  );
}
