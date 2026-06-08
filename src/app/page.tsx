import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";
import { ArtifactCard } from "@/components/ArtifactCard";
import { CardLink } from "@/components/CardLink";
import { PullQuote } from "@/components/PullQuote";
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
            <h2 className="font-serif text-3xl text-ink sm:text-4xl">
              {home.notDecoration.heading}
            </h2>
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

      {/* Week 1–7 timeline */}
      <Section tone="paper">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">
            Week 1 to Week 7
          </p>
          <h2 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">
            A short timeline of the Exhibition
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            Each week the wall picked up a new routine. Tap a week to jump to the
            full account.
          </p>
        </div>
        <Timeline items={timelineItems} />
      </Section>

      {/* Featured artifacts */}
      <Section tone="cream">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">
              On the wall
            </p>
            <h2 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">
              Featured artifacts
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              A few of the systems students used and changed. The full set is on
              the artifacts page.
            </p>
          </div>
          <Link
            href="/artifacts"
            className="text-sm font-semibold text-teal underline-offset-4 hover:underline"
          >
            All 14 artifacts →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredArtifacts.map((artifact) => (
            <ArtifactCard key={artifact.id} artifact={artifact} />
          ))}
        </div>
      </Section>

      {/* Three key shifts */}
      <Section tone="mustard">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">
            What the wall helped with
          </p>
          <h2 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">
            Three shifts
          </h2>
        </div>
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
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">
            Explore
          </p>
          <h2 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">
            The full documentation
          </h2>
        </div>
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
