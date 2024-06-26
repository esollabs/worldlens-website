import type { Config } from 'tailwindcss'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'twk-everett': 'TWK Everett',
        sohne: 'Söhne',
      },
      keyframes: {
        'hover-blur': {
          '0%, 100%': {
            'backdrop-filter': 'blur(35px)',
          },
          '50%': {
            'backdrop-filter': 'blur(0px)',
          },
        },
        scan: {
          '0%': { top: '100%' },
          '100%': { top: '-150px' },
        },
        'text-slide-4': {
          '0%, 20%': {
            transform: 'translateY(0%)',
          },
          '25%, 45%': {
            transform: 'translateY(-25%)',
          },
          '50%, 70%': {
            transform: 'translateY(-50%)',
          },
          '75%, 95%': {
            transform: 'translateY(-75%)',
          },
          '100%': {
            transform: 'translateY(-95%)',
          },
        },
      },
      animation: {
        scan: 'scan 3s infinite',
        'text-slide-4': 'text-slide-4 10s cubic-bezier(0.83, 0, 0.17, 0) infinite',
        'hover-blur': 'hover-blur 0.6s',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        sm: '16px',
        lg: '20px',
        xl: '100px',
        '2xl': '100px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [addVariablesForColors],
  important: true,
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'))
  const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))

  addBase({
    ':root': newVars,
  })
}

export default config
