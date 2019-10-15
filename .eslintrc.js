const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2017,
  },
  plugins: [
    'react',
  ],
  rules: {
    "linebreak-style": [0, "error", "windows"],
    "import/prefer-default-export": false,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ["components", path.resolve(__dirname, "src/components")],
          ["containers", path.resolve(__dirname, "src/containers")],
          ["hooks", path.resolve(__dirname, "src/hooks")],
          ["hocs", path.resolve(__dirname, "src/hocs")],
          ["images", path.resolve(__dirname, "src/images")],
          ["utils", path.resolve(__dirname, "src/utils")],
          ["layout", path.resolve(__dirname, "src/containers/layout")],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};
