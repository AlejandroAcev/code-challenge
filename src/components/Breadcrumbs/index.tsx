import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
interface ComponentProps {
  routes: string[];
}

const Breadcrumb: FC<ComponentProps> = ({ routes }) => {
  return (
    <Breadcrumbs separator={<NavigateNextIcon />} aria-label="breadcrumb">
      {routes.map((route, index) => {
        return <Typography color="primary" key={`breadcrumb-${index}`}>{route}</Typography>
      })}
    </Breadcrumbs>
  );
}

export default Breadcrumb;