// ---------------------------------------------------------------------------
// Wall artifacts — the actual systems and routines on the wall.
// Each entry renders as an <ArtifactCard>. `featured: true` also surfaces it
// on the home page. Edit text freely; `image` points at /public/images/<file>.
// ---------------------------------------------------------------------------

export type Artifact = {
  id: string;
  title: string;
  image: string;
  purpose: string;
  how: string; // how students used it
  why: string; // why it helped
  featured?: boolean;
};

export const artifacts: Artifact[] = [
  {
    id: "research-unstuck-wall",
    title: "Research Unstuck Wall",
    image: "/images/research-unstuck-wall.jpg",
    purpose:
      "Give students a set of steps to try when research stalls, before asking an adult.",
    how: "When stuck, students worked down the steps: re-read the question, check the gap table, try a different source, ask a partner. The steps stayed on the wall.",
    why: "Getting unstuck stopped depending on the teacher being free. Students kept moving.",
    featured: true,
  },
  {
    id: "question-triangle",
    title: "Question Triangle",
    image: "/images/question-triangle.jpg",
    purpose:
      "Sort questions by type so students could tell a quick-fact question from one worth an inquiry.",
    how: "Students placed their questions on the triangle and chose which ones could carry a line of inquiry.",
    why: "It stopped groups from building an inquiry on a question that had a one-line answer.",
    featured: true,
  },
  {
    id: "x-journal",
    title: "X Journal",
    image: "/images/x-journal-cover.jpg",
    purpose: "A weekly homework journal where students tracked their own Exhibition thinking.",
    how: "Each week students wrote what they had done, what changed, and what they were stuck on. Entries fed back into the wall.",
    why: "It kept individual thinking visible inside a group project, so quiet students did not disappear.",
  },
  {
    id: "cornell-notes",
    title: "Cornell Notes",
    image: "/images/cornell-notes.jpg",
    purpose: "A shared note format for research and interviews.",
    how: "Students took notes in the Cornell layout, then wrote a summary in their own words.",
    why: "The summary step stopped copy-paste research. Students had to say what a source actually meant.",
  },
  {
    id: "loi-poster",
    title: "LOI Poster",
    image: "/images/loi-poster.jpg",
    purpose: "Make each group's central idea and lines of inquiry public on the wall.",
    how: "Groups drafted, posted, and revised their LOIs. Other groups and mentors could read and question them.",
    why: "Writing the lines down exposed gaps a group could otherwise ignore.",
  },
  {
    id: "tdt-card",
    title: "Our Bigger Connection TDT Card",
    image: "/images/tdt-card.jpg",
    purpose: "Connect each group's inquiry to the transdisciplinary theme.",
    how: "Groups wrote how their topic linked to the bigger theme and pinned it near their LOIs.",
    why: "It kept narrow topics tied to a larger idea, which mattered for the Exhibition.",
  },
  {
    id: "project-map",
    title: "Project Map",
    image: "/images/project-map.jpg",
    purpose: "An A3 poster holding a group's central idea and lines of inquiry, with mentor advice, new questions, and new evidence added as they came in.",
    how: "Groups pulled up a chair to the map every few days. The routine was fixed: add one sticky, move one sticky, take one away. They ran tape between stickies to show how a piece of evidence, a question, or a piece of advice connected back to a line of inquiry, the central idea, or the TDT poster.",
    why: "Moving and connecting the stickies kept students accountable for what they actually knew. The map showed their conceptual understanding of the topic, not just a stack of facts.",
    featured: true,
  },
  {
    id: "sticky-note-connections",
    title: "Sticky Note Connection System",
    image: "/images/sticky-note-connections.jpg",
    purpose: "Show how thinking was changing and how groups' ideas connected.",
    how: "Students added, moved, and linked sticky notes across the wall as ideas changed.",
    why: "Sticky notes kept the wall current instead of frozen. Moving a note was a record of a decision.",
    featured: true,
  },
  {
    id: "what-we-need-to-find-out",
    title: "What We Need to Find Out",
    image: "/images/what-we-need-to-find-out.jpg",
    purpose: "A thinking routine where each group listed everything they still did not know about their topic.",
    how: "Groups wrote their open questions on a poster and kept adding as they read and talked. The list of unknowns grew before it shrank.",
    why: "It made the gaps visible and fed straight into the Research Gap Table. You cannot fill a gap you have not named.",
  },
  {
    id: "research-gap-table",
    title: "Research Gap Table",
    image: "/images/research-gap-table.jpg",
    purpose: "Line up each line of inquiry against the evidence the group had and still needed.",
    how: "Groups turned “What We Need to Find Out” into a table: each line of inquiry against the evidence they had and the evidence still missing. The empty cells were the to-do list.",
    why: "Research got a target. Students looked for what was missing, not just more.",
    featured: true,
  },
  {
    id: "what-are-we-learning-poster",
    title: "What Are We Learning Poster",
    image: "/images/what-are-we-learning-poster.jpg",
    purpose: "Keep the group's message in one sentence everyone could repeat.",
    how: "Groups wrote and posted the one thing they wanted visitors to understand.",
    why: "It stopped a station from drifting into decoration with no point.",
  },
  {
    id: "tag-feedback",
    title: "TAG Feedback",
    image: "/images/tag-feedback.jpg",
    purpose: "Give feedback that leads to a change: Tell something, Ask a question, Give a suggestion.",
    how: "Students used TAG when testing each other's stations and posters.",
    why: "Feedback should lead to change. TAG made feedback specific enough to act on.",
  },
  {
    id: "station-design-map",
    title: "Presentation Station Design Map",
    image: "/images/station-design-map.jpg",
    purpose: "Lay out the physical station: where the poster, evidence, and visitor activity go.",
    how: "Groups drew the station layout before building, then adjusted it after testing.",
    why: "It put the visitor's path first, not the decoration.",
    featured: true,
  },
  {
    id: "mentor-meeting-reflection",
    title: "Mentor Meeting Reflection",
    image: "/images/mentor-meeting-reflection.jpg",
    purpose: "A short reflection a group wrote after each mentor meeting.",
    how: "Groups noted the advice and named one thing they would change before the next meeting.",
    why: "Advice only counts if it changes something. Writing it down made the change a commitment.",
  },
];

export const featuredArtifacts = artifacts.filter((a) => a.featured);
