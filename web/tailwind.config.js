// import type { Config } from "tailwindcss";

const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '768px',
      md: '1080px',
      lg: '1600px',
    },
    spacing: {
      0: '0',
      '02e': '0.2em',
      '05e': '0.5em',
      1: '1px',
      '1e': '1em',
      '1re': '1rem',
      xs: 'var(--space-xs)',
      sm: 'var(--space-sm)',
      md: 'var(--space-md)',
      lg: 'var(--space-lg)',
      xl: 'var(--space-xl)',
      gutter: 'var(--gutter)',
      'header-height': 'var(--header-height)',
    },
    colors: {
      black: 'black',
      white: 'white',
      red: 'var(--color-red)',
      blue: 'var(--color-blue)',
      'blue-alt': 'var(--color-blue-alt)',
      gray: 'var(--color-gray)',
      'gray-alt': 'var(--color-gray-alt)',
      yellow: 'var(--color-yellow)',
    },
    fontSize: {
      sm: ['var(--text-sm)', '1.1'],
      md: ['var(--text-md)', '1.0666667'],
      lg: ['var(--text-lg)', '1.2'],
      'text-lg--mobile': ['var(--text-lg--mobile)', '1'],
    },
    fontFamily: {
      primary: ['var(--primary-500)'],
      'primary-b': ['var(--primary-700)'],
    },
  },
  plugins: [],
}
export default config
