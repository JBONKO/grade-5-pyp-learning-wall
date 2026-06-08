"use client";

import { useState } from "react";

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
 */
export function ImagePlaceholder({
  src,
  alt,
  ratio = "4/3",
  fit = "cover",
  caption,
  className = "",
}: {
  src?: string;
  alt: string;
  ratio?: Ratio;
  fit?: "cover" | "contain"; // "contain" suits portrait shots like book covers
  caption?: string; // suggested subject, shown on the placeholder only
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;
  const filename = src ? src.split("/").pop() : "add-a-photo.jpg";

  return (
    <figure
      className={`relative w-full overflow-hidden ${ratioClass[ratio]} ${
        fit === "contain" ? "bg-cream" : ""
      } ${className}`}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className={`h-full w-full ${
            fit === "contain" ? "object-contain" : "object-cover"
          }`}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-teal/30 bg-[repeating-linear-gradient(45deg,#EFE7D3_0px,#EFE7D3_11px,#F4EEE0_11px,#F4EEE0_22px)] p-4 text-center">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#185C57"
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
    </figure>
  );
}
