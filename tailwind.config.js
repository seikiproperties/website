/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#001f4b",
          deep: "#001540",
          light: "#002a63",
          mid: "#00347a",
        },
        gold: {
          DEFAULT: "#B08D57",
          light: "#D4B483",
          dark: "#8A6D3F",
        },
        cream: {
          DEFAULT: "#F4F1EA",
          light: "#FAF8F3",
          dark: "#E8E2D5",
        },
        ink: "#13151A",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        card: "0 24px 60px -20px rgba(0,31,75,0.35)",
        gold: "0 18px 40px -16px rgba(176,141,87,0.45)",
      },
      backgroundImage: {
        "navy-gradient":
          "linear-gradient(180deg, rgba(0,21,64,0.15) 0%, rgba(0,21,64,0.55) 55%, rgba(0,21,64,0.92) 100%)",
        "navy-radial":
          "radial-gradient(circle at 20% 20%, rgba(176,141,87,0.10), transparent 45%)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        marquee: "marquee 38s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
