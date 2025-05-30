import type { Config } from "tailwindcss";

export default <Config>{
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
        colors: {
          },
          fontFamily: {
            mar: ["marFont", "sans-serif"], 
          },
    },
  },
  plugins: [],
};
