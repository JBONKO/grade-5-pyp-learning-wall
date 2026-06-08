// ---------------------------------------------------------------------------
// "What Worked / What Changed" — honest course corrections.
// Each entry renders as a <ReflectionBlock>.
// ---------------------------------------------------------------------------

export type Reflection = {
  id: string;
  title: string;
  body: string;
};

export const reflections: Reflection[] = [
  {
    id: "lois-scaffolding",
    title: "LOIs needed more scaffolding",
    body: "Students could name a topic but could not write a line of inquiry that led somewhere. The first LOIs were too abstract to research. We added sentence frames and worked examples, and most groups rewrote their lines at least once before they were usable on the wall.",
  },
  {
    id: "magicschool-copying",
    title: "MagicSchool prompt copying slowed students down",
    body: "Some students copied prompts and outputs from MagicSchool straight into their notes without reading them. The notes looked full but meant nothing. We added a step: rewrite findings in your own words in Cornell Notes. Slower, but the notes started to mean something.",
  },
  {
    id: "project-map-examples",
    title: "Students needed visual examples for project maps",
    body: "Describing a Project Map in words was not enough. Groups did not know what “good” looked like. Once we posted finished example maps on the wall, the next round of maps improved.",
  },
  {
    id: "canva-checking-tool",
    title: "Canva had to be reframed as a checking tool",
    body: "Groups were pouring time into Canva slides and treating them as the Exhibition. We reframed it: Canva was for checking your message, not for teaching at the station. The station — what a visitor does and sees — was the presentation.",
  },
  {
    id: "materials-routines",
    title: "Materials routines had to be explicitly taught",
    body: "Build week fell apart when materials were a free-for-all. Cardboard disappeared, tape ran out, tables were a mess. We taught the routine directly: where materials live, how to take and return them, and the rule that you plan before you build.",
  },
  {
    id: "wall-needs-action",
    title: "Wall artifacts worked best when students had to act on them",
    body: "A poster that just hung there got ignored. The artifacts that worked were the ones students had to touch: move a sticky note, fill a gap in the table, check off a fix, rewrite an LOI. When the wall demanded an action, students used it.",
  },
];
