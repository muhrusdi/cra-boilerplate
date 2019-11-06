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

  config.resolve = {
    ...config.resolve,
    alias: aliases,
  };
  
  // Return the altered config
  return config;
};