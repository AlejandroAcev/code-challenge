import React, { FC } from 'react';
import { Box, makeStyles } from '@material-ui/core';

const styles =
  makeStyles({
    root: {
      padding: '12px 32px 32px 32px',
      fontSize: '16px',
      backgroundColor: '#f7f7f7',
    },
});

interface ComponentProps {}

const Layout: FC<ComponentProps> = ({
  children,
}) => {
  const classes = styles();

  return (
    <Box className={classes.root}>
      {children}
    </Box>
  );
}

export default Layout;