import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import UsersPage from "../modules/UsersPage";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/users" component={UsersPage} />
      <Route path="/" component={() => <Redirect to="/users" />} />
    </Switch>
  </Router>
);

export default AppRouter;
