import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { PullQuote } from "@/components/PullQuote";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { mentor } from "@/data/mentor";

export const metadata: Metadata = {
  title: "Mentor Buy-In for Student-Led Inquiry",
  description:
    "An NPQSL leadership project: clarifying the mentor role during the Grade 5 PYP Exhibition so adults coach inquiry instead of managing it.",
};

function Check() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-teal"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function Cross() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-clay"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export default function MentorBuyInPage() {
  return (
    <>
      <PageHeader
        eyebrow={mentor.eyebrow}
        title={mentor.title}
        intro={mentor.intro}
      />

      {/* Snapshot + framing lead */}
      <Section tone="cream">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
          <div className="space-y-5 text-lg leading-relaxed text-ink/90">
            {mentor.lead.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <aside className="rounded-2xl border border-line bg-paper p-6 shadow-[0_10px_30px_-22px_rgba(22,36,63,0.25)] sm:p-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-clay">
              {mentor.snapshot.heading}
            </p>
            <dl className="mt-4 divide-y divide-line">
              {mentor.snapshot.rows.map((row) => (
                <div key={row.label} className="py-3 first:pt-0 last:pb-0">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-clay">
                    {row.label}
                  </dt>
                  <dd className="mt-1 text-[15px] leading-relaxed text-ink/90">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Section>

      {/* The context */}
      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Where it started" title={mentor.context.heading} />
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink/90">
            {mentor.context.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* The problem + challenge question */}
      <Section tone="cream">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="The problem" title={mentor.problem.heading} />
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink/90">
            {mentor.problem.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-8">
            <PullQuote attribution="The implementation challenge">
              {mentor.problem.challenge}
            </PullQuote>
          </div>
        </div>
      </Section>

      {/* The aim */}
      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="The aim" title={mentor.aim.heading} />
          <p className="mt-7 text-lg leading-relaxed text-ink/90">
            {mentor.aim.lead}
          </p>
          <ul className="mt-5 space-y-2.5">
            {mentor.aim.points.map((p) => (
              <li key={p} className="flex gap-3 text-[17px] leading-relaxed text-ink/90">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mustard"
                />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Key message + does / does not */}
      <Section tone="cream">
        <SectionHeading eyebrow="The key message" title="Coach, not project manager" />
        <p className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
          {mentor.keyMessage}
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          {mentor.keyMessageLead}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-mustard/60 bg-mustard-soft/30 p-6 sm:p-7">
            <h3 className="font-serif text-xl text-ink">{mentor.does.heading}</h3>
            <ul className="mt-4 space-y-3">
              {mentor.does.points.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-ink/90">
                  <Check />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-paper p-6 sm:p-7">
            <h3 className="font-serif text-xl text-ink">{mentor.doesNot.heading}</h3>
            <ul className="mt-4 space-y-3">
              {mentor.doesNot.points.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-ink/80">
                  <Cross />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Theory of change — navy inset panel */}
      <Section tone="teal">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-mustard">
            {mentor.theoryOfChange.heading}
          </p>
          <div className="mt-5 space-y-5 text-lg leading-relaxed text-cream/90 sm:text-xl">
            {mentor.theoryOfChange.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* What I put in place */}
      <Section tone="cream">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="The work" title={mentor.implemented.heading} />
          <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {mentor.implemented.points.map((p) => (
              <li key={p} className="flex gap-3 text-[17px] leading-relaxed text-ink/90">
                <Check />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Implementation stages */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Implementation"
          title={mentor.stages.heading}
          intro={mentor.stages.intro}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {mentor.stages.items.map((stage, i) => (
            <article
              key={stage.name}
              className="rounded-2xl border border-line bg-cream p-6 sm:p-7"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-2xl text-mustard tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl text-ink">{stage.name}</h3>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/85">
                {stage.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* Leadership moment */}
      <Section tone="cream">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="When it got real" title={mentor.moment.heading} />
          <div className="mt-7 border-l-4 border-clay/50 pl-5 sm:pl-7">
            <div className="space-y-5 text-lg leading-relaxed text-ink/90">
              {mentor.moment.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* What I learned as a leader */}
      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Reflection" title={mentor.learned.heading} />
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink/90">
            {mentor.learned.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Evidence and artifacts */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="Evidence"
          title={mentor.artifactsHeading}
          intro={mentor.artifactsIntro}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mentor.artifacts.map((a) => (
            <figure key={a.src}>
              <div className="overflow-hidden rounded-2xl border border-line">
                <ImagePlaceholder src={a.src} alt={a.alt} ratio="4/3" caption={a.alt} />
              </div>
              <figcaption className="mt-2.5 text-sm leading-relaxed text-muted">
                {a.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Closing */}
      <Section tone="dark">
        <div className="mx-auto max-w-3xl">
          <PullQuote light>{mentor.close}</PullQuote>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <Link
              href="/group-actions"
              className="text-sm font-bold uppercase tracking-[0.12em] text-mustard underline-offset-4 hover:underline"
            >
              See the student groups &rarr;
            </Link>
            <Link
              href="/journey"
              className="text-sm font-bold uppercase tracking-[0.12em] text-mustard underline-offset-4 hover:underline"
            >
              Walk the eight weeks &rarr;
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
