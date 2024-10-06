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
        rotate: {
          '0%': { transform: 'rotate(0deg) scale(10)' },
          '100%': { transform: 'rotate(-360deg) scale(10)' },
      },
    },
      animation: {
        growBorder: 'growBorder 1s ease-out forwards',
        rotate: 'rotate 10s linear infinite',
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
