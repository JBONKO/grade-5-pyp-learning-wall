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

// The unit's seven school weeks, following the Trade Stories Market tracker
// (Mid-Autumn holiday Fri 25 Sep, National Day break 1–7 Oct, Market Day
// Tue 13 Oct). Weeks with no entry in `weeks` show on the timeline as coming up.
export const arc = [
  { id: "week-1", label: "Week 1", title: "Tuning In" },
  { id: "week-2", label: "Week 2", title: "Finding Out" },
  { id: "week-3", label: "Week 3", title: "Your Trading Company" },
  { id: "week-4", label: "Week 4", title: "Business Plans & Posters" },
  { id: "week-5", label: "Week 5", title: "Making & Pricing" },
  { id: "week-6", label: "Week 6", title: "Signs & Pitches" },
  { id: "week-7", label: "Week 7", title: "Market Day", note: "Tue 13 Oct" },
];

export const weeks: Week[] = [
  {
    id: "week-1",
    weekLabel: "Week 1 · 1–4 Sep",
    title: "Tuning In",
    timelineBlurb: "",
    whatStudentsWorkedOn: "",
    mainTeachingPoint: "",
    artifactName: "The wall before Day 1",
    image: "/images/unit1-wk1-wall-setup.jpg",
    whyArtifactMattered: "",
    photoSlots: [],
    gallery: [
      { src: "/images/unit1-wk1-classroom-setup-1.jpg", caption: "The classroom during set-up, before the first day." },
      { src: "/images/unit1-wk1-classroom-setup-2.jpg", caption: "The other end of the room. The five supply-chain stages were already pinned along the back wall, with a world map beside them." },
      { src: "/images/unit1-wk1-question-table.jpg", caption: "The new question table. Each Question Spotlight card puts one kid's question on an easel. The central idea, lines of inquiry and concepts lie flat beside them, and the Week 1 key words are taped to the front." },
      { src: "/images/unit1-wk1-breakfast.jpg", caption: "The Mystery Breakfast. Kids took apart a real Shanghai breakfast (dumplings, noodles, a carton of milk) to work out where each part came from." },
      { src: "/images/unit1-wk1-noodle-card.jpg", caption: "A Mystery Breakfast card from Day 1: Shanghai scallion noodles. One kid traced them half to Brazil, because of the soybeans." },
      { src: "/images/unit1-wk1-paper-boats.jpg", caption: "The Trading Game: building paper boats from bags of uneven materials." },
      { src: "/images/unit1-wk1-paper-boat.jpg", caption: "Cutting the parts for a paper boat, with a folded one already on the table." },
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
    artifactName: "The five trade posters",
    image: "/images/unit1-wk2-wall-front.jpg",
    whyArtifactMattered: "",
    photoSlots: [],
    gallery: [
      { src: "/images/unit1-wk2-fairness-wall.jpg", caption: "Origin and Factory, two of the five trade posters, with the pencil work pinned around them. String ties each piece to its stage, and a P4C prompt asks whether it is fair." },
      { src: "/images/unit1-wk2-adding-sticky.jpg", caption: "Adding a sticky note to a connection prompt beside the Factory poster." },
      { src: "/images/unit1-wk2-wonder-prompt.jpg", caption: "A P4C prompt on one of the five trade posters: “A wonder / a question.” Kids answer on a sticky note and name the thinking move they used." },
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
    artifactName: "One wall section per company",
    image: "/images/unit1-wk3-poster-station.jpg",
    whyArtifactMattered: "",
    photoSlots: [],
    gallery: [
      { src: "/images/unit1-wk3-poster-stations.jpg", caption: "Putting up the company sections, one strip of brown paper per company, under the thinking-move pennants." },
    ],
  },
  {
    id: "week-4",
    weekLabel: "Week 4 · 21–24 Sep",
    title: "Business Plans & Posters",
    timelineBlurb: "",
    whatStudentsWorkedOn: "",
    mainTeachingPoint: "",
    artifactName: "The taped poster layout",
    image: "/images/unit1-wk4-taped-layout.jpg",
    whyArtifactMattered: "",
    photoSlots: [],
    gallery: [
      { src: "/images/unit1-wk4-tape-testing.jpg", caption: "Companies testing section sizes with tape along the wall." },
      { src: "/images/unit1-wk4-taping-sections.jpg", caption: "Taping out a company's big poster, one rectangle per section, before any of the mini posters go up." },
      { src: "/images/unit1-wk4-sign-test.jpg", caption: "The one-meter test: can the tea company's sign be read from a meter away?" },
      { src: "/images/unit1-wk4-task-tracker.jpg", caption: "CEOs and company reps update the market tracker on the classroom screen. Every poster section has a card size and a status, from Not started to Working." },
      { src: "/images/unit1-wk4-group-design.jpg", caption: "Mini posters in progress. The blue card is the porcelain company's Origin section: how white clay is dug, cleaned and shaped by hand." },
      { src: "/images/unit1-wk4-porcelain.jpg", caption: "The porcelain company at work. One kid shapes a white clay figure. Another sets blue-and-white pieces onto a plate." },
      { src: "/images/unit1-wk4-tea-bottle.jpg", caption: "The tea company drew its bottles on cardboard and cut them out on the classroom floor." },
    ],
  },
];
