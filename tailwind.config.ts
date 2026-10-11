import type { Config } from 'tailwindcss'

let config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#050505',
        foreground: '#fafafa',
        electric: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        }
      },
    },
  },
  plugins: [],
}

export default config