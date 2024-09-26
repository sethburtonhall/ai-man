/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      screens: {
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        orbitron: "var(--font-brand)",
        roboto: "var(--font-body)",
      },
      animation: {
        blink: "blink 1.4s infinite both",
        // This animation configuration defines a blinking effect
        // - "blink" is the name of the animation
        // - "1.4s" sets the duration of one complete animation cycle to 1.4 seconds
        // - "infinite" makes the animation repeat indefinitely
        // - "both" applies the styles for both the first and last keyframe during the delay period

        // fade: "fade 1.4s infinite both",
        // scale: "scale 2s infinite",
        // perspective: "perspective 1.2s infinite",
        // fadeIn: "fadeIn 1.2s ease-in-out infinite both",
      },
      keyframes: {
        blink: {
          "0%": {
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            opacity: " 0",
          },
        },
        // fade: {
        //   "0%, 100%": {
        //     opacity: "1",
        //   },
        //   "50%": {
        //     opacity: " 0.3",
        //   },
        // },
        // fadeIn: {
        //   "0%, 39%, 100%": {
        //     opacity: "0",
        //   },
        //   "40%": {
        //     opacity: "1",
        //   },
        // },
        // scale: {
        //   "0%, 100%": {
        //     transform: "scale(1.0)",
        //   },
        //   "50%": {
        //     transform: "scale(0)",
        //   },
        // },
        // perspective: {
        //   "0%": { transform: "perspective(120px)" },
        //   " 50%": { transform: "perspective(120px) rotateY(180deg)" },
        //   "100%": {
        //     transform: "perspective(120px) rotateY(180deg)  rotateX(180deg)",
        //   },
        // },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brand: {
          DEFAULT: "hsl(var(--link))",
        },
        link: {
          DEFAULT: "hsl(var(--link))",
          hover: "hsl(var(--link-hover))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
