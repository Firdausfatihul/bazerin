import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      skew: {
        '-20': '-20deg',
        '-12': '-12deg',
        '-6': '-6deg',
        '0': '0deg',
        '20': '20deg',
        '30': '30deg',
        '40': '40deg',
      },
    },
  },
  plugins: [],
} satisfies Config;
