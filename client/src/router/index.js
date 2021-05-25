import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/users" component={() => <div>Users Page</div>} />
      <Route path="/" component={() => <Redirect to="/users" />} />
    </Switch>
  </Router>
);

export default AppRouter;
