import React, { FC } from 'react';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

var classNames = require('classnames');

const styles =
  makeStyles({
    default: {
      fontSize: 14,
    },
    h1: {
      fontSize: 48,
    },
    h2: {
      fontSize: 32,
    },
    h3: {
      fontSize: 24,
    },
    title: {
      fontSize: 18,
    },
    subTitle: {
      fontSize: 12,
    },
    link: {
      fontSize: 18,
    },
    fontStyle: {
      fontFamily: '"Raleway", "Helvetica", "Arial"',
    }
});

const textType = [
  'h1',
  'h2',
  'h3',
  'default',
  'title',
  'subTitle',
  'link',
] as const;
type TextTypeValues = typeof textType;
export type TextType = TextTypeValues[number];

interface ComponentProps extends TypographyProps {
  type?: TextType;
  color?: 'primary' | 'secondary' | "textPrimary" | "textSecondary";
  className?: string;
}

const StyledTypography: FC<ComponentProps> = ({
  children,
  type = 'default',
  color = 'textSecondary',
  className,
  ...props
}) => {
  const classes = styles();

  return (
    <Typography
      color={color}
      className={
        classNames(className, {
            [classes.h1]: type === 'h1',
            [classes.h2]: type === 'h2',
            [classes.h3]: type === 'h3',
            [classes.title]: type === 'title',
            [classes.subTitle]: type === 'subTitle',
            [classes.link]: type === 'link',
            [classes.default]: type === 'default',
          },
          classes.fontStyle,
        )
      }
      {...props}
    >
      {children}
    </Typography>
  );
}

export default StyledTypography;