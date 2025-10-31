import { createTheme, Theme } from '@mui/material';
export const muiTheme: Theme = createTheme({
  palette: {
    primary: {
      main: '#0da84c',
      light: '#eafaf1',
      dark: ' #13532e',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#404040',
      light: '#808080',
      dark: '#000000',
      contrastText: '#fff',
    },
    info: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
    },
    warning: {
      main: '#ff9100',
      light: '#ffbd66',
      dark: '#e68200',
      contrastText: '#fff',
    },
    text: {
      primary: '#243342',
      secondary: '#7F8C8D',
    },
    background: {
      default: '#fffafa',
      paper: '#f6f6f6',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'sans-serif',
      'Roboto',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
