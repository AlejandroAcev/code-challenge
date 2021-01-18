import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Box, makeStyles } from '@material-ui/core';

const styles =
  makeStyles({
    root: {
      padding: '8px 32px 8px 32px',
      fontSize: '16px',
    },
});

interface ComponentProps {
  color?: 'primary' | 'secondary';
  className?: string;
  to?: string;
}

const StyledButton: FC<ComponentProps> = ({
  children,
  color = 'primary',
  to,
  className,
}) => {
  const classes = styles();

  return (
    <Box className={className}>
      {to ? (
        <Button color={color} className={classes.root} component={Link as any} to={to}>
          {children}
        </Button>
      ) : (
        <Button color={color} className={classes.root}>
          {children}
        </Button>
      )}
    </Box>
  );
}

export default StyledButton;