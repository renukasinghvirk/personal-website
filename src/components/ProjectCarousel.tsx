import { useCallback, useEffect, useRef, useState } from "react";
import RichProjectDescription from "./RichProjectDescription";
import { profile } from "../data/profile";

const INTERVAL_MS = 5500;
const withBase = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

const techTagStyles = [
  "bg-purple-100/95 text-purple-950",
  "bg-violet-100/95 text-violet-950",
  "bg-amber-100/95 text-amber-950",
] as const;

type Project = {
  title: string;
  context: string;
  year: string;
  description: string;
  tech: readonly string[];
  demo: string | null;
  repo: string | null;
  report: string | null;
};
type OrgKey = "EU" | "ELIAS" | "IDIAP" | "EPFL" | "UZH" | "LOGI";

const orgLogoByKey: Record<
  OrgKey,
  { label: string; href: string; src?: string; fallbackMark: string; fallbackClass: string }
> = {
  EU: {
    label: "European Union",
    href: "https://commission.europa.eu/",
    src: withBase("/images/logos/EU.png"),
    fallbackMark: "EU",
    fallbackClass: "bg-blue-100 text-blue-800",
  },
  ELIAS: {
    label: "ELIAS project",
    href: "https://elias-ai.eu/",
    src: withBase("/images/logos/ELIAS.png"),
    fallbackMark: "EL",
    fallbackClass: "bg-violet-100 text-violet-800",
  },
  IDIAP: {
    label: "Idiap",
    href: "https://www.idiap.ch/",
    src: withBase("/images/logos/IDIAP.png"),
    fallbackMark: "ID",
    fallbackClass: "bg-amber-100 text-amber-800",
  },
  EPFL: {
    label: "EPFL",
    href: "https://www.epfl.ch/",
    src: withBase("/images/logos/EPFL.png"),
    fallbackMark: "EP",
    fallbackClass: "bg-rose-100 text-rose-800",
  },
  UZH: {
    label: "University of Zurich",
    href: "https://www.uzh.ch/en.html",
    src: withBase("/images/logos/UZH.png"),
    fallbackMark: "UZ",
    fallbackClass: "bg-emerald-100 text-emerald-800",
  },
  LOGI: {
    label: "Logitech",
    href: "https://www.logitech.com/en-us",
    src: withBase("/images/logos/Logitech.svg"),
    fallbackMark: "LG",
    fallbackClass: "bg-slate-100 text-slate-800",
  },
};

const snapshotMetaByTitle: Record<
  string,
  {
    orgs?: OrgKey[];
    visualSrc?: string;
    visualKind?: "globe";
    visualLabel?: string;
    visualLinkUrl?: string;
    visualPlacement?: "inlineTopRight" | "side" | "below";
  }
> = {
  "Ask the Migration Reports": {
    orgs: ["EU", "ELIAS", "IDIAP", "EPFL"],
    visualSrc: withBase("/images/logos/EU.png"),
    visualLabel: "European Commission / EU visual",
    visualPlacement: "inlineTopRight",
  },
  "AI-driven transformation of hate-speech video content": {
    orgs: ["EPFL", "IDIAP"],
  },
  "Clinical ML — intrusive memory": {
    orgs: ["UZH", "EPFL"],
  },
  "World Values Survey — interactive data visualization": {
    orgs: ["EPFL"],
    visualKind: "globe",
    visualLabel: "World Values Survey globe",
    visualLinkUrl: "https://com-480-data-visualization.github.io/data-vizards/",
    visualPlacement: "side",
  },
  "Coin-image classification with AlexNet": {
    orgs: ["EPFL"],
    visualSrc: withBase("/images/logos/coins.png"),
    visualLabel: "Coin classification snapshot",
  },
  "Nintendo DS game": {
    orgs: ["EPFL"],
    visualSrc: "https://raw.githubusercontent.com/renukasinghvirk/NintendoDS_project/main/remple_tun.jpg",
    visualLabel: "Nintendo DS game",
  },
  "MCU Party embedded game": {
    orgs: ["EPFL"],
    visualSrc: "https://raw.githubusercontent.com/renukasinghvirk/MCU_project/main/assemblyphoto.png",
    visualLabel: "MCU game setup",
  },
  "OFDM acoustic transmitter / receiver": {
    orgs: ["EPFL"],
    visualSrc: "https://raw.githubusercontent.com/renukasinghvirk/OFDM_system/main/pictures/readme.png",
    visualLabel: "OFDM transmission result",
    visualPlacement: "below",
  },
  "Logitech Europe SA": {
    orgs: ["LOGI"],
    visualSrc: withBase("/images/logos/logitech.webp"),
    visualLabel: "Logitech products",
    visualPlacement: "inlineTopRight",
  },
};

