// ---------------------------------------------------------------------------
// Week-by-week documentation. Each entry renders as a <WeekSection> on the
// Journey page, and the short fields feed the timeline on the home page.
//
// To edit: change the text below. To add a week: copy one object, change `id`.
// `image` points at /public/images/<file> — see ImagePlaceholder for behaviour.
// ---------------------------------------------------------------------------

export type Week = {
  id: string;
  weekLabel: string; // e.g. "Weeks 1–2"
  title: string;
  timelineBlurb: string; // one short line for the home-page timeline
  whatStudentsWorkedOn: string;
  mainTeachingPoint: string;
  artifactName: string;
  image: string;
  whyArtifactMattered: string;
  photoSlots: string[]; // suggested photos to take/add for this week
  whatDidNotWork: string; // friction + the adjustment that was made
  gallery?: { src: string; caption: string }[]; // real photos from this week
};

export const weeks: Week[] = [
  {
    id: "weeks-1-2",
    weekLabel: "Weeks 1–2",
    title: "Inquiry Systems",
    timelineBlurb: "Set up the routines the wall would run on.",
    whatStudentsWorkedOn:
      "Students set up the routines the wall would run on: how to ask a question, where research goes, what to do when stuck. They built the Research Unstuck Wall and the Question Triangle and started the X Journal.",
    mainTeachingPoint:
      "A system you can see beats a system you have to remember. Put the routine on the wall.",
    artifactName: "Research Unstuck Wall",
    image: "/images/research-unstuck-wall.jpg",
    whyArtifactMattered:
      "When a student hit a wall, they had somewhere to go before asking an adult. The steps lived on the wall, so getting unstuck did not depend on the teacher being free.",
    photoSlots: [
      "Research Unstuck Wall, full view",
      "Question Triangle with student questions on it",
      "X Journal cover and a first entry",
    ],
    whatDidNotWork:
      "The first Question Triangle had too many categories. Students could not decide where a question went, so they stopped sorting. We cut it to three types and sorted the rest later.",
    gallery: [
      { src: "/images/journey-wk12-a.jpg", caption: "Students adding questions to the first Question Triangle." },
      { src: "/images/journey-wk12-b.jpg", caption: "The sorting activity that became the Research Unstuck Wall." },
    ],
  },
  {
    id: "week-3",
    weekLabel: "Week 3",
    title: "From Topics to Inquiry Structure",
    timelineBlurb: "Turned topics into central ideas and lines of inquiry.",
    whatStudentsWorkedOn:
      "Students moved from a topic (“drones,” “food”) to a structure: a central idea, lines of inquiry, and questions that sat under them. They drafted LOI posters and the “Our Bigger Connection” TDT card.",
    mainTeachingPoint:
      "A topic is not an inquiry. An inquiry needs lines that tell you what to find out.",
    artifactName: "LOI Poster",
    image: "/images/loi-poster.jpg",
    whyArtifactMattered:
      "The LOI poster forced each group to write down their lines of inquiry. Gaps showed up fast when a line had no questions under it.",
    photoSlots: [
      "LOI poster draft with student edits",
      "“Our Bigger Connection” TDT card",
      "Wall section showing one group's structure",
    ],
    whatDidNotWork:
      "LOIs were too abstract on the first try. Students wrote lines they could not research. We added sentence frames and worked examples, and most LOIs were rewritten at least once.",
    gallery: [
      { src: "/images/journey-wk3-a.jpg", caption: "Group posters going up — central idea and lines of inquiry." },
      { src: "/images/journey-wk3-b.jpg", caption: "A thinking routine used to turn topics into structure." },
    ],
  },
  {
    id: "week-4",
    weekLabel: "Week 4",
    title: "Research Gaps and Primary Evidence",
    timelineBlurb: "Audited what was missing, then chased real evidence.",
    whatStudentsWorkedOn:
      "Students audited what they already had and what was missing using the Research Gap Table. Then they went after primary evidence: interviews, a canteen visit, an expert call.",
    mainTeachingPoint:
      "No more random research. Research only what the project still needs.",
    artifactName: "Research Gap Table",
    image: "/images/research-gap-table.jpg",
    whyArtifactMattered:
      "The table lined up each line of inquiry against the evidence the group had and did not have. Empty cells told students exactly what to go find.",
    photoSlots: [
      "Research Gap Table with empty cells marked",
      "Cornell Notes from an interview",
      "Wall showing new primary evidence added",
    ],
    whatDidNotWork:
      "Some groups copied prompts and answers straight from MagicSchool into their notes without reading them. We added a step: rewrite findings in your own words in Cornell Notes.",
    gallery: [
      { src: "/images/journey-wk4-a.jpg", caption: "A Research Gap Table up close — empty cells are the to-do list." },
      { src: "/images/journey-wk4-b.jpg", caption: "Survey and interview questions sorted on the triangle." },
    ],
  },
  {
    id: "week-5",
    weekLabel: "Week 5",
    title: "Action and Station Design",
    timelineBlurb: "Picked an action; planned the station before building.",
    whatStudentsWorkedOn:
      "Each group decided on an action and started designing a station for it. They used the Project Map to plan the station and the “What Are We Learning” poster to keep the message clear.",
    mainTeachingPoint:
      "The action is the point. The station has to make a visitor do or understand something.",
    artifactName: "Project Map",
    image: "/images/project-map.jpg",
    whyArtifactMattered:
      "The Project Map showed where the inquiry was going. Sticky notes showed how thinking was changing.",
    photoSlots: [
      "Project Map for one group",
      "“What Are We Learning” poster",
      "Sticky Note Connection System on the wall",
    ],
    whatDidNotWork:
      "Students wanted to start building before they had a plan. We made the rule: no plan = no paint. A group had to show a Project Map before getting materials.",
    gallery: [
      { src: "/images/journey-wk5-a.jpg", caption: "Pull Up a Chair: a group talks through its Project Map." },
      { src: "/images/journey-wk5-b.jpg", caption: "Action posters with speech-bubble feedback from other groups." },
    ],
  },
  {
    id: "week-6",
    weekLabel: "Week 6",
    title: "Build, Test, Revise, Practice",
    timelineBlurb: "Built from cardboard, tested on classmates, fixed the list.",
    whatStudentsWorkedOn:
      "Groups built their stations from cardboard, tested them on classmates, and fixed what did not work using the Station Test + Fix List. They practiced their speaking roles.",
    mainTeachingPoint:
      "Feedback should lead to change. Test the station, then fix it.",
    artifactName: "Station Test + Fix List",
    image: "/images/station-test-fix-list.jpg",
    whyArtifactMattered:
      "Testing turned vague worries into a list. Each problem a tester found became a fix the group could check off.",
    photoSlots: [
      "Cardboard station title in progress",
      "Station being tested by classmates",
      "Station Test + Fix List with checked items",
      "Speaking role card",
    ],
    whatDidNotWork:
      "Canva slides were becoming the presentation. We reframed Canva as a checking tool, not the show: Canva was for checking. The station was for teaching.",
    gallery: [
      { src: "/images/journey-wk6-a.jpg", caption: "Painting a station sign during build week." },
      { src: "/images/journey-wk6-b.jpg", caption: "The wall by build week, with station materials below it." },
    ],
  },
  {
    id: "week-7",
    weekLabel: "Week 7",
    title: "Exhibition Readiness",
    timelineBlurb: "Made “are we ready?” a checklist, not a feeling.",
    whatStudentsWorkedOn:
      "Groups ran a readiness check against a shared list: the station works, evidence is visible, the poster explains itself, every student has a speaking role. They fixed the last gaps.",
    mainTeachingPoint:
      "A good poster helps visitors understand before you explain.",
    artifactName: "Exhibition Readiness Check",
    image: "/images/exhibition-readiness-check.jpg",
    whyArtifactMattered:
      "The readiness check turned “are we ready?” into a list instead of a feeling. Groups could see what was left.",
    photoSlots: [
      "Exhibition Readiness Check sheet",
      "Final station set up",
      "Group at their station before doors opened",
    ],
    whatDidNotWork:
      "Some posters still needed the presenter to explain them. We tested each poster by asking a student from another group to read it alone. If they did not get it, the poster changed.",
  },
];
