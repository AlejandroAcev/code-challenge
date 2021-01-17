import React, { FC } from "react";
import {
  createMuiTheme,
  makeStyles,
  createStyles,
  Theme as AugmentedTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

const theme = createMuiTheme({
  
});

const CustomStyles: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default CustomStyles;