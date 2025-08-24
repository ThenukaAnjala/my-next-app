"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import SphereLoader from "../components/SphereLoader";

export default function Home() {
  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // redirect after 2s
    const nav = setTimeout(() => router.push("/landing"), 2000);

    // critically-damped spring settle (y & scale) – smooth, no jitter
    let y = -40, s = 0.9, vy = 0, vs = 0;
    const wn = 0.25, zeta = 1.0;
    let last = performance.now(), id = 0;

    const step = (now: number) => {
      const dt = Math.min((now - last) / 1000, 1 / 30);
      last = now;

      const ay = -2 * zeta * wn * vy - wn * wn * y;
      vy += ay * (dt * 60);
      y  += vy * (dt * 60);

      const es = 1 - s;
      const as = -2 * zeta * wn * vs + wn * wn * es;
      vs += as * (dt * 60);
      s  += vs * (dt * 60);

      if (ref.current) {
        ref.current.style.setProperty("--y", `${y.toFixed(3)}px`);
        ref.current.style.setProperty("--s", `${s.toFixed(4)}`);
      }
      id = requestAnimationFrame(step);
    };

    id = requestAnimationFrame(step);
    return () => { clearTimeout(nav); cancelAnimationFrame(id); };
  }, [router]);

  // wrapper sets the transform vars read by the sphere
  return (
    <div
      ref={ref}
      style={{
        // initial CSS vars used by the loader (updated by RAF loop)
        ["--y" as any]: "0px",
        ["--s" as any]: "1",
      }}
    >
      <SphereLoader
        size={240}
        color="#4B2B88"
        highlight="#8a73ff"
        shadow="#2b176a"
        backdrop="#100716"
        rings
        label="Loading home…"
      />
      <style jsx>{`
        /* the SphereLoader reads --y/--s from its parent via transforms */
        :global(.lux-sphere) {
          transform:
            translateY(var(--y, 0px))
            scale(var(--s, 1));
        }
      `}</style>
    </div>
  );
}
