// ---------------------------------------------------------------------------
// Home page content. The timeline pulls from journey.ts and the featured
// artifacts pull from artifacts.ts, so you only edit those once.
// ---------------------------------------------------------------------------

export const home = {
  hero: {
    eyebrow: "Grade 5 PYP Exhibition · Shanghai",
    title: "The Working Wall",
    subtitle:
      "How Grade 5 students used a wall to track inquiry, evidence, action, and exhibition readiness.",
    intro:
      "This site documents one wall in a bilingual PYP classroom during the Grade 5 Exhibition. The wall was not a display. It was the place where students kept their questions, research, evidence, mentor notes, and next steps where everyone could see them — and change them.",
    tag: "Evidence first. Experience second. Decoration last.",
    image: "/images/hero-learning-wall.jpg",
  },

  notDecoration: {
    heading: "The wall was not decoration",
    body: [
      "Most display boards show finished work. This wall showed work in progress: half-formed questions, research that led nowhere, sticky notes that got moved three times.",
      "Students added to it, argued with it, and rewrote it every week. When their thinking changed, the wall changed.",
    ],
  },

  // Three shifts the wall helped students make.
  shifts: [
    {
      id: "questions-to-inquiry",
      from: "questions",
      to: "inquiry",
      body: "Students started with topics and long lists of questions. The wall helped them sort questions by type and pick the ones worth building an inquiry on.",
    },
    {
      id: "research-to-evidence",
      from: "research",
      to: "evidence",
      body: "Random fact-finding stopped. Students tracked what the project still needed and went after primary evidence: interviews, tests, real numbers.",
    },
    {
      id: "display-to-experience",
      from: "display",
      to: "visitor experience",
      body: "The last weeks moved from making posters to designing what a visitor would do, hear, and try at each station.",
    },
  ],

  // Cards linking to the main pages.
  pageCards: [
    {
      title: "Why the Wall",
      blurb: "The problem the wall was solving — and what it did not solve.",
      href: "/why-the-wall",
    },
    {
      title: "Research Base",
      blurb: "The four sources that shaped the wall, and how each one showed up.",
      href: "/research",
    },
    {
      title: "The Journey",
      blurb: "Week by week, from inquiry systems to the final presentation.",
      href: "/journey",
    },
    {
      title: "Wall Artifacts",
      blurb: "The systems and routines that lived on the wall and at the stations.",
      href: "/artifacts",
    },
    {
      title: "Group Actions",
      blurb: "Six PYPx groups, their actions, and the evidence behind them.",
      href: "/group-actions",
    },
    {
      title: "What Changed",
      blurb: "Honest course corrections — what did not work, and the fix.",
      href: "/what-changed",
    },
    {
      title: "Resources",
      blurb: "Routines and templates you can reuse in your own classroom.",
      href: "/resources",
    },
  ],

  closingLine: "The wall changed as the students changed their thinking.",
};
