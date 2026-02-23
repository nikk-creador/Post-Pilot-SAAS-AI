import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brandFrom: '#4f46e5',
        brandTo: '#7c3aed'
      }
    }
  },
  plugins: []
};

export default config;
