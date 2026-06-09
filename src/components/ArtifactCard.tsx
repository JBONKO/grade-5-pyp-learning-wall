import type { Artifact } from "@/data/artifacts";
import { Field } from "./Field";
import { ImagePlaceholder } from "./ImagePlaceholder";

/** A single wall artifact: photo on top, then purpose / how / why. */
export function ArtifactCard({ artifact }: { artifact: Artifact }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-line bg-paper transition hover:-translate-y-0.5 hover:shadow-[0_16px_38px_-24px_rgba(24,92,87,0.55)]">
      {/* Replace by adding the matching file to /public/images/ */}
      <ImagePlaceholder
        src={artifact.image}
        alt={artifact.title}
        ratio="4/3"
        caption={`Photo of the ${artifact.title} on the wall`}
        zoomable
      />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-xl text-ink">{artifact.title}</h3>
        <dl className="mt-4 space-y-3">
          <Field label="Purpose">{artifact.purpose}</Field>
          <Field label="How students used it">{artifact.how}</Field>
          <Field label="Why it helped">{artifact.why}</Field>
        </dl>
      </div>
    </article>
  );
}
