import type { Reflection } from "@/data/reflections";

/**
 * One row in the "What Changed" list: a number, the thing that did not work,
 * and the fix underneath. No card, no label — it reads as a plain list.
 */
export function ReflectionBlock({
  reflection,
  index,
}: {
  reflection: Reflection;
  index: number;
}) {
  return (
    <article className="flex gap-5 border-t border-line pt-6 sm:gap-7">
      <span
        aria-hidden="true"
        className="font-serif text-2xl leading-none text-mustard tabular-nums sm:text-3xl"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex-1">
        <h2 className="font-serif text-xl leading-snug text-ink sm:text-2xl">
          {reflection.title}
        </h2>
        <p className="mt-2 text-[16px] leading-relaxed text-ink/85">
          {reflection.body}
        </p>
      </div>
    </article>
  );
}
