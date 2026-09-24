import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { UnitCard } from "@/components/UnitCard";
import { units, unitHref, unitStatus, unitsIntro } from "@/data/units";

export const metadata: Metadata = {
  title: "Units",
  description:
    "Each learning wall on this site, unit by unit: the PYP Exhibition and the 2026–27 Units of Inquiry.",
};

export default function UnitsPage() {
  return (
    <>
      <PageHeader eyebrow="Units" title="Unit by unit" intro={unitsIntro} />

      <Section tone="cream">
        <div className="grid gap-6 sm:grid-cols-2">
          {units.map((unit) => (
            <UnitCard
              key={unit.slug}
              href={unitHref(unit)}
              eyebrow={unit.eyebrow}
              title={unit.title}
              theme={unit.theme}
              summary={unit.summary ?? unit.centralIdea}
              status={unitStatus(unit)}
              inProgress={unit.status === "in progress"}
              image={unit.coverImage}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
