// ---------------------------------------------------------------------------
// Unit 1 · Trade Systems (2026–27), week by week. Each entry renders as a
// <WeekSection> on /units/trade-systems — the same shape as the PYPx Journey.
//
// The unit is still running. To add a week: copy one object, change `id`,
// and point `image` / `gallery` at files in /public/images.
//
// Narrative fields (whatStudentsWorkedOn, mainTeachingPoint,
// whyArtifactMattered, whatDidNotWork) are John's approved wording. A new
// week can go live with photos first: WeekSection skips empty fields, so leave
// them "" until John approves the text. Week 2 has no whatDidNotWork on
// purpose — it went well, so there is nothing to report.
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
    whatStudentsWorkedOn:
      "A four-day first week. The students traced a Shanghai breakfast back to where each food came from. One decided the scallion noodles were half from Brazil, because of the soybeans. Then they built paper boats in the Trading Game from bags of uneven materials, trading for what they lacked. By Friday the Wonder Wall had their questions sorted under four headers: Money, People, Fairness, and Origin.",
    mainTeachingPoint: "Students need to see trade before they can name it.",
    artifactName: "The wall before Day 1",
    image: "/images/unit1-wk1-wall-setup.jpg",
    whyArtifactMattered:
      "The five trade posters went up before the students arrived: Origin, Factory, Transport, Store, You. The route was on the wall before anyone had the words for it.",
    photoSlots: [],
    whatDidNotWork:
      "The Trading Game put trade into a real experience. But for some students the trading turned into borrowing from each other, which was never the point, and the learning got lost there. I will rework the activity for next year.",
    gallery: [
      { src: "/images/unit1-wk1-classroom-setup-1.jpg", caption: "The classroom during set-up, before the first day." },
      { src: "/images/unit1-wk1-classroom-setup-2.jpg", caption: "The other end of the room. The five supply-chain stages were already pinned along the back wall, with a world map beside them." },
      { src: "/images/unit1-wk1-question-table.jpg", caption: "The new question table. Each Question Spotlight card puts one student's question on an easel. The central idea, lines of inquiry and concepts lie flat beside them, and the Week 1 key words are taped to the front." },
      { src: "/images/unit1-wk1-breakfast.jpg", caption: "The Mystery Breakfast. Students took apart a real Shanghai breakfast (dumplings, noodles, a carton of milk) to work out where each part came from." },
      { src: "/images/unit1-wk1-noodle-card.jpg", caption: "A Mystery Breakfast card from Day 1: Shanghai scallion noodles. One student traced them half to Brazil, because of the soybeans." },
      { src: "/images/unit1-wk1-paper-boats.jpg", caption: "The Trading Game: building paper boats from bags of uneven materials." },
      { src: "/images/unit1-wk1-paper-boat.jpg", caption: "Cutting the parts for a paper boat, with a folded one already on the table." },
      { src: "/images/unit1-wk1-wonder-wall-money.jpg", caption: "The first questions under Money on the Wonder Wall: why an orange costs more at a big store than a small one, who pays for the fruit that reaches school, and what a wheat farmer earns in a month." },
      { src: "/images/unit1-wk1-wonder-wall-sorted.jpg", caption: "The Wonder Wall after sorting: questions grouped under Money, People, Fairness and Origin, with the Mystery Breakfast cards pinned alongside." },
      { src: "/images/unit1-wk1-english-board.jpg", caption: "The English evidence wall on Day 1. One question at the top, “Can you prove it?”, and the paragraph frames for proving it underneath." },
    ],
  },
  {
    id: "week-2",
    weekLabel: "Week 2 · 7–11 Sep",
    title: "Finding Out",
    timelineBlurb: "",
    whatStudentsWorkedOn:
      "The central idea went up on Monday, after a week of wondering. The students traced a pencil and a cup of Chinese tea through the same five stops. The pencil was the right place to start. It is one of the most common supply-chain examples, so there were good videos and readings for every stage. Then the class went on a field trip to a chocolate factory. Back in class, chocolate became the real-life example, and the students used string and pins to connect it to the pencil and the tea on the wall.",
    mainTeachingPoint:
      "One chain, every lesson. A pencil, a cup of tea, and a chocolate bar all went through the same five stops.",
    artifactName: "The five trade posters",
    image: "/images/unit1-wk2-wall-front.jpg",
    whyArtifactMattered:
      "Each stage had its own poster. Students answered the P4C prompts on sticky notes and named the thinking move they used. The string tied the chocolate to the pencil and the tea, stage by stage.",
    photoSlots: [],
    gallery: [
      { src: "/images/unit1-wk2-wall-connections.jpg", caption: "The Factory section early in the week: the pencil and tea factory posters around the trade poster, and a wonder prompt still waiting for its first sticky notes." },
      { src: "/images/unit1-wk2-origin-connection.jpg", caption: "The Origin stage. One group's Pencil's Origins poster traces the wood, graphite, eraser and ferrule back to where each comes from. The tea group's origin poster sits below." },
      { src: "/images/unit1-wk2-factory-connection.jpg", caption: "A group's Pencil in the Factory poster: cedar logged and cut into slats, graphite laid in, slats glued, pencils sharpened, painted and shipped." },
      { src: "/images/unit1-wk2-factory-wonders.jpg", caption: "The Factory wonder prompt a few days later, covered in questions: how long it takes to make a pencil, how long workers stay in the factory, why the eraser is square." },
      { src: "/images/unit1-wk2-store-connection.jpg", caption: "Store and You. Students' posters on where pencils are sold, which shops sell the most, how a pencil is transported, and how tea reaches a cup." },
      { src: "/images/unit1-wk2-fairness-wall.jpg", caption: "Origin and Factory, two of the five trade posters, with the pencil work pinned around them. String ties each piece to its stage, and a P4C prompt asks whether it is fair." },
      { src: "/images/unit1-wk2-fairness-sticky.jpg", caption: "Adding a sticky note to the P4C prompt “Is it fair here?”" },
      { src: "/images/unit1-wk2-adding-sticky.jpg", caption: "Adding a sticky note to a connection prompt beside the Factory poster." },
      { src: "/images/unit1-wk2-wonder-prompt.jpg", caption: "A P4C prompt on one of the five trade posters: “A wonder / a question.” Students answer on a sticky note and name the thinking move they used." },
      { src: "/images/unit1-wk2-wall-end.jpg", caption: "The wall at the end of Week 2, from the side, with the pencil and tea work pinned around the five trade posters." },
      { src: "/images/unit1-wk2-english-board.jpg", caption: "The English evidence wall after a class discussion. A character iceberg in sticky notes: what the characters say and do above the waterline, what they feel underneath." },
      { src: "/images/unit1-wk2-iceberg-above.jpg", caption: "The top of the character iceberg: what Evan says in chapter 3 of The Lemonade War, and a note on what each sibling is good at." },
      { src: "/images/unit1-wk2-iceberg-below.jpg", caption: "Below the waterline: how Evan feels, and what could happen if it keeps up, with the chapter it comes from." },
    ],
  },
  {
    id: "week-3",
    weekLabel: "Week 3 · 14–18 Sep",
    title: "Your Trading Company",
    timelineBlurb: "",
    whatStudentsWorkedOn:
      "The class formed six trading companies, four students each, with four jobs: Researcher, CEO, Accountant, and Designer. Each company met to decide where it wanted to take the business and started a business plan. They designed an official company stamp for important documents and set up the class company task tracker. Most of this week's work happened in notebooks and in the groups. After the class voted on a new design for the wall, the students helped take everything down, and we got ready to use the wall more in Week 4.",
    mainTeachingPoint: "Four students, four jobs. Nobody hides in the group.",
    artifactName: "One wall section per company",
    image: "/images/unit1-wk3-poster-station.jpg",
    whyArtifactMattered:
      "Each company owns one strip of wall, top to bottom. The brown paper went up first. Everything the company makes lives there.",
    photoSlots: [],
    whatDidNotWork:
      "I gave the class two designs for the new wall. Option 1 kept the five trade posters, took down the pencil and tea connections, and put three companies above and three below, with string running across companies. Option 2 took everything down and gave each company one vertical section. I wanted Option 1. The students voted for Option 2, so Option 2 went up.",
    gallery: [
      { src: "/images/unit1-wk3-tearing-down.jpg", caption: "After the class vote, taking down the Week 2 wall to make room for the company sections." },
      { src: "/images/unit1-wk3-poster-stations.jpg", caption: "Putting up the company sections, one strip of brown paper per company, under the thinking-move pennants." },
    ],
  },
  {
    id: "week-4",
    weekLabel: "Week 4 · 21–24 Sep",
    title: "Business Plans & Posters",
    timelineBlurb: "",
    whatStudentsWorkedOn:
      "A short week, with Friday off for Mid-Autumn. Companies finished their business plans, then moved on to packaging and the first product designs. In each company the Designer and the Researcher took the lead on the poster. Half of each company's section is for one big poster. The other half is for planning: mini posters on A4 and A3, and cue cards.",
    mainTeachingPoint: "Lay out the poster before you fill it.",
    artifactName: "The taped poster layout",
    image: "/images/unit1-wk4-taped-layout.jpg",
    whyArtifactMattered:
      "The big poster has five sections every company has to cover: our supply chain, function and connection, causation, responsibility and fairness, and trade words. Designers taped out a space for each one before anything went up. One company taped a star under the five, for a creative element to pull customers in.",
    photoSlots: [],
    whatDidNotWork:
      "Wednesday was the last Trade Systems lesson until Monday, so the informational mini posters went home as homework. Each company will decide how the finished pieces go onto its big poster. I would have kept this part in class if there had been time. Monday starts with chasing the parts that did not come back, and pushing any company that is behind.",
    gallery: [
      { src: "/images/unit1-wk4-tape-testing.jpg", caption: "Companies testing section sizes with tape along the wall." },
      { src: "/images/unit1-wk4-taping-sections.jpg", caption: "Taping out a company's big poster, one rectangle per section, before any of the mini posters go up." },
      { src: "/images/unit1-wk4-sign-test.jpg", caption: "The one-meter test: can the tea company's sign be read from a meter away?" },
      { src: "/images/unit1-wk4-task-tracker.jpg", caption: "CEOs and company reps update the market tracker on the classroom screen. Every poster section has a card size and a status, from Not started to Working." },
      { src: "/images/unit1-wk4-group-design.jpg", caption: "Mini posters in progress. The blue card is the porcelain company's Origin section: how white clay is dug, cleaned and shaped by hand." },
      { src: "/images/unit1-wk4-porcelain.jpg", caption: "The porcelain company at work. One student shapes a white clay figure. Another sets blue-and-white pieces onto a plate." },
      { src: "/images/unit1-wk4-tea-bottle.jpg", caption: "The tea company drew its bottles on cardboard and cut them out on the classroom floor." },
    ],
  },
];
