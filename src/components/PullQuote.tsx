import type { ReactNode } from "react";

/** A large editorial quote used for the project's recurring lines. */
export function PullQuote({
  children,
  attribution,
  light = false,
}: {
  children: ReactNode;
  attribution?: string;
  light?: boolean; // for dark backgrounds
}) {
  return (
    <figure className="border-l-2 border-mustard pl-5 sm:pl-7">
      <blockquote
        className={`font-serif text-2xl leading-snug sm:text-3xl ${
          light ? "text-cream" : "text-teal-dark"
        }`}
      >
        {children}
      </blockquote>
      {attribution ? (
        <figcaption
          className={`mt-3 text-sm ${light ? "text-cream/70" : "text-muted"}`}
        >
          {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}
