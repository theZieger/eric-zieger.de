module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.astro"],
  theme: {
    extend: {
      colors: {
        "brand-green": "#10da75",
        "brand-accent": "#ac162c",
      },
    },
  },
};
