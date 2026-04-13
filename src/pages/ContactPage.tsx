import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FlowerMark, SpiralSun } from "../components/FlowerDecor";
import { profile } from "../data/profile";

export default function ContactPage() {
  useEffect(() => {
    document.title = `Contact — ${profile.name}`;
  }, []);

  return (
    <main className="relative min-h-[calc(100vh-8rem)] overflow-hidden border-t border-purple-200/50 bg-gradient-to-b from-[var(--color-paper)] via-[var(--color-lilac)]/55 to-[var(--color-yellow-soft)]/55 px-5 pb-12 pt-28 sm:px-8 sm:pt-32">
      <div className="pointer-events-none absolute right-[10%] top-24 opacity-25" aria-hidden>
        <SpiralSun size={96} />
      </div>
      <div className="pointer-events-none absolute bottom-32 left-[5%] opacity-22" aria-hidden>
        <FlowerMark size={80} petal="#e9d5ff" center="#facc15" />
      </div>
      <div className="relative mx-auto max-w-xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-purple-600">Contact</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
          Let's talk!
        </h1>
        <p className="mt-5 text-[var(--color-ink-muted)] leading-relaxed">
          Feel free to reach out for any questions or inquiries about collaborations.
        </p>
        <a
          href={`mailto:${profile.contact.email}`}
          className="mt-10 inline-flex rounded-full bg-[var(--color-yellow)] px-8 py-3.5 text-base font-semibold text-purple-950 shadow-md shadow-amber-400/35 transition hover:bg-[#fde047] hover:shadow-lg"
        >
          {profile.contact.email}
        </a>
        <p className="mt-16">
          <Link
            to="/"
            className="text-sm font-medium text-[var(--color-ink-muted)] underline-offset-4 hover:text-purple-700 hover:underline"
          >
            ← Back to Homepage
          </Link>
        </p>
      </div>
    </main>
  );
}
