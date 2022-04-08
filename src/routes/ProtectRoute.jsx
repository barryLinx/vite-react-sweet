import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectRoute = ({component:Component, ...rest }) => {
  const isAuth = JSON.parse(localStorage.getItem("jwtlogin"));
  return (
    <Route
    {...rest}
    render={(props) => 
      isAuth?.accessToken ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/signin", state: { from: props.location } }} />
      )
      }
  />
  );
};

export default ProtectRoute;
