// ---------------------------------------------------------------------------
// Every learning wall documented on the site. Each entry becomes a card on
// /units. The PYP Exhibition keeps its own pages (`href` points at them);
// every other unit renders at /units/<slug> from its file in src/data/units/.
//
// To add a unit: create src/data/units/<slug>.ts exporting `weeks` and `arc`,
// then add an entry here.
// ---------------------------------------------------------------------------

import type { Week } from "./journey";
import * as tradeSystems from "./units/trade-systems";
import * as matterMaterials from "./units/matter-materials";

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
  linesOfInquiry?: { text: string; concept?: string }[];
  concepts?: string[]; // specified concepts
  learnerProfile?: string[];
  approachesToLearning?: string[];
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

// Intro line under the /units page title.
export const unitsIntro =
  "The PYP Exhibition wall came first. This year every Unit of Inquiry (UOI) gets its own wall, written up week by week while the unit runs.";

export const units: Unit[] = [
  {
    slug: "matter-materials",
    eyebrow: "Unit 2 · 2026–27 · Grade 5",
    title: "Matter & Materials",
    theme: "How the World Works",
    // Current focus from JB's 11 Nov handover. Early wall photos retain the
    // original scientific-inquiry framing as part of the unit's history.
    centralIdea: "Scientific design helps understand and shape the physical world.",
    linesOfInquiry: [
      { text: "Attributes of matter and materials" },
      { text: "Properties of materials and their uses" },
      { text: "How scientific inquiry is conducted and recorded" },
    ],
    concepts: ["Form", "Function", "Connection"],
    dates: "19 Oct – 27 Nov 2026",
    summative: "Design Fair · 25 Nov 2026",
    status: "complete",
    summary:
      "Six weeks from material observations to product tests, redesign prototypes and the Design Fair. The walls hold the questions, plans and evidence along the way.",
    intro:
      "Six weeks of matter, materials and product design, documented through the Design Fair on 25 November. Six groups investigated products, tested material properties and used evidence to inform redesigns. The learning walls kept concept webs and scientific-process sections available as the work developed. This record follows the questions, testing, first Makerspace visit and preparation for explaining design choices to an audience, including the teaching adjustments along the way.",
    coverImage: "/images/unit2-wk1-wonder-wall.jpg",
    arc: matterMaterials.arc,
    weeks: matterMaterials.weeks,
  },
  {
    slug: "trade-systems",
    eyebrow: "Unit 1 · 2026–27 · Grade 5",
    title: "Trade Systems",
    theme: "How We Organize Ourselves",
    centralIdea:
      "Trade connects people and resources, and these connections can affect communities in expected and unexpected ways.",
    // Central idea, lines of inquiry, concepts, learner profile and ATLs as
    // they appear on the unit's "Central Idea & LOI" slides.
    linesOfInquiry: [
      { text: "How trade systems move goods from producers to consumers", concept: "Function" },
      { text: "How trade connects people, places and resources", concept: "Connection" },
      { text: "How trade decisions create expected and unexpected consequences", concept: "Causation" },
    ],
    concepts: ["Function", "Connection", "Responsibility", "Causation"],
    learnerProfile: ["Open-minded", "Communicators", "Inquirers"],
    approachesToLearning: ["Thinking", "Communication", "Self-management", "Social"],
    dates: "1 Sep – 14 Oct 2026",
    summative: "The Trade Stories Market, Tue 13 Oct",
    companies: "6 companies, 4 students each. Jobs: Researcher, CEO, Accountant, Designer",
    status: "complete",
    intro:
      "Seven school weeks on trade, from shared supply-chain posters to student-owned company boards, a class market and final exhibition presentations. The unit finished on 14 October 2026. The wall helped students organise their research, review their posters and explain how they responded to changes at the market.",
    coverImage: "/images/unit1-wk2-wall-front.jpg",
    arc: tradeSystems.arc,
    weeks: tradeSystems.weeks,
  },
  {
    slug: "pyp-exhibition",
    eyebrow: "2025–26 · Grade 5 · 8 weeks",
    title: "PYP Exhibition",
    status: "complete",
    summary: "The first documented wall: eight weeks of inquiry, evidence, action and preparation for the PYP Exhibition.",
    coverImage: "/images/hero-learning-wall.jpg",
    href: "/pyp-exhibition",
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

// "Complete" or "In progress · Week 5 of 7", from the weeks documented so far.
export function unitStatus(unit: Unit) {
  if (unit.status === "complete") return "Complete";
  const done = unit.weeks?.length ?? 0;
  const total = unit.arc?.length ?? done;
  return total > 0 ? `In progress · Week ${done} of ${total}` : "In progress";
}
