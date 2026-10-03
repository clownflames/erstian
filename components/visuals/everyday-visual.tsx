/**
 * Section 06 visual — the everyday rhythm: soft concentric ripples with a few
 * marked moments. Warmer and more organic than the section 05 schematic while
 * holding the same visual system.
 */

const MARKS = [
  { angle: -58, label: "Start" },
  { angle: -14, label: "Sort" },
  { angle: 32, label: "Finish" },
  { angle: 78, label: "Repeat" },
] as const;

export function EverydayVisual() {
  return (
    <div aria-hidden className="relative aspect-square w-full max-w-[520px]">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(226,0,10,0.13)_0%,rgba(226,0,10,0.04)_38%,transparent_66%)]" />

      <div className="absolute inset-[6%]">
        {/* Ripples */}
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="absolute inset-0 rounded-full border border-white/[0.055]"
            style={{
              transform: `scale(${1 - i * 0.19})`,
              animation: `erstian-pulse ${7 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 1.1}s`,
            }}
          />
        ))}

        <span className="absolute inset-[26%] rounded-full border border-white/10" />

        {/* Core */}
        <span className="absolute left-1/2 top-1/2 size-[13%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red/90 shadow-[0_0_60px_18px_rgba(226,0,10,0.28)]" />

        {/* Marked moments */}
        {MARKS.map((mark, i) => {
          const rad = (mark.angle * Math.PI) / 180;
          const x = 50 + Math.cos(rad) * 41;
          const y = 50 + Math.sin(rad) * 41;
          return (
            <span
              key={mark.label}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <span
                className={`size-2 shrink-0 border border-bone/60 bg-ink ${
                  i % 2 === 0 ? "" : "rotate-45"
                }`}
                style={{ animation: `erstian-blink ${3.4 + i * 0.5}s ease-in-out infinite` }}
              />
              <span className="label-xs whitespace-nowrap text-bone-dim">
                {mark.label}
              </span>
            </span>
          );
        })}

        {/* Quadrant hairlines */}
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/[0.05]" />
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/[0.05]" />
      </div>

      {/* Soft foreground blocks for depth */}
      <div className="absolute -bottom-2 -left-2 hidden w-[132px] border border-line bg-ink/70 p-3 backdrop-blur-sm sm:block">
        <div className="label-xs text-fog">One task</div>
        <div className="mt-2 h-px w-full bg-line" />
        <div className="mt-2 flex gap-1.5">
          <span className="h-1.5 flex-1 bg-bone/20" />
          <span className="h-1.5 w-6 bg-red" />
        </div>
      </div>
    </div>
  );
}
