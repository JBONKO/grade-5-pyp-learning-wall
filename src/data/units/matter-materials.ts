// Unit 2 · How the World Works (2026–27).
// Weeks 1–4 follow JB's photo folders and classroom handover of 11 Nov 2026.
// Weeks 5–6 follow JB's closing reflection and final photo folders, 26 Nov 2026.
// Week 4 retains its classroom record through 11 Nov.
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
    title: "Testing Materials & Building Prototypes",
  },
  {
    id: "week-6",
    label: "Week 6",
    title: "Explaining Design Choices",
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
        caption: "The iPad stand group's first notes connect the product's job with stiffness, stability and friction. Early planning considered support shape; the final material comparison is documented in Weeks 5–6.",
      },
      {
        src: "/images/unit2-wk3-product-connections.jpg",
        caption: "The chopstick group's product photo is linked to its job, observations and a question about materials and grip.",
      },
    ],
  },
  {
    id: "week-4",
    weekLabel: "Week 4 · 9–13 Nov · Classroom record through 11 Nov",
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
  {
    id: "week-5",
    weekLabel: "Week 5 · 16–20 Nov",
    title: "Testing Materials & Building Prototypes",
    timelineBlurb: "Testing material properties, returning to the wall and building in the Makerspace.",
    whatStudentsWorkedOn:
      "Six groups investigated chopstick grips, gaming mouse mats, marble track games, iPad stands, bike basket rain covers and tea strainers. Each product gave students a reason to consider which material properties mattered for its job. The iPad stand group made the same stand shape using plastic, cardboard and a 3D-printed material. They shook a table and measured movement in centimetres to investigate stability, then stacked loads on the stands and recorded supported mass in grams. The two tests gave them different evidence to consider when choosing a material. On 18 November, we spent two lessons in the Makerspace for our first visit. Groups worked on redesign prototypes or prepared their Design Fair displays. Students highlighted the organised materials and movable tables in their feedback.",
    mainTeachingPoint:
      "Choose a test that gives evidence about the property your product needs.",
    artifactName: "Returning to the scientific-process wall during testing",
    image: "/images/unit2-wk5-procedure-wall.jpg",
    whyArtifactMattered:
      "Groups continued adding research, observations, material choices and design sketches to their concept webs. Alongside these, the ten scientific-process sections kept their experiment plans visible. We returned to the walls to check what groups would change, measure and keep the same. Students could also look at other groups' procedures for ideas. The wall held the work between planning, testing and redesign.",
    photoSlots: [],
    whatDidNotWork:
      "Some groups still needed concrete models before they could explain how their tests would work, so the plans needed more than written instructions. Our first Makerspace visit also showed which routines need more attention. Coloured hot glue was particularly popular, and managing tools and cleaning up took longer than expected. Our next visit will need clearer routines for using, returning and clearing away the tools and materials.",
    gallery: [
      {
        src: "/images/unit2-wk5-mouse-mat-test.jpg",
        caption: "Testing a mouse mat while recording observations and using a timer. The product gives the group a reason to investigate friction.",
      },
      {
        src: "/images/unit2-wk5-track-materials.jpg",
        caption: "Different surface materials laid along a small marble track. The setup makes the comparison visible.",
      },
      {
        src: "/images/unit2-wk5-ipad-load-test.jpg",
        caption: "Stacking books on an iPad stand during the load test. The group recorded supported mass in grams, alongside a separate stability test measuring movement in centimetres.",
      },
      {
        src: "/images/unit2-wk5-makerspace-building.jpg",
        caption: "Building a prototype in the Makerspace during our first visit on 18 November.",
      },
      {
        src: "/images/unit2-wk5-makerspace-tools.jpg",
        caption: "Working with tools and materials in the Makerspace. Tool management and cleanup became clear priorities for the next visit.",
      },
      {
        src: "/images/unit2-wk5-chopstick-prototype.jpg",
        caption: "Building the chopstick grip prototype. The close-up keeps the material and construction work visible.",
      },
      {
        src: "/images/unit2-wk5-colouring-sign.jpg",
        caption: "Adding colour to the bike basket group's sign as part of preparing its Design Fair display.",
      },
      {
        src: "/images/unit2-wk5-marble-poster.jpg",
        caption: "Arranging the marble track group's scientific-process sections on its display, including results, a diagram and a conclusion.",
      },
      {
        src: "/images/unit2-wk5-ipad-poster-design.jpg",
        caption: "Preparing the iPad stand display. The results table brings the stability and load tests together on one poster.",
      },
      {
        src: "/images/unit2-wk5-mouse-poster-building.jpg",
        caption: "Working from notebooks while building the mouse mat group's scientific display.",
      },
      {
        src: "/images/unit2-wk5-poster-lettering.jpg",
        caption: "Drawing thicker, outlined lettering for a scientific-process heading.",
      },
      {
        src: "/images/unit2-wk5-design-photo.jpg",
        caption: "A classroom photograph added to the design section connects the finished display with the making process.",
      },
    ],
  },
  {
    id: "week-6",
    weekLabel: "Week 6 · 23–27 Nov · Design Fair, 25 Nov",
    title: "Explaining Design Choices",
    timelineBlurb: "Using cue cards, results and product demonstrations to explain the science to an audience.",
    whatStudentsWorkedOn:
      "Preparing for the 25 November Design Fair brought another challenge: explaining the science to an audience. Many students initially planned to read their posters through the headings of aim, hypothesis and the remaining scientific steps. We introduced finished cue-card models and practised a shorter explanation: begin with a hook, identify the product problem and tested property, share useful evidence, then explain the design choice. Our bike basket model opened with, ‘Would your books stay dry in Shanghai rain?’ It then introduced the rain cover's job and why water resistance mattered. Students worked on using cards as reminders while looking at their audience and pointing to a useful result, sketch or product. The final photographs record the completed displays, presentation practice at the wall and experiments being demonstrated to younger students.",
    mainTeachingPoint:
      "Explain how a useful result helped you make a design choice. Point to the evidence as you speak.",
    artifactName: "The iPad stand display: tests, results and design choices",
    image: "/images/unit2-wk6-ipad-stand-display.jpg",
    whyArtifactMattered:
      "The finished display brings the product problem, scientific-process sections and design work together. Classroom photographs sit beside the sketches and results. For the iPad stand group, movement in centimetres and supported mass in grams provided different evidence about the same material choice. The display gave students something concrete to point to when explaining their investigation to an audience.",
    photoSlots: [],
    whatDidNotWork:
      "A completed poster did not automatically give students a clear spoken explanation. Reading every scientific heading made the structure of the report the focus. The cue-card models helped us teach a shorter route through the work, beginning with the product problem and using a result to explain the design choice. Looking up, using cards as reminders and pointing to evidence needed explicit practice.",
    gallery: [
      {
        src: "/images/unit2-wk6-presentation-practice.jpg",
        caption: "The mouse mat display on the classroom wall for presentation practice. The scientific report remains available while students work on a shorter spoken explanation.",
      },
      {
        src: "/images/unit2-wk6-marble-testing.jpg",
        caption: "Testing the built marble track, with the route leading down towards a collection cup.",
      },
      {
        src: "/images/unit2-wk6-chopstick-display.jpg",
        caption: "The chopstick grip display brings the problem, test results and design together, with the product alongside the scientific report.",
      },
      {
        src: "/images/unit2-wk6-mouse-mat-display.jpg",
        caption: "The finished mouse mat display includes scientific-process sections, design sketches and photographs from the group's work.",
      },
      {
        src: "/images/unit2-wk6-basket-cover-display.jpg",
        caption: "The bike basket rain cover display connects water resistance with the product's job. Its design photographs sit beside the investigation and results.",
      },
      {
        src: "/images/unit2-wk6-marble-track-display.jpg",
        caption: "The marble track model sits in front of its display, giving the group a product to point to while explaining its design.",
      },
      {
        src: "/images/unit2-wk6-mouse-mat-demonstration.jpg",
        caption: "Using the mouse mat model and iPad visuals during a product demonstration. The materials and making process remain part of the explanation.",
      },
      {
        src: "/images/unit2-wk6-tea-strainer-demonstration.jpg",
        caption: "Demonstrating the tea strainer investigation to younger students. The materials are on the table alongside the display.",
      },
    ],
  },
];
