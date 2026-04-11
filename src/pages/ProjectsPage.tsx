import { useEffect } from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";

const techTagStyles = [
  "bg-purple-100/95 text-purple-950",
  "bg-violet-100/95 text-violet-950",
  "bg-amber-100/95 text-amber-950",
] as const;

function ProjectLinks({
  demo,
  repo,
  report,
}: {
  demo: string | null;
  repo: string | null;
  report: string | null;
}) {
  const base =
    "inline-flex items-center rounded-full border border-purple-200/90 bg-white px-4 py-2 text-sm font-medium text-purple-900 transition hover:border-[var(--color-yellow)] hover:bg-purple-50/80";
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {demo ? (
        <a href={demo} target="_blank" rel="noreferrer" className={base}>
          Live demo
        </a>
      ) : null}
      {repo ? (
        <a href={repo} target="_blank" rel="noreferrer" className={base}>
          Repository
        </a>
      ) : null}
      {report ? (
        <a href={report} target="_blank" rel="noreferrer" className={base}>
          Report
        </a>
      ) : null}
      {!demo && !repo && !report ? (
        <span className="text-sm italic text-[var(--color-ink-muted)]">Links coming soon</span>
      ) : null}
    </div>
  );
}

export default function ProjectsPage() {
  useEffect(() => {
    document.title = `Projects — ${profile.name}`;
  }, []);

  return (
    <main className="border-t border-purple-100/60 bg-gradient-to-b from-[var(--color-paper)] via-violet-50/35 to-[var(--color-lilac)]/25 px-5 pb-24 pt-28 sm:px-8 sm:pt-32">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-widest text-purple-600">Projects</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
          Things I've built
        </h1>
        <p className="mt-4 text-[var(--color-ink-muted)] leading-relaxed">
          Coursework, research collaborations, and side explorations — each with a repo and/or report when
          available. For a full CV-style timeline, grab the{" "}
          <a
            href={profile.cv.pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-purple-700 underline-offset-2 hover:underline"
          >
            PDF CV
          </a>
          .
        </p>
      </div>

      <ul className="mx-auto mt-14 max-w-3xl space-y-10">
        {profile.projects.map((proj, i) => (
          <li
            key={proj.title}
            className="rounded-2xl border border-purple-100/90 bg-white p-6 shadow-md shadow-purple-200/25 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-[var(--color-ink)]">{proj.title}</h2>
                <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
                  {proj.context} · {proj.year}
                </p>
              </div>
              <span
                className="font-serif text-3xl font-bold text-purple-100 tabular-nums select-none"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-4 text-[var(--color-ink-muted)] leading-relaxed">{proj.description}</p>
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
            <ProjectLinks demo={proj.demo} repo={proj.repo} report={proj.report} />
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-16 max-w-3xl text-center">
        <Link
          to="/"
          className="text-sm font-medium text-[var(--color-ink-muted)] underline-offset-4 hover:text-purple-700 hover:underline"
        >
          ← Back to home
        </Link>
      </p>
    </main>
  );
}
