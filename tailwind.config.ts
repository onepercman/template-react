import { colorize, resetCSS, schemes } from "tailwind-schemes"
import tailwindScrollbar from "tailwind-scrollbar"
import type { Config } from "tailwindcss"
import tailwindAnimate from "tailwindcss-animate"
import colors from "tailwindcss/colors"
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/mojaui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "2xs": "0.625rem",
      },
      screens: {
        default: "1230px",
        mobile: "390px",
        tablet: "820px",
        retina: "1440px",
        fhd: "1920px",
        qhd: "2560px",
        uhd: "3840px",
      },
      borderRadius: {
        DEFAULT: "6px",
      },
      keyframes: {
        heightIn: {
          from: { opacity: "0", height: "0" },
          to: { opacity: "100%", height: "var(--height)" },
        },
        heightOut: {
          from: { opacity: "100%", height: "var(--height)" },
          to: { opacity: "0", height: "0" },
        },
      },
      animation: {
        heightIn: "heightIn 0.3s forwards",
        heightOut: "heightOut 0.3s forwards",
      },
    },
  },
  plugins: [
    tailwindAnimate,
    tailwindScrollbar({ nocompatible: true }),
    schemes({
      schemes: {
        light: {
          background: colors.white,
          foreground: colors.black,
          primary: colorize(colors.emerald, "500", "950"),
          secondary: colors.gray[500],
          muted: colors.gray[400],
          accent: colorize(colors.cyan, "500", "950"),
          default: colors.gray[100],
          component: colors.white,
          invert: colors.white,
          line: colors.gray[200],
          info: colorize(colors.sky, "500", "950"),
          success: colorize(colors.green, "500", "950"),
          warning: colorize(colors.yellow, "500", "950"),
          error: colorize(colors.red, "500", "950"),
        },
        dark: {
          background: colors.gray[950],
          foreground: colors.white,
          primary: colorize(colors.emerald, "500", "50"),
          secondary: colors.gray[400],
          muted: colors.gray[700],
          accent: colorize(colors.cyan, "500", "50"),
          default: colors.gray[800],
          component: colors.gray[900],
          invert: colors.black,
          line: colors.gray[700],
          info: colorize(colors.sky, "500", "50"),
          success: colorize(colors.green, "500", "50"),
          warning: colorize(colors.yellow, "500", "50"),
          error: colorize(colors.red, "500", "50"),
        },
      },
    }),
    resetCSS({
      html: "bg-background",
      "*": "scrollbar scrollbar-thumb-default scrollbar-thumb-rounded scrollbar-track-rounded scrollbar-track-transparent",
    }),
  ],
}

export default config
