module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'normal': '16px',
        '14px': '14px',
        '15px': '15px',
        '18px': '18px',
        '22px': '22px',
        '24px': '24px',
        '38px': '38px',
        '42px': '42px',
        '58px': '58px',
        '250px': '250px',
      },
      inset: {
        '15/100': '15%',
        '3px': '3px',
      },
      fontFamily: {
        'display': ['Oswald', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'hover': '#FFA73C',
        'gray': {
          750: '#212529',
          75: '#eee',
        },
        'black-faint': '#919191',
        'black-overlay': 'rgba(0, 0, 0, 0.2)',
        'blue-overlay': 'rgba(9, 20, 38, 0.7)',
        'black-half-transparent': 'rgba(0, 0, 0, 0.5)',
        'yellow': '#FFCC00',
        transparent: {
          'border' : 'rgba(255,255,255,0.07)',
          'bg' : 'rgba(255,255,255,0.09)',
          'black' : '#1B1B1B',
          'hover' : 'rgba(255,167,60,0.35)',
          'gray' : 'rgba(209, 213, 219, 0.5)',
        }
      },
      boxShadow: {
        'header' : '0 0 18px 1px rgba(0, 0, 0, 0.5)',
      },
      screens: {
        'md' : '868px',
      },
      minWidth: {
        '250' : '250px'
      },
      letterSpacing: {
        '14px': '14px',
      },
      spacing: {
        '350px': '350px',
      },
      container: {
        center: true,
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            'transform' : 'translateY(50px)',
            'opacity' : '0.25'
          },
          '25%': {
            'transform' : 'translateY(40px)',
            'opacity' : '0.5'
          },
          '50%': {
            'transform' : 'translateY(20px)',
            'opacity' : '0.75'
          },
          '100%': {
            'transform' : 'translateY(0)',
            'opacity' : '1'
          },
        },
        fadeInDown: {
          '0%': {
            'transform' : 'translateY(-50px)',
            'opacity' : '0.25'
          },
          '25%': {
            'transform' : 'translateY(-40px)',
            'opacity' : '0.5'
          },
          '50%': {
            'transform' : 'translateY(-20px)',
            'opacity' : '0.75'
          },
          '100%': {
            'transform' : 'translateY(0)',
            'opacity' : '1'
          },
        },
        fadeInRight: {
          '0%': {
            'transform' : 'translateX(-50px)',
            'opacity' : '0.25'
          },
          '25%': {
            'transform' : 'translateX(-40px)',
            'opacity' : '0.5'
          },
          '50%': {
            'transform' : 'translateX(-20px)',
            'opacity' : '0.75'
          },
          '100%': {
            'transform' : 'translateX(0)',
            'opacity' : '1'
          },
        },
        fadeInLeft: {
          '0%': {
            'transform' : 'translateX(50px)',
            'opacity' : '0.25'
          },
          '25%': {
            'transform' : 'translateX(40px)',
            'opacity' : '0.5'
          },
          '50%': {
            'transform' : 'translateX(20px)',
            'opacity' : '0.75'
          },
          '100%': {
            'transform' : 'translateX(0)',
            'opacity' : '1'
          },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.2s linear', 
        fadeInDown: 'fadeInDown 3s linear', 
        fadeInRight: 'fadeInRight 0.2s linear', 
        fadeInLeft: 'fadeInLeft 0.2s linear', 
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      overflow: ['group-hover'],
      scale: ['group-hover'],
      cursor: ['hover', 'group-hover'],
      padding: ['hover'],
    },
  },
  plugins: [],
}
