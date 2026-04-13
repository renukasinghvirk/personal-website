import { useEffect } from "react";
import { profile } from "../data/profile";

export default function CvPage() {
  useEffect(() => {
    document.title = `CV — ${profile.name}`;
  }, []);

  const { pdfUrl, downloadFilename } = profile.cv;
  const githubHref =
    profile.contact.links.find((l) => l.label === "GitHub")?.href ?? "https://github.com/renukasinghvirk";

  return (
    <main className="border-t border-purple-100/60 bg-gradient-to-b from-[var(--color-paper)] via-[var(--color-lilac)]/55 to-[var(--color-yellow-soft)]/55 px-5 pb-12 pt-28 sm:px-8 sm:pt-32">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-widest text-purple-600">CV</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
          Curriculum vitae
        </h1>
        <p className="mt-4 max-w-xl text-[var(--color-ink-muted)] leading-relaxed">
          Open the PDF in a new tab to read it full screen. For code and project details, see my{" "}
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-purple-700 underline-offset-2 hover:underline"
          >
            GitHub profile
          </a>
          .
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-yellow)] px-6 py-2.5 text-sm font-semibold text-purple-950 shadow-md shadow-amber-400/35 transition hover:bg-[#fde047]"
          >
            Open CV in new tab
          </a>
          <a
            href={pdfUrl}
            download={downloadFilename}
            className="inline-flex items-center justify-center rounded-full border-2 border-purple-300/90 bg-white/90 px-6 py-2.5 text-sm font-medium text-[var(--color-ink)] transition hover:border-[var(--color-yellow)]"
          >
            Download PDF
          </a>
        </div>

      </div>
    </main>
  );
}
