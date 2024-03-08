// tailwind.config.js

// Import the Flowbite plugin
import flowbitePlugin from "flowbite/plugin";

// Import the tailwind-scrollbar plugin
import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbitePlugin, tailwindScrollbar],
};
