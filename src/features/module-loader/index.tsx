import { Suspense } from "react";
import { useRouteParams } from "typesafe-routes";
import { CoreModule, coreModuleRoute } from "lib/router";
import { BlogLazy } from "features/blog/lazy";
import { ErrorBoundary } from "components/error-boundary";
import { ContactsModule } from "features/contacts/contacts-module";

export const ModuleLoader = () => {
  const { moduleName } = useRouteParams(coreModuleRoute);

  return (
    <ErrorBoundary>
      <Suspense fallback="Loading...">
        {moduleName === CoreModule.blog && <BlogLazy />}
        {moduleName === CoreModule.contacts && <ContactsModule />}
      </Suspense>
    </ErrorBoundary>
  );
};
