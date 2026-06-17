"use client";

import { useRef } from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";

/**
 * Horizontal, swipeable strip for a week's overflow photos (the ones beyond the
 * highlighted grid). Pure CSS scroll-snap, with arrow buttons that nudge the
 * track on larger screens. Each photo still opens full-screen via the lightbox.
 */
export function Carousel({
  items,
}: {
  items: { src: string; caption: string }[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const nudge = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:thin]"
      >
        {items.map((shot) => (
          <figure
            key={shot.src}
            className="w-[44%] shrink-0 snap-start sm:w-[30%] lg:w-[22%]"
          >
            <div className="overflow-hidden rounded-lg border border-line">
              <ImagePlaceholder src={shot.src} alt={shot.caption} ratio="4/3" />
            </div>
            <figcaption className="mt-1.5 text-xs leading-snug text-muted">
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <button
        type="button"
        onClick={() => nudge(-1)}
        aria-label="Scroll back"
        className="absolute -left-3 top-[38%] hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-[0_8px_20px_-12px_rgba(22,36,63,0.6)] transition hover:bg-cream sm:flex"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => nudge(1)}
        aria-label="Scroll forward"
        className="absolute -right-3 top-[38%] hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-[0_8px_20px_-12px_rgba(22,36,63,0.6)] transition hover:bg-cream sm:flex"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
