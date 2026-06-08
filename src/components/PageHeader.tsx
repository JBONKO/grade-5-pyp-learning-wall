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
    <header className="border-b border-line pt-14 pb-12 sm:pt-16 sm:pb-14">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-[1.08] text-ink sm:text-5xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {intro}
          </p>
        ) : null}
      </Container>
    </header>
  );
}
