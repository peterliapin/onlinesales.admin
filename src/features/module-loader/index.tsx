import { Suspense } from "react";
import { useRouteParams } from "typesafe-routes";
import { CoreModule, coreModuleRoute } from "lib/router";
import { ContactsLazy } from "features/contacts/lazy";
import { BlogLazy } from "features/blog/lazy";
import { ErrorBoundary } from "components/error-boundary";

export const ModuleLoader = () => {
  const { moduleName } = useRouteParams(coreModuleRoute);

  return (
    <ErrorBoundary>
      <Suspense fallback="Loading...">
        {moduleName === CoreModule.contacts && <ContactsLazy />}
        {moduleName === CoreModule.blog && <BlogLazy />}
      </Suspense>
    </ErrorBoundary>
  );
};
