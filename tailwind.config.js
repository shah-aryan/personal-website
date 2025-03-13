module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      default: ["Inter", "sans-serif"],
      display: ["Playfair Display", "sans-serif"],
      garamond: ["Cormorant Garamond", "serif"],
      serif: ["Times New Roman"]
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#222831",
          50: "#E7EAEE",
          100: "#CCD2DB",
          200: "#9CA8BA",
          300: "#687B97",
          400: "#455163",
          500: "#1B2027",
          600: "#15191E",
          700: "#0F1115",
          800: "#060709",
        },
        secondary: {
          DEFAULT: "#663EFF",
          50: "#EFEBFF",
          100: "#DED6FF",
          200: "#C2B3FF",
          300: "#A18AFF",
          400: "#8566FF",
          500: "#3300FF",
          600: "#2600BD",
          700: "#1A0080",
          800: "#0C003D",
        },
        neutral: {
          DEFAULT: "#EEEEEE",
        },
      },
      fontSize: {
        '10xl': ['8rem', '1'],   // Extremely large text
        '11xl': ['10rem', '1'],  // Even larger if needed
      }
    },
    container: {
      center: true, // serves as margin-inline: auto;
      padding: {
        DEFAULT: "1rem",
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
