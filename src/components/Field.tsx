import type { ReactNode } from "react";

/**
 * A small labelled block (label on top, text below).
 * Reused inside artifact cards, week sections, and group cards.
 * Render several inside a <dl> for correct semantics.
 */
export function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-clay">
        {label}
      </dt>
      <dd className="mt-1 text-[15px] leading-relaxed text-ink/90">{children}</dd>
    </div>
  );
}
