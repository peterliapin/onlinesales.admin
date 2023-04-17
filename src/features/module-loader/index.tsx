import React, {Suspense} from "react";
import {useRouteParams} from "typesafe-routes";
import {CoreModule, coreModuleRoute} from "lib/router";
import {BlogModule} from "features/blog";
import {ErrorBoundary} from "components/error-boundary";
import {ContactsModule} from "features/contacts/contacts-module";
import {AccountsModule} from "features/accounts/accounts-module";
import {OrdersModule} from "features/orders/orders-module";
import {DomainsModule} from "features/domains/domains-module";
import {LinksModule} from "@features/links";
import {ModuleWrapperProvider} from "@providers/module-wrapper-provider";

export const ModuleLoader = () => {
  const {moduleName} = useRouteParams(coreModuleRoute);

  return (
    <ModuleWrapperProvider>
      <ErrorBoundary>
        <Suspense fallback="Loading...">
          {moduleName === CoreModule.blog && <BlogModule/>}
          {moduleName === CoreModule.contacts && <ContactsModule/>}
          {moduleName === CoreModule.links && <LinksModule/>}
          {moduleName === CoreModule.accounts && <AccountsModule/>}
          {moduleName === CoreModule.orders && <OrdersModule/>}
          {moduleName === CoreModule.domains && <DomainsModule/>}
        </Suspense>
      </ErrorBoundary>
    </ModuleWrapperProvider>
  );
};
