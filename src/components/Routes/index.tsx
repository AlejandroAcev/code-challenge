import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Card from "../Home"

const Routes: FC = ({ children }) => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Card />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;