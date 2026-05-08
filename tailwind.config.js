/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
        },
        border: {
          DEFAULT: "hsl(var(--border))",
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
          focus: "var(--border-focus)",
        },
        background: {
          DEFAULT: "hsl(var(--background))",
          purple: "var(--background-purple)"
        },
        foreground: "hsl(var(--foreground))",
        ring: "hsl(var(--ring))",
      },
    },
  },
  plugins: [],
}

