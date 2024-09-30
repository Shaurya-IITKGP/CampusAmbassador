import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        growBorder: {
          '0%': { height: '0' },
          '100%': { height: 'h-200px' },
        },
      },
      animation: {
        growBorder: 'growBorder 1s ease-out forwards',
      },
      colors:{
        'lightOrange':"#F3B333",
        'darkOrange':'#B46100'
      },
      
    },
  
  },
  plugins: [],
};
export default config;
