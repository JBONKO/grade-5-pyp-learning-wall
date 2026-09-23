// ---------------------------------------------------------------------------
// Unit 1 · Trade Systems (2026–27), week by week. Each entry renders as a
// <WeekSection> on /units/trade-systems — the same shape as the PYPx Journey.
//
// The unit is still running. To add a week: copy one object, change `id`,
// and point `image` / `gallery` at files in /public/images.
//
// Narrative fields (whatStudentsWorkedOn, mainTeachingPoint,
// whyArtifactMattered, whatDidNotWork) stay empty until John approves the
// wording. WeekSection skips empty fields, so photos can go live first.
// ---------------------------------------------------------------------------

import type { Week } from "@/data/journey";

// The six-week arc from the unit plan. Weeks with no entry in `weeks` show on
// the unit timeline as "coming up".
export const arc = [
  { id: "week-1", label: "Week 1", title: "Tuning In" },
  { id: "week-2", label: "Week 2", title: "Finding Out" },
  { id: "week-3", label: "Week 3", title: "Your Trading Company" },
  { id: "week-4", label: "Week 4", title: "Production & Pricing" },
  { id: "week-5", label: "Week 5", title: "Market & Reflection" },
  { id: "week-6", label: "Week 6", title: "Action & Celebration" },
];

export const weeks: Week[] = [
  {
    id: "week-1",
    weekLabel: "Week 1 · 1–4 Sep",
    title: "Tuning In",
    timelineBlurb: "",
    whatStudentsWorkedOn: "",
    mainTeachingPoint: "",
    artifactName: "The supply-chain spine",
    image: "/images/unit1-wk1-wall-setup.jpg",
    whyArtifactMattered: "",
    photoSlots: [],
    gallery: [
      { src: "/images/unit1-wk1-classroom-setup-1.jpg", caption: "The classroom during set-up, before the first day." },
      { src: "/images/unit1-wk1-classroom-setup-2.jpg", caption: "The other end of the room. The five supply-chain stages were already pinned along the back wall, with a world map beside them." },
      { src: "/images/unit1-wk1-english-board.jpg", caption: "The English evidence wall on Day 1. One question at the top, “Can you prove it?”, and the paragraph frames for proving it underneath." },
    ],
  },
  {
    id: "week-2",
    weekLabel: "Week 2 · 7–11 Sep",
    title: "Finding Out",
    timelineBlurb: "",
    whatStudentsWorkedOn: "",
    mainTeachingPoint: "",
    artifactName: "Supply-chain hubs",
    image: "/images/unit1-wk2-wall-front.jpg",
    whyArtifactMattered: "",
    photoSlots: [],
    gallery: [
      { src: "/images/unit1-wk2-wonder-prompt.jpg", caption: "One of the hub prompts: “A wonder / a question.” Kids answer on a sticky note and say which thinking move they used." },
      { src: "/images/unit1-wk2-english-board.jpg", caption: "The English evidence wall after a class discussion. A character iceberg in sticky notes: what the characters say and do above the waterline, what they feel underneath." },
    ],
  },
  {
    id: "week-3",
    weekLabel: "Week 3 · 14–18 Sep",
    title: "Your Trading Company",
    timelineBlurb: "",
    whatStudentsWorkedOn: "",
    mainTeachingPoint: "",
    artifactName: "Company poster stations",
    image: "/images/unit1-wk3-poster-station.jpg",
    whyArtifactMattered: "",
    photoSlots: [],
  },
  {
    id: "week-4",
    weekLabel: "Week 4 · 21–24 Sep",
    title: "Production & Pricing",
    timelineBlurb: "",
    whatStudentsWorkedOn: "",
    mainTeachingPoint: "",
    artifactName: "A hand-made tea bottle",
    image: "/images/unit1-wk4-tea-bottle.jpg",
    whyArtifactMattered: "",
    photoSlots: [],
  },
];
