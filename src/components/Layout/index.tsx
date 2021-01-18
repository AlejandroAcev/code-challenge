import React, { FC } from 'react';
import { Box, makeStyles } from '@material-ui/core';
var classNames = require('classnames');

const styles =
  makeStyles({
    root: {
      padding: '12px 32px 32px 32px',
    },
    background: {
      backgroundColor: '#f7f7f7',
    },
    center: {
      margin: '0',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }
});

interface ComponentProps {
  background?: boolean;
  center?: boolean;
  className?: string;
}

const Layout: FC<ComponentProps> = ({
  center,
  children,
  className,
  background,
}) => {
  const classes = styles();

  return (
    <Box className={classNames([className, {
      [classes.center]: center,
      [classes.background]: background,
    }])}>
      {children}
    </Box>
  );
}

export default Layout;