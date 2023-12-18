import { useEffect, useState } from "react";
import { PluginsManager } from "@lib/plugins/PluginsManager";
import { PluginConfig } from "@lib/plugins/types/PluginConfig";

export const useAvailablePlugins = () => {
  const [plugins, setPlugins] = useState<PluginConfig[]>([]);

  useEffect(() => {
    PluginsManager.instance().getAvailablePlugins().then(setPlugins);
  }, []);

  return { plugins };
};
