import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";
import { WeekSection } from "@/components/WeekSection";
import { weeks } from "@/data/journey";

export const metadata: Metadata = {
  title: "The Journey",
  description: "Week-by-week documentation, from inquiry systems to the final presentation.",
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
        title="Eight weeks, week by week"
        intro="Eight weeks, from the first inquiry routines through the exhibition and the final presentation. Where something broke, the fix is written down next to it."
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
