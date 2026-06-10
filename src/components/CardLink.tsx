import Link from "next/link";

/** A linked card used on the home page to point at the main sections. */
export function CardLink({
  title,
  blurb,
  href,
}: {
  title: string;
  blurb: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col justify-between rounded-2xl border border-line bg-paper p-6 shadow-[0_10px_30px_-22px_rgba(22,36,63,0.25)] transition hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-[0_18px_40px_-22px_rgba(22,36,63,0.35)]"
    >
      <div>
        <h3 className="font-serif text-xl text-ink">{title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">{blurb}</p>
      </div>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal">
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
    </Link>
  );
}
