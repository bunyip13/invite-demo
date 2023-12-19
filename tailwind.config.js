const { join } = require("path");
const { createGlobPatternsForDependencies } = require("@nx/angular/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./index.html", "./src/**/*.{html,ts,md}"],
  content: [
    join(__dirname, "src/**/*.{html,ts}"),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        mgMenu: {
          background: "#084153",
        },
        mgSecondary: {
          background: "#EFEFEF",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#2CABD3",
          secondary: "#0F586F",
          accent: "#F96429",
          neutral: "#3d4451",
          "button-text": "#FFFFFF",
          "bg-menu": "#084153",
        },
      },
    ],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
