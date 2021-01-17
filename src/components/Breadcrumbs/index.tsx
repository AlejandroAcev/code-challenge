import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

interface ComponentProps {
  routes: string[];
}

const Breadcrumb: FC<ComponentProps> = ({ routes }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {routes.map((route, index) => {
        const isLast = routes.length === index + 1;
        return (
          <>
            <Typography color="primary" key={`breadcrumb-index`}>{route}</Typography>
            {!isLast && <ArrowForwardIosIcon color="primary" />}
          </>
        )
      })}
    </Breadcrumbs>
  );
}

export default Breadcrumb;