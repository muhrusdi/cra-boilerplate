const {
  override,
  disableEsLint,
  addBabelPresets,
  addWebpackAlias,
  addBabelPlugins,
  addWebpackResolve,
} = require("customize-cra");
const path = require("path");

export const aliases = {
  "components": path.resolve(__dirname, "src/components"),
  "containers": path.resolve(__dirname, "src/containers"),
  "hooks": path.resolve(__dirname, "src/hooks"),
  "hocs": path.resolve(__dirname, "src/hocs"),
  "images": path.resolve(__dirname, "src/images"),
  "utils": path.resolve(__dirname, "src/utils"),
  "layout": path.resolve(__dirname, "src/containers/layout"),
};

module.exports = override(
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