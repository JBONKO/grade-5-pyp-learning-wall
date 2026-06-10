import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { about } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Grade 5 teacher behind the wall, and the classroom questions that drive the work.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={about.eyebrow}
        title={about.title}
        intro={about.intro}
      />

      {/* Who I am + professional photo */}
      <Section tone="cream">
        <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div className="space-y-5 text-lg leading-relaxed text-ink/90">
            {about.lead.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <figure className="mx-auto w-full max-w-[340px]">
            <div className="overflow-hidden rounded-2xl border border-line shadow-sm">
              <ImagePlaceholder
                src={about.photo.src}
                alt={about.photo.alt}
                ratio="3/4"
              />
            </div>
            <figcaption className="mt-3 text-sm leading-relaxed text-muted">
              {about.photo.caption}
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* How I work — recurring classroom questions + photo at the wall */}
      <Section tone="paper">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow={about.questionsEyebrow}
              title={about.questionsHeading}
            />
            <p className="mt-7 font-serif text-xl leading-relaxed text-teal-dark sm:text-2xl">
              {about.questions}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink/90">
              {about.questionsClose}
            </p>
          </div>
          <figure>
            <div className="overflow-hidden rounded-2xl border border-line">
              <ImagePlaceholder
                src={about.wallPhoto.src}
                alt={about.wallPhoto.alt}
                ratio="1/1"
              />
            </div>
            <figcaption className="mt-3 text-sm leading-relaxed text-muted">
              {about.wallPhoto.caption}
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* Who this is for */}
      <Section tone="dark">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow={about.useEyebrow}
            title={about.useHeading}
            light
          />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-cream/80">
            {about.use.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <Link
              href="/why-the-wall"
              className="text-sm font-bold uppercase tracking-[0.12em] text-mustard underline-offset-4 hover:underline"
            >
              Start with Why the Wall &rarr;
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
