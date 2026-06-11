import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050505',
        charcoal: '#111111',
        softCharcoal: '#1A1A1A',
        bone: '#E7D7C5',
        mutedBone: '#BFA98B',
        orangeBurnt: '#C95716',
        orangeDark: '#8F350F',
      },
      fontFamily: {
        display: ['Impact', 'Arial Black', 'system-ui', 'sans-serif'],
        body: ['Courier New', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
