import { Suspense } from "react";
import { useRouteParams } from "typesafe-routes";
import { CoreModule, coreModuleRoute, subModuleRoute } from "lib/router";
import { ContactsLazy } from "features/contacts/lazy";
import { ErrorBoundary } from "components/error-boundary";
import { ContactEdit } from "features/contacts/edit";
import { ContactAdd } from "features/contacts/add";

export const ModuleLoader = () => {
  const { moduleName } = useRouteParams(coreModuleRoute);
  const { subModuleName } = useRouteParams(subModuleRoute);

  console.log("moduleName: " + moduleName);
  console.log("subModuleName: " + subModuleName);

  return (
    <ErrorBoundary>
      <Suspense fallback="Loading...">
        {(moduleName === CoreModule.contacts && subModuleName === "edit" && <ContactEdit />) ||
          (moduleName === CoreModule.contacts && subModuleName === "add" && <ContactAdd />) ||
          (moduleName === CoreModule.contacts && <ContactsLazy />)}
      </Suspense>
    </ErrorBoundary>
  );
};
