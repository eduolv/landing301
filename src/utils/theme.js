import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3C50E0', 
        },
        secondary: {
            main: '#80CAEE', 
        },
        background: {
            default: '#ffffff',
        },
        success: {
            main: '#219653',
        },
        danger: {
            main: '#D34053',
        },
        warning: {
            main: '#FFA70B',
        },
    },
    typography: {
        fontFamily: 'Montserrat, Coolvetica, sans-serif',
    },
    spacing: {
        unit: 4,
        4.5: '1.125rem',
        5.5: '1.375rem',
    },
});

export default theme;