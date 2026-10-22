import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { UnitCard } from "@/components/UnitCard";
import { ZoomableImage } from "@/components/ZoomableImage";
import { home } from "@/data/home";
import { units, unitHref, unitStatus } from "@/data/units";

const orderedUnits = [...units].sort((a, b) => Number(b.status === "in progress") - Number(a.status === "in progress"));
const currentUnit = orderedUnits.find((unit) => unit.status === "in progress")
  ?? orderedUnits.find((unit) => (unit.weeks?.length ?? 0) > 0);
const latestWeek = currentUnit?.weeks?.[currentUnit.weeks.length - 1];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line bg-paper">
        <Container className="grid gap-8 py-14 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">{home.eyebrow}</p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">{home.title}</h1>
            <p className="mt-5 font-serif text-2xl text-teal sm:text-3xl">{home.subtitle}</p>
          </div>
          <div>
            <p className="text-[17px] leading-relaxed text-muted">{home.intro}</p>
            <Link href="#learning-walls" className="mt-6 inline-flex rounded-full bg-teal px-6 py-3.5 text-sm font-bold text-white transition hover:bg-teal-dark">Explore the units &darr;</Link>
          </div>
        </Container>
      </section>

      <Section id="learning-walls">
        <SectionHeading eyebrow="The unit collection" title="Our learning walls" intro={home.unitsIntro} className="mb-9" />
        <div className="grid gap-6 md:grid-cols-2">
          {orderedUnits.map((unit) => (
            <UnitCard key={unit.slug} href={unitHref(unit)} eyebrow={unit.eyebrow} title={unit.title} theme={unit.theme}
              summary={unit.summary ?? unit.centralIdea} status={unitStatus(unit)} inProgress={unit.status === "in progress"} image={unit.coverImage} />
          ))}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted">PYP Exhibition was the first unit I documented, and remains an important part of this collection. The record now grows across our Units of Inquiry throughout the year.</p>
      </Section>

      {currentUnit && latestWeek ? (
        <Section tone="dark">
          <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-14">
            <div>
              <SectionHeading eyebrow={`Latest documented learning · ${currentUnit.title}`} title={latestWeek.artifactName} light />
              <p className="mt-5 text-sm font-semibold text-mustard">{latestWeek.weekLabel} · {latestWeek.title}</p>
              <p className="mt-4 text-[17px] leading-relaxed text-cream/75">{latestWeek.whyArtifactMattered}</p>
              <Link href={`${unitHref(currentUnit)}#${latestWeek.id}`} className="mt-7 inline-flex rounded-full bg-mustard px-6 py-3.5 text-sm font-bold text-ink transition hover:bg-mustard-soft">Read the latest week &rarr;</Link>
            </div>
            <ZoomableImage src={latestWeek.image} alt={latestWeek.artifactName} frameClassName="aspect-[4/3] overflow-hidden rounded-2xl bg-black/20" />
          </div>
        </Section>
      ) : null}

      <Section tone="mustard">
        <SectionHeading eyebrow="Across the classroom year" title="A space that grows with the learning" className="mb-8" />
        <div className="grid gap-6 md:grid-cols-3">
          {home.practices.map((practice) => (
            <div key={practice.title} className="rounded-xl border border-line bg-paper p-6">
              <h3 className="font-serif text-xl text-ink">{practice.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{practice.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
