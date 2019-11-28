"use strict";

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  "plugins": ["prettier"],
  "extends": [
    "plugin:prettier/recommended",
    "prettier/flowtype",
    "prettier/standard"
  ],
  parserOptions: {
    parser: "babel-eslint"
  }
}
