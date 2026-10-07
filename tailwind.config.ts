import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-hover": "var(--surface-hover)",
        ink: "var(--text)",
        muted: "var(--text-muted)",
        subtle: "var(--text-subtle)",
        accent: "var(--accent)",
        line: "var(--border)",
        "line-hover": "var(--border-hover)"
      },
      fontFamily: {
        display: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Consolas", "monospace"]
      }
    }
  },

  plugins: []
} as Config;
