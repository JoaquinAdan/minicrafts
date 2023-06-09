import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

// Create a theme instance.
const themeCreated = (mode: 'light' | 'dark') => {
  return createTheme({
    palette: {
      mode: mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: '#0084de',
            },
            secondary: {
              main: '#db2777',
            },
            error: {
              main: red.A400,
            },
            components: {
              MuiButton: {
                styleOverrides: {
                  contained: {
                    backgroundColor: '#ed1b1c',
                  },
                  root: {
                    color: '#0084de',
                    textTransform: 'none',
                    //fontSize: "18px",
                  },
                },
              },
            },
          }
        : {
            primary: {
              main: '#FFFFFF',
            },
            secondary: {
              main: '#db2777',
            },
            error: {
              main: red.A400,
            },
          }),
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  })
}
export default themeCreated
