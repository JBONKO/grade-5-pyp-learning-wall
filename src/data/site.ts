// ---------------------------------------------------------------------------
// Site-wide settings: title, one-line description, context line, and the nav.
// Edit these strings freely. The nav array drives the header and footer links.
// ---------------------------------------------------------------------------

export const site = {
  title: "The Working Wall",
  shortTitle: "The Working Wall",
  description:
    "Learning walls across a Grade 5 classroom: documenting inquiry, student agency and changing thinking, unit by unit.",
  // Small context line used in the header/footer. Edit to match your school.
  context: "Grade 5 · Bilingual IB PYP classroom · Shanghai",
};

export type NavItem = { label: string; href: string };

export const pypNav: NavItem[] = [
  { label: "Overview", href: "/pyp-exhibition" },
  { label: "Why the Wall", href: "/why-the-wall" },
  { label: "Research", href: "/research" },
  { label: "Journey", href: "/journey" },
  { label: "Artifacts", href: "/artifacts" },
  { label: "Group Actions", href: "/group-actions" },
  { label: "Exhibition", href: "/exhibition" },
  { label: "What Changed", href: "/what-changed" },
  { label: "Mentor Buy-In", href: "/mentor-buy-in" },

];

// A recurring idea, reused as a footer line / pull quote.
export const coreIdea =
  "Our learning walls hold questions, evidence and next steps where students can see them, use them and change them.";

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Units", href: "/units" },
  { label: "PYP Exhibition", href: "/pyp-exhibition" },
  { label: "About", href: "/about" },
];
