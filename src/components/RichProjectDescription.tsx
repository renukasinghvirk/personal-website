import type { ReactNode } from "react";

const MD_LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

function paragraphWithLinks(text: string): ReactNode {
  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  const re = new RegExp(MD_LINK.source, "g");
  let key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(
      <a
        key={key++}
        href={m[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-purple-700 underline-offset-2 hover:text-amber-700 hover:underline"
      >
        {m[1]}
      </a>,
    );
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

/** Renders project `description` strings that may use Markdown-style links `[text](url)` and paragraph breaks `\n\n`. */
export default function RichProjectDescription({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const paragraphs = text
    .split(/\n\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className={`space-y-3 text-[var(--color-ink-muted)] leading-relaxed ${className}`.trim()}>
      {paragraphs.map((para, idx) => (
        <p key={idx}>{paragraphWithLinks(para)}</p>
      ))}
    </div>
  );
}
