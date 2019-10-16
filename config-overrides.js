const {
  override,
  disableEsLint,
  addBabelPresets,
  addWebpackAlias,
  addBabelPlugins,
  addWebpackPlugin,
  useEslintRc,
  addWebpackResolve,
} = require("customize-cra");
const path = require("path");
const Dotenv = require('dotenv-webpack');

const aliases = {
  "components": path.resolve(__dirname, "src/components"),
  "containers": path.resolve(__dirname, "src/containers"),
  "hooks": path.resolve(__dirname, "src/hooks"),
  "hocs": path.resolve(__dirname, "src/hocs"),
  "images": path.resolve(__dirname, "src/images"),
  "utils": path.resolve(__dirname, "src/utils"),
  "layouts": path.resolve(__dirname, "src/containers/layouts"),
  "routes": path.resolve(__dirname, "src/routes"),
  "overmind-state": path.resolve(__dirname, "src/overmind"),
};

module.exports = override(
  useEslintRc(),
  // disable eslint in webpack
  disableEsLint(),
  ...addBabelPresets(
    "@babel/preset-env",
    "@babel/preset-react",
  ),
  ...addBabelPlugins(
    "react-hot-loader/babel",
    "babel-plugin-styled-components"
  ),

  addWebpackPlugin(new Dotenv()),
  /**
   * add path alias
   */
  addWebpackAlias(aliases),

  /**
   * resolve extention
   */
  addWebpackResolve(
    {
      extensions: [".js", ".jsx", ".css"]
    }
  ),
);