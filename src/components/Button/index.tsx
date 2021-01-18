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

  const CustomButton = () => (
    <Button color={color} className={classes.root}>
      {children}
    </Button>
  )

  return (
    <Box className={className}>
      {to ? (
        <Link to={to} >
          <CustomButton />
        </Link>
      ) : (
        <CustomButton />
      )}
    </Box>
  );
}

export default StyledButton;