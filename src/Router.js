import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "./page/login";
import Home from "./page/home";
import { UserProfile } from "./utility";

const AppNavigator = (props) => {
  const ProtectedRoute = (params) => {
    return UserProfile.getCredential() ? (
      <Route {...params} render={() => <params.component />} />
    ) : (
      <Redirect to="/login" />
    );
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <ProtectedRoute path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default AppNavigator;
