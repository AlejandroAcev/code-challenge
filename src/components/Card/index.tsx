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
    }
});

interface ComponentProps {
  page?: boolean;
  classesName?: string;
}

const StyledCard: FC<ComponentProps> = ({
  children,
  classesName,
  page,
}) => {
  const classes = styles();

  return (
    <Card className={classNames({
        [classes.page]: page,
      },
      classes.root,
      classesName
    )}>
      {children}
    </Card>
  );
}

export default StyledCard;