import React from "react";
import { Router } from "@reach/router";
import { Home } from "containers";

const RouterApp = () => (
  <Router>
    <Home path="/" />
  </Router>
);

export default RouterApp;
