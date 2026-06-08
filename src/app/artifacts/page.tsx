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
        intro="Fourteen artifacts students used, moved, and revised. These were not posters to admire — most of them only worked because students had to update them."
      />

      <Section tone="cream">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artifacts.map((artifact) => (
            <ArtifactCard key={artifact.id} artifact={artifact} />
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <PullQuote>Evidence first. Experience second. Decoration last.</PullQuote>
      </Section>
    </>
  );
}
