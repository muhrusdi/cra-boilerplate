import React from "react";
import { hot } from "react-hot-loader/root";
import RouterApp from "routes";
import { Provider } from "overmind-react";
import { createOvermind } from "overmind";
import { overmind } from "overmind-state";
import "components/global-style/styles.css";
import { ThemeProvider } from "styled-components";
import theme from "utils/theme";

const overmindConfig = createOvermind(overmind);

const App = () => (
  <Provider value={overmindConfig}>
    <ThemeProvider theme={theme.light}>
      <RouterApp />
    </ThemeProvider>
  </Provider>
);

export default hot(App);
