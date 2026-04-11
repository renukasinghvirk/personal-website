/** Pastel purple blooms + wavy-ray suns (flat icon style). */

import { useId, type ComponentProps } from "react";

const RAY_COUNT = 16;

/** One wavy flame-like ray pointing up (−Y); rotated around (32,32). */
const WAVE_RAY_PATH =
  "M29.2 21.2C27 14.5 27.6 8.2 30.2 5.4 31.1 4.2 32.9 4.2 33.8 5.4 36.4 8.2 37 14.5 34.8 21.2 33.4 23.2 32 23.4 30.6 23.2 29.2 21.2Z";

/** Sun: bright yellow core, thin pastel “gap” ring, 16 curved rays (reference style). */
export function SpiralSun({
  className = "",
  size = 64,
  core = "#fde047",
  ray = "#facc15",
  gapRing = "#ddd6fe",
}: {
  className?: string;
  size?: number;
  core?: string;
  ray?: string;
  /** Ring between core and rays (lavender “cutout” look) */
  gapRing?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden>
      <g fill={ray}>
        {Array.from({ length: RAY_COUNT }).map((_, i) => (
          <path
            key={i}
            d={WAVE_RAY_PATH}
            transform={`rotate(${i * (360 / RAY_COUNT)} 32 32)`}
            opacity={0.98}
          />
        ))}
      </g>
      {/* Lavender ring — reads as negative space like the reference */}
      <circle
        cx="32"
        cy="32"
        r="10.8"
        fill="none"
        stroke={gapRing}
        strokeWidth="2.4"
      />
      <circle cx="32" cy="32" r="8.6" fill={core} />
    </svg>
  );
}

/** Original-style flower: five lilac petals, bright yellow center */
export function PurpleBloom({
  className = "",
  size = 64,
  petal = "#c4b5fd",
  center = "#facc15",
}: {
  className?: string;
  size?: number;
  petal?: string;
  center?: string;
}) {
  const petals = [0, 72, 144, 216, 288];
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden>
      {petals.map((deg, i) => (
        <ellipse
          key={i}
          cx="32"
          cy="16"
          rx="11"
          ry="19"
          fill={petal}
          opacity={0.88}
          transform={`rotate(${deg} 32 32)`}
        />
      ))}
      <circle cx="32" cy="32" r="9" fill={center} />
    </svg>
  );
}

export function FlowerMark(props: ComponentProps<typeof PurpleBloom>) {
  return <PurpleBloom {...props} />;
}

export function HeroFlowers({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 z-[1] overflow-hidden ${className}`} aria-hidden>
      <PurpleBloom
        className="absolute -left-4 top-[18%] opacity-[0.36] blur-[0.5px] md:opacity-46"
        size={118}
        petal="#e9d5ff"
        center="#fde047"
      />
      <SpiralSun
        className="absolute -right-6 top-[6%] opacity-30 md:opacity-40"
        size={108}
        gapRing="#e9d5ff"
      />
      <PurpleBloom
        className="absolute bottom-[26%] right-[6%] opacity-24 blur-[1px] md:opacity-34"
        size={86}
        petal="#ddd6fe"
        center="#fef08a"
      />
      <SpiralSun
        className="absolute bottom-[20%] left-[-2%] opacity-22 md:opacity-32"
        size={92}
        core="#fef9c3"
        ray="#fde047"
        gapRing="#ede4ff"
      />
    </div>
  );
}

export function PetalDivider({ className = "" }: { className?: string }) {
  const gid = useId();
  const fillId = `petal-fill-${gid.replace(/:/g, "")}`;
  return (
    <svg
      className={className}
      viewBox="0 0 1440 56"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={fillId} x1="0" y1="0" x2="1440" y2="0">
          <stop stopColor="#ede4ff" />
          <stop offset="0.45" stopColor="#fef9c3" />
          <stop offset="1" stopColor="#f3e8ff" />
        </linearGradient>
      </defs>
      <path
        d="M0 40 Q120 8 240 40 T480 40 T720 28 T960 40 T1200 32 T1440 40 V56 H0Z"
        fill={`url(#${fillId})`}
      />
      <path
        d="M0 44 Q180 20 360 44 T720 36 T1080 44 T1440 36"
        fill="none"
        stroke="#facc15"
        strokeWidth="2"
        strokeOpacity="0.35"
      />
    </svg>
  );
}
