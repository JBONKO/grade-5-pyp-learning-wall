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
    title: "The first lines of inquiry were too abstract to research",
    body: "Students could name a topic but not write a line of inquiry that led anywhere. Sentence frames and a few worked examples fixed it. Most groups rewrote their lines at least once before they were any use on the wall.",
  },
  {
    id: "magicschool-copying",
    title: "Students copied AI prompts straight into their notes",
    body: "Some pasted prompts and answers from MagicSchool into their notes without reading them. The notes looked full and meant nothing. So we added a step: rewrite every finding in your own words in Cornell Notes. Slower, but the notes started to mean something.",
  },
  {
    id: "project-map-examples",
    title: "Describing a good project map in words did nothing",
    body: "Groups could not picture what “good” looked like from instructions. Once we posted two finished maps on the wall, the next round improved on its own.",
  },
  {
    id: "canva-checking-tool",
    title: "Groups treated their Canva slides as the display",
    body: "So we set a rule: don't print it, and don't leave an iPad at the station running the slides. Canva was a checklist for tracking tasks and keeping work moving between classes. The station was what visitors saw, not the screen.",
  },
  {
    id: "materials-routines",
    title: "Build week fell apart when materials were a free-for-all",
    body: "Cardboard vanished, tape ran out, tables were a mess. We taught the routine directly: where things live, how to take and return them, and the rule that you plan before you build.",
  },
  {
    id: "wall-needs-action",
    title: "A poster that just hung there got ignored",
    body: "The artifacts that worked were the ones students had to touch — move a sticky, fill a gap in the table, check off a fix, rewrite a line. When the wall asked for an action, the kids used it.",
  },
];
