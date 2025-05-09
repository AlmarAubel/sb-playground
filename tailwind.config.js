/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  important: true,
  corePlugins: {
    preflight: true,
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
