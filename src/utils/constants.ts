import { rootRoute } from "lib/router";
import { BreadcrumbLink } from "types";

export const dataListBreadcrumbLinks: BreadcrumbLink[] = [
  { linkText: "Dashboard", toRoute: rootRoute },
];

export const countryListStorageKey = "countryList";

export const continentListStorageKey = "continentList";
