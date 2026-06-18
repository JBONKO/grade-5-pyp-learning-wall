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
  whatDidNotWork?: string; // friction + the adjustment that was made
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
      { src: "/images/journey-wk12-a.jpg", caption: "The wall at the end of Week 1." },
      { src: "/images/journey-wk12-c.jpg", caption: "A “don't know where to start” mind map from the first days." },
      { src: "/images/journey-wk12-b.jpg", caption: "Students adding questions to the first Question Triangle." },
      { src: "/images/journey-wk1-triangle-rd2.jpg", caption: "The second Question Triangle, rebuilt with three categories after the first one had too many to sort. Now a question had an obvious place to go." },
      { src: "/images/journey-wk12-d.jpg", caption: "Building the research timeline that ran along the wall." },
      { src: "/images/journey-wk12-f.jpg", caption: "Question starters for getting unstuck." },
      { src: "/images/journey-wk12-e.jpg", caption: "Taking notes from a source — sketching to understand it." },
      { src: "/images/journey-wk12-g.jpg", caption: "Group posters going up on the wall timeline in Week 2." },
      { src: "/images/x-journal-cover-2.jpg", caption: "A student's X Journal cover, made in the first weeks." },
      { src: "/images/journey-wk7-j.jpg", caption: "A drone drawn on an X Journal cover." },
      { src: "/images/journey-wk7-m.jpg", caption: "A weekly reflection from the X Journal: what I did, what to change — and “we didn't have any arguments!!”" },
      { src: "/images/journey-wk1-teamwork-pie.jpg", caption: "A teamwork pie chart from week one. The student gave the biggest slice to responsibility, because if no one knows their job, the project falls apart." },
      { src: "/images/journey-wk1-collaboration-scale.jpg", caption: "A “how collaborative am I?” self-rating from the first week. This one landed at 3.5 out of 5, with a note about helping more on the group's research questions." },
      { src: "/images/journey-wk2-drones-poster.jpg", caption: "The drones group's Week 2 poster on drones, AI, and safety. The parts of a drone, and the line between legal uses (farming, building monitoring, science) and illegal ones (spying, privacy problems)." },
      { src: "/images/journey-wk2-popmart-poster.jpg", caption: "The rational consumption group on what they were learning in Week 2: why people buy Pop Mart, how marketing pulls on emotions, and where the money goes." },
      { src: "/images/journey-wk2-transport-poster.jpg", caption: "The sustainable transport group's Week 2 poster, written as questions. What reduces pollution, what fuel transport does to the air, and whether electric energy really beats fuel." },
      { src: "/images/journey-wk2-healthy-eating-poster.jpg", caption: "The healthy eating group's early poster on childhood obesity. Their lines of inquiry, their research so far, and a food scale running from fries up to vegetables." },
      { src: "/images/journey-wk1-unstuck-sorting.jpg", caption: "The sorting activity that became the Research Unstuck Wall. Kids wrote what stops them on a sticky, then sorted the stickies into six kinds of stuck, from not knowing where to start to tools and websites being confusing." },
      { src: "/images/journey-wk1-journal-cover.jpg", caption: "A finished X Journal cover, painted with the five approaches to learning the kids leaned on all term: communication, research, thinking, social, and self-management." },
    ],
  },
  {
    id: "week-3",
    weekLabel: "Week 3",
    title: "From Topics to Inquiry Structure",
    timelineBlurb: "Turned topics into central ideas and lines of inquiry.",
    whatStudentsWorkedOn:
      "Students moved from a topic (“drones,” “food”) to a structure: a central idea, lines of inquiry, and questions that sat under them. They drafted LOI posters and the “Our Bigger Connection” TDT card. The week also ran the What We Need to Find Out routine: a first round of Cornell notes research, then a group discussion of what they still needed to know. The class finished by pulling up a chair to every group's poster and putting red star stickers on information they thought mattered for other groups' research.",
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
      { src: "/images/journey-wk3-b.jpg", caption: "The wall timeline at the start of Week 3." },
      { src: "/images/what-we-need-to-find-out.jpg", caption: "“What We Need to Find Out” posters after Pull Up a Chair. The red stars mark information students starred for other groups' research." },
      { src: "/images/cornell-notes.jpg", caption: "A first round of Cornell notes — the research that fed each group's discussion of what they still needed to know." },
      { src: "/images/journey-wk3-g.jpg", caption: "Groups building their “What We Learn? Week 3” posters from their notes and journals." },
      { src: "/images/journey-wk3-h.jpg", caption: "One group's finished Week 3 poster — focus line of inquiry, ideas, sources, and questions, with TAG feedback taped on." },
      { src: "/images/journey-wk3-tdt-card.jpg", caption: "The revolutions group's “Our Bigger Connection” card. They tied the French and American revolutions to the theme Where We Are in Place and Time, and wrote out why it fits." },
      { src: "/images/journey-wk3-mental-health-poster.jpg", caption: "The mental disorder group's Week 3 poster: topic, focus line of inquiry, ideas, and sources, with a TAG feedback note taped on. The suggestion was blunt: add more detail, and do not copy straight from the source." },
    ],
  },
  {
    id: "week-4",
    weekLabel: "Week 4",
    title: "Research Gaps and Primary Evidence",
    timelineBlurb: "Audited what was missing, then chased real evidence.",
    whatStudentsWorkedOn:
      "Students audited what they already had and what was missing using the Research Gap Table. Then they went after primary evidence: interviews, a canteen visit, an expert call. The Project Map was introduced this week — each group's central idea, lines of inquiry, evidence, questions, and mentor advice went up in one place on the wall.",
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
      { src: "/images/journey-wk4-a.jpg", caption: "The wall in Week 4 — project maps after Pull Up a Chair." },
      { src: "/images/journey-wk3-a.jpg", caption: "Project maps up on the wall, with evidence, questions, and advice attached." },
      { src: "/images/journey-wk3-c.jpg", caption: "The Revolutions group's project map in its first week." },
      { src: "/images/research-gap-table-2.jpg", caption: "The Research Gap Table — built from each group's “What We Need to Find Out” list." },
      { src: "/images/journey-wk4-b.jpg", caption: "Survey and interview questions sorted on the triangle." },
      { src: "/images/what-are-we-learning-research.jpg", caption: "“What are we learning from our research?” — pulling findings together." },
      { src: "/images/journey-wk4-drones-map.jpg", caption: "The drones group's project map. The central idea in the middle (technology must be used responsibly), three lines of inquiry below it, and evidence, questions, and mentor advice on sticky notes." },
      { src: "/images/journey-wk4-transport-map.jpg", caption: "The sustainable transport group's project map. Central idea up top, three lines of inquiry, and the evidence, questions, and mentor advice pinned underneath." },
      { src: "/images/journey-wk4-mental-health-map.jpg", caption: "The mental health group's project map, with tape running from each piece of evidence back to the line of inquiry it supports." },
      { src: "/images/journey-wk4-field-trip.jpg", caption: "A field trip reflection in the X Journal. The group visited a flight simulator in Pudong and came back with facts for the inquiry, like the five steps to put on an oxygen mask." },
    ],
  },
  {
    id: "week-5",
    weekLabel: "Week 5",
    title: "Action and Station Design",
    timelineBlurb: "Picked an action; planned the station before building.",
    whatStudentsWorkedOn:
      "Each group decided on an action and started designing a station for it. They kept the Project Map current — central idea, lines of inquiry, evidence, questions, advice — and wrote a “What Are We Learning” poster to keep the message clear.",
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
      { src: "/images/journey-wk5-a.jpg", caption: "The wall in Week 5, after Pull Up a Chair." },
      { src: "/images/journey-wk3-d.jpg", caption: "Running the connection routine again — red tape linking new evidence back to the lines of inquiry." },
      { src: "/images/journey-wk5-b.jpg", caption: "The Question Triangle, updated in Week 5." },
      { src: "/images/station-design-zoom-1.jpg", caption: "A station design sketch, close up." },
      { src: "/images/station-design-zoom-2.jpg", caption: "Another group's station design sketch." },
      { src: "/images/journey-wk5-c.jpg", caption: "A student sketching a station design." },
      { src: "/images/journey-wk5-popmart-connections.jpg", caption: "The rational consumption group's project map, strung with red tape. Each ribbon ties a piece of evidence or a question back to the central idea." },
      { src: "/images/journey-wk5-healthy-eating-action.jpg", caption: "The healthy eating group's weekly poster after their canteen visit, where they asked the canteen manager about the school's food. Healthy and unhealthy options, sorted." },
      { src: "/images/journey-wk5-action-feedback.jpg", caption: "Action posters going up, with classmates' feedback stuck around them as speech bubbles. Each group's plan, and what the room thought of it." },
      { src: "/images/journey-wk5-reflection.jpg", caption: "A Week 5 reflection wheel from the X Journal. Three things done, a question still open (how do you judge whether a trip is sustainable?), and a plan to finish the group work on time." },
      { src: "/images/journey-wk5-mental-health-action.jpg", caption: "The mental health group's weekly poster, built around their action: helping with a friendship club and presenting at assembly, with a field trip booked for June." },
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
    artifactName: "Station Design Maps",
    image: "/images/journey-wk6-d.jpg",
    whyArtifactMattered:
      "Every group built from a design map: what the station was, where a visitor would stand, what they would do there. The map had to exist before the cardboard did.",
    photoSlots: [
      "Cardboard station title in progress",
      "Station being tested by classmates",
      "Station Test + Fix List with checked items",
      "Speaking role card",
    ],
    whatDidNotWork:
      "Groups were treating their Canva slideshow as the display. We made it a checklist instead — no printing it, no iPad at the station just running the slides.",
    gallery: [
      { src: "/images/journey-wk6-a.jpg", caption: "The wall by build week, with station materials below it." },
      { src: "/images/journey-wk6-b.jpg", caption: "Painting a cardboard station sign." },
      { src: "/images/journey-wk6-c.jpg", caption: "A group's weekly poster: sustainable transportation." },
      { src: "/images/journey-wk6-x-journal.jpg", caption: "One X Journal page doing a lot of work at once: the student's best question, what they heard that week, the job they set themselves, and the slide they planned to build." },
      { src: "/images/journey-wk6-highlight.jpg", caption: "A highlight page mapping the whole inquiry week by week, from forming the topic in Week 1 to finishing the action video and the field trip by Week 6." },
      { src: "/images/journey-wk6-station-design-ideas.jpg", caption: "Early station design ideas, sketched in 3D before anyone cut cardboard: a tent, a draped table, an open box stand." },
    ],
  },
  {
    id: "week-7",
    weekLabel: "Week 7",
    title: "Exhibition Readiness",
    timelineBlurb: "Made “are we ready?” a checklist, not a feeling.",
    whatStudentsWorkedOn:
      "Groups ran a readiness check against a shared list: the station works, evidence is visible, the poster explains itself, every student has a speaking role. They fixed the last gaps. Each group also began building a presentation timeline board — taking their artifacts down off the learning wall and re-hanging them as a record of the whole inquiry, ready for the presentation hall.",
    mainTeachingPoint:
      "A good poster helps visitors understand before you explain.",
    artifactName: "Exhibition Group Work Timeline",
    image: "/images/exhibition-timeline-board.jpg",
    whyArtifactMattered:
      "Each group took its weekly posters off the learning wall and re-hung them as one timeline. A visitor could read the whole inquiry in order, from the first central idea to the final action, before the group said a word.",
    photoSlots: [
      "Exhibition Readiness Check sheet",
      "Final station set up",
      "Group at their station before doors opened",
    ],
    whatDidNotWork:
      "Some posters still needed the presenter to explain them. We tested each poster by asking a student from another group to read it alone. If they did not get it, the poster changed.",
    gallery: [
      { src: "/images/journey-wk7-a.jpg", caption: "The Rational Consumption group's board: their weekly wall posters re-hung as a timeline of the whole inquiry." },
      { src: "/images/journey-wk7-b.jpg", caption: "Wall artifacts laid out on the floor, being arranged into a presentation timeline." },
      { src: "/images/journey-wk7-c.jpg", caption: "A group's wall work moving onto their presentation board." },
      { src: "/images/journey-wk3-e.jpg", caption: "Building a station poster — research cards laid out before anything got glued down." },
      { src: "/images/journey-wk3-f.jpg", caption: "A group's finished overview poster: central idea, TDT connection, lines of inquiry, and the action." },
      { src: "/images/journey-wk7-d.jpg", caption: "A P4C question board painted for presentation day: can technology be helpful and dangerous at the same time?" },
      { src: "/images/journey-wk7-e.jpg", caption: "The Healthy Eating group's action poster — interview questions, the plan, and what a healthy snack requires." },
      { src: "/images/journey-wk7-f.jpg", caption: "Taking action on school snacks: the researched snack list, with reasons." },
      { src: "/images/journey-wk7-g.jpg", caption: "Survey results turned into pie charts for the Revolutions station." },
      { src: "/images/journey-wk7-i.jpg", caption: "A station robot built from cardboard boxes." },
      { src: "/images/journey-wk7-h.jpg", caption: "A Visitor Experience Map in the X Journal — what a visitor sees, does, and learns at the station." },
      { src: "/images/journey-wk7-k.jpg", caption: "An Evidence Spotlight in the X Journal: the finding, where it came from, and the line of inquiry it connects to." },
      { src: "/images/journey-wk7-l.jpg", caption: "Planning “my job this week” in the X Journal, one data finding ready for the talk." },
      { src: "/images/journey-wk7-presentation-plan.jpg", caption: "Week 7 presentation planning in the X Journal. A student drafts her opening, the group's central idea and lines of inquiry, and a sketch of the poster visitors meet first." },
      { src: "/images/journey-wk7-visitor-qa.jpg", caption: "Getting ready for visitors. The sustainable transport group lists the questions a visitor might ask, then drafts an answer for each. One of them: are new-energy cars really pollution-free?" },
    ],
  },
  {
    id: "week-8",
    weekLabel: "Week 8",
    title: "Presentation",
    timelineBlurb: "Last design fixes, then practicing the talk.",
    whatStudentsWorkedOn:
      "The final week was for finishing station design and practicing the presentation. To write cue cards, groups pulled up a chair to their project maps and pulled the most important information off the wall. They finished the timeline boards begun in Week 7 and took them down to the presentation hall, showing their progress across the whole PYPx. That was the point of the week: the wall mattered, and everything students had made on it got used again when it counted.",
    mainTeachingPoint:
      "Practice the talk, not just the station. We used AFOREST — alliteration, facts, opinions, rhetorical questions, emotive language, statistics, triplets — to make presentations persuasive.",
    artifactName: "My Opening (presentation plan)",
    image: "/images/my-opening.jpg",
    whyArtifactMattered:
      "“My Opening” planned the first thirty seconds — the hook. If the opening is flat, visitors drift, so the opening had to earn the rest of the talk.",
    photoSlots: [
      "A group practicing their presentation",
      "Timeline board built from wall artifacts, ready for the presentation hall",
      "Speaking-role cards",
    ],
    whatDidNotWork:
      "Some students came to Week 8 underprepared, without a clear role. That did not work. We pulled them for one-on-one support to find each of them a job — a part of the talk, a station task — so they could actually help their group at the exhibition.",
    gallery: [
      { src: "/images/journey-wk8-healthy-presenting.jpg", caption: "Exhibition day. The healthy eating group walks visitors through their station under the PYPx banner, central idea, action poster, and P4C question all in reach." },
      { src: "/images/journey-wk8-drones-drama.jpg", caption: "The drones group performs their drama for a packed audience, the principal down in the front row with the kids." },
      { src: "/images/journey-wk8-transport-station.jpg", caption: "The sustainable transport station, built around a real bike, with the central idea and lines of inquiry behind it." },
      { src: "/images/journey-wk8-revolutions-station.jpg", caption: "The revolutions station: American and French Revolution boards, a central idea map, and a card game waiting on the table." },
      { src: "/images/journey-wk8-drones-station.jpg", caption: "The drones group's walk-through gallery, with a P4C question on AI safety, a built robot, and drone safety tips hung for visitors to read." },
      { src: "/images/journey-wk8-pedal-light.jpg", caption: "Try it yourself: pedal the bike to light the bulb. The sustainable transport group turned their message into something a visitor could do." },
      { src: "/images/journey-wk8-easel-xjournal.jpg", caption: "An easel of X Journal pages and a P4C question, with visitor answers on sticky notes. The station borrowed the wall's own sticky-note system." },
      { src: "/images/journey-wk8-transport-stickies.jpg", caption: "The sustainable transport group asked every visitor to write one daily action on a sticky note. The action, handed to the visitor." },
      { src: "/images/journey-wk8-healthy-poster.jpg", caption: "The healthy eating group's final action poster, finished for exhibition day." },
      { src: "/images/journey-wk8-drones-timeline.jpg", caption: "The drones group strung their whole inquiry timeline on a line, so visitors could walk it from first question to final action." },
      { src: "/images/journey-wk8-revolutions-xjournal.jpg", caption: "Highlighted X Journal pages next to the revolutions group's P4C board." },
      { src: "/images/journey-wk8-revolutions-poster.jpg", caption: "Close up of the revolutions poster: the causes of the French Revolution, in the group's own words." },
      { src: "/images/journey-wk8-revolutions-survey.jpg", caption: "Survey results and an open X Journal at the revolutions station, the evidence behind the talk." },
      { src: "/images/journey-wk8-revolutions-cardgame.jpg", caption: "The revolutions group built a leader card game and a brochure, with a QR code so visitors could keep reading." },
      { src: "/images/journey-wk8-bike-light.jpg", caption: "The bulb the pedals power, wired to the bike. Proof the action actually worked." },
      { src: "/images/cue-card-creation.jpg", caption: "Drafting cue cards. Groups pulled up a chair to their project maps and chose the information that mattered most." },
      { src: "/images/cue-card-creation-2.jpg", caption: "Finished cue cards on top of the PYPx journal. The top information from the wall, ready for the talk." },
      { src: "/images/p4c-question-2.jpg", caption: "A station's P4C question, asked in both languages." },
      { src: "/images/p4c-question-3.jpg", caption: "Another station's P4C question — is it fair to control others' diet?" },
      { src: "/images/forms-of-expression-explained.jpg", caption: "A station's form of expression, explained by the group." },
      { src: "/images/forms-of-expression-inside.jpg", caption: "Inside the clay model built for the mental-health station." },
      { src: "/images/journey-wk8-checklist.jpg", caption: "A student's own presentation checklist. Finish the poster, the quiz, the drama, practice the talk, get prepared mentally. Every box ticked, with a finish line drawn at the bottom." },
      { src: "/images/journey-wk8-finish-reflection.jpg", caption: "A finish-line reflection before exhibition day. What the student wants visitors to remember, what still needs practice (speed), and the goal they are working on: walk in confident." },
      { src: "/images/journey-wk8-station-showcase.jpg", caption: "The sustainable transport group's station plan. A bike wired to a light bulb (pedal it, and the bulb goes from dark to bright), the three things a visitor should learn, and a showcase that ends with visitors pledging to choose sustainable transport." },
    ],
  },
];

