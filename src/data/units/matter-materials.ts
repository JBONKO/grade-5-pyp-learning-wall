// Unit 2 · How the World Works (2026–27).
// Weeks 1–2 follow the dated photo folders and the work visible in them.
// Later weeks describe the intended route from the unit plans, not outcomes.
import type { Week } from "@/data/journey";
import type { ArcStep } from "@/data/units";

export const arc: ArcStep[] = [
  { id: "week-1", label: "Week 1", title: "Tuning In" },
  { id: "week-2", label: "Week 2", title: "Finding Out" },
  {
    id: "week-3",
    label: "Week 3",
    title: "Sorting Out",
    note: "Planned · 2–6 Nov: fair tests, variables and the steps of a scientific report.",
  },
  {
    id: "week-4",
    label: "Week 4",
    title: "Going Further",
    note: "Planned · 9–13 Nov: turn a class question into an investigation, then add results and a conclusion to the wall.",
  },
  {
    id: "week-5",
    label: "Week 5",
    title: "Taking Action",
    note: "Planned · 16–20 Nov: independent experiment plans, open lab, display-board design and rehearsal.",
  },
  {
    id: "week-6",
    label: "Week 6",
    title: "Design Fair & Reflection",
    note: "Planned · 23–27 Nov: reopen the first blueprints, share investigations at the Design Fair and revisit our questions.",
  },
];

export const weeks: Week[] = [
  {
    id: "week-1",
    weekLabel: "Week 1 · 19–23 Oct",
    title: "Materials, States & Questions",
    timelineBlurb: "A Wonder Wall, a Material Library and the first models of particles.",
    whatStudentsWorkedOn:
      "We began with matter and materials: describing what we could observe, exploring density, and using stickers to model particles in solids, liquids and gases. Students added real samples to the Material Library and sorted their questions under our three lines of inquiry. They also voted for Question Spotlight questions to investigate further. On the English board, scientific vocabulary sat beside classroom photographs, student explanations and the structure of a scientific report. The two walls are growing together: one holds the questions and materials, while the other supports the language needed to explain them.",
    mainTeachingPoint:
      "Look closely, describe what you notice and ask a question worth investigating.",
    artifactName: "The Wonder Wall and Material Library",
    image: "/images/unit2-wk1-wonder-wall.jpg",
    whyArtifactMattered:
      "Students' questions sit beneath the lines of inquiry, with real material samples alongside them. The wall gives the class a shared place to return to those questions as the unit develops. The Sealed Blueprints box is also there: the plan is to revisit early designs near the end of the unit so students can explain how their thinking has changed.",
    photoSlots: [],
    gallery: [
      {
        src: "/images/unit2-wk1-material-library.jpg",
        caption: "Adding a bagged sample to the Material Library. Real materials sit alongside the class questions on the learning wall.",
      },
      {
        src: "/images/unit2-wk1-states-of-matter.jpg",
        caption: "Solid, liquid and gas posters use stickers to represent particle arrangements, making an invisible idea visible for discussion.",
      },
      {
        src: "/images/unit2-wk1-density.jpg",
        caption: "Exploring density by pouring liquids into a clear cup and looking at the layers that form.",
      },
      {
        src: "/images/unit2-wk1-question-spotlight.jpg",
        caption: "Students voted for questions to bring into further investigation. The Question Spotlight easels keep those questions in view.",
      },
      {
        src: "/images/unit2-wk1-english-board.jpg",
        caption: "The English board connects scientific vocabulary with report structure, including the difference between an aim and a hypothesis.",
      },
      {
        src: "/images/unit2-wk1-word-wall.jpg",
        caption: "The word wall combines bilingual definitions, classroom photographs, particle drawings and students' own explanations and sentences.",
      },
    ],
  },
  {
    id: "week-2",
    weekLabel: "Week 2 · 26–30 Oct",
    title: "Oobleck & the Procedure Clothesline",
    timelineBlurb: "An investigation becomes a shared example of scientific writing.",
    whatStudentsWorkedOn:
      "Oobleck gave us a shared investigation to connect practical science with report writing. Students explored the mixture and tested its flow across a tray. The displayed aim asks how the amount of water affects the speed of the oobleck. Beside it, a hypothesis predicts what might happen and gives a reason. By the end of Week 2, examples from the investigation were already pinned beneath the headings on our Procedure Clothesline. Classroom photographs and handwritten work show how the report grows from something students have actually done.",
    mainTeachingPoint:
      "An aim says what we will investigate. A hypothesis predicts what will happen and explains why.",
    artifactName: "A class example at the start of the Procedure Clothesline",
    image: "/images/unit2-wk2-class-example.jpg",
    whyArtifactMattered:
      "The clothesline gives each part of a scientific report a place, from aim and hypothesis through to results and conclusion. Real work can be added beneath the headings as an investigation develops. The oobleck example connects the activity, the question and the writing; it gives students something concrete to refer to when planning later investigations.",
    photoSlots: [],
    gallery: [
      {
        src: "/images/unit2-wk2-oobleck-exploration.jpg",
        caption: "Exploring the oobleck mixture together before turning the experience into scientific writing.",
      },
      {
        src: "/images/unit2-wk2-oobleck-race.jpg",
        caption: "The flow test in action: oobleck moves across a marked tray, with a phone being used to time it.",
      },
      {
        src: "/images/unit2-wk2-oobleck-aim.jpg",
        caption: "The aim names the question being tested: how the amount of water affects the speed of the oobleck.",
      },
      {
        src: "/images/unit2-wk2-oobleck-hypothesis.jpg",
        caption: "A student's hypothesis uses an if–then–because structure. It is a prediction to test, rather than a conclusion from the results.",
      },
      {
        src: "/images/unit2-wk2-oobleck-report.jpg",
        caption: "The Procedure Clothesline beginning to fill with examples from the oobleck investigation under the report headings.",
      },
      {
        src: "/images/unit2-wk2-procedure-cards.jpg",
        caption: "Bilingual cards make the scientific report structure visible, including a place to list the equipment needed.",
      },
      {
        src: "/images/unit2-wk2-procedure-clothesline.jpg",
        caption: "The full clothesline leaves space for each stage of an investigation, ending with results and a conclusion. Thinking-move pennants run above it.",
      },
    ],
  },
];
