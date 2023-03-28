import { ContactImportDto } from "lib/network/swagger-client";
import { CoreModule, getCoreModuleRoute, rootRoute } from "lib/router";

export const defaultFilterOrderColumn = "firstName";

export const defaultFilterOrderDirection = "desc";

export const contactListBreadcrumbLinks = [{ linkText: "Dashboard", toRoute: rootRoute }];

export const contactFormBreadcrumbLinks = [
  { linkText: "Dashboard", toRoute: rootRoute },
  { linkText: "Contacts", toRoute: getCoreModuleRoute(CoreModule.contacts) },
];

export const contactImportBaseObject: ContactImportDto = {
  lastName: null,
  firstName: null,
  continentCode: null,
  countryCode: null,
  cityName: null,
  address1: null,
  address2: null,
  state: null,
  zip: null,
  phone: null,
  timezone: null,
  language: null,
  unsubscribeId: null,
  email: "",
  id: 0,
  createdAt: "",
  createdByIp: "",
  createdByUserAgent: "",
  updatedByIp: "",
  updatedByUserAgent: "",
  source: "",
  updatedAt: null,
  accountId: 0,
  domainId: 0,
  accountName: "",
};
