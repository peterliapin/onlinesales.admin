import { CoreModule, getCoreModuleRoute, rootRoute } from "lib/router";

export const defaultFilterOrderColumn = "firstName";

export const defaultFilterOrderDirection = "desc";

export const contactListBreadcrumbLinks = [{ linkText: "Dashboard", toRoute: rootRoute }];

export const contactFormBreadcrumbLinks = [
  { linkText: "Dashboard", toRoute: rootRoute },
  { linkText: "Contacts", toRoute: getCoreModuleRoute(CoreModule.contacts) },
];
