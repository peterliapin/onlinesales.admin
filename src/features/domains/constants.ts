import { CoreModule, getCoreModuleRoute } from "lib/router";
import { dataListBreadcrumbLinks } from "utils/constants";
import { BreadcrumbLink } from "utils/types";

export const defaultFilterOrderColumn = "name";

export const defaultFilterOrderDirection = "asc";

export const searchLabel = "Search domains";

export const modelName = "domain";

export const domainListPageBreadcrumb = "Domains";

export const domainFormBreadcrumbLinks: BreadcrumbLink[] = [
  ...dataListBreadcrumbLinks,
  { linkText: domainListPageBreadcrumb, toRoute: getCoreModuleRoute(CoreModule.domains) },
];
