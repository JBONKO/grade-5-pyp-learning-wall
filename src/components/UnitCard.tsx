import Link from "next/link";

/** A linked card for one documented wall on the Units index: cover photo,
 *  status pill, title, and a short line (usually the central idea). */
export function UnitCard({
  href,
  eyebrow,
  title,
  theme,
  summary,
  status,
  inProgress,
  image,
}: {
  href: string;
  eyebrow: string;
  title: string;
  theme?: string;
  summary?: string;
  status: string;
  inProgress: boolean;
  image: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_10px_30px_-22px_rgba(22,36,63,0.25)] transition hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-[0_18px_40px_-22px_rgba(22,36,63,0.35)]"
    >
      <div className="aspect-[16/9] overflow-hidden border-b border-line bg-cream">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-clay">
            {eyebrow}
          </p>
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold ${
              inProgress ? "bg-mustard/30 text-teal" : "border border-line bg-cream text-muted"
            }`}
          >
            {status}
          </span>
        </div>

        <h2 className="mt-3 font-serif text-2xl leading-tight text-ink">{title}</h2>
        {theme ? <p className="mt-1 text-sm font-semibold text-teal">{theme}</p> : null}
        {summary ? (
          <p className="mt-3 text-[15px] leading-relaxed text-muted">{summary}</p>
        ) : null}

        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-teal">
          Open
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-0.5"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
