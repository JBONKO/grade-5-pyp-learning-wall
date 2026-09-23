// ---------------------------------------------------------------------------
// Every learning wall documented on the site. Each entry becomes a card on
// /units. The PYP Exhibition keeps its own pages (`href` points at them);
// every other unit renders at /units/<slug> from its file in src/data/units/.
//
// To add a unit: create src/data/units/<slug>.ts exporting `weeks` and `arc`,
// then add an entry here.
// ---------------------------------------------------------------------------

import type { Week } from "./journey";
import { site } from "./site";
import * as tradeSystems from "./units/trade-systems";

export type ArcStep = {
  id: string;
  label: string;
  title: string;
  note?: string; // shown under an upcoming step instead of "Coming up"
};

export type Unit = {
  slug: string;
  eyebrow: string; // e.g. "Unit 1 · 2026–27 · Grade 5"
  title: string;
  theme?: string; // transdisciplinary theme
  centralIdea?: string;
  linesOfInquiry?: string[];
  concepts?: string[];
  dates?: string;
  summative?: string;
  companies?: string; // how the class is organised for the project
  status: "in progress" | "complete";
  summary?: string; // index-card line; falls back to the central idea
  coverImage: string;
  href?: string; // set for walls that live on their own pages (the PYPx)
  intro?: string; // page intro, added once John approves it
  arc?: ArcStep[];
  weeks?: Week[];
};

export const units: Unit[] = [
  {
    slug: "pyp-exhibition",
    eyebrow: "2025–26 · Grade 5 · 8 weeks",
    title: "PYP Exhibition",
    status: "complete",
    summary: site.description,
    coverImage: "/images/hero-learning-wall.jpg",
    href: "/journey",
  },
  {
    slug: "trade-systems",
    eyebrow: "Unit 1 · 2026–27 · Grade 5",
    title: "Trade Systems",
    theme: "How We Organize Ourselves",
    centralIdea:
      "Trade connects people and resources, and these connections can affect communities in expected and unexpected ways.",
    // LOIs 1–2 as printed on the classroom wall sheet; LOI 3 as John gave it.
    linesOfInquiry: [
      "How trade connects people, resources, and communities",
      "How goods move through systems from producer to consumer",
      "How trade systems can have expected and unexpected consequences",
    ],
    concepts: ["Function", "Connection", "Causation", "Responsibility"],
    dates: "1 Sep – 14 Oct 2026",
    summative: "The Trade Stories Market, Tue 13 Oct",
    companies: "6 companies, 4 kids each. Jobs: Researcher, CEO, Accountant, Designer",
    status: "in progress",
    coverImage: "/images/unit1-wk2-wall-front.jpg",
    arc: tradeSystems.arc,
    weeks: tradeSystems.weeks,
  },
];

// Units that render at /units/<slug> (everything except linked-out walls).
export const unitPages = units.filter((u) => !u.href && u.weeks);

export function getUnit(slug: string) {
  return unitPages.find((u) => u.slug === slug);
}

export function unitHref(unit: Unit) {
  return unit.href ?? `/units/${unit.slug}`;
}

// "Complete" or "In progress · Week 4 of 6", from the weeks documented so far.
export function unitStatus(unit: Unit) {
  if (unit.status === "complete") return "Complete";
  const done = unit.weeks?.length ?? 0;
  const total = unit.arc?.length ?? done;
  return total > 0 ? `In progress · Week ${done} of ${total}` : "In progress";
}
