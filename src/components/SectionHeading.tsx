import type { ReactNode } from "react";

/**
 * Section heading with an editorial accent bar (the mustard vertical rule on
 * the left), a bold uppercase eyebrow, and a serif title.
 * Set `light` on dark / teal backgrounds.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <div className="flex gap-4">
        <span aria-hidden="true" className="w-1.5 shrink-0 self-stretch bg-mustard" />
        <div>
          {eyebrow ? (
            <p
              className={`text-xs font-bold uppercase tracking-[0.18em] ${
                light ? "text-mustard" : "text-clay"
              }`}
            >
              {eyebrow}
            </p>
          ) : null}
          <h2
            className={`mt-1 font-serif text-3xl leading-[1.1] sm:text-4xl ${
              light ? "text-cream" : "text-ink"
            }`}
          >
            {title}
          </h2>
        </div>
      </div>
      {intro ? (
        <p
          className={`mt-4 text-[17px] leading-relaxed ${
            light ? "text-cream/75" : "text-muted"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
