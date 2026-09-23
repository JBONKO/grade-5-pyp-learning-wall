import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Field } from "@/components/Field";
import { Timeline } from "@/components/Timeline";
import { WeekSection } from "@/components/WeekSection";
import { getUnit, unitPages, unitStatus } from "@/data/units";

// Only the units listed in src/data/units.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return unitPages.map((unit) => ({ slug: unit.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const unit = getUnit(params.slug);
  if (!unit) return {};
  return { title: unit.title, description: unit.centralIdea };
}

export default function UnitPage({ params }: { params: { slug: string } }) {
  const unit = getUnit(params.slug);
  if (!unit) notFound();

  const weeks = unit.weeks ?? [];
  const documented = new Set(weeks.map((w) => w.id));
  const steps = unit.arc ?? weeks.map((w) => ({ id: w.id, label: w.weekLabel, title: w.title }));
  // Weeks already written up link down the page; the rest show as coming up.
  const timelineItems = steps.map((step) => {
    const done = documented.has(step.id);
    return {
      label: step.label,
      title: step.title,
      href: done ? `#${step.id}` : undefined,
      blurb: done ? undefined : "Coming up",
      upcoming: !done,
    };
  });

  return (
    <>
      <PageHeader eyebrow={unit.eyebrow} title={unit.title} intro={unit.intro} />

      {/* The unit at a glance */}
      <Section tone="mustard">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          {unit.centralIdea ? (
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">
                Central idea
              </p>
              <p className="mt-3 font-serif text-2xl leading-snug text-ink sm:text-3xl">
                {unit.centralIdea}
              </p>
            </div>
          ) : null}
          <dl className="grid content-start gap-6 sm:grid-cols-2">
            {unit.theme ? <Field label="Transdisciplinary theme">{unit.theme}</Field> : null}
            {unit.concepts ? <Field label="Key concepts">{unit.concepts.join(" · ")}</Field> : null}
            {unit.dates ? <Field label="Dates">{unit.dates}</Field> : null}
            {unit.summative ? <Field label="Summative">{unit.summative}</Field> : null}
            <Field label="Status">{unitStatus(unit)}</Field>
          </dl>
        </div>
      </Section>

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
