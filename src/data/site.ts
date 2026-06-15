// ---------------------------------------------------------------------------
// Site-wide settings: title, one-line description, context line, and the nav.
// Edit these strings freely. The nav array drives the header and footer links.
// ---------------------------------------------------------------------------

export const site = {
  title: "The Working Wall",
  shortTitle: "The Working Wall",
  description:
    "How Grade 5 students used a wall to track inquiry, evidence, action, and exhibition readiness.",
  // Small context line used in the header/footer. Edit to match your school.
  context: "Grade 5 PYP Exhibition · Bilingual IB PYP classroom · Shanghai",
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Why the Wall", href: "/why-the-wall" },
  { label: "Research", href: "/research" },
  { label: "Journey", href: "/journey" },
  { label: "Artifacts", href: "/artifacts" },
  { label: "Group Actions", href: "/group-actions" },
  { label: "Exhibition", href: "/exhibition" },
  { label: "What Changed", href: "/what-changed" },
  { label: "Mentor Buy-In", href: "/mentor-buy-in" },
  { label: "About", href: "/about" },
];

// A recurring idea, reused as a footer line / pull quote.
export const coreIdea =
  "The learning wall was not decoration. It was a working system that showed how inquiry became action and exhibition.";
