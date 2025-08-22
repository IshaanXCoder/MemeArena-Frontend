import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // New warm color palette
        teal: {
          DEFAULT: "#4C8C88", // Muted Teal
          light: "#6BA5A0",
          dark: "#357470",
        },
        mustard: {
          DEFAULT: "#E1A500", // Mustard Yellow
          light: "#F0B825",
          dark: "#C69300",
        },
        orange: {
          DEFAULT: "#D95D39", // Burnt Orange
          light: "#E87A5B",
          dark: "#B8442A",
        },
        charcoal: {
          DEFAULT: "#3B3B3B", // Charcoal Gray
          light: "#5A5A5A",
          dark: "#2A2A2A",
        },
        beige: {
          DEFAULT: "#F5E8D3", // Warm Beige
          light: "#F8EDD8",
          dark: "#E8D5B7",
        },
      },
      fontFamily: {
        'retro': ['Orbitron', 'Share Tech Mono', 'monospace'],
        'mono': ['Share Tech Mono', 'monospace'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        retro: "0.25rem", // Sharp corners for retro feel
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "retro-glow": {
          "0%, 100%": {
            textShadow: "0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor",
          },
          "50%": {
            textShadow: "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor",
          },
        },
        "retro-flicker": {
          "0%, 18%, 22%, 25%, 53%, 57%, 100%": {
            textShadow: "0 0 4px #fbbf24, 0 0 11px #fbbf24, 0 0 19px #fbbf24",
          },
          "20%, 24%, 55%": {
            textShadow: "none",
          },
        },
        "retro-scan": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "retro-glow": "retro-glow 2s ease-in-out infinite alternate",
        "retro-flicker": "retro-flicker 3s linear infinite",
        "retro-scan": "retro-scan 2s linear infinite",
        "float": "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
