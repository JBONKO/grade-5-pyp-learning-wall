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
  intro: string;
  tag: string;
  image: string;
}) {
  return (
    <section className="border-b border-line">
      <Container className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-[1.04] text-ink sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-teal-dark sm:text-2xl">
            {subtitle}
          </p>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
            {intro}
          </p>

          <p className="mt-6 inline-block rounded-full border border-mustard/60 bg-mustard/10 px-4 py-1.5 text-sm font-semibold text-teal-dark">
            {tag}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/journey"
              className="rounded-lg bg-teal px-5 py-3 text-sm font-semibold text-cream transition hover:bg-teal-dark"
            >
              Read the journey
            </Link>
            <Link
              href="/artifacts"
              className="rounded-lg border border-teal/30 px-5 py-3 text-sm font-semibold text-teal transition hover:bg-teal/[0.06]"
            >
              See the artifacts
            </Link>
          </div>
        </div>

        <div className="relative">
          {/* Hero photo. Replace by adding /public/images/hero-learning-wall.jpg */}
          <div className="overflow-hidden rounded-2xl border border-line shadow-[0_30px_60px_-40px_rgba(24,92,87,0.55)]">
            <ImagePlaceholder
              src={image}
              alt="The Grade 5 learning wall, full view"
              ratio="4/3"
              caption="Wide shot of the whole wall early in the Exhibition"
            />
          </div>
          {/* small decorative accent */}
          <span
            aria-hidden="true"
            className="absolute -bottom-3 -left-3 -z-10 h-24 w-24 rounded-2xl bg-mustard/30"
          />
        </div>
      </Container>
    </section>
  );
}
