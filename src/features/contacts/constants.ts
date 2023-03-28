import { CoreModule, getCoreModuleRoute, rootRoute } from "lib/router";
import { BreadcrumbLink } from "utils/types";

export const defaultFilterOrderColumn = "firstName";

export const defaultFilterOrderDirection = "asc";

export const searchLabel = "Search contacts";

export const modelName = "contact";

export const contactListBreadcrumbLinks: BreadcrumbLink[] = [
  { linkText: "Dashboard", toRoute: rootRoute },
];

export const contactFormBreadcrumbLinks: BreadcrumbLink[] = [
  { linkText: "Dashboard", toRoute: rootRoute },
  { linkText: "Contacts", toRoute: getCoreModuleRoute(CoreModule.contacts) },
];

export const contactListCurrentBreadcrumb = "Contacts";
