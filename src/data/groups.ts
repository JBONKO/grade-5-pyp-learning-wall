// ---------------------------------------------------------------------------
// The six PYPx groups and their actions. Each renders as a <GroupActionCard>.
// `teacherPush` is the thing that had to stay clear — shown as a callout.
// ---------------------------------------------------------------------------

export type Group = {
  id: string;
  topic: string;
  action: string;
  evidence: string;
  stationDirection: string;
  teacherPush: string;
  image?: string; // /images/group-*.jpg — the group's project map
  actionImage?: string; // /images/group-action-*.jpg — action poster + peer feedback
};

export const groups: Group[] = [
  {
    id: "ai-drones-safety",
    image: "/images/group-drones.jpg",
    actionImage: "/images/group-action-drones.jpg",
    topic: "AI Drones and Safety",
    action:
      "An assembly with safety tips, plus an immersive station on the dangers of flying drones illegally.",
    evidence:
      "Rules on where drones can and cannot fly, examples of illegal flights, and what can go wrong.",
    stationDirection:
      "Put the visitor inside a near-miss scenario, then show the safer choice.",
    teacherPush:
      "Keep the safety message specific. “Be careful with drones” is not a tip — name the rule and the risk.",
  },
  {
    id: "sustainable-transportation",
    image: "/images/group-transport.jpg",
    actionImage: "/images/group-action-transport.jpg",
    topic: "Sustainable Transportation",
    action:
      "A school video about changing how we travel, backed by an expert interview with an airplane mechanic about sustainable flying.",
    evidence:
      "Interview notes from the airplane mechanic. Comparisons between transport options.",
    stationDirection:
      "Use the mechanic's words as real evidence, not background. Show what they actually said.",
    teacherPush:
      "The expert interview is the strongest evidence here. Make sure visitors see it, not just the video.",
  },
  {
    id: "revolutions-game",
    image: "/images/group-revolutions.jpg",
    actionImage: "/images/group-action-revolutions.jpg",
    topic: "American and French Revolutions",
    action: "A game that helps students learn the history in a way that sticks.",
    evidence: "Key events and causes from both revolutions, checked against sources.",
    stationDirection:
      "Make the game teach the history, not just entertain. A player should have to learn something to win.",
    teacherPush:
      "Keep the history accurate. Fun cannot replace getting the facts right.",
  },
  {
    id: "pop-mart-economics",
    image: "/images/group-popmart.jpg",
    actionImage: "/images/group-action-popmart.jpg",
    topic: "Pop Mart Economics / Rational Consumption",
    action:
      "A random-draw experience using Labubu / Pop Mart-style products, plus booklets to help with budgeting.",
    evidence: "How blind-box pricing works. What people spend. Basic budgeting.",
    stationDirection:
      "Let visitors feel the pull of the random draw, then show the budgeting booklet as the counter.",
    teacherPush:
      "The draw is the hook, not the message. The point is rational spending — keep that in front.",
  },
  {
    id: "healthy-eating",
    image: "/images/group-healthy-eating.jpg",
    actionImage: "/images/group-action-healthy-eating.jpg",
    topic: "Healthy Eating and Childhood Obesity",
    action:
      "An interview with the canteen, and a proposal to adjust school snacks to be healthier.",
    evidence: "Canteen interview notes. What snacks are offered now. Healthier options.",
    stationDirection:
      "Aim the proposal at the school. Make it something the canteen could actually do.",
    teacherPush:
      "A proposal has to be realistic. “Ban all sugar” will not happen — what is the real, doable change?",
  },
  {
    id: "mental-health",
    image: "/images/group-mental-health.jpg",
    actionImage: "/images/group-action-mental-health.jpg",
    topic: "Mental Health and Well-being",
    action: "A friendship club to support belonging and well-being at school.",
    evidence: "Why belonging matters at school. What makes a club people actually join.",
    stationDirection:
      "Show how the club works, not just that it exists. What does a member do?",
    teacherPush:
      "Keep it concrete. A club needs a time, a place, and a first activity — not just a name.",
  },
];
