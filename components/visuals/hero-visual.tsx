"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * An abstract "system core" built entirely from vector geometry — concentric
 * instrument rings, a rotating hex frame, node links and a perspective floor.
 * Red is used only at the nodes and one seam so the accent stays an accent.
 *
 * No WebGL, no textures: every layer is a transform, so it stays cheap and
 * degrades to a still composition under reduced motion.
 */
export function HeroVisual() {
  const reduced = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  /* Pointer parallax, written straight to the DOM.
     Going through React state would (a) re-render on every move and
     (b) deserialise the layer differently on the server and the client. */
  useEffect(() => {
    const wrap = wrapRef.current;
    const layer = layerRef.current;
    if (!wrap || !layer) return;
    if (reduced) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let frame = 0;

    const tick = () => {
      currentX += (targetX - currentX) * 0.07;
      currentY += (targetY - currentY) * 0.07;
      layer.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
      frame = window.requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      targetX = (((event.clientX - rect.left) / rect.width) * 2 - 1) * -26;
      targetY = (((event.clientY - rect.top) / rect.height) * 2 - 1) * -18;
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    frame = window.requestAnimationFrame(tick);
    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);

    return () => {
      window.cancelAnimationFrame(frame);
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, [reduced]);

  const ticks = Array.from({ length: 48 }, (_, i) => i);
  const nodes = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Red bloom --------------------------------------------------- */}
      <div className="absolute right-[-18%] top-[6%] h-[70vmin] w-[70vmin] translate-x-[8%] rounded-full bg-[radial-gradient(circle,rgba(226,0,10,0.20)_0%,rgba(226,0,10,0.06)_38%,transparent_68%)] blur-[2px] lg:right-[-6%] lg:top-[-8%]" />

      {/* Cool counter-light ------------------------------------------ */}
      <div className="absolute left-[6%] top-[38%] hidden h-[46vmin] w-[46vmin] rounded-full bg-[radial-gradient(circle,rgba(120,140,180,0.10)_0%,transparent_65%)] lg:block" />

      <div
        ref={layerRef}
        className="absolute inset-0 flex items-center justify-center will-change-transform lg:justify-end"
      >
        <div className="relative aspect-square w-[118vw] max-w-[1180px] translate-x-[6%] lg:w-[64vw] lg:max-w-[900px] lg:translate-x-[6%]">
          {/* Perspective floor ------------------------------------- */}
          <div
            className="absolute inset-x-[-40%] bottom-[-6%] h-[46%] origin-bottom [transform:perspective(560px)_rotateX(74deg)] [mask-image:linear-gradient(to_top,black,transparent_78%)]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.075) 1px, transparent 1px), linear-gradient(to top, rgba(255,255,255,0.075) 1px, transparent 1px)",
              backgroundSize: "58px 58px",
            }}
          />

          <svg
            viewBox="0 0 600 600"
            className="absolute inset-0 size-full overflow-visible"
            fill="none"
          >
            <defs>
              <radialGradient id="hv-core" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#e2000a" stopOpacity="0.55" />
                <stop offset="55%" stopColor="#e2000a" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#e2000a" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="hv-seam" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#e2000a" stopOpacity="0" />
                <stop offset="45%" stopColor="#e2000a" stopOpacity="1" />
                <stop offset="100%" stopColor="#e2000a" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Bloom behind the core */}
            <circle cx="300" cy="300" r="250" fill="url(#hv-core)" className="animate-pulse-soft" />

            {/* Outer instrument rings */}
            <circle
              cx="300"
              cy="300"
              r="288"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="1"
            />
            <g className="origin-center animate-spin-slow [transform-box:fill-box]">
              <circle
                cx="300"
                cy="300"
                r="268"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="1"
                strokeDasharray="2 14"
              />
            </g>
            <g className="origin-center animate-spin-reverse [transform-box:fill-box]">
              <circle
                cx="300"
                cy="300"
                r="240"
                stroke="rgba(255,255,255,0.09)"
                strokeWidth="1"
                strokeDasharray="46 26 4 26"
              />
            </g>

            {/* Tick ring */}
            <g className="origin-center animate-spin-slower [transform-box:fill-box]">
              {ticks.map((i) => {
                const major = i % 4 === 0;
                const angle = (i / ticks.length) * Math.PI * 2;
                const r1 = 214;
                const r2 = major ? 198 : 206;
                const x1 = 300 + Math.cos(angle) * r1;
                const y1 = 300 + Math.sin(angle) * r1;
                const x2 = 300 + Math.cos(angle) * r2;
                const y2 = 300 + Math.sin(angle) * r2;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={major ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.09)"}
                    strokeWidth="1"
                  />
                );
              })}
            </g>

            {/* Rotating hex frames */}
            <g className="origin-center animate-spin-slow [transform-box:fill-box]">
              <polygon
                points={hexagon(300, 300, 176)}
                stroke="rgba(255,255,255,0.13)"
                strokeWidth="1"
              />
              <polygon
                points={hexagon(300, 300, 152, Math.PI / 6)}
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="1"
              />
            </g>
            <g className="origin-center animate-spin-reverse [transform-box:fill-box]">
              <polygon
                points={hexagon(300, 300, 118, Math.PI / 6)}
                stroke="rgba(255,255,255,0.11)"
                strokeWidth="1"
              />
            </g>

            {/* Node links + red nodes */}
            <g>
              {nodes.map((i) => {
                const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
                const x = 300 + Math.cos(angle) * 176;
                const y = 300 + Math.sin(angle) * 176;
                return (
                  <g key={i}>
                    <line
                      x1="300"
                      y1="300"
                      x2={x}
                      y2={y}
                      stroke="rgba(255,255,255,0.07)"
                      strokeWidth="1"
                    />
                    <rect
                      x={x - 5}
                      y={y - 5}
                      width="10"
                      height="10"
                      fill="#e2000a"
                      className="animate-blink"
                      style={{ animationDelay: `${i * 0.42}s` }}
                    />
                    <circle
                      cx={x}
                      cy={y}
                      r="16"
                      stroke="rgba(226,0,10,0.32)"
                      strokeWidth="1"
                      fill="none"
                    />
                  </g>
                );
              })}
            </g>

            {/* Inner square + crosshair */}
            <g className="origin-center animate-spin-slower [transform-box:fill-box]">
              <rect
                x="248"
                y="248"
                width="104"
                height="104"
                stroke="rgba(255,255,255,0.16)"
                strokeWidth="1"
              />
            </g>
            <line x1="300" y1="120" x2="300" y2="176" stroke="rgba(226,0,10,0.5)" strokeWidth="1" />
            <line x1="300" y1="424" x2="300" y2="480" stroke="rgba(226,0,10,0.5)" strokeWidth="1" />
            <line x1="120" y1="300" x2="176" y2="300" stroke="rgba(226,0,10,0.5)" strokeWidth="1" />
            <line x1="424" y1="300" x2="480" y2="300" stroke="rgba(226,0,10,0.5)" strokeWidth="1" />

            <rect x="292" y="292" width="16" height="16" fill="#e2000a" />
          </svg>

          {/* Satellite modules ------------------------------------- */}
          <div className="absolute left-[4%] top-[16%] hidden w-[132px] border border-line bg-ink/40 p-3 backdrop-blur-sm xl:block">
            <div className="label-xs text-fog">Module</div>
            <div className="mt-2 h-px w-full bg-line" />
            <div className="mt-2 space-y-1.5">
              <span className="block h-1 w-4/5 bg-ash/70" />
              <span className="block h-1 w-3/5 bg-ash/50" />
              <span className="block h-1 w-2/3 bg-ash/40" />
            </div>
          </div>

          <div className="absolute bottom-[18%] right-[2%] hidden w-[150px] border border-line bg-ink/40 p-3 backdrop-blur-sm xl:block">
            <div className="label-xs text-fog">In development</div>
            <div className="mt-2.5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red animate-blink" />
              <span className="label-xs text-bone-dim">Building</span>
            </div>
            <div className="mt-3 h-px w-full bg-line" />
            <div className="mt-3 flex items-end gap-1">
              {[38, 62, 30, 78, 46, 88, 54].map((h, i) => (
                <span
                  key={i}
                  className="flex-1 bg-ash/60"
                  style={{ height: `${h * 0.24}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scan sweep -------------------------------------------------- */}
      <div className="animate-scan absolute inset-y-0 left-0 w-full bg-[linear-gradient(to_bottom,transparent,rgba(226,0,10,0.05)_45%,rgba(226,0,10,0.085)_50%,rgba(226,0,10,0.05)_55%,transparent)]" />

      {/* Vignette ----------------------------------------------------- */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_45%,transparent_35%,rgba(7,7,10,0.55)_78%,#07070a_100%)]" />
    </div>
  );
}

function hexagon(cx: number, cy: number, r: number, offset = 0): string {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (i / 6) * Math.PI * 2 + offset;
    return `${(cx + Math.cos(angle) * r).toFixed(2)},${(cy + Math.sin(angle) * r).toFixed(2)}`;
  }).join(" ");
}
