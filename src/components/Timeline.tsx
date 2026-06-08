import Link from "next/link";

export type TimelineItem = {
  label: string; // e.g. "Week 3"
  title: string;
  blurb?: string;
  href?: string; // optional deep link, e.g. /journey#week-3
};

/**
 * Week 1 -> 7 progression.
 * Vertical list on small screens, a horizontal stepper from large screens up.
 * Connectors run between nodes (not under them), so it works on any section tone.
 */
export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="flex flex-col gap-7 lg:grid lg:grid-cols-7 lg:gap-4">
      {items.map((item, i) => {
        const last = i === items.length - 1;
        const titleClass =
          "mt-0.5 block font-serif text-lg leading-snug text-ink lg:text-base";
        return (
          <li key={i} className="relative flex gap-4 lg:flex-col lg:gap-0">
            {/* horizontal connector (large screens) */}
            {!last && (
              <span
                aria-hidden="true"
                className="absolute top-[18px] left-9 -right-4 hidden h-px bg-line lg:block"
              />
            )}
            {/* vertical connector (small screens) */}
            {!last && (
              <span
                aria-hidden="true"
                className="absolute left-[18px] top-9 -bottom-7 w-px bg-line lg:hidden"
              />
            )}

            <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-teal/40 bg-paper font-serif text-sm text-teal">
              {i + 1}
            </span>

            <div className="lg:mt-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-clay">
                {item.label}
              </p>
              {item.href ? (
                <Link href={item.href} className={`${titleClass} transition hover:text-teal`}>
                  {item.title}
                </Link>
              ) : (
                <div className={titleClass}>{item.title}</div>
              )}
              {item.blurb ? (
                <p className="mt-1 text-sm leading-snug text-muted">
                  {item.blurb}
                </p>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
