import { useEffect } from "react";
import { profile } from "../data/profile";

export default function AboutPage() {
  useEffect(() => {
    document.title = `About — ${profile.name}`;
  }, []);
  const profileImageSrc = `${import.meta.env.BASE_URL}images/logos/profile.png`;

  return (
    <main className="border-t border-purple-100/60 bg-gradient-to-b from-[var(--color-paper)] via-[var(--color-lilac)]/50 to-[var(--color-yellow-soft)]/45 px-5 pb-12 pt-28 sm:px-8 sm:pt-32">
      <section className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-purple-600">About</p>
          <h1 className="mt-2 font-serif text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
            A bit more about me
          </h1>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-[var(--color-ink-muted)]">
            <p>
              I'm a Swiss engineering student who loves people-centered work. I've been working as a first
              aid instructor at{" "}
              <a
                href="https://samaritains.firstmed.ch/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-purple-700 underline-offset-2 hover:text-amber-700 hover:underline"
              >
                FirstMed SA
              </a>{" "}
              for four years, and it's one of the roles I'm most proud of.
            </p>
            <p>
              I love teaching first aid because I meet people from many backgrounds and ages, and every
              session feels genuinely useful. I've also volunteered in a coaching association to help new
              university students integrate and make friends, worked as a student mentor (supporting younger
              students with coursework and study planning), and did teaching assistant work that I really
              enjoyed.
            </p>
            <p>
              Outside work and studies, I love travelling, playing piano, drawing, board games, and
              spending time in nature, especially hiking.
            </p>
          </div>
        </div>
        <figure className="overflow-hidden rounded-2xl border border-purple-100/90 bg-white/95 p-1 shadow-md shadow-purple-200/20">
          <img
            src={profileImageSrc}
            alt="Portrait of Renuka with New York skyline"
            className="h-auto w-full rounded-xl object-contain"
            loading="eager"
            decoding="async"
          />
        </figure>
      </section>
    </main>
  );
}
