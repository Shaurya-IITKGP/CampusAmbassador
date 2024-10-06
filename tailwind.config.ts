import type { Config } from "tailwindcss";
import { transform } from "./node_modules/next/dist/build/swc/index.d.ts";

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
         slideUp: {
         "0%" : {
            transform: "translateY(100%)",
            opacity: "0"
          },
          '100%':{
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        slideDown: {
          "0%" : {
             transform: "translateY(-100%)",
             opacity: "0"
           },
           '100%':{
             transform: 'translateY(0)',
             opacity: '1'
           }
         },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },},
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg) scale(10)' },
          '100%': { transform: 'rotate(-360deg) scale(10)' },
      },
    },
      animation: {
        growBorder: 'growBorder 1s ease-out forwards',
        rotate: 'rotate 10s linear infinite',
        'slide-down':"slideDown 1s ease-out",
        'slide-in-right': 'slideInRight 1s ease-out',
        'slide-in-left': 'slide-in-left 1s ease-out', 
        'slideUp':'slideUp 1s ease-out'
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
