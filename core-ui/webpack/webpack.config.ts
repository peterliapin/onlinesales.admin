// https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/32#issuecomment-478042178
delete process.env.TS_NODE_PROJECT;

import { resolve } from "path";
import { container, ProvidePlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import GenerateJsonPlugin from "generate-json-webpack-plugin";
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import dotenv from "dotenv";
import DotenvPlugin from "dotenv-webpack";
import { pluginsConfig } from "../config/pluginsConfig.json";

import { dependencies } from "../package.json";

const { ModuleFederationPlugin } = container;

const DOT_ENV_PATH = resolve(__dirname, "../../.env");

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

dotenv.config({ path: DOT_ENV_PATH });

const configuration: Configuration = {
  entry: {
    main: resolve(__dirname, "../src/index.ts"),
  },
  output: {
    path: resolve(__dirname, "../../dist"),
    filename: "[name].[contenthash:8].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    plugins: [new TsconfigPathsPlugin({ configFile: resolve(__dirname, "../tsconfig.json") })],
    alias: {
      "@providers": resolve(__dirname, "../src/providers"),
      "@lib": resolve(__dirname, "../src/lib"),
      "@features": resolve(__dirname, "../src/features"),
      "@components": resolve(__dirname, "../src/components"),
    },
    fallback: {
      buffer: require.resolve("buffer/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      [`${process.env.PLUGINS_HUB_URL_PREFIX}/**`]: {
        target: process.env.PLUGINS_HUB_HOST,
        pathRewrite: {
          [`${process.env.PLUGINS_HUB_URL_PREFIX}`]: "/",
        },
        changeOrigin: true,
        secure: false,
      },
      //   "/api/**": process.env.CORE_API,
      //   changeOrigin: true,
      //   secure: false,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new DotenvPlugin({ path: DOT_ENV_PATH }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "../public/index.html"),
    }),
    new GenerateJsonPlugin("pluginsConfig.json", pluginsConfig),
    new ModuleFederationPlugin({
      // name: "CMS_CORE",
      // filename: "remoteEntry.js",
      // exposes: {
      //   "./requestProvider": "./src/providers/request-provider.tsx",
      // },
      shared: {
        react: {
          requiredVersion: dependencies.react,
          singleton: true,
        },
        "react/jsx-runtime": {
          singleton: true,
          requiredVersion: dependencies.react,
        },
        "react-dom": {
          requiredVersion: dependencies["react-dom"],
          singleton: true,
        },
      },
    }),
    new ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ],
};

export default configuration;
