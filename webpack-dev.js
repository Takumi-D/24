const path = require("path");
const { merge } = require("webpack-merge");

const commonConfig = require("./webpack-common");

const webpackDev = {
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    port: 3000,
    open: true,
    hot: true,
  },
};

module.exports = merge(webpackDev, commonConfig);
