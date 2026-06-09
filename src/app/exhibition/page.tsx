import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { exhibitionIntro, exhibits } from "@/data/exhibition";

export const metadata: Metadata = {
  title: "Exhibition",
  description: "What visitors experienced at the Grade 5 Exhibition stations.",
};

export default function ExhibitionPage() {
  return (
    <>
      <PageHeader
        eyebrow={exhibitionIntro.eyebrow}
        title={exhibitionIntro.title}
        intro={exhibitionIntro.intro}
      />

      {exhibits.map((item, i) => {
        const flip = i % 2 === 1;
        return (
          <Section key={item.id} tone={flip ? "paper" : "cream"}>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div className={flip ? "lg:order-2" : ""}>
                <div className="overflow-hidden rounded-2xl border border-line">
                  <ImagePlaceholder src={item.image} alt={item.title} ratio="4/3" />
                </div>
              </div>
              <div className={flip ? "lg:order-1" : ""}>
                <SectionHeading title={item.title} />
                <p className="mt-4 font-serif text-xl leading-snug text-teal-dark">
                  {item.lead}
                </p>
                <p className="mt-3 text-[17px] leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            </div>
          </Section>
        );
      })}
    </>
  );
}
