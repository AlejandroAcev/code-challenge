import React, { FC, useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Box,  createStyles,  Grow,  makeStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import Button from '../Button';
import Typography from '../Typography';

const styles = (theme: Theme) =>
  createStyles({
    card: {
      flexGrow: 1,
      display: 'flex',
      margin: '0 24px 24px 0',
      borderRadius: '0 0 18px 0',
      boxShadow: '-12px 10px 24px 4px rgba(51,51,51,0.45)',
      webkitBoxShadow: '-12px 10px 24px 4px rgba(51,51,51,0.45)',
    },
    content: {
      width: '100%',
      display: 'flex',
      marginLeft: '32px',
      marginRight: '32px',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      display: 'flex',
      fontFamily: "'Rock Salt', cursive",
    },
    menu: {
      display: 'flex',
      margin: '12px 0 0 48px',
      flexDirection: 'row-reverse',
    },
    button: {
      marginLeft: '24px',
      borderRadius: '18px',
      '&:hover': {
        color: 'white !important',
        backgroundColor: theme.palette.primary.main,
      }
    },
});

const Home: FC<WithStyles<typeof styles>> = ({ classes }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    console.log('Setting!');
  }, [show]);

  return (
    <Box display="flex">
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Grow in={show} {...(show ? { timeout: 1000 } : {})}>
            <Typography type="h2" variant="h1" className={classes.title}>
              Code Challenge Page!
            </Typography>
          </Grow>
          <Grow in={show} {...(show ? { timeout: 2500 } : {})}>
            <Box display="flex" className={classes.menu}>
              <Button to="/about" className={classes.button}>
                About
              </Button>
              <Button to="/table" className={classes.button}>
                Table
              </Button>
              <Button to="/cards" className={classes.button}>
                Cards
              </Button>
            </Box>
          </Grow>
        </CardContent>
      </Card>
    </Box>
  );
}

export default withStyles(styles)(Home);