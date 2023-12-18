import { ErrorBoundaryFallbackPage } from "@components/error-boundary-fallback-page";
import { PluginsManager } from "@lib/plugins/PluginsManager";
import { pluginRoute } from "@lib/router";
import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useRouteParams } from "typesafe-routes";

export const PluginLoader = () => {
  const { pluginName } = useRouteParams(pluginRoute);

  const PluginComponent = lazy(async () =>
    PluginsManager.instance().getPluginComponent(pluginName)
  );

  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallbackPage} resetKeys={[pluginName]}>
      <Suspense fallback="Loading...">
        <PluginComponent />
      </Suspense>
    </ErrorBoundary>
  );
};
