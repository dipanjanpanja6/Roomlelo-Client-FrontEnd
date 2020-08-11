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
                    type: prefersDarkMode ? 'dark' : 'light',
                    text: {
                        // primary: prefersDarkMode ? "#fff" : '#314862',
                        // secondary: prefersDarkMode ? "#ffffff8a" : '#3CB7C6',
                        // secondary: prefersDarkMode ? "#ffffff8a" : '#3CB7C6',
                        // primary: '#314862',
                        // secondary: '#2289FF'
                    },
                    primary: {
                        main:prefersDarkMode ? '#dad513' : '#fff900', 
                    },
                    secondary:{
                        main:prefersDarkMode ? '#10b3bb' :'#00f3ff'
                    },
                    background:{
                        default:prefersDarkMode ? '#303030' : '#fff'
                    }
                },
                breakpoints: {
                    values: {
                        xs: 0,
                        sm: 700,
                        ls: 699,
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
