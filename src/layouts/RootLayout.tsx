import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { profile } from "../data/profile";

function SectionLink({ id, label }: { id: string; label: string }) {
  const { pathname } = useLocation();
  const className =
    "rounded-full px-3 py-1.5 text-sm font-medium text-[var(--color-ink-muted)] transition hover:bg-purple-100/70 hover:text-[var(--color-ink)]";
  if (pathname === "/") {
    return (
      <a href={`#${id}`} className={className}>
        {label}
      </a>
    );
  }
  return (
    <Link to={`/#${id}`} className={className}>
      {label}
    </Link>
  );
}

export default function RootLayout() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-purple-200/60 bg-[var(--color-paper)]/93 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link
            to="/"
            className="max-w-[min(100%,14rem)] font-serif text-base font-semibold leading-snug tracking-tight text-[var(--color-ink)] sm:max-w-none sm:text-lg"
          >
            {profile.name}
          </Link>
          <ul className="flex flex-wrap items-center justify-end gap-1 sm:gap-6">
            <li>
              <SectionLink id="about" label="About" />
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `rounded-full px-3 py-1.5 text-sm font-medium transition ${isActive ? "bg-[var(--color-yellow-soft)] text-purple-950 ring-1 ring-purple-200/60" : "text-[var(--color-ink-muted)] hover:bg-purple-100/70 hover:text-[var(--color-ink)]"}`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <SectionLink id="background" label="Background" />
            </li>
            <li>
              <SectionLink id="thesis" label="Research" />
            </li>
            <li>
              <a
                href={profile.cv.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-3 py-1.5 text-sm font-medium text-[var(--color-ink-muted)] transition hover:bg-purple-100/70 hover:text-[var(--color-ink)]"
              >
                CV
              </a>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `rounded-full px-3 py-1.5 text-sm font-medium transition ${isActive ? "bg-[var(--color-yellow-soft)] text-purple-950 ring-1 ring-purple-200/60" : "text-[var(--color-ink-muted)] hover:bg-purple-100/70 hover:text-[var(--color-ink)]"}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer className="border-t border-purple-200/50 bg-gradient-to-r from-purple-50/80 via-[var(--color-yellow-soft)]/40 to-violet-50/70 px-5 py-8 text-center text-sm text-[var(--color-ink-muted)] sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with care — edit{" "}
          <code className="rounded-md bg-white/90 px-1.5 py-0.5 text-[var(--color-ink)] shadow-sm shadow-purple-100">
            profile.ts
          </code>{" "}
          to make it yours.
        </p>
      </footer>
    </>
  );
}
