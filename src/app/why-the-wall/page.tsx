import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { PullQuote } from "@/components/PullQuote";
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
        <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink/90">
          {why.problem.map((p) => (
            <p key={p}>{p}</p>
          ))}
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

      <Section tone="cream">
        <PullQuote>The wall became a record of decisions.</PullQuote>
      </Section>
    </>
  );
}
