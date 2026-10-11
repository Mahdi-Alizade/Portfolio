import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // Scanning all relevant directories for Tailwind classes
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Enforcing class-based dark mode management
  darkMode: 'class',
  
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  
  plugins: [],
}

export default config