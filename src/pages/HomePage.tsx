import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HeroFlowers, PetalDivider } from "../components/FlowerDecor";
import { profile } from "../data/profile";

export default function HomePage() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.title = `${profile.name} — Portfolio`;
  }, []);

  useEffect(() => {
    if (pathname === "/" && hash) {
      const id = hash.replace("#", "");
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [pathname, hash]);

  return (
    <main>
      <section className="relative min-h-[74vh] overflow-hidden px-5 pb-32 pt-32 sm:px-8 sm:pb-36 sm:pt-40">
        <div className="absolute inset-0 z-0 hero-flower-field" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-white/15 to-[var(--color-lilac)]/20"
          aria-hidden
        />
        <HeroFlowers />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200/70 bg-white/80 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[var(--color-ink-muted)] shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-yellow)] shadow-[0_0_10px_#facc15]" />
            {profile.location}
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--color-ink)] sm:text-5xl md:text-6xl md:leading-[1.05]">
            Hi — I'm{" "}
            <span className="relative inline-block">
              {profile.name.split(" ")[0]}
              <span
                className="absolute -bottom-1 left-0 right-0 -z-10 h-3 rounded-sm bg-gradient-to-r from-[var(--color-yellow-soft)] via-[var(--color-purple-soft)] to-[var(--color-yellow-soft)] sm:h-4"
                aria-hidden
              />
            </span>
            .
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-[var(--color-ink)]/90 sm:text-xl">
            {profile.tagline}
          </p>
          <p className="mt-4 max-w-xl text-base italic text-[var(--color-ink-muted)]">
            {profile.heroNote}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-yellow)] px-7 py-3 text-sm font-semibold text-purple-950 shadow-md shadow-amber-400/40 transition hover:bg-[#fde047] hover:shadow-lg"
            >
              See projects
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-purple-300/90 bg-white/90 px-7 py-3 text-sm font-medium text-[var(--color-ink)] shadow-sm backdrop-blur-sm transition hover:border-[var(--color-yellow)] hover:bg-white"
            >
              Contact
            </Link>
            <a
              href="#thesis"
              className="inline-flex items-center justify-center rounded-full border-2 border-purple-200/80 bg-purple-50/80 px-6 py-3 text-sm font-medium text-purple-900 transition hover:bg-purple-100"
            >
              Thesis & research
            </a>
          </div>
        </div>
        <PetalDivider className="absolute bottom-0 left-0 z-[1] h-12 w-full md:h-14" />
      </section>

      <section
        className="border-y border-purple-200/60 bg-gradient-to-r from-violet-50/95 via-[var(--color-yellow-soft)]/50 to-purple-50/90 px-5 py-8 sm:px-8"
        aria-labelledby="current-role-heading"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-700">Now</p>
          <h2 id="current-role-heading" className="mt-2 font-serif text-2xl font-semibold text-[var(--color-ink)] sm:text-3xl">
            {profile.currentRole.title}
            <span className="font-sans text-lg font-normal text-[var(--color-ink-muted)] sm:text-xl">
              {" "}
              · {profile.currentRole.company}
            </span>
          </h2>
          <p className="mt-1 text-sm font-medium text-violet-800">{profile.currentRole.team}</p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--color-ink-muted)]">
            {profile.currentRole.description}
          </p>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-28 border-t border-purple-100/50 bg-gradient-to-br from-[var(--color-paper)] via-purple-50/40 to-[var(--color-cream)]/80 px-5 py-20 sm:px-8"
      >
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-[var(--color-ink)] sm:text-4xl">
              A little context
            </h2>
            <p className="mt-3 text-sm font-medium uppercase tracking-widest text-purple-600">
              For visitors & collaborators
            </p>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-[var(--color-ink-muted)]">
            {profile.intro.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
            <p className="text-sm text-[var(--color-ink)]/70">
              <span className="font-medium text-[var(--color-ink)]">Outside the lab: </span>
              {profile.hobbies.join(" · ")}.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {profile.highlights.map((h) => (
            <div
              key={h.title}
              className="group rounded-2xl border border-purple-100/90 bg-white/95 p-6 shadow-md shadow-purple-200/25 transition hover:border-[var(--color-yellow)]/70 hover:shadow-lg hover:shadow-amber-200/40"
            >
              <h3 className="font-serif text-lg font-semibold text-[var(--color-ink)]">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="background"
        className="scroll-mt-28 border-t border-purple-100/60 bg-gradient-to-b from-[var(--color-paper)] via-violet-50/35 to-[var(--color-lilac)]/30 px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl font-semibold text-[var(--color-ink)] sm:text-4xl">
            Background
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--color-ink-muted)]">
            Education, experience, and skills — the same story as my CV, without duplicating every project
            here. Builds and artifacts live on the projects page.
          </p>
          <p className="mt-8">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-full border-2 border-purple-300/90 bg-white/90 px-6 py-2.5 text-sm font-medium text-[var(--color-ink)] shadow-sm transition hover:border-[var(--color-yellow)] hover:bg-white"
            >
              Browse projects →
            </Link>
          </p>

          <h3 className="mt-16 font-serif text-2xl font-semibold text-[var(--color-ink)]">Education</h3>
          <ul className="mt-6 space-y-6 border-l-2 border-violet-300/70 pl-6">
            {profile.education.map((ex) => (
              <li key={`${ex.org}-${ex.period}`} className="relative">
                <span className="absolute -left-[calc(0.5rem+2px)] top-2 h-3 w-3 rounded-full border-2 border-violet-400 bg-white" />
                <p className="font-medium text-[var(--color-ink)]">{ex.org}</p>
                <p className="text-sm text-violet-800">{ex.role}</p>
                <p className="text-xs uppercase tracking-wider text-[var(--color-ink-muted)]">{ex.period}</p>
                <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{ex.detail}</p>
              </li>
            ))}
          </ul>

          <h3 className="mt-16 font-serif text-2xl font-semibold text-[var(--color-ink)]">Experience</h3>
          <ul className="mt-6 space-y-6 border-l-2 border-amber-300/80 pl-6">
            {profile.experience.map((ex) => (
              <li key={`${ex.org}-${ex.role}-${ex.period}`} className="relative">
                <span className="absolute -left-[calc(0.5rem+2px)] top-2 h-3 w-3 rounded-full border-2 border-[var(--color-yellow)] bg-white shadow-sm shadow-amber-200/80" />
                <p className="font-medium text-[var(--color-ink)]">{ex.org}</p>
                <p className="text-sm text-purple-800">{ex.role}</p>
                <p className="text-xs uppercase tracking-wider text-[var(--color-ink-muted)]">{ex.period}</p>
                <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{ex.detail}</p>
              </li>
            ))}
          </ul>

          <h3 className="mt-16 font-serif text-2xl font-semibold text-[var(--color-ink)]">
            Skills & languages
          </h3>
          <dl className="mt-6 grid gap-4 sm:grid-cols-1">
            {profile.skills.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-purple-100/90 bg-gradient-to-br from-white to-purple-50/50 px-5 py-4 shadow-sm shadow-purple-100/60"
              >
                <dt className="text-sm font-semibold text-[var(--color-ink)]">{s.label}</dt>
                <dd className="mt-1 text-sm text-[var(--color-ink-muted)]">{s.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        id="thesis"
        className="scroll-mt-28 border-t-4 border-[var(--color-yellow)] bg-gradient-to-b from-[#5b21b6] via-[#4c1d95] to-[#3b0764] px-5 py-20 text-[var(--color-yellow-soft)] sm:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">{profile.thesis.title}</h2>
          <p className="mt-4 max-w-2xl text-purple-100/90 leading-relaxed">{profile.thesis.intro}</p>
          <ul className="mt-8 space-y-4">
            {profile.thesis.topics.map((topic) => (
              <li
                key={topic}
                className="flex gap-4 rounded-xl border border-[var(--color-yellow)]/25 bg-white/10 px-5 py-4 backdrop-blur-sm"
              >
                <span
                  className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-yellow)] shadow-[0_0_12px_#facc15]"
                  aria-hidden
                />
                <span className="leading-relaxed text-white/95">{topic}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm italic text-purple-200/90">{profile.thesis.footnote}</p>
          <p className="mt-10">
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-[var(--color-yellow)] px-6 py-2.5 text-sm font-semibold text-purple-950 shadow-md shadow-amber-500/30 transition hover:bg-[#fde047]"
            >
              Get in touch about research →
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
