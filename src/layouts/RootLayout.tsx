import { Link, NavLink, Outlet } from "react-router-dom";
import { profile } from "../data/profile";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-3 py-1.5 text-sm font-medium transition ${
    isActive
      ? "bg-[var(--color-yellow-soft)] text-purple-950 ring-1 ring-purple-200/60"
      : "text-[var(--color-ink-muted)] hover:bg-purple-100/70 hover:text-[var(--color-ink)]"
  }`;

const navExternalClass =
  "rounded-full px-3 py-1.5 text-sm font-medium text-[var(--color-ink-muted)] transition hover:bg-purple-100/70 hover:text-[var(--color-ink)]";

const githubHref =
  profile.contact.links.find((l) => l.label === "GitHub")?.href ?? "https://github.com/renukasinghvirk";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-purple-200/60 bg-[var(--color-paper)]/93 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link
            to="/"
            className="min-w-0 flex-shrink-0 max-w-[min(100%,14rem)] font-serif text-base font-semibold leading-snug tracking-tight text-[var(--color-ink)] sm:max-w-none sm:text-lg"
          >
            {profile.name}
          </Link>
          <ul className="flex flex-1 flex-wrap items-center justify-end gap-1 sm:gap-2">
            <li>
              <NavLink to="/" end className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <a
                href={profile.cv.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={navExternalClass}
              >
                CV
              </a>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>
          </ul>
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-[var(--color-ink-muted)] transition hover:bg-purple-100/80 hover:text-[var(--color-ink)]"
            aria-label="GitHub profile"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
        </nav>
      </header>
      <div className="flex flex-1 flex-col [&>*]:flex-1">
        <Outlet />
      </div>
      <footer className="border-t border-purple-200/50 bg-gradient-to-r from-purple-50/80 via-[var(--color-yellow-soft)]/40 to-violet-50/70 px-5 py-8 text-center text-sm text-[var(--color-ink-muted)] sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}.
        </p>
      </footer>
    </div>
  );
}
