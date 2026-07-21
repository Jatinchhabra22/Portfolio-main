import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        /* CSS-variable-driven — works in both themes */
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          light: "var(--secondary-light)",
        },
        accent: {
          DEFAULT: "var(--accent)",
        },
        card: "var(--card)",
        surface: "var(--surface)",
        border: "var(--border)",
        /* Static fallbacks */
        "purple-glow": "#8b5cf6",
        "cyan-glow": "#06b6d4",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
      },
      animation: {
        "reveal-up": "reveal-up 0.8s cubic-bezier(0.77,0,0.175,1) forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "glow": "glow 4s ease-in-out infinite alternate",
        "aurora": "aurora 12s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "scan": "scan 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        "reveal-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow": {
          "0%": { opacity: "0.3", transform: "scale(1)" },
          "100%": { opacity: "0.7", transform: "scale(1.15)" },
        },
        "aurora": {
          "0%": { transform: "translateX(0%) translateY(0%) rotate(0deg)", opacity: "0.4" },
          "33%": { transform: "translateX(5%) translateY(-5%) rotate(120deg)", opacity: "0.6" },
          "66%": { transform: "translateX(-5%) translateY(5%) rotate(240deg)", opacity: "0.3" },
          "100%": { transform: "translateX(0%) translateY(0%) rotate(360deg)", opacity: "0.4" },
        },
        "float": {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%,100%": { boxShadow: "0 0 20px rgba(139,92,246,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(139,92,246,0.6)" },
        },
        "scan": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(600%)", opacity: "0" },
        },
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        mono: ["DM Mono", "Fira Code", "monospace"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
