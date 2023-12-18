export type PluginConfig = {
  pluginName: string;
  pluginTitle: string;
  fileName: string;
};

export type PluginsHubConfig = {
  plugins: PluginConfig[];
};
