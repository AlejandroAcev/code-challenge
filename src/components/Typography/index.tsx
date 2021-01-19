import React, { FC } from 'react';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

var classNames = require('classnames');

const styles = (theme: Theme) =>
  createStyles({
    default: {
      fontSize: 16,
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
      fontSize: 20,
    },
    subTitle: {
      fontSize: 12,
    },
    link: {
      fontSize: 16,
      textDecoration: 'underline',
      color: theme.palette.secondary.main,
      '&:visited': {
        color: theme.palette.secondary.dark,
      }
    },
    fontStyle: {
      fontFamily: '"Raleway", "Helvetica", "Arial"',
    },
    special: {
      fontSize: 14,
      margin: '0 1px 0 1px',
      fontFamily: "'Rock Salt', cursive",
    }
});

const textType = [
  'h1',
  'h2',
  'h3',
  'link',
  'title',
  'default',
  'subTitle',
  'special',
] as const;
type TextTypeValues = typeof textType;
export type TextType = TextTypeValues[number];

interface InternalProps {
  to?: string;
  type?: TextType;
  className?: string;
  color?: 'primary' | 'secondary' | "textPrimary" | "textSecondary";
}

type ComponentProps = InternalProps & TypographyProps & WithStyles<typeof styles>;

const StyledTypography: FC<ComponentProps> = ({
  to,
  children,
  type = 'default',
  color = 'textSecondary',
  className,
  classes,
  ...props
}) => {

  const isExternal = to && (to.includes('https') || to.includes('http') || to.includes('mailto:'));

  const InternalLink = () => (
    <Typography
      {...props}
      color={color}
      to={to}
      component={Link as any}
      className={
        classNames(className, {
            [classes.h1]: type === 'h1',
            [classes.h2]: type === 'h2',
            [classes.h3]: type === 'h3',
            [classes.link]: type === 'link',
            [classes.title]: type === 'title',
            [classes.default]: type === 'default',
            [classes.special]: type === 'special',
            [classes.subTitle]: type === 'subTitle',
          },
          classes.fontStyle,
        )
      }
    >
      {children}
    </Typography>
  );

  const ExternalLink = () => (
    <a
    href={to}
    target="_blank"
    rel="noreferrer" 
      className={
        classNames(className, {
            [classes.h1]: type === 'h1',
            [classes.h2]: type === 'h2',
            [classes.h3]: type === 'h3',
            [classes.link]: type === 'link',
            [classes.title]: type === 'title',
            [classes.default]: type === 'default',
            [classes.special]: type === 'special',
            [classes.subTitle]: type === 'subTitle',
          },
          classes.fontStyle,
        )
      }
    >
      {children}
    </a>
  );

  return to ? (
    isExternal ? <ExternalLink /> : <InternalLink />
  ) : (
    <Typography
      {...props}
      color={color}
      className={
        classNames(className, {
            [classes.h1]: type === 'h1',
            [classes.h2]: type === 'h2',
            [classes.h3]: type === 'h3',
            [classes.link]: type === 'link',
            [classes.title]: type === 'title',
            [classes.default]: type === 'default',
            [classes.special]: type === 'special',
            [classes.subTitle]: type === 'subTitle',
          },
          classes.fontStyle,
        )
      }
    >
      {children}
    </Typography>
  );
}

export default withStyles(styles)(StyledTypography);