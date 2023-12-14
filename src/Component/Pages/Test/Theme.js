import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#007BFF', // Your primary color
    },
    secondary: {
      main: '#6C757D', // Your secondary color
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Your font family
  },
});

export default Theme;