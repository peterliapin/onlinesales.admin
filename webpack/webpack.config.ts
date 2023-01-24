import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { Configuration } from "webpack";
import { container } from "webpack";
import { dependencies } from "../package.json";

const { ModuleFederationPlugin } = container;

const configuration: Configuration = {
  entry: {
    main: path.resolve(__dirname, "../src/index.ts"),
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contenthash:8].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    new ModuleFederationPlugin({
      shared: {
        react: {
          requiredVersion: dependencies.react,
          singleton: true,
        },
        "react/jsx-runtime": {
          singleton: true,
        },
        "react-dom": {
          requiredVersion: dependencies["react-dom"],
          singleton: true,
        },
      },
    }),
  ],
};

export default configuration;
