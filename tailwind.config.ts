import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        nf: ['20px', '24px'],
      },
      screens:{
        'x1': {'max': '1200px'},
        'x2': {'max': '1080px'},
        'x3': {'max': '900px'},
        'x4': {'max': '690px'},
        'x5': {'max': '610px'},
        'x6': {'max': '415px'},
        'x7': {'max': '390px'},
        'xm': {'max': '490px'},
        'xn': {'min': '901px'}
      },
      scale:{
        '90':'0.90',
        '80':'0.80',
        '107':'1.07'
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'gradient-move': 'gradient 5s ease infinite',
        'slide-up': 'slideUp 1s ease-out',
        'slide-down': 'slideDown 1s ease-out',
        'slide-in-right': 'slideInRight 1s ease-out',
      
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
