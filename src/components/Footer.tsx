import Link from "next/link";
import { coreIdea, nav, site } from "@/data/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-paper">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr]">
          <div className="max-w-md">
            <p className="font-serif text-xl text-ink">{site.title}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              {coreIdea}
            </p>
            <p className="mt-5 text-sm text-muted">{site.context}</p>
          </div>

          <nav aria-label="Footer">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-clay">
              Pages
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-ink/80 transition hover:text-teal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-1 border-t border-line py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          {/* TODO: replace with your name / school once you're ready. */}
          <span>Classroom documentation · Grade 5 PYP Exhibition</span>
          <span>Built as an editable record of decisions.</span>
        </div>
      </Container>
    </footer>
  );
}
