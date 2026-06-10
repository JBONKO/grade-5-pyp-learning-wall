import type { Artifact } from "@/data/artifacts";
import { Field } from "./Field";
import { ImagePlaceholder } from "./ImagePlaceholder";

/** A single wall artifact: photo on top, then purpose / how / why. */
export function ArtifactCard({ artifact }: { artifact: Artifact }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_10px_30px_-22px_rgba(22,36,63,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-22px_rgba(22,36,63,0.35)]">
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
