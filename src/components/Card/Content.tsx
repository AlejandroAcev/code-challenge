import React, { FC } from 'react';
import { CardContent, makeStyles } from '@material-ui/core';
var classNames = require('classnames');

const styles =
  makeStyles({
    root: {
      '&:last-child': {
        paddingBottom: '8px',
      }
    },
    fullWidth: {
      width: '100%'
    },
    small: {
      padding: '8px 8px 8px 8px',
    },
    medium: {
      padding: '8px 24px 8px 24px',
    },
    big: {
      padding: '8px 36px 8px 36px',
    },
});

type Padding = 'small' | 'medium' | 'big';
interface ComponentProps {
  padding?: Padding;
  fullWidth?: boolean;
  classesName?: string;
}

export const StyledCardContent: FC<ComponentProps> = ({
  children,
  fullWidth,
  classesName,
  padding = 'medium',
}) => {
  const classes = styles();

  return (
    <CardContent className={classNames(
      classesName,
      {
        [classes.fullWidth]: fullWidth,
        [classes.small]: padding === 'small',
        [classes.medium]: padding === 'medium',
        [classes.big]: padding === 'big',
      },
      classes.root,
    )}>
      {children}
    </CardContent>
  );
}
