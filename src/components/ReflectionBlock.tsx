import type { Reflection } from "@/data/reflections";

/** One honest course correction on the "What Changed" page. */
export function ReflectionBlock({ reflection }: { reflection: Reflection }) {
  return (
    <article className="rounded-xl border border-line bg-paper p-6 sm:p-7">
      <span className="inline-block rounded-full bg-clay/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-clay">
        Adjustment
      </span>
      <h2 className="mt-4 font-serif text-2xl leading-tight text-ink">
        {reflection.title}
      </h2>
      <p className="mt-3 text-[16px] leading-relaxed text-ink/90">
        {reflection.body}
      </p>
    </article>
  );
}
