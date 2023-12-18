import path from "path";
import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

const isProduction = process.env.NODE_ENV == "production";

export const config: webpack.Configuration = {
  entry: {},
  output: {
    path: path.resolve(__dirname, "../../dist/plugins"),
  },
  devServer: {
    open: false,
    host: "localhost",
    port: 8081,
    // proxy: {
    //   "/cmsCoreHost/**": {
    //     target: CMS_CORE_HOST,
    //     pathRewrite: {
    //       "/cmsCoreHost": "/",
    //     },
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },
  },
  // plugins: [
  //   // Add your plugins here
  //   // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  // ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
