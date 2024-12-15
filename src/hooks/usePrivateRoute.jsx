import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!document.cookie.split("; ").find((row) => row.startsWith("access_token="));

  return <Route {...rest} render={(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to="/" />)} />;
};

export default PrivateRoute;
