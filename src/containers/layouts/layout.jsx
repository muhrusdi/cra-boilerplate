/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import { Location } from "@reach/router";
import LayoutSidebar from "./layout-sidebar";

const Layout = ({ children }) => (
  <Location>
    {({ location }) => {
      const path = location.pathname.split("/")[1];
      switch (path) {
        default:
          return (
            <LayoutSidebar>
              {children}
            </LayoutSidebar>
          );
      }
    }}
  </Location>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
