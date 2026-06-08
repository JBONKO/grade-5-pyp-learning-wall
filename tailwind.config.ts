import type { Config } from "tailwindcss";

/**
 * Site colour palette and type live here.
 * Edit the hex values below to retune the whole site at once.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F6F1E6", // warm off-white page background
        paper: "#FBF8F0", // slightly lighter card / panel background
        ink: "#23211C", // soft black body text
        muted: "#6F695B", // warm grey for secondary text
        line: "#E4DCC9", // hairline borders
        teal: {
          DEFAULT: "#185C57", // deep teal (primary)
          dark: "#0F423E",
          soft: "#2E726C",
        },
        mustard: {
          DEFAULT: "#D6A22B", // mustard yellow (accent)
          soft: "#E4BE63",
        },
        clay: {
          DEFAULT: "#BC5A3C", // muted red / orange (accent)
          soft: "#CE7A5F",
        },
      },
      fontFamily: {
        // System stacks — no external font fetch, so local dev is instant and
        // works even where Google Fonts is slow/blocked (e.g. mainland China).
        // To switch to a custom font later, see the note in README.md.
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
        serif: ["Georgia", "ui-serif", "Cambria", "Times New Roman", "serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
