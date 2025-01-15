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
          white:'#ffffff',
          blue4: '#3CA6A6',
          blue3: '#026773',
          blue2: '#024959',
          blue1: '#040605'
        },
        foreground: "var(--foreground)",
      },
      borderWidth: {
        '0.5': '0.5px', // Define uma borda mais fina
      },
      fontFamily:{
        script: ['Tangerine', 'Arial', 'serif']
      },
    },
  },
  plugins: [],
} satisfies Config;
