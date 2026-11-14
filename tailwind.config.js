/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: [
          "Nunito",
          '"Noto Sans TC"',
          '"PingFang TC"',
          '"Microsoft JhengHei"',
          "sans-serif",
        ],
        body: [
          "Lora",
          '"Noto Serif TC"',
          '"Songti TC"',
          '"PingFang TC"',
          "serif",
        ],
        mono: [
          '"IBM Plex Mono"',
          "ui-monospace",
          "SFMono-Regular",
          '"PingFang TC"',
          "monospace",
        ],
      },
      colors: {
        ink: {
          DEFAULT: "#0A2540",
          950: "#061829",
          900: "#0A2540",
          800: "#123A5A",
          700: "#1B4E72",
          600: "#2A6488",
          400: "#5C8AA8",
        },
        mint: {
          DEFAULT: "#7FD1C9",
          50: "#F2F8F8",
          100: "#E4F5F2",
          200: "#C6EAE5",
          300: "#A5DFD8",
          400: "#7FD1C9",
          500: "#57BDB3",
          600: "#3B9E95",
          700: "#27756D",
        },
        mist: {
          DEFAULT: "#F2F8F8",
          200: "#E7F1F0",
        },
        sand: {
          50: "#FBF7F1",
          100: "#F6EFE4",
          200: "#EDE0CC",
          300: "#E0CBAE",
        },
        clay: {
          400: "#D9A87C",
          500: "#C98F6B",
        },
        moss: {
          500: "#5F8770",
          600: "#4B6E5A",
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        soft: "0 18px 60px -24px rgba(10, 37, 64, 0.24)",
        lift: "0 30px 80px -30px rgba(10, 37, 64, 0.34)",
        glow: "0 0 0 1px rgba(127, 209, 201, 0.35), 0 24px 60px -24px rgba(87, 189, 179, 0.55)",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(-2deg)" },
          "50%": { transform: "translateY(-14px) rotate(1deg)" },
        },
        "menu-in": {
          from: { opacity: "0", transform: "translateY(-8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "soft-ping": {
          "0%": { transform: "scale(0.9)", opacity: "0.55" },
          "70%, 100%": { transform: "scale(1.35)", opacity: "0" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-slow": "float-slow 11s ease-in-out infinite",
        "menu-in": "menu-in 0.28s ease-out both",
        "soft-ping": "soft-ping 3s ease-out infinite",
      },
    },
  },
  plugins: [],
};
