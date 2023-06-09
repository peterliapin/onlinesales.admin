import { CoreModule, getCoreModuleRoute, rootRoute } from "lib/router";
import { BreadcrumbLink } from "types";

export const defaultFilterOrderColumn = "name";

export const defaultFilterOrderDirection = "asc";

export const searchLabel = "Search accounts";

export const modelName = "account";

export const accountListBreadcrumbLinks: BreadcrumbLink[] = [
  { linkText: "Dashboard", toRoute: rootRoute },
];

export const accountFormBreadcrumbLinks: BreadcrumbLink[] = [
  { linkText: "Dashboard", toRoute: rootRoute },
  { linkText: "Accounts", toRoute: getCoreModuleRoute(CoreModule.accounts) },
];

export const accountListCurrentBreadcrumb = "Accounts";

export const accountGridSettingsStorageKey = "accountDataListSettings";

export const accountEditHeader = "Edit Account";

export const accountAddHeader = "Add Account";
