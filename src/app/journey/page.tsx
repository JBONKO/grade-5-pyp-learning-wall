import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";
import { WeekSection } from "@/components/WeekSection";
import { weeks } from "@/data/journey";

export const metadata: Metadata = {
  title: "The Journey",
  description: "Week-by-week documentation, from inquiry systems to exhibition readiness.",
};

const timelineItems = weeks.map((w) => ({
  label: w.weekLabel,
  title: w.title,
  href: `#${w.id}`,
}));

export default function JourneyPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Journey"
        title="Seven weeks, week by week"
        intro="Each week added one routine to the wall — seven in all, ending with the exhibition readiness check. Every week here keeps what worked next to what had to change."
      />

      {/* Overview stepper */}
      <Section tone="paper">
        <Timeline items={timelineItems} />
      </Section>

      {/* Full week-by-week */}
      <div>
        {weeks.map((week, index) => (
          <WeekSection key={week.id} week={week} index={index} />
        ))}
      </div>
    </>
  );
}
