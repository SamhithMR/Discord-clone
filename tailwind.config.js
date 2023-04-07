tailwind.config = {
    theme: {
      screens: {
        sm: '338px',
        md: '768px',
        lg: '1024px',
        xl: '1440px'
      },
      extend: {
        colors: {
          background: "#404EED",
          black_button: "#313338",
          black_text: "#23272A",
          blue_button: "#7983F5",
          blue_text: "#5865F2"
        },
        fontFamily: {
          'sans': ['"Roboto"', 'sans-serif'],
          'rubik': ['Rubik', 'sans-serif'],
          'Montserrat': ['Montserrat', 'sans-serif'],
        }
      }
    },
    variants: {},
    plugins: []
  }
  