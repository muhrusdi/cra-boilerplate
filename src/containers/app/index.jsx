import React from "react";
import { hot } from "react-hot-loader/root";
import RouterApp from "routes";
import { Provider } from "overmind-react";
import { createOvermind } from "overmind";
import { overmind } from "overmind-state";
import { GlobalStyle } from "components";

const overmindConfig = createOvermind(overmind);

const App = () => (
  <Provider value={overmindConfig}>
    <GlobalStyle />
    <RouterApp />
  </Provider>
);

export default hot(App);
