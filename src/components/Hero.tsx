import Link from "next/link";
import { Container } from "./Container";
import { ImagePlaceholder } from "./ImagePlaceholder";

/** Home-page hero: title, subtitle, intro, a recurring tag line, and a photo. */
export function Hero({
  eyebrow,
  title,
  subtitle,
  intro,
  tag,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string[];
  tag: string;
  image: string;
}) {
  return (
    <section className="border-b border-line">
      <Container className="grid items-start gap-10 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="lg:pt-4">
          <div className="flex gap-4">
            <span
              aria-hidden="true"
              className="mt-1 w-1.5 shrink-0 self-stretch bg-mustard"
            />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-clay">
              {eyebrow}
            </p>
          </div>

          <h1 className="mt-5 font-serif text-5xl leading-[1.0] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-teal-dark sm:text-2xl">
            {subtitle}
          </p>
          <div className="mt-5 max-w-xl space-y-4 text-[17px] leading-relaxed text-muted">
            {intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-7 inline-block border-l-2 border-mustard bg-mustard/10 px-4 py-2 text-sm font-semibold text-teal-dark">
            {tag}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/journey"
              className="rounded-lg bg-teal px-6 py-3 text-sm font-bold uppercase tracking-wide text-cream transition hover:bg-teal-dark"
            >
              Read the journey
            </Link>
            <Link
              href="/artifacts"
              className="rounded-lg border border-ink/20 px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink transition hover:border-ink/45"
            >
              See the artifacts
            </Link>
          </div>
        </div>

        <div className="relative">
          {/* Hero photo — fills the frame (portrait wall shot). */}
          <div className="overflow-hidden rounded-2xl border border-line shadow-[0_30px_60px_-40px_rgba(24,92,87,0.55)]">
            <ImagePlaceholder
              src={image}
              alt="The Grade 5 learning wall by build week, with station materials below it"
              ratio="3/4"
              caption="The wall by build week"
            />
          </div>
          <span
            aria-hidden="true"
            className="absolute -bottom-3 -left-3 -z-10 h-28 w-28 rounded-2xl bg-mustard/40"
          />
        </div>
      </Container>
    </section>
  );
}
