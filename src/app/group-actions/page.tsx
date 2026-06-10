import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { GroupActionCard } from "@/components/GroupActionCard";
import { ZoomableImage } from "@/components/ZoomableImage";
import { groups } from "@/data/groups";

export const metadata: Metadata = {
  title: "Group Actions",
  description: "Six PYPx groups, their actions, and the evidence behind them.",
};

export default function GroupActionsPage() {
  return (
    <>
      {/* Hero: bracket-framed title + overlapping circle photos */}
      <section className="overflow-hidden border-b border-line bg-paper">
        <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-clay">
              Group Actions
            </p>
            <div className="relative mt-5 inline-block pb-3 pl-5 pr-6 pt-4">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-9 w-9 rounded-tl-md border-l-[5px] border-t-[5px] border-mustard"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-0 right-0 h-9 w-9 rounded-br-md border-b-[5px] border-r-[5px] border-mustard"
              />
              <h1 className="font-serif text-4xl leading-[1.05] text-ink sm:text-5xl">
                Six groups, six actions.
              </h1>
            </div>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Each group turned a topic into an action, then built a station
              for it. The teacher push is the one thing that had to stay clear
              while they built.
            </p>
            <div className="mt-8">
              <Link
                href="/exhibition"
                className="rounded-full bg-teal px-7 py-3.5 text-sm font-bold text-white transition hover:bg-teal-dark"
              >
                See the exhibition
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[420px] pb-10 pl-10">
            <div className="relative aspect-square">
              <ZoomableImage
                src="/images/group-action-mental-health.jpg"
                alt="Mental health group's action poster"
                frameClassName="absolute inset-0 overflow-hidden rounded-full ring-8 ring-mustard/60"
                imgClassName="h-full w-full object-cover"
              />
              <span
                aria-hidden="true"
                className="absolute -right-2 top-4 h-9 w-9 rounded-tr-md border-r-[5px] border-t-[5px] border-mustard"
              />
            </div>
            <ZoomableImage
              src="/images/group-action-revolutions.jpg"
              alt="Revolutions group's action poster"
              frameClassName="absolute bottom-0 left-0 h-40 w-40 overflow-hidden rounded-full ring-8 ring-mustard/60 sm:h-44 sm:w-44"
              imgClassName="h-full w-full object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Mint panel: where the actions came from + project-map strip */}
      <Section tone="mustard">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="overflow-hidden rounded-2xl">
            <ZoomableImage
              src="/images/journey-wk6-a.jpg"
              alt="The learning wall by build week, with station materials below it"
              frameClassName="block w-full"
              imgClassName="w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="On the wall"
              title="The work behind the actions"
            />
            <p className="mt-5 text-[17px] leading-relaxed text-ink/85">
              Every action below started as wall work: project maps, gap
              tables, action posters with peer feedback. The cards keep that
              evidence attached, so the action and the thinking behind it stay
              in one place.
            </p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-6">
          {groups.map((g) =>
            g.image ? (
              <ZoomableImage
                key={g.id}
                src={g.image}
                alt={`${g.topic} — project map`}
                frameClassName="aspect-[4/3] w-full overflow-hidden rounded-xl bg-white/60"
                imgClassName="h-full w-full object-cover"
              />
            ) : null,
          )}
        </div>
      </Section>

      {/* The six group cards */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="The groups"
          title="Topic, action, evidence"
          className="mb-10"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((group, index) => (
            <GroupActionCard key={group.id} group={group} index={index} />
          ))}
        </div>
      </Section>
    </>
  );
}
