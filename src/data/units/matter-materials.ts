// Unit 2 · How the World Works (2026–27).
// Weeks 1–4 follow JB's photo folders and classroom handover of 11 Nov 2026.
// Week 4 is a partial record through 11 Nov. Weeks 5–6 remain planned.
import type { Week } from "@/data/journey";
import type { ArcStep } from "@/data/units";

export const arc: ArcStep[] = [
  { id: "week-1", label: "Week 1", title: "Tuning In" },
  { id: "week-2", label: "Week 2", title: "Finding Out" },
  {
    id: "week-3",
    label: "Week 3",
    title: "Product Questions & Draft Aims",
  },
  {
    id: "week-4",
    label: "Week 4",
    title: "Reviewing Plans at the Wall",
  },
  {
    id: "week-5",
    label: "Week 5",
    title: "Taking Action",
    note: "Planned · 16–20 Nov: classroom comparisons, evidence discussions and prototype building in the Maker Space on 18 Nov.",
  },
  {
    id: "week-6",
    label: "Week 6",
    title: "Design Fair & Reflection",
    note: "Planned · 23–27 Nov: retest redesigned features, prepare explanations and share evidence at the Design Fair on 25 Nov.",
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
  {
    id: "week-3",
    weekLabel: "Week 3 · 2–6 Nov",
    title: "Product Questions & Draft Aims",
    timelineBlurb: "Connecting each product's job to material properties, then drafting an investigation aim.",
    whatStudentsWorkedOn:
      "The six product groups began connecting what their product needs to do with its materials and properties. The iPad stand group's first web named stiffness, stability and friction. The chopstick group linked grip to picking up wet or slippery food. Groups added their Title and Aim drafts to the Procedure Clothesline and returned to the shared oobleck example when reviewing one another's wording. The wall kept the class example and the new group drafts together, where students could point to the work and discuss it.",
    mainTeachingPoint:
      "An aim needs to tell another group what you intend to find out.",
    artifactName: "Using the class example to review group aims",
    image: "/images/unit2-wk3-class-example-feedback.jpg",
    whyArtifactMattered:
      "The oobleck investigation became a reference for the groups' own planning. Students could compare its aim with the new drafts and give feedback using an example they had worked with. The product notes beside the procedure gave each investigation a purpose: a job the product needs to do and a property worth looking into.",
    photoSlots: [],
    gallery: [
      {
        src: "/images/unit2-wk3-adding-aim.jpg",
        caption: "Adding a group's Title and Aim card to the wall. The drafts stay visible beside the shared class investigation.",
      },
      {
        src: "/images/unit2-wk3-writing-aim.jpg",
        caption: "Reading the early group aims together. The oobleck example and a Title & Aim reminder sit underneath the new work.",
      },
      {
        src: "/images/unit2-wk3-ipad-concept-web.jpg",
        caption: "The iPad stand group's first notes connect the product's job with stiffness, stability and friction. Its planned comparison now focuses on support shape while keeping the card material and area the same.",
      },
      {
        src: "/images/unit2-wk3-product-connections.jpg",
        caption: "The chopstick group's product photo is linked to its job, observations and a question about materials and grip.",
      },
    ],
  },
  {
    id: "week-4",
    weekLabel: "Week 4 · 9–13 Nov · In progress, updated 11 Nov",
    title: "Reviewing Plans at the Wall",
    timelineBlurb: "Draft aims, hypotheses and feedback sit alongside growing product research and vocabulary.",
    whatStudentsWorkedOn:
      "By 11 November, groups had added their product's job, observations, questions and two facts about materials and properties to their concept webs. The research/sources and brainstorm sections of the wall packet were completed. Their six inquiries are chopstick grips, gaming mouse mats, marble track games, adjustable iPad stands, bike basket rain covers and tea strainers. Draft aims and hypotheses are now displayed with sticky-note feedback. We pulled up a chair to the wall again to read and discuss the plans. The word wall has grown too, with scientific-procedure vocabulary and students' own examples beneath the clothesline. The next stage is to agree the comparisons and test settings, then collect evidence for design decisions.",
    mainTeachingPoint:
      "A useful test plan names what we change, what we measure and what we keep the same.",
    artifactName: "Six groups' draft aims, hypotheses and feedback",
    image: "/images/unit2-wk4-aim-hypothesis-feedback.jpg",
    whyArtifactMattered:
      "Putting the drafts side by side made the wording available for discussion. One feedback note asks for the variable being changed to be clearer in an aim. These are working plans and predictions; they still need checking against the comparisons each group will carry out. Feedback stays beside the draft for the next revision.",
    photoSlots: [],
    whatDidNotWork:
      "Many students found it hard to picture what their experiments would look like. The earlier reading and instructions were too difficult and text-heavy. I kept the printed workbooks and wall packets, then prepared experiment-specific guides with labelled setups, shorter directions and clearer measurements. We also brought the chosen product inquiries forward from the original sequence. The next job is to check each group's changed feature and measurement before the first tests.",
    gallery: [
      {
        src: "/images/unit2-wk4-pull-up-chair.jpg",
        caption: "Pulling up a chair to the wall to read the group plans, with the shared investigation still available as a reference.",
      },
      {
        src: "/images/unit2-wk4-wall-discussion.jpg",
        caption: "Pointing to a draft aim while discussing its wording. The wall gives the group a shared piece of work to refer to.",
      },
      {
        src: "/images/unit2-wk4-product-notes.jpg",
        caption: "Adding possible materials, the product's job and a test question around the tea-strainer photograph.",
      },
      {
        src: "/images/unit2-wk4-expanded-word-wall.jpg",
        caption: "More room for the growing word wall. Vocabulary cards sit beside students' own definitions, sentences and drawings.",
      },
      {
        src: "/images/unit2-wk4-variables-vocabulary.jpg",
        caption: "Students' explanations and diagrams beside variable, dependent variable and independent variable. Their wording gives us something concrete to check and revisit.",
      },
      {
        src: "/images/unit2-wk4-procedure-vocabulary.jpg",
        caption: "Scientific-procedure vocabulary beneath the clothesline. The shared oobleck method, diagram and results table remain above it; the new product groups are still planning their own tests.",
      },
    ],
  },
];
