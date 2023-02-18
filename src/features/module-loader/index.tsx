import { Suspense } from "react";
import { useRouteParams } from "typesafe-routes";
import {
  addModuleRoute,
  CoreModule,
  coreModuleRoute,
  editModuleRoute,
  editRoute,
} from "lib/router";
import { ContactsLazy } from "features/contacts/lazy";
import { ErrorBoundary } from "components/error-boundary";
import { ContactEdit } from "features/contacts/edit";
import { ContactAdd } from "features/contacts/add";

export const ModuleLoader = () => {
  const { moduleName } = useRouteParams(coreModuleRoute);
  const { editModuleName } = useRouteParams(editModuleRoute);
  const { addModuleName } = useRouteParams(addModuleRoute);

  console.log("moduleName: " + moduleName);
  console.log("editModuleName: " + editModuleName);
  console.log("coreModuleRoute.template: " + coreModuleRoute.template);
  console.log("editModuleRoute.template: " + editModuleRoute.template + editRoute.template);
  console.log("addModuleRoute.template: " + addModuleRoute.template);

  return (
    <ErrorBoundary>
      <Suspense fallback="Loading...">
        {moduleName === CoreModule.contacts && <ContactsLazy />}
      </Suspense>
      <Suspense fallback="Loading...">
        {editModuleName === CoreModule.contacts && <ContactEdit />}
      </Suspense>
      <Suspense fallback="Loading...">
        {addModuleName === CoreModule.contacts && <ContactAdd />}
      </Suspense>
    </ErrorBoundary>
  );
};
