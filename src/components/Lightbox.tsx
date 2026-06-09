"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

/**
 * Full-screen image lightbox. Render it next to a trigger and drive it with
 * `open` / `onClose`. Closes on the backdrop, the × button, or Escape, and locks
 * background scroll while open. Portals to <body> so no ancestor can clip it.
 */
export function Lightbox({
  src,
  alt,
  open,
  onClose,
}: {
  src?: string;
  alt: string;
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-ink/90 p-4 backdrop-blur-sm sm:p-8"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close enlarged image"
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition hover:bg-cream/20"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[88vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
      />
      <p className="max-w-[60ch] text-center text-sm text-cream/70">{alt}</p>
    </div>,
    document.body,
  );
}
