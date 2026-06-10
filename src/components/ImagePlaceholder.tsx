"use client";

import { useState } from "react";
import { Lightbox } from "./Lightbox";

type Ratio = "4/3" | "3/2" | "3/4" | "16/9" | "1/1";

const ratioClass: Record<Ratio, string> = {
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "3/4": "aspect-[3/4]",
  "16/9": "aspect-video",
  "1/1": "aspect-square",
};

/**
 * Shows a real photo if one exists at `src`, otherwise a tidy labelled
 * placeholder that names the file you should drop in.
 *
 * TO ADD A PHOTO: put a file at /public/images/<name>.jpg matching the `src`.
 * No code change needed — the placeholder is replaced automatically.
 *
 * Real photos are click-to-enlarge by default (a full-screen lightbox; close
 * with the backdrop, the × button, or Escape). Pass `zoomable={false}` to opt a
 * photo out. Placeholders are never zoomable.
 */
export function ImagePlaceholder({
  src,
  alt,
  ratio = "4/3",
  caption,
  className = "",
  zoomable = true,
}: {
  src?: string;
  alt: string;
  ratio?: Ratio;
  caption?: string; // suggested subject, shown on the placeholder only
  className?: string;
  zoomable?: boolean; // click a real photo to open it full-screen (default on)
}) {
  const [failed, setFailed] = useState(false);
  const [open, setOpen] = useState(false);

  const showImage = Boolean(src) && !failed;
  const canZoom = zoomable && showImage;
  const filename = src ? src.split("/").pop() : "add-a-photo.jpg";

  const photo = (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-contain"
    />
  );

  return (
    <figure
      className={`relative w-full overflow-hidden ${ratioClass[ratio]} bg-cream ${className}`}
    >
      {showImage ? (
        canZoom ? (
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`Enlarge image: ${alt}`}
            className="group/zoom relative block h-full w-full cursor-zoom-in"
          >
            {photo}
            <span className="pointer-events-none absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-ink/55 text-cream opacity-0 backdrop-blur-sm transition group-hover/zoom:opacity-100">
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
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3M11 8v6M8 11h6" />
              </svg>
            </span>
          </button>
        ) : (
          photo
        )
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-teal/30 bg-[repeating-linear-gradient(45deg,#EDF3F1_0px,#EDF3F1_11px,#F6FAF9_11px,#F6FAF9_22px)] p-4 text-center">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1C2E52"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="opacity-70"
          >
            <path d="M4 7h3l2-2h6l2 2h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" />
            <circle cx="12" cy="13" r="3.2" />
          </svg>
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-teal/70">
            Photo placeholder
          </span>
          <code className="rounded bg-white/50 px-1.5 py-0.5 text-[11px] text-muted">
            {filename}
          </code>
          {caption ? (
            <span className="max-w-[26ch] text-xs leading-snug text-muted">
              {caption}
            </span>
          ) : null}
        </div>
      )}

      <Lightbox
        open={open && canZoom}
        onClose={() => setOpen(false)}
        src={src}
        alt={alt}
      />
    </figure>
  );
}
