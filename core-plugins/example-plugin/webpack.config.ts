import path from "path";
import webpack from "webpack";
const { ModuleFederationPlugin } = webpack.container;
import { dependencies } from "./package.json";
import { fileName } from "./pluginConfig.json";

const isProduction = process.env.NODE_ENV == "production";

const config: webpack.Configuration = {
  extends: path.resolve(__dirname, "../webpack/webpack.config.ts"),

  plugins: [
    new ModuleFederationPlugin({
      name: "onlinesalesPlugins", // module scope name
      filename: fileName,
      exposes: {
        ".": "./src/index.tsx",
      },
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
  ],
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
