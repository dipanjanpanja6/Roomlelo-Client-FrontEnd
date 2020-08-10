import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import App from "./App";
import { useMediaQuery } from '@material-ui/core';



const Theme = () => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    // type: prefersDarkMode ? 'dark' : 'light',
                    text: {
                        // primary: prefersDarkMode ? "#fff" : '#314862',
                        primary: '#314862',
                        // secondary: '#2289FF'
                    },
                    primary: {
                        main: '#3CB7C6'
                    }
                },
                breakpoints: {
                    values: {
                        xs: 0,
                        sm: 600,
                        ls: 701,
                        xm: 800,
                        md: 960,
                        lg: 1280,
                        xl: 1920,
                    }
                },
                typography: {
                    fontFamily: [
                        'Poppins',
                        '-apple-system',
                        'BlinkMacSystemFont',
                        '"Segoe UI"',
                        'Roboto',
                        '"Helvetica Neue"',
                        'Arial',
                        'sans-serif',
                        '"Apple Color Emoji"',
                        '"Segoe UI Emoji"',
                        '"Segoe UI Symbol"',
                    ].join(','),
                },

            }),
        [prefersDarkMode],
    );
    return (
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    )
}

export default Theme