// A short closing reflection on the whole process, shown at the end of the
// Journey page after the eight weeks.
export const journeyConclusion = {
  eyebrow: "After the exhibition",
  heading: "What the wall was for",
  paragraphs: [
    "Eight weeks, one wall, 23 kids, 6 groups. The wall was never the point. The point was that the thinking stayed somewhere the kids could see it, argue with it, and move it. By the exhibition, a group's questions, evidence, and dead ends were not sitting in a folder. They were on a board the group carried into the hall and stood next to.",
    "It did not run clean. The wall got crowded fast, and for a couple of weeks it was clutter instead of a system, until we built a routine to move and retire notes. Some kids treated it as decoration right up until the week they had to update it in front of their group. Early on, a few copied answers straight out of MagicSchool without reading them, so we added one rule: rewrite the finding in your own words first, or it does not count.",
    "It was also heavy. Eight weeks of building routines, running pull-up-a-chair sessions, and teaching into the wall is more work than printing a checklist and handing it out. I cut other things to make room for it. My read is that it was worth the trade, but I am not going to pretend it was free.",
    "The part I keep going back to is week eight. The groups pulled their work off the wall and rebuilt it as a timeline for the presentation hall. They had been moving those pieces around the wall for two months. Nobody asked me which one came first.",
  ],
};
