/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            main: '#ff6b6b',
            mainAccent: '#ff3333', // not needed for shadcn components
            overlay: 'rgba(0,0,0,0.8)', // background color overlay for alert dialogs, modals, etc.
      
            // light mode
            bg: '#fcd7d7',
            text: '#000',
            border: '#000',
      
            // dark mode
            darkBg: '#272933',
            darkText: '#eeefe9',
            darkBorder: '#000',
            secondaryBlack: '#212121', // opposite of plain white, not used pitch black because borders and box-shadows are that color 
          },
          borderRadius: {
            base: '5px'
          },
          boxShadow: {
            light: '4px 4px 0px 0px #000',
            dark: '4px 4px 0px 0px #000',
          },
          translate: {
            boxShadowX: '4px',
            boxShadowY: '4px',
            reverseBoxShadowX: '-4px',
            reverseBoxShadowY: '-4px',
          },
          fontWeight: {
            base: '500',
            heading: '700',
          },
          animation: {
            'background-shimmer': 'background-shimmer 40s linear infinite',
          },
          keyframes: {
            'background-shimmer': {
              '0%': { backgroundPosition: '0 0' },
              '100%': { backgroundPosition: '100% 100%' },
            }
          }
        },
      },
      plugins: [],
}

