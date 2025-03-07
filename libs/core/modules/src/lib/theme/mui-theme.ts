import { createTheme, Theme } from '@mui/material';
export const muiTheme: Theme = createTheme({
    palette: {
        primary: {
            main: "#00cc66",
            light: "#e6fff2",
            dark: "#00994d",
            contrastText: "#fff",
        },
        secondary: {
            main: "#404040",
            light: "#808080",
            dark: "#000000",
            contrastText: "#fff",
        },
        info: {
            main: "#1976d2",
            light: "#42a5f5",
            dark: "#1565c0",
            contrastText: "#fff",
        },
        warning: {
            main: "#ff9100",
            light: "#ffbd66",
            dark: "#e68200",
            contrastText: "#fff",
        }

    }
});
