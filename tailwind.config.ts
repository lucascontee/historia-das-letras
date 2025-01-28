import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '408px', 
      },
      colors: {
        palet: {
          white:'#e9e5df',
          white2:'#f3f2f0',
          blue4: '#3CA6A6',
          blue3: '#026773',
          brown2: '#024959',
          brown1: '#4b453c'
        },
        foreground: "var(--foreground)",
      },
      borderWidth: {
        '0.5': '0.5px',
      },
      fontFamily:{
        script: ['Tangerine', 'Arial', 'serif']
      },
    },
  },
  plugins: [],
} satisfies Config;
