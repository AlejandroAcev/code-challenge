import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { StyledCard, StyledCardContent } from '../../components/Card';
import Typography from '../../components/Typography';
import { Box } from '@material-ui/core';
import Breadcrumb from '../../components/Breadcrumbs';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import BuildIcon from '@material-ui/icons/Build';

const useStyles = makeStyles({
  container: {
    padding: '4px 32px 4px 32px',
    marginBottom: '24px',
    '&:last-child': {
      marginBottom: '0',
    }
  },
  icon: {
    marginRight: '8px',
  },
  text: {
    display: 'flex',
    alignItems: 'center',
  }
});

const HomePage: FC = () => {
  const classes = useStyles();

  return (
    <StyledCard page>
      <StyledCardContent fullWidth>
        <Breadcrumb routes={['Home']} />
        <Typography type="h2">
          Welcome to the page!
        </Typography>

        <Box className={classes.container}>
          <Typography type="title" color="primary" className={classes.text}>
            <PermIdentityIcon className={classes.icon} /> Who are you?
          </Typography>
          
          <Typography>
            Hi! I'm <Typography type="link" color="secondary" to="https://www.linkedin.com/in/alejandroacevedogonzalez">Alejandro Acevedo</Typography>,
            a young developer trying to do his best with this app.
          </Typography>

          <Typography>
            If you want more information or just say <Typography color="secondary" variant="caption" >"Hey!"</Typography> contact with 
            me via <a href="mailto:alej.acev.gonz@gmail.com"><Typography type="link" color="secondary" variant="caption">email</Typography></a>.
          </Typography>
        </Box>

        <Box className={classes.container}>
          <Typography type="title" color="primary" className={classes.text}>
            <HelpOutlineIcon className={classes.icon} /> Why I'm here?
          </Typography>
          
          <Typography>
            First don't worry, this is just a example page to show some programming skills using frontend technologies.
          </Typography>

          <Typography>
            If you see something wrong just relax, it's <Typography color="secondary" variant="caption" >"under control"</Typography> (I hope so).
          </Typography>
        </Box>

        <Box className={classes.container}>
          <Typography type="title" color="primary" className={classes.text}>
            <BuildIcon className={classes.icon} /> How did you do this?
          </Typography>
          
          <Typography>
            This <Typography type="special" variant="caption">awesome</Typography> project was created using <Typography type="link" color="secondary" to="https://es.reactjs.org/">React js</Typography>, <Typography
            type="link" color="secondary" to="https://reactrouter.com/">React Router</Typography>, <Typography type="link" color="secondary" 
            to="https://material-ui.com/">Material UI</Typography> and <Typography type="link" color="secondary" 
            to="https://www.typescriptlang.org/">Typescript</Typography> (no, we <Typography type="link" color="secondary" 
            to="https://media1.tenor.com/images/36aa9e8c5a34821be4f26b6acaf6e5a6/tenor.gif?itemid=16558003">don't use "javascript" here</Typography>).
          </Typography>
        </Box>
      </StyledCardContent>
    </StyledCard>
  );
}

export default HomePage;