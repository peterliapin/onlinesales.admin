import { ComponentType } from "react";
import { loadDynamicModule } from "@lib/plugins/loadPlugin";
import { CMSPlugin } from "@lib/plugins/types/CMSPlugin";
import { PluginConfig, PluginsHubConfig } from "@lib/plugins/types/PluginConfig";

const DEFAULT_MODULE_SCOPE = "pluginsHub";
const DEFAULT_URL_PREFIX = "/pluginsHub";

const getPluginsHubConfig = async () => {
  const response = await fetch(`${process.env.PLUGINS_HUB_URL_PREFIX}/pluginsConfig.json`);
  const pluginsConfig: PluginsHubConfig = await response.json();

  return pluginsConfig;
};

const getPluginFileURL = (fileName: string) =>
  `${process.env.PLUGINS_HUB_URL_PREFIX ?? DEFAULT_URL_PREFIX}/${fileName}`;

const getPluginModuleScope = () => process.env.PLUGINS_MODULE_SCOPE ?? DEFAULT_MODULE_SCOPE;

export class PluginsManager {
  private static _instance: PluginsManager;
  private pluginsMap: Map<string, PluginConfig> = new Map();

  private constructor(private initialization = getPluginsHubConfig()) {
    this.initialization.then((pluginsConfig) => {
      this.pluginsMap = new Map(pluginsConfig.plugins.map((plugin) => [plugin.pluginName, plugin]));
    });
  }

  public static instance() {
    if (!PluginsManager._instance) {
      PluginsManager._instance = new PluginsManager();
    }

    return PluginsManager._instance;
  }

  public async getPluginComponent(pluginName: string): Promise<{ default: ComponentType }> {
    await this.initialization;

    const plugin = this.pluginsMap.get(pluginName);

    if (!plugin) {
      console.log(`${pluginName} not found`);
      return { default: () => null };
    }

    return loadDynamicModule<CMSPlugin>(
      getPluginFileURL(plugin.fileName),
      getPluginModuleScope(),
      "."
    ).then(({ PluginComponent }) => ({ default: PluginComponent }));
  }

  public async getAvailablePlugins() {
    await this.initialization;

    return [...this.pluginsMap.values()];
  }
}
