import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        palet: {
          white:'#f0eae4',
          blue4: '#3CA6A6',
          blue3: '#026773',
          blue2: '#024959',
          blue1: '#012E40'
        },
        foreground: "var(--foreground)",
      },
      fontFamily:{
        script: ['Tangerine', 'Arial', 'serif']
      },
    },
  },
  plugins: [],
} satisfies Config;
