const path = require('path');
const modifyVars = require("../src/utils/modify-vars");

const aliases = {
  "components": path.resolve(__dirname, "../src/components"),
  "containers": path.resolve(__dirname, "../src/containers"),
  "hooks": path.resolve(__dirname, "../src/hooks"),
  "hocs": path.resolve(__dirname, "../src/hocs"),
  "images": path.resolve(__dirname, "../src/images"),
  "utils": path.resolve(__dirname, "../src/utils"),
  "layouts": path.resolve(__dirname, "../src/containers/layouts"),
  "routes": path.resolve(__dirname, "../src/routes"),
  "overmind-state": path.resolve(__dirname, "../src/overmind"),
};

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.
  
  // Make whatever fine-grained changes you need
  
  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  config.module.rules[0].use[0].loader = require.resolve("babel-loader")
  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve("@babel/preset-react"),
    require.resolve("@babel/preset-env"),
  ]
  config.module.rules[0].use[0].options.plugins = [
    // use @babel/plugin-proposal-class-properties for class arrow functions
    require.resolve("@babel/plugin-proposal-class-properties"),
    // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    require.resolve("babel-plugin-styled-components"),
    [require.resolve("babel-plugin-import"), {
      "libraryName": "antd",
      "style": true,
    }]
  ]
  
  config.module.rules.push(
    {
      test: /\.less$/,
      loaders: [
        require.resolve('style-loader'),
        require.resolve('css-loader'),
        {
          loader: require.resolve('less-loader'),
          options: {
            modifyVars: modifyVars,
            javascriptEnabled: true
          }
        }
      ],
      include: [
        path.resolve(__dirname, '../src'),
        /[\\/]node_modules[\\/].*antd/
      ],
    },
  )

  config.resolve = {
    ...config.resolve,
    alias: aliases,
  };
  
  // Return the altered config
  return config;
};