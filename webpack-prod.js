const { merge } = require("webpack-merge");
const commonConfig = require("./webpack-common");

const webpackProd = {
  mode: "production",
};

module.exports = merge(webpackProd, commonConfig);
