module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
      extend: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            heading: ['Montserrat', 'sans-serif'],
          },
        colors: {
          brand: {
            primary: '#2e8540',
            secondary: '#f5a623',
            dark: '#1a3e1f',
            light: '#d5e8d9'
          }
        }
      }
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography')
    ]
  }