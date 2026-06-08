import type { ReactNode } from "react";

/** A large editorial quote used for the project's recurring lines. */
export function PullQuote({
  children,
  attribution,
}: {
  children: ReactNode;
  attribution?: string;
}) {
  return (
    <figure className="border-l-2 border-mustard pl-5 sm:pl-7">
      <blockquote className="font-serif text-2xl leading-snug text-teal-dark sm:text-3xl">
        {children}
      </blockquote>
      {attribution ? (
        <figcaption className="mt-3 text-sm text-muted">{attribution}</figcaption>
      ) : null}
    </figure>
  );
}
