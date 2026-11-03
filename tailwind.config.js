module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"]
      },
      colors: {
        ivory: "#e9dfd4",
        paper: "#dfd2c6",
        cream: "#d5c6b8",
        champagne: "#c9b5a4",
        taupe: "#aa9889",
        mauve: "#a58e91",
        rose: "#c8afb1",
        ink: "#211d1b",
        "soft-ink": "#594f49",
        muted: "#756860"
      },
      screens: {
        "max-1120": { max: "1120px" },
        "max-1080": { max: "1080px" },
        "max-920": { max: "920px" },
        "max-650": { max: "650px" }
      }
    }
  }
}