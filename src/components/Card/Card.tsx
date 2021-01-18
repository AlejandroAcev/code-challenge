import React, { FC } from 'react';
import { Card, makeStyles } from '@material-ui/core';
var classNames = require('classnames');

const styles =
  makeStyles({
    root: {
      padding: '8px 24px 24px 24px',
    },
    page: {
      display: 'flex',
      width: '1050px',
    },
    center: {
      margin: '0',
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
});

interface ComponentProps {
  page?: boolean;
  center?: boolean;
  classesName?: string;
}

export const StyledCard: FC<ComponentProps> = ({
  children,
  classesName,
  page,
  center,
}) => {
  const classes = styles();

  return (
    <Card className={classNames(
      classesName,
      {
        [classes.page]: page,
        [classes.center]: center,
      },
      classes.root,
    )}>
      {children}
    </Card>
  );
}
