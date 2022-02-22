import {createTheme } from '@mui/material/styles';
import { neutralColor, primaryColor, secondaryColor } from './colors';

const theme = createTheme({
    palette: {
      primary: {
        main: primaryColor,
        contrastText: "white"
      },
      secondary: {
        main: secondaryColor,
      },
      text: {
          primary: neutralColor
      }
    },
  });

  export default theme;