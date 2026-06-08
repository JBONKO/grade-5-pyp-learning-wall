// ---------------------------------------------------------------------------
// Resources — practical tools other teachers can reuse.
// Each renders as a download-style card. `file` is where the PDF will live once
// you add it: drop the file in /public/files/ and the card links to it.
// Until the file exists, the card shows a "coming soon" state.
// ---------------------------------------------------------------------------

export type Resource = {
  id: string;
  title: string;
  description: string;
  file: string; // e.g. "/files/project-map-template.pdf"
};

export const resources: Resource[] = [
  {
    id: "pull-up-a-chair",
    title: "Pull Up a Chair routine",
    description:
      "A mentor-style routine: pull a chair up to a group and ask about their thinking, not their progress.",
    file: "/files/pull-up-a-chair-routine.pdf",
  },
  {
    id: "research-unstuck-wall",
    title: "Research Unstuck Wall",
    description: "The steps students follow when research stalls, before asking an adult.",
    file: "/files/research-unstuck-wall.pdf",
  },
  {
    id: "sticky-note-connection-system",
    title: "Sticky Note Connection System",
    description:
      "How to use sticky notes to show changing thinking and connect groups' ideas across the wall.",
    file: "/files/sticky-note-connection-system.pdf",
  },
  {
    id: "project-map-template",
    title: "Project Map template",
    description: "A blank Project Map for planning a station before building.",
    file: "/files/project-map-template.pdf",
  },
  {
    id: "presentation-station-design-map",
    title: "Presentation Station Design Map",
    description: "A layout template for placing the poster, evidence, and visitor activity.",
    file: "/files/presentation-station-design-map.pdf",
  },
  {
    id: "station-test-fix-list",
    title: "Station Test + Fix List",
    description: "A sheet to turn test feedback into a checklist of fixes.",
    file: "/files/station-test-fix-list.pdf",
  },
  {
    id: "x-journal-homework",
    title: "X Journal homework",
    description: "The weekly journal prompts students used to track their own thinking.",
    file: "/files/x-journal-homework.pdf",
  },
  {
    id: "mentor-meeting-expectations",
    title: "Mentor meeting expectations",
    description: "What students should bring to a mentor meeting, and what to do with the advice after.",
    file: "/files/mentor-meeting-expectations.pdf",
  },
  {
    id: "build-week-material-rules",
    title: "Build week material rules",
    description: "The materials routine for build week, including “no plan = no paint.”",
    file: "/files/build-week-material-rules.pdf",
  },
];
