// ---------------------------------------------------------------------------
// "Exhibition" page: what visitors experienced at the stations.
// Edit text freely. `image` points at /public/images/<file>.
// ---------------------------------------------------------------------------

export type Exhibit = {
  id: string;
  title: string;
  image: string;
  lead: string; // one-line summary
  body: string;
};

export const exhibitionIntro = {
  eyebrow: "Exhibition",
  title: "What visitors experienced",
  intro:
    "By the last weeks the work moved off the wall and into the room. These are the pieces that decided what a visitor did, heard, and felt at each station.",
};

export const exhibits: Exhibit[] = [
  {
    id: "visitor-experience",
    title: "Visitor Experience Map",
    image: "/images/visitor-experience.jpg",
    lead: "Plan the visitor's path, not the decoration.",
    body: "Before the exhibition, each group mapped what a visitor does, sees, hears, and is asked at the station — the order of the experience. It moved a group from “what is on our poster” to “what does a visitor actually do here.”",
  },
  {
    id: "p4c-question",
    title: "P4C Question",
    image: "/images/p4c-question.jpg",
    lead: "A question with no quick answer.",
    body: "Each group posed one open, arguable Philosophy for Children question at the station, so visitors had to think and talk, not just look. It turned the station into a conversation.",
  },
  {
    id: "forms-of-expression",
    title: "Forms of Expression",
    image: "/images/forms-of-expression.jpg",
    lead: "Feel it before you read it.",
    body: "One student built a clay model for the mental-health station, made to provoke an emotion about the topic rather than explain it. Some ideas land harder through feeling than through a paragraph.",
  },
  {
    id: "my-opening",
    title: "My Opening",
    image: "/images/my-opening.jpg",
    lead: "The first thirty seconds.",
    body: "Groups planned and practiced the hook they would open the talk with, using AFOREST to make it land. If the opening is flat, visitors drift — the opening earns the rest of the talk.",
  },
  {
    id: "exhibition-highlight",
    title: "Exhibition Highlight",
    image: "/images/exhibition-highlight.jpg",
    lead: "What they were proud of, and what was hard.",
    body: "After the doors closed, students wrote what they were proud of, what was hard, and what they would change. The friction is where the learning shows.",
  },
];
