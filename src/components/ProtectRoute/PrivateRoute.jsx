import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element, token, user }) => {
  if (token && user) {
    return element;
  } else {
    return <Navigate to="/Login" replace />;
  }
};

export default PrivateRoute;
