import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";
import { CardLink } from "@/components/CardLink";
import { PullQuote } from "@/components/PullQuote";
import { ZoomableImage } from "@/components/ZoomableImage";
import { home } from "@/data/home";
import { weeks } from "@/data/journey";
import { featuredArtifacts } from "@/data/artifacts";
import { coreIdea } from "@/data/site";

const timelineItems = weeks.map((w) => ({
  label: w.weekLabel,
  title: w.title,
  blurb: w.timelineBlurb,
  href: `/journey#${w.id}`,
}));

// The dark "magazine" block: one big feature + a short list beside it.
const bigArtifact =
  featuredArtifacts.find((a) => a.id === "sticky-note-connections") ??
  featuredArtifacts[0];
const listArtifacts = featuredArtifacts
  .filter((a) => a.id !== bigArtifact.id)
  .slice(0, 3);

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow={home.hero.eyebrow}
        title={home.hero.title}
        subtitle={home.hero.subtitle}
        intro={home.hero.intro}
        tag={home.hero.tag}
        image={home.hero.image}
      />

      {/* The wall was not decoration */}
      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading title={home.notDecoration.heading} />
            <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-muted">
              {home.notDecoration.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <PullQuote>{coreIdea}</PullQuote>
          </div>
        </div>
      </Section>

      {/* Week-by-week timeline */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Week 1 to Week 8"
          title="A short timeline of the Exhibition"
          intro="Each week the wall picked up a new routine. Tap a week to jump to the full account."
          className="mb-10"
        />
        <Timeline items={timelineItems} />
      </Section>

      {/* Featured artifacts — magazine block on a dark band */}
      <Section tone="dark">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="On the wall" title="Featured artifacts" light />
          <Link
            href="/artifacts"
            className="text-sm font-bold uppercase tracking-[0.12em] text-mustard underline-offset-4 hover:underline"
          >
            All artifacts &rarr;
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
          {/* Story list */}
          <ol className="divide-y divide-cream/10">
            {listArtifacts.map((a) => (
              <li key={a.id} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                <ZoomableImage
                  src={a.image}
                  alt={a.title}
                  frameClassName="h-20 w-28 shrink-0 overflow-hidden rounded bg-black/40"
                />
                <Link href="/artifacts" className="group">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-mustard">
                    Artifact
                  </p>
                  <h3 className="mt-1 font-serif text-lg leading-snug text-cream transition group-hover:text-mustard">
                    {a.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm leading-snug text-cream/55">
                    {a.purpose}
                  </p>
                </Link>
              </li>
            ))}
          </ol>

          {/* Big feature */}
          <div>
            <ZoomableImage
              src={bigArtifact.image}
              alt={bigArtifact.title}
              frameClassName="aspect-[4/3] w-full overflow-hidden rounded-xl bg-black/40"
            />
            <Link href="/artifacts" className="group mt-4 block">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-mustard">
                Featured artifact
              </p>
              <h3 className="mt-1 font-serif text-2xl leading-tight text-cream transition group-hover:text-mustard sm:text-3xl">
                {bigArtifact.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-cream/70">
                {bigArtifact.purpose}
              </p>
            </Link>
          </div>
        </div>
      </Section>

      {/* Three key shifts */}
      <Section tone="mustard">
        <SectionHeading
          eyebrow="What the wall helped with"
          title="Three shifts"
          className="mb-10"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {home.shifts.map((shift) => (
            <div
              key={shift.id}
              className="rounded-xl border border-line bg-paper p-6"
            >
              <p className="font-serif text-xl text-ink">
                From <span className="text-clay">{shift.from}</span>
              </p>
              <p className="font-serif text-xl text-ink">
                to <span className="text-teal">{shift.to}</span>
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                {shift.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Explore the documentation */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="Explore"
          title="The full documentation"
          className="mb-10"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {home.pageCards.map((card) => (
            <CardLink
              key={card.href}
              title={card.title}
              blurb={card.blurb}
              href={card.href}
            />
          ))}
        </div>
      </Section>

      {/* Closing banner */}
      <Section tone="teal">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl font-serif text-2xl leading-snug text-cream sm:text-3xl">
            {home.closingLine}
          </p>
          <Link
            href="/journey"
            className="shrink-0 rounded-lg bg-cream px-5 py-3 text-sm font-semibold text-teal-dark transition hover:bg-mustard"
          >
            Walk through the journey
          </Link>
        </div>
      </Section>
    </>
  );
}
