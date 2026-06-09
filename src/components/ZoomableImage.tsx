"use client";

import { useState } from "react";
import { Lightbox } from "./Lightbox";

/**
 * A plain photo that enlarges in a lightbox on click. Use this for images that
 * are not ImagePlaceholders — e.g. the home-page feature block on the dark band,
 * where the photo should fill its own frame with no placeholder fallback and the
 * surrounding text stays a separate link.
 */
export function ZoomableImage({
  src,
  alt,
  frameClassName = "",
  imgClassName = "h-full w-full object-contain",
}: {
  src: string;
  alt: string;
  frameClassName?: string;
  imgClassName?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge image: ${alt}`}
        className={`group/zoom relative block cursor-zoom-in ${frameClassName}`}
      >
        <img src={src} alt={alt} loading="lazy" className={imgClassName} />
        <span className="pointer-events-none absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-ink/55 text-cream opacity-0 backdrop-blur-sm transition group-hover/zoom:opacity-100">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3M11 8v6M8 11h6" />
          </svg>
        </span>
      </button>
      <Lightbox open={open} onClose={() => setOpen(false)} src={src} alt={alt} />
    </>
  );
}
