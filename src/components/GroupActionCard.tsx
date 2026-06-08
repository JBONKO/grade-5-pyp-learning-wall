import type { Group } from "@/data/groups";
import { Field } from "./Field";
import { ImagePlaceholder } from "./ImagePlaceholder";

// Accent colour rotates per card for a little rhythm.
const accents = ["bg-teal", "bg-mustard", "bg-clay"];

/** One PYPx group: topic, action, evidence, station direction, teacher push. */
export function GroupActionCard({
  group,
  index,
}: {
  group: Group;
  index: number;
}) {
  const accent = accents[index % accents.length];

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-line bg-paper">
      {group.image ? (
        <ImagePlaceholder
          src={group.image}
          alt={`${group.topic} — the group's project map or poster on the wall`}
          ratio="4/3"
        />
      ) : null}
      <div className={`h-1.5 w-full ${accent}`} aria-hidden="true" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-2xl leading-tight text-ink">{group.topic}</h3>

        <dl className="mt-4 space-y-3">
          <Field label="Action">{group.action}</Field>
          <Field label="Evidence used">{group.evidence}</Field>
          <Field label="Station direction">{group.stationDirection}</Field>
        </dl>

        {/* What had to stay clear */}
        <div className="mt-5 rounded-lg border border-clay/25 bg-clay/[0.06] p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-clay">
            Teacher push — what needed to stay clear
          </p>
          <p className="mt-1 text-[15px] leading-relaxed text-ink/90">
            {group.teacherPush}
          </p>
        </div>
      </div>
    </article>
  );
}
