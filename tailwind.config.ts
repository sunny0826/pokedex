import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      fontFamily: {
        pixel: ['"Ark Pixel"', 'sans-serif'],
        sans: ['"Ark Pixel"', 'sans-serif'],
      },
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
        pokedex: {
          frame: "hsl(var(--pokedex-frame))",
          "frame-dark": "hsl(var(--pokedex-frame-dark))",
          "frame-light": "hsl(var(--pokedex-frame-light))",
          screen: "hsl(var(--pokedex-screen))",
          "screen-border": "hsl(var(--pokedex-screen-border))",
          "screen-light": "hsl(var(--pokedex-screen-light))",
          panel: "hsl(var(--pokedex-panel))",
          text: "hsl(var(--pokedex-text))",
          highlight: "hsl(var(--pokedex-highlight))",
          blue: "hsl(var(--pokedex-blue))",
          green: "hsl(var(--pokedex-green))",
          hinge: "hsl(var(--pokedex-hinge))",
          yellow: "hsl(var(--pokedex-yellow))",
          dark: "hsl(var(--pokedex-dark))",
        },
        type: {
          normal: "hsl(var(--type-normal))",
          fire: "hsl(var(--type-fire))",
          water: "hsl(var(--type-water))",
          electric: "hsl(var(--type-electric))",
          grass: "hsl(var(--type-grass))",
          ice: "hsl(var(--type-ice))",
          fighting: "hsl(var(--type-fighting))",
          poison: "hsl(var(--type-poison))",
          ground: "hsl(var(--type-ground))",
          flying: "hsl(var(--type-flying))",
          psychic: "hsl(var(--type-psychic))",
          bug: "hsl(var(--type-bug))",
          rock: "hsl(var(--type-rock))",
          ghost: "hsl(var(--type-ghost))",
          dragon: "hsl(var(--type-dragon))",
          dark: "hsl(var(--type-dark))",
          steel: "hsl(var(--type-steel))",
          fairy: "hsl(var(--type-fairy))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "scan-line": "scan-line 4s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
