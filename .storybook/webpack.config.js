const path = require('path');

const aliases = {
  "components": path.resolve(__dirname, "../src/components"),
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
          options: { javascriptEnabled : true }
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