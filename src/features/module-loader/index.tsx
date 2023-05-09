import React, { Suspense } from "react";
import { useRouteParams } from "typesafe-routes";
import { CoreModule, coreModuleRoute } from "lib/router";
import { BlogModule } from "features/blog";
import { ErrorBoundary } from "components/error-boundary";
import { ContactsModule } from "features/contacts/contacts-module";
import { AccountsModule } from "features/accounts/accounts-module";
import { OrdersModule } from "features/orders/orders-module";
import { DomainsModule } from "features/domains/domains-module";
import { LinksModule } from "@features/links";
import { ModuleWrapperProvider } from "@providers/module-wrapper-provider";
import { CommentsModule } from "@features/comments";
import { UnsubscribesModule } from "@features/unsubscribes";
import { UserModule } from "@features/users";
import { AboutModule } from "@features/about";

export const ModuleLoader = () => {
  const { moduleName } = useRouteParams(coreModuleRoute);

  return (
    <ModuleWrapperProvider>
      <ErrorBoundary>
        <Suspense fallback="Loading...">
          {moduleName === CoreModule.blog && <BlogModule />}
          {moduleName === CoreModule.contacts && <ContactsModule />}
          {moduleName === CoreModule.unsubscribes && <UnsubscribesModule />}
          {moduleName === CoreModule.links && <LinksModule />}
          {moduleName === CoreModule.comments && <CommentsModule />}
          {moduleName === CoreModule.accounts && <AccountsModule />}
          {moduleName === CoreModule.orders && <OrdersModule />}
          {moduleName === CoreModule.domains && <DomainsModule />}
          {moduleName === CoreModule.users && <UserModule />}
          {moduleName === CoreModule.about && <AboutModule />}
        </Suspense>
      </ErrorBoundary>
    </ModuleWrapperProvider>
  );
};
