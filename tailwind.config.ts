import type { Config } from "tailwindcss";

/**
 * Site colour palette and type live here.
 * Edit the hex values below to retune the whole site at once.
 *
 * Token names are historical (the site launched warm cream/teal/mustard) but
 * now carry the clean navy + mint editorial palette:
 *   cream   = near-white page background
 *   paper   = white cards / panels
 *   ink     = navy text
 *   teal    = navy primary (buttons, dark bands)
 *   mustard = mint accent (bars, rings, chips)
 *   clay    = deep green-slate secondary accent (eyebrows, labels)
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7FAFB", // near-white page background
        paper: "#FFFFFF", // white card / panel background
        ink: "#16243F", // navy body text
        muted: "#5B6B83", // blue-grey secondary text
        line: "#E3E9F0", // hairline borders
        teal: {
          DEFAULT: "#1C2E52", // navy (primary)
          dark: "#111E38",
          soft: "#33486F",
        },
        mustard: {
          DEFAULT: "#A7CCC1", // mint (accent)
          soft: "#CBE2DA",
        },
        clay: {
          DEFAULT: "#47695F", // deep green-slate (secondary accent)
          soft: "#7BA197",
        },
      },
      fontFamily: {
        // System stacks — no external font fetch, so local dev is instant and
        // works even where Google Fonts is slow/blocked (e.g. mainland China).
        // `serif` intentionally maps to the same geometric sans stack: every
        // heading on the site uses the font-serif utility, so this one line
        // switches the whole site to bold sans headlines.
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        serif: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
