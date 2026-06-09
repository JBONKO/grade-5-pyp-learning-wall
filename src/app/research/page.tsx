import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { PullQuote } from "@/components/PullQuote";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { research } from "@/data/research";

export const metadata: Metadata = {
  title: "Research Base",
  description: "The four sources that shaped the learning wall.",
};

type Ratio = "4/3" | "3/2" | "16/9" | "1/1";

// A captioned figure. The caption always shows (it is part of the content),
// so it sits below the image rather than inside the placeholder.
function Figure({
  image,
  ratio = "3/2",
}: {
  image: { src: string; alt: string; caption: string };
  ratio?: Ratio;
}) {
  return (
    <figure className="my-10">
      <div className="overflow-hidden rounded-2xl border border-line">
        {/* Replace by adding the matching file to /public/images/ */}
        <ImagePlaceholder src={image.src} alt={image.alt} ratio={ratio} />
      </div>
      <figcaption className="mt-3 text-sm leading-relaxed text-muted">
        {image.caption}
      </figcaption>
    </figure>
  );
}

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow={research.eyebrow}
        title={research.title}
        intro={research.intro}
      />

      <Section tone="cream">
        <div className="mx-auto max-w-3xl">
          {/* Book cover is portrait — show it whole (contained), not cropped. */}
          <figure className="mx-auto my-10 max-w-[240px]">
            <div className="overflow-hidden rounded-xl border border-line shadow-sm">
              <ImagePlaceholder
                src={research.leadImage.src}
                alt={research.leadImage.alt}
                ratio="3/4"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm leading-relaxed text-muted">
              {research.leadImage.caption}
            </figcaption>
          </figure>

          <p className="text-lg leading-relaxed text-ink/90">{research.vance}</p>

          <div className="my-10">
            <PullQuote attribution={research.pullQuoteAttribution}>
              {research.pullQuote}
            </PullQuote>
          </div>

          <Figure image={research.workshopImage} ratio="3/2" />

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-ink/90">
              {research.makingThinkingVisible}
            </p>
            <p className="text-lg leading-relaxed text-ink/90">
              {research.wiliam}
            </p>
            <p className="text-lg leading-relaxed text-ink/90">
              {research.reggio}
            </p>
          </div>

          <div className="my-10 grid grid-cols-2 gap-6">
            {research.covers.map((c) => (
              <figure key={c.src} className="mx-auto w-full max-w-[200px]">
                <div className="overflow-hidden rounded-xl border border-line">
                  <ImagePlaceholder src={c.src} alt={c.alt} ratio="3/4" />
                </div>
                <figcaption className="mt-2 text-center text-sm leading-relaxed text-muted">
                  {c.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl text-ink sm:text-3xl">References</h2>
          <ul className="mt-6 space-y-3">
            {research.references.map((ref) => (
              <li
                key={ref}
                className="pl-6 -indent-6 text-[15px] leading-relaxed text-ink/85"
              >
                {ref}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
