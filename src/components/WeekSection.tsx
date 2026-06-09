import type { Week } from "@/data/journey";
import { Container } from "./Container";
import { ImagePlaceholder } from "./ImagePlaceholder";

/** One week of the journey. Text and media swap sides on alternating weeks. */
export function WeekSection({ week, index }: { week: Week; index: number }) {
  const even = index % 2 === 0;

  return (
    <section
      id={week.id}
      className={`scroll-mt-24 py-14 sm:py-16 ${index === 0 ? "" : "border-t border-line"}`}
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Text column */}
          <div className={even ? "lg:order-1" : "lg:order-2"}>
            <div className="flex gap-4">
              <span aria-hidden="true" className="w-1.5 shrink-0 self-stretch bg-mustard" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">
                  {week.weekLabel}
                </p>
                <h2 className="mt-1 font-serif text-3xl leading-tight text-ink sm:text-4xl">
                  {week.title}
                </h2>
              </div>
            </div>

            <p className="mt-5 text-[17px] leading-relaxed text-ink/90">
              {week.whatStudentsWorkedOn}
            </p>

            {/* Main teaching point */}
            <div className="mt-6 border-l-2 border-teal bg-teal/[0.05] p-4 pl-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-teal">
                Main teaching point
              </p>
              <p className="mt-1 font-serif text-lg leading-snug text-teal-dark">
                {week.mainTeachingPoint}
              </p>
            </div>

            {/* Artifact + why it mattered */}
            <div className="mt-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-clay">
                Learning wall artifact
              </p>
              <p className="mt-1 font-serif text-lg text-ink">{week.artifactName}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {week.whyArtifactMattered}
              </p>
            </div>

            {/* What did not work / adjustment */}
            {week.whatDidNotWork ? (
              <div className="mt-6 rounded-lg border border-clay/25 bg-clay/[0.06] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-clay">
                  What didn&rsquo;t work / adjustment
                </p>
                <p className="mt-1 text-[15px] leading-relaxed text-ink/90">
                  {week.whatDidNotWork}
                </p>
              </div>
            ) : null}
          </div>

          {/* Media column */}
          <div className={even ? "lg:order-2" : "lg:order-1"}>
            <div className="overflow-hidden rounded-2xl border border-line">
              {/* Replace by adding the matching file to /public/images/ */}
              <ImagePlaceholder
                src={week.image}
                alt={`${week.artifactName} — ${week.title}`}
                ratio="4/3"
                caption={`Main artifact: ${week.artifactName}`}
              />
            </div>

            {week.gallery && week.gallery.length > 0 ? (
              <div className="mt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-clay">
                  From this week
                </p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {week.gallery.map((shot) => (
                    <figure key={shot.src}>
                      <div className="overflow-hidden rounded-lg border border-line">
                        <ImagePlaceholder src={shot.src} alt={shot.caption} ratio="4/3" />
                      </div>
                      <figcaption className="mt-1.5 text-xs leading-snug text-muted">
                        {shot.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-5 rounded-lg border border-line bg-paper p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-clay">
                Suggested photos
              </p>
              <ul className="mt-3 space-y-2">
                {week.photoSlots.map((slot) => (
                  <li key={slot} className="flex items-start gap-2.5 text-[15px] text-ink/90">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#185C57"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="mt-1 shrink-0"
                    >
                      <path d="M4 7h3l2-2h6l2 2h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" />
                      <circle cx="12" cy="13" r="3.2" />
                    </svg>
                    {slot}
                  </li>
                ))}
              </ul>
            </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
