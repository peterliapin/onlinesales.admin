import { Suspense } from "react";
import { useRouteParams } from "typesafe-routes";
import { CoreModule, coreModuleRoute } from "lib/router";
import { ErrorBoundary } from "components/error-boundary";
import { ContactsModule } from "features/contacts/contacts-module";
import { AccountsModule } from "features/accounts/accounts-module";
import { OrdersModule } from "features/orders/orders-module";
import { DomainsModule } from "features/domains/domains-module";

export const ModuleLoader = () => {
  const { moduleName } = useRouteParams(coreModuleRoute);

  return (
    <ErrorBoundary>
      <Suspense fallback="Loading...">
        {moduleName === CoreModule.contacts && <ContactsModule />}
        {moduleName === CoreModule.accounts && <AccountsModule />}
        {moduleName === CoreModule.orders && <OrdersModule />}
        {moduleName === CoreModule.domains && <DomainsModule />}
      </Suspense>
    </ErrorBoundary>
  );
};
