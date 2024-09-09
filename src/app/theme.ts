'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  cssVariables: true,
  components: {
    MuiAppBar: {
        styleOverrides: {
            root: {
                background: 'white'
            }
        }
    },
    MuiToolbar: {
        defaultProps: {
                color: 'white'},
        styleOverrides: {
            root: {
                background: 'white',
                color: 'blue'

            }
        },
        }
    }
  });

export default theme;