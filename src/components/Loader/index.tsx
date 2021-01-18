import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';

import loader from '../../media/loader.gif';
var classNames = require('classnames');

const styles =
  makeStyles({
    root: {
      height: 250,
      margin: 'auto',
      display: 'block',
    }
});

interface ComponentProps {
  isLoading: boolean;
  className?: string;
}

const Loader: FC<ComponentProps> = ({ isLoading, className, children }) => {
  const classes = styles();

  return isLoading ? (
    <img src={loader} alt="loader-gif" className={classNames(classes.root, className)}/>
  ) : (
    <>{children}</>
  );
}

export default Loader;