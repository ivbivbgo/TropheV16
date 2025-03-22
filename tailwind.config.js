/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#2A2A2A',    // Dark background
          DEFAULT: '#7C3AED', // Deep Purple
          light: '#9B72E9',   // Light Purple
        },
        secondary: {
          dark: '#F5F5F5',    // Light background
          DEFAULT: '#6366F1', // Indigo
          light: '#818CF8',   // Light Indigo
        },
        text: {
          primary: '#FFFFFF',    // White text
          secondary: '#9B72E9',  // Light Purple text
          body: '#E5E5E5',      // Light gray text
        }
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      minHeight: {
        'screen-75': '75vh',
        'screen-85': '85vh',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #7C3AED, #6366F1)',
        'gradient-hover': 'linear-gradient(to right, #9B72E9, #818CF8)',
        'gradient-soft': 'linear-gradient(to bottom right, #F5F5F5, #FFFFFF)',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  safelist: [
    {
      pattern: /(bg|text|border)-(indigo|purple|pink|blue|green|yellow|red|gray)-(50|100|200|300|400|500|600|700|800|900)/,
    }
  ]
}