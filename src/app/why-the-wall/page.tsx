import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { PullQuote } from "@/components/PullQuote";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { why } from "@/data/why";

export const metadata: Metadata = {
  title: "Why the Wall",
  description: "The problem the wall was solving — and the parts it did not solve.",
};

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#185C57"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-0.5 shrink-0"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function OpenDotIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#BC5A3C"
      strokeWidth="2"
      aria-hidden="true"
      className="mt-0.5 shrink-0"
    >
      <circle cx="12" cy="12" r="8" strokeDasharray="3 3" />
    </svg>
  );
}

export default function WhyTheWallPage() {
  return (
    <>
      <PageHeader
        eyebrow="Why the Wall"
        title="The problem the wall was solving"
        intro={why.intro}
      />

      <Section tone="cream">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-5 text-lg leading-relaxed text-ink/90">
            {why.problem.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <figure>
            <div className="overflow-hidden rounded-2xl border border-line">
              <ImagePlaceholder
                src="/images/why-the-wall.jpg"
                alt="The Grade 5 learning wall, full view"
                ratio="4/3"
              />
            </div>
            <figcaption className="mt-3 text-sm leading-relaxed text-muted">
              One place the class could see, point at, and change.
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow={why.teachingTool.eyebrow}
            title={why.teachingTool.heading}
          />
          <div className="mt-7">
            <PullQuote attribution={why.teachingTool.quoteAttribution}>
              {why.teachingTool.quote}
            </PullQuote>
          </div>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink/90">
            {why.teachingTool.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow={why.access.eyebrow}
            title={why.access.heading}
          />
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink/90">
            {why.access.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="font-serif text-2xl text-ink sm:text-3xl">
              What this solved
            </h2>
            <ul className="mt-5 space-y-3">
              {why.whatThisSolved.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[16px] leading-relaxed text-ink/90">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink sm:text-3xl">
              What still needed work
            </h2>
            <ul className="mt-5 space-y-3">
              {why.whatStillNeededWork.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[16px] leading-relaxed text-ink/90">
                  <OpenDotIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <PullQuote light>The wall became a record of decisions.</PullQuote>
      </Section>
    </>
  );
}
