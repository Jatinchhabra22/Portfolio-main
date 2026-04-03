import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#8b5cf6",
          dark: "#6d28d9",
        },
        secondary: {
          DEFAULT: "#06b6d4",
          dark: "#0891b2",
        },
        accent: {
          DEFAULT: "#ec4899",
          dark: "#be185d",
        },
        card: "#0f0f0f",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      animation: {
        "reveal-up": "reveal-up 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards",
        "reveal-down": "reveal-down 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards",
        "glow": "glow 4s ease-in-out infinite alternate",
      },
      keyframes: {
        "reveal-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "reveal-down": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "glow": {
          "0%": { opacity: "0.3", transform: "scale(1)" },
          "100%": { opacity: "0.6", transform: "scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
