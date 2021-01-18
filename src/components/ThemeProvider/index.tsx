import React, { FC } from "react";
import {
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#52796f",
    },
    secondary: {
      main: "#84a98c",
    },
    action: {
      hover: "#cad2c5",
      selected: "#52796f",
    },
    text: {
      primary: "#333",
    }
  },
  typography: {
    fontFamily: '"Raleway", "Helvetica", "Arial"',
    body1: {
      fontFamily: '"Raleway", "Helvetica", "Arial"',
    },
    body2: {
      fontFamily: "Helvetica",
    },
  },
});

const ThemeProvider: FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
}

export default ThemeProvider;