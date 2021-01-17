import React, { FC } from "react";
import {
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#264653",
    },
    secondary: {
      main: "#2a9d8f",
    },
    action: {
      selected: "#264653",
      hover: "#4A88A1",
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
      fontFamily: "Raleway",
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