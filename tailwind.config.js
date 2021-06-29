// tailwind.config.js
module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          'brand-green': '#10da75',
          'brand-accent': '#ac162c'
        }
      }
    }
  };