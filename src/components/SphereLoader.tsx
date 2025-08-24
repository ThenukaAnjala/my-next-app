"use client";

import React from "react";

type Props = {
  /** Diameter in px */
  size?: number;
  /** Main sphere color */
  color?: string;         // base violet
  /** Page/background color behind the loader */
  backdrop?: string;
  /** Extra highlight tint */
  highlight?: string;
  /** Deep shadow tint */
  shadow?: string;
  /** Whether to show the translucent rings */
  rings?: boolean;
  /** ARIA label for screen readers */
  label?: string;
};

export default function SphereLoader({
  size = 240,
  color = "#4B2B88",
  backdrop = "#100716",
  highlight = "#8a73ff",
  shadow = "#2b176a",
  rings = true,
  label = "Loading",
}: Props) {
  // expose values via CSS vars -> easy theming
  const styleVars: React.CSSProperties = {
    // container bg (so you can drop this anywhere)
    background: backdrop,
    // sphere tuning
    ["--size" as any]: `${size}px`,
    ["--violet" as any]: color,
    ["--violet-hi" as any]: highlight,
    ["--violet-dark" as any]: shadow,
    ["--bloom" as any]: "rgba(138,115,255,0.5)",
  };

  return (
    <div
      className="loader-wrap"
      role="status"
      aria-live="polite"
      aria-label={label}
      style={styleVars}
    >
      <div className={`lux-sphere ${rings ? "with-rings" : ""}`}>
        {/* specular sweep layer */}
        <i aria-hidden="true" />
      </div>

      {/* Visually hidden label for screen readers */}
      <span className="sr-only">{label}</span>

      <style jsx>{`
        .loader-wrap {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lux-sphere {
          width: var(--size);
          height: var(--size);
          border-radius: 50%;
          position: relative;
          will-change: transform, filter, box-shadow;
          backface-visibility: hidden;

          /* Centered, silky 3D shading + micro-bloom */
          background:
            radial-gradient(closest-side at 50% 50%, rgba(255,255,255,0.42), rgba(255,255,255,0.0) 60%),
            radial-gradient(circle at 50% 50%, var(--violet-hi) 0%, var(--violet) 46%, var(--violet-dark) 98%),
            radial-gradient(circle at 46% 44%, rgba(255,255,255,0.06), rgba(255,255,255,0) 65%);
          box-shadow:
            inset -18px -24px 42px rgba(0,0,0,.45),
            inset 16px 16px 28px rgba(255,255,255,.15),
            0 34px 80px rgba(75,43,136,.42);

          /* breathing glow + gentle parallax tilt */
          animation:
            breathe 3.4s ease-in-out infinite,
            tilt 8s ease-in-out infinite;
        }

        /* outer glass rings (counter-rotate for depth) */
        .with-rings::after{
          content:"";
          position:absolute;
          inset: calc(var(--size) * -0.18);
          border-radius:50%;
          background:
            radial-gradient(circle at 50% 50%,
              rgba(138,115,255,.25) 0%,
              rgba(138,115,255,.14) 55%,
              rgba(138,115,255,0) 78%);
          filter: blur(1.4px);
          animation: ring 10s linear infinite;
        }
        .with-rings::before{
          content:"";
          position:absolute;
          inset: calc(var(--size) * -0.08);
          border-radius:50%;
          background:
            radial-gradient(circle,
              rgba(138,115,255,.28) 0%,
              rgba(138,115,255,.12) 60%,
              rgba(138,115,255,0) 80%);
          mix-blend-mode: screen;
          animation: ringReverse 12s linear infinite;
        }

        /* specular sweep */
        .lux-sphere > i{
          position:absolute; inset:0; border-radius:50%;
          background:
            conic-gradient(from 0deg,
              rgba(255,255,255,0) 0deg,
              rgba(255,255,255,0.18) 24deg,
              rgba(255,255,255,0) 110deg);
          mix-blend-mode: screen;
          animation: sweep 3.6s linear infinite;
          content:"";
          display:block;
          pointer-events:none;
        }

        /* Keyframes */
        @keyframes breathe{
          0%,100%{ filter: drop-shadow(0 0 0 var(--bloom)); }
          50%     { filter: drop-shadow(0 10px 22px var(--bloom)); }
        }
        @keyframes tilt{
          0%,100%{ transform: rotateX(0deg) rotateY(0deg); }
          50%    { transform: rotateX(6deg) rotateY(-6deg); }
        }
        @keyframes ring{ from{ transform: rotate(0deg);} to{ transform: rotate(360deg);} }
        @keyframes ringReverse{ from{ transform: rotate(0deg);} to{ transform: rotate(-360deg);} }
        @keyframes sweep{ from{ transform: rotate(0deg);} to{ transform: rotate(360deg);} }

        /* reduced motion: keep it classy for accessibility */
        @media (prefers-reduced-motion: reduce){
          .lux-sphere,
          .with-rings::after,
          .with-rings::before,
          .lux-sphere > i { animation: none; }
        }

        /* screen reader only text */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 1px, 1px);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
    </div>
  );
}
