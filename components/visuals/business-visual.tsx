/**
 * Section 05 visual — a schematic of a business operating stack.
 * Abstract blocks and connectors only: no dashboard, no figures, no metrics.
 */

const LAYERS = [
  { label: "Tasks", density: 5 },
  { label: "Workflows", density: 4 },
  { label: "Operations", density: 3 },
  { label: "Processes", density: 2 },
] as const;

export function BusinessVisual() {
  return (
    <div aria-hidden className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_10%_100%,rgba(226,0,10,0.10),transparent_62%)]" />

      <div className="relative border border-line bg-ink-raise/60 p-6 backdrop-blur-sm sm:p-8">
        {/* Header strip */}
        <div className="flex items-center justify-between border-b border-line pb-4">
          <span className="label-xs text-fog">Operating stack</span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-red animate-blink" />
            <span className="label-xs text-bone-dim">Modular</span>
          </span>
        </div>

        <div className="relative mt-6 space-y-5">
          {/* Spine */}
          <span className="absolute bottom-3 left-[7px] top-3 w-px bg-line" />

          {LAYERS.map((layer, i) => (
            <div key={layer.label} className="relative flex items-center gap-5">
              <span className="relative z-10 size-[15px] shrink-0 border border-line bg-ink">
                <span className="absolute left-1/2 top-1/2 size-[5px] -translate-x-1/2 -translate-y-1/2 bg-red/80" />
              </span>

              <div className="flex-1">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="label-xs text-bone">{layer.label}</span>
                  <span className="font-mono text-[0.625rem] tracking-[0.22em] text-fog">
                    L0{i + 1}
                  </span>
                </div>

                <div className="mt-2.5 flex gap-1.5">
                  {Array.from({ length: 6 }, (_, s) => {
                    const on = s < layer.density;
                    return (
                      <span
                        key={s}
                        className={`h-1.5 flex-1 transition-colors duration-500 ${
                          on ? "bg-bone/25" : "bg-line"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connector geometry */}
        <svg
          viewBox="0 0 400 120"
          preserveAspectRatio="none"
          className="mt-8 h-[120px] w-full"
          fill="none"
        >
          <path
            d="M0 96 H120 L168 40 H400"
            stroke="rgba(255,255,255,0.10)"
            strokeWidth="1"
          />
          <path
            d="M0 120 H196 L244 64 H400"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
          <circle cx="168" cy="40" r="3.5" fill="#e2000a" />
          <circle cx="244" cy="64" r="2.5" fill="rgba(255,255,255,0.3)" />
        </svg>
      </div>
    </div>
  );
}
