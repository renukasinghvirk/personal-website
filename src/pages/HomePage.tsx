import { useEffect } from "react";
import ProjectCarousel from "../components/ProjectCarousel";
import { HeroFlowers, PetalDivider } from "../components/FlowerDecor";
import { profile } from "../data/profile";

const githubProfileUrl =
  profile.contact.links.find((l) => l.label === "GitHub")?.href ?? "https://github.com/renukasinghvirk";
const featuredProjects = [
  {
    title: "Logitech Europe SA",
    context: "Software (SW) Analytics team",
    year: "2026",
    description:
      "I'm currently an AI & Data Science intern at Logitech Europe SA, working on agent-based systems that automate analysis workflows and help teams make faster, better-informed decisions.",
    tech: ["AI agents", "Data science", "Automation"],
    demo: null,
    repo: null,
    report: null,
  },
  ...profile.projects.filter((p) => p.title !== "Signal & image processing lab"),
] as const;

export default function HomePage() {
  useEffect(() => {
    document.title = `${profile.name} — Home`;
  }, []);

  return (
    <main className="flex min-h-full flex-col">
      <section className="relative flex-1 overflow-hidden px-5 pb-12 pt-24 sm:px-8 sm:pb-14 sm:pt-28">
        <div className="absolute inset-0 z-0 hero-flower-field" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-white/15 to-[var(--color-lilac)]/20"
          aria-hidden
        />
        <HeroFlowers />
        <div className="relative z-10 mx-auto max-w-6xl lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-x-10 lg:gap-y-8 xl:gap-x-14">
          <header className="max-w-xl lg:pt-1">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-200/70 bg-white/80 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[var(--color-ink-muted)] shadow-sm backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-yellow)] shadow-[0_0_10px_#facc15]" />
              {profile.location}
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--color-ink)] sm:text-5xl md:text-6xl md:leading-[1.05]">
              Hi! I'm{" "}
              <span className="relative inline-block">
                {profile.name.split(" ")[0]}
                <span
                  className="absolute -bottom-1 left-0 right-0 -z-10 h-3 rounded-sm bg-gradient-to-r from-[var(--color-yellow-soft)] via-[var(--color-purple-soft)] to-[var(--color-yellow-soft)] sm:h-4"
                  aria-hidden
                />
              </span>
              .
            </h1>
            <p className="mt-4 max-w-2xl text-base font-light leading-relaxed text-[var(--color-ink)]/90 sm:mt-5 sm:text-lg">
              {profile.tagline}
            </p>
            {profile.heroNote ? (
              <p className="mt-3 max-w-xl text-sm italic text-[var(--color-ink-muted)] sm:text-base">
                {profile.heroNote}
              </p>
            ) : null}
          </header>

          <div
            className="mt-10 border-t border-purple-100/70 pt-10 lg:mt-0 lg:border-t-0 lg:border-l lg:border-purple-100/70 lg:pl-10 lg:pt-0 xl:pl-14"
            aria-labelledby="home-projects-heading"
          >
            <h2
              id="home-projects-heading"
              className="font-serif text-xl font-semibold text-[var(--color-ink)] sm:text-2xl"
            >
              Recent activity
            </h2>
            <p className="mt-2 max-w-lg text-sm text-[var(--color-ink-muted)]">
              A more extensive list of my projects can be found on my{" "}
              <a
                href={githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-purple-700 underline-offset-2 hover:text-amber-700 hover:underline"
              >
                GitHub profile
              </a>
              .
            </p>
            <div className="mt-6">
              <ProjectCarousel items={featuredProjects} />
            </div>
          </div>
        </div>
        <PetalDivider className="absolute bottom-0 left-0 z-[1] h-10 w-full sm:h-12" />
      </section>
    </main>
  );
}
