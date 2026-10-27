import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7047eb',
        'primary-dark': '#5c35d9',
        'primary-light': '#f3f0fc',
        accent: '#7047eb',
        'accent-light': '#8a66f0',
        'accent-hover': '#5f34dc',
        lavender: '#f3f0fc',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bounce-dot': {
          '0%, 80%, 100%': { transform: 'scale(0)' },
          '40%': { transform: 'scale(1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out forwards',
        slideUp: 'slideUp 0.3s ease-out forwards',
        'bounce-dot': 'bounce-dot 1.4s infinite ease-in-out both',
      },
    },
  },
  plugins: [],
};

export default config;
