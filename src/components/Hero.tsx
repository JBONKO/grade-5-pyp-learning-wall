import Link from "next/link";
import { Container } from "./Container";
import { ZoomableImage } from "./ZoomableImage";

/**
 * Home-page hero: bracket-framed title on the left, two overlapping circular
 * photos with mint rings on the right. Circles crop to fill (decorative);
 * clicking opens the full uncropped photo in the lightbox.
 */
export function Hero({
  eyebrow,
  title,
  subtitle,
  intro,
  tag,
  image,
  imageSecondary,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string[];
  tag: string;
  image: string;
  imageSecondary?: string;
}) {
  return (
    <section className="overflow-hidden border-b border-line bg-paper">
      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-clay">
            {eyebrow}
          </p>

          {/* Bracket-framed headline */}
          <div className="relative mt-6 inline-block pb-4 pl-6 pr-7 pt-5">
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-10 w-10 rounded-tl-md border-l-[5px] border-t-[5px] border-mustard"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-0 right-0 h-10 w-10 rounded-br-md border-b-[5px] border-r-[5px] border-mustard"
            />
            <h1 className="font-serif text-5xl leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]">
              {title}.
            </h1>
          </div>

          <p className="mt-5 max-w-xl text-xl leading-relaxed text-teal sm:text-2xl">
            {subtitle}
          </p>
          <div className="mt-5 max-w-xl space-y-4 text-[17px] leading-relaxed text-muted">
            {intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-7 inline-block rounded-full bg-mustard/30 px-5 py-2.5 text-sm font-bold text-teal">
            {tag}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/journey"
              className="rounded-full bg-teal px-7 py-3.5 text-sm font-bold text-white transition hover:bg-teal-dark"
            >
              Read the journey
            </Link>
            <Link
              href="/artifacts"
              className="rounded-full border-2 border-line bg-white px-7 py-3.5 text-sm font-bold text-ink transition hover:border-teal/40"
            >
              See the artifacts
            </Link>
          </div>
        </div>

        {/* Overlapping circle photos */}
        <div className="relative mx-auto w-full max-w-[440px] pb-10 pl-10">
          <div className="relative aspect-square">
            <ZoomableImage
              src={image}
              alt="The Grade 5 learning wall by build week"
              frameClassName="absolute inset-0 overflow-hidden rounded-full ring-8 ring-mustard/60"
              imgClassName="h-full w-full object-cover"
            />
            <span
              aria-hidden="true"
              className="absolute -right-2 top-4 h-9 w-9 rounded-tr-md border-r-[5px] border-t-[5px] border-mustard"
            />
          </div>
          {imageSecondary ? (
            <ZoomableImage
              src={imageSecondary}
              alt="Working with a group at the wall"
              frameClassName="absolute bottom-0 left-0 h-40 w-40 overflow-hidden rounded-full ring-8 ring-mustard/60 sm:h-48 sm:w-48"
              imgClassName="h-full w-full object-cover"
            />
          ) : null}
        </div>
      </Container>
    </section>
  );
}
