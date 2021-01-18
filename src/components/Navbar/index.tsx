import React, { FC } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Box,  makeStyles } from '@material-ui/core';
import Button from '../Button';
import Typography from '../Typography';

const styles =
  makeStyles({
    card: {
      display: 'flex',
      minWidth: '860px',
      borderRadius: '0 0 18px 0',
      marginBottom: '24px',
      boxShadow: '-12px 10px 24px 4px rgba(51,51,51,0.45)',
      webkitBoxShadow: '-12px 10px 24px 4px rgba(51,51,51,0.45)',
    },
    content: {
      width: '100%',
      marginRight: '32px',
      marginLeft: '32px',
    },
    title: {
      fontFamily: "'Rock Salt', cursive",
    },
    menu: {
      margin: '12px 0 0 48px',
      display: 'flex',
      flexDirection: 'row-reverse',
    },
    button: {
      marginLeft: '24px',
      paddingTop: '12px',
      '&:hover': {
        marginTop: '-4px',
      }
    },
});

const Home: FC = () => {
  const classes = styles();

  return (
    <Box display="flex">
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography type="h1" className={classes.title}>
            Code Challenge Page!
          </Typography>
          <Box display="flex" className={classes.menu}>
            <Button to="/about" color="secondary" className={classes.button}>
              About
            </Button>
            <Button to="/table" color="secondary" className={classes.button}>
              Table
            </Button>
            <Button to="/cards" color="secondary" className={classes.button}>
              Cards
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Home;