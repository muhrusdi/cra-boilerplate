import React from "react";
import PropTypes from "prop-types";
import { getToken } from "utils";

const PrivateRoute = ({ component: Component, ...rest }) => {
  if (!getToken() && rest.location.pathname !== "/login") {
    // If we’re not logged in, redirect to the home page.
    window.location.href = "/login";
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
};
