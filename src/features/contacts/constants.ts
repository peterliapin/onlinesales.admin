import { CoreModule, getCoreModuleRoute, rootRoute } from "lib/router";
import { dataListBreadcrumbLinks } from "utils/constants";
import { BreadcrumbLink } from "utils/types";

export const defaultFilterOrderColumn = "firstName";

export const defaultFilterOrderDirection = "asc";

export const searchLabel = "Search contacts";

export const modelName = "contact";

export const contactFormBreadcrumbLinks: BreadcrumbLink[] = [
  ...dataListBreadcrumbLinks,
  { linkText: "Contacts", toRoute: getCoreModuleRoute(CoreModule.contacts) },
];

export const contactListCurrentBreadcrumb = "Contacts";