export default function ProjectCarousel({ items }: { items?: readonly Project[] }) {
  const projects = items ?? profile.projects;
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const tick = useCallback(() => {
    setIndex((i) => (i + 1) % projects.length);
  }, [projects.length]);

  useEffect(() => {
    if (reducedMotion || projects.length <= 1 || paused) return;
    timerRef.current = setInterval(tick, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [reducedMotion, paused, projects.length, tick]);

  useEffect(() => {
    if (index >= projects.length) setIndex(0);
  }, [index, projects.length]);

  const goTo = (i: number) => {
    setIndex(((i % projects.length) + projects.length) % projects.length);
  };

  const proj = projects[index];
  const meta = snapshotMetaByTitle[proj.title];
  const orgs = meta?.orgs ?? (["EPFL"] as OrgKey[]);
  const logos = orgs.map((org) => orgLogoByKey[org]);
  const visualSrc = meta?.visualSrc;
  const visualKind = meta?.visualKind;
  const visualLabel = meta?.visualLabel;
  const visualLinkUrl = meta?.visualLinkUrl;
  const visualPlacement = meta?.visualPlacement ?? "side";
  const hasVisual = Boolean(visualLabel && (visualKind || visualSrc));
  const isInlineTopRight = hasVisual && visualPlacement === "inlineTopRight";
  const isBelow = hasVisual && visualPlacement === "below";
  const topLabel = orgs.includes("LOGI") ? "Internship" : "Project";

  const visualCard =
    visualLabel && (visualKind || visualSrc) ? (
      <div className="overflow-hidden rounded-xl border border-purple-100 bg-gradient-to-br from-violet-100 via-purple-50 to-amber-50 p-3">
        {visualKind === "globe" ? (
          <div className="space-y-2">
            <div className="relative flex h-32 items-center justify-center overflow-hidden rounded-lg border border-white/70 bg-gradient-to-br from-sky-100 via-cyan-100 to-blue-200 lg:h-[10.5rem]">
              <img
                src={withBase("/images/logos/Earth.gif")}
                alt="Rotating Earth"
                className="h-24 w-24 rounded-full object-cover shadow-md shadow-blue-300/40"
                loading="lazy"
                decoding="async"
              />
            </div>
            {visualLinkUrl ? (
              <a
                href={visualLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-[11px] font-medium text-purple-700 underline-offset-2 hover:text-amber-700 hover:underline"
              >
                Open website
              </a>
            ) : null}
          </div>
        ) : visualSrc ? (
          <img
            src={visualSrc}
            alt={visualLabel}
            className="h-32 w-full rounded-lg border border-white/70 bg-white p-2 object-contain lg:h-full"
            loading="lazy"
            decoding="async"
          />
        ) : null}
      </div>
    ) : null;

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-purple-200/80 bg-white/95 shadow-lg shadow-purple-200/30">
        <div
          key={proj.title}
          className="animate-carousel-fade min-h-[27rem] px-6 py-8 sm:min-h-[29rem] sm:px-10 sm:py-10"
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured projects"
          aria-live="polite"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-600">{topLabel}</p>
          <h3 className="mt-2 font-serif text-2xl font-semibold text-[var(--color-ink)] sm:text-3xl">
            {proj.title}
          </h3>
          <div
            className={`mt-4 ${hasVisual && !isInlineTopRight && !isBelow ? "grid gap-5 lg:grid-cols-[minmax(0,1fr)_12rem]" : ""}`}
          >
            <div>
              {isInlineTopRight ? (
                <div className="float-right ml-4 mb-3 w-44 sm:w-52">{visualCard}</div>
              ) : null}
              <RichProjectDescription text={proj.description} />
              <ul className="mt-4 flex flex-wrap gap-2">
                {proj.tech.map((t, ti) => (
                  <li
                    key={t}
                    className={`rounded-full px-3 py-1 text-xs font-medium ${techTagStyles[ti % techTagStyles.length]}`}
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {logos.map((logo) => (
                  <a
                    key={logo.label}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-purple-100 bg-purple-50/70 p-1.5 transition hover:border-purple-300 hover:bg-purple-100/80"
                    title={logo.label}
                    aria-label={logo.label}
                  >
                    {logo.src ? (
                      <img
                        src={logo.src}
                        alt={`${logo.label} logo`}
                        className="h-8 w-8 object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <span
                        className={`inline-flex h-4 w-4 items-center justify-center rounded-[4px] text-[9px] font-semibold ${logo.fallbackClass}`}
                      >
                        {logo.fallbackMark}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
            {hasVisual && !isInlineTopRight && !isBelow ? visualCard : null}
          </div>
          {isBelow ? <div className="mt-4">{visualCard}</div> : null}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-[var(--color-yellow)]" : "w-2.5 bg-purple-200 hover:bg-purple-300"
            }`}
            aria-label={`Show project ${i + 1} of ${projects.length}`}
            aria-pressed={i === index}
          />
        ))}
      </div>

    </div>
  );
}
