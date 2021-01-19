import { Box, makeStyles } from "@material-ui/core";
import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TablePage from "../../pages/TablePage"
import Layout from "../Layout";
import Navbar from "../Navbar";
import CardsPage from "../../pages/CardsPage";
import HomePage from "../../pages/HomePage";

const styles =
  makeStyles({
    root: {
      height: "100%",
      paddingBottom: '64px',
      backgroundColor: '#f7f7f7',
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
              <TablePage />
            </Route>
            <Route path="/cards">
              <CardsPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>        
        </Layout>
      </Router>
    </Box>
  );
}

export default Routes;