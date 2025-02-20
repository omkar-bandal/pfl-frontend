import { createTheme, Theme } from '@mui/material';
export const muiTheme: Theme = createTheme({
  palette: {
    // primary: {
    //   main: '#008A00',
    //   light: '#befabe',
    // },
    // secondary: {
    //   main: '#2a3eb1',
    //   light: '#3d5afe',
    // },
    primary: {
      main: "#009933", 
      light: "#e6ffee",
      dark: "#00cc44",
      contrastText: "#fff",
    },
    secondary: {
      main: "#000",
      light: "#616161",
    },
  }
});
