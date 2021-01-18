import { Box, makeStyles } from "@material-ui/core";
import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "..//Home"
import Layout from "../Layout";
import Navbar from "../Navbar";

const styles =
  makeStyles({
    root: {
      backgroundColor: '#f7f7f7',
      height: '100%',
    },
});

const Routes: FC = () => {
  const classes = styles();
  return (
    <Box className={classes.root}>
      <Router>
      <Navbar />
        <Layout center>
          <Switch>
            <Route exact path="/table">
              <Home />
            </Route>
            <Route path="/cards">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>        
        </Layout>
      </Router>
    </Box>
  );
}

export default Routes;