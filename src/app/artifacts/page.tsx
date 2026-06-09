import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { ArtifactCard } from "@/components/ArtifactCard";
import { PullQuote } from "@/components/PullQuote";
import { artifacts } from "@/data/artifacts";

export const metadata: Metadata = {
  title: "Wall Artifacts",
  description: "The systems and routines that lived on the learning wall.",
};

export default function ArtifactsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Wall Artifacts"
        title="The systems on the wall"
        intro="The systems, routines, and pieces students made, used, and revised — on the wall and at the stations. Most only worked because students had to keep changing them."
      />

      <Section tone="cream">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artifacts.map((artifact) => (
            <ArtifactCard key={artifact.id} artifact={artifact} />
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <PullQuote light>Not a Display. A Record of Thinking.</PullQuote>
      </Section>
    </>
  );
}
