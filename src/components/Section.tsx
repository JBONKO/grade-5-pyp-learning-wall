import type { ReactNode } from "react";
import { Container } from "./Container";

type Tone = "cream" | "paper" | "tealSoft" | "teal" | "mustard" | "dark";

const toneClass: Record<Tone, string> = {
  cream: "", // page background (warm off-white) shows through
  paper: "bg-paper border-y border-line",
  tealSoft: "bg-teal/[0.05]",
  teal: "bg-teal text-cream",
  mustard: "bg-mustard/[0.14]",
  dark: "bg-ink text-cream",
};

/** A vertical band of the page. Set `tone` to alternate the background. */
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
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 ${toneClass[tone]} ${className}`}
    >
      {bare ? children : <Container>{children}</Container>}
    </section>
  );
}
