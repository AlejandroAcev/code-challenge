import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

var classNames = require('classnames');

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
  to,
  children,
  className,
  color = 'primary',
}) => {
  const classes = styles();
  return (
    <Button
      color={color}
      className={
        classNames([
          className,
          classes.root
      ])}
      component={Link as any}
      to={to}
    >
      {children}
    </Button>
  );
}

export default StyledButton;