import type { ReactNode } from "react";
import { Container } from "./Container";

type Tone = "cream" | "paper" | "tealSoft" | "teal" | "mustard" | "dark";

const bandClass: Record<Tone, string> = {
  cream: "", // page background (near-white) shows through
  paper: "bg-paper border-y border-line",
  tealSoft: "bg-teal/[0.04]",
  teal: "", // rendered as an inset navy panel below
  mustard: "", // rendered as an inset mint panel below
  dark: "bg-ink text-cream",
};

/**
 * A vertical band of the page. Set `tone` to alternate the background.
 * `teal` and `mustard` render as large rounded inset panels (navy / mint)
 * instead of full-bleed bands — the design's signature card sections.
 */
export function Section({
  children,
  id,
  tone = "cream",
  className = "",
  bare = false,
}: {
  children: ReactNode;
  id?: string;
  tone?: Tone;
  className?: string;
  bare?: boolean; // skip the inner Container when you need full-bleed content
}) {
  if (tone === "teal" || tone === "mustard") {
    const panel =
      tone === "teal"
        ? "bg-teal text-cream"
        : "bg-mustard-soft/70 text-ink";
    return (
      <section id={id} className={`py-10 sm:py-12 ${className}`}>
        <Container>
          <div className={`rounded-[2rem] px-6 py-12 sm:px-12 sm:py-14 ${panel}`}>
            {children}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      id={id}
      className={`py-16 sm:py-20 ${bandClass[tone]} ${className}`}
    >
      {bare ? children : <Container>{children}</Container>}
    </section>
  );
}
