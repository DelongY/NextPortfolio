import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '50% 50%' },
          '100%': { backgroundPosition: '-150% -150%' }
        }
      },
      animation: {
        shine: 'shine var(--duration) linear infinite'
      }
    },
  },
  plugins: [],
};
export default config;
