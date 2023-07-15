/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', "./src/**/*.jsx",],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#164e63',
        dark: '#0f172a',
        secondary: '#64748b'
      },
      screens: {
        '2xl': '1320px'
      }
    }
  },
  plugins: [],
}

