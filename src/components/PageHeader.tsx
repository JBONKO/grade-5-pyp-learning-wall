import { Container } from "./Container";

/** The standard header band at the top of each inner page. */
export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="border-b border-line bg-paper pb-12 pt-14 sm:pb-14 sm:pt-16">
      <Container>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">
          {eyebrow}
        </p>
        {/* Bracket-framed title */}
        <div className="relative mt-4 inline-block pb-3 pl-5 pr-6 pt-4">
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 h-8 w-8 rounded-tl-md border-l-4 border-t-4 border-mustard"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-0 right-0 h-8 w-8 rounded-br-md border-b-4 border-r-4 border-mustard"
          />
          <h1 className="max-w-3xl font-serif text-4xl leading-[1.08] text-ink sm:text-5xl">
            {title}
          </h1>
        </div>
        {intro ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {intro}
          </p>
        ) : null}
      </Container>
    </header>
  );
}
