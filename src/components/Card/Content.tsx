import React, { FC } from 'react';
import { CardContent, makeStyles } from '@material-ui/core';
var classNames = require('classnames');

const styles =
  makeStyles({
    root: {
      padding: '8px 24px 24px 24px',
    },
    fullWidth: {
      width: '100%'
    }
});

interface ComponentProps {
  fullWidth?: boolean;
  classesName?: string;
}

export const StyledCardContent: FC<ComponentProps> = ({
  children,
  fullWidth,
  classesName,
}) => {
  const classes = styles();

  return (
    <CardContent className={classNames(
      classesName,
      {
        [classes.fullWidth]: fullWidth,
      },
      classes.root,
    )}>
      {children}
    </CardContent>
  );
}
