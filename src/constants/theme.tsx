import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

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
      fontFamily: ['monospace'].join(','),
    },
  })
}
export default themeCreated
