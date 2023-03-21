import { CoreModule, getCoreModuleRoute, rootRoute } from "lib/router";
import { ContactImportDto } from "lib/network/swagger-client";
import { getMappings } from "utils/importKeyMappings";

export const defaultFilterOrderColumn = "firstName";

export const defaultFilterOrderDirection = "desc";

const importContact: ContactImportDto = {
  lastName: null,
  firstName: null,
  address1: null,
  address2: null,
  state: null,
  zip: null,
  phone: null,
  timezone: null,
  language: null,
  email: "",
  id: null,
  createdAt: null,
  updatedAt: null,
  createdByIp: null,
  createdByUserAgent: null,
  updatedByIp: null,
  updatedByUserAgent: null,
  source: null,
  accountId: null,
  accountName: null,
};

export const importContactFields = Object.keys(importContact).map((key) => {
  const mappings = getMappings(key);
  if (mappings) {
    return mappings;
  }
  return {
    key,
    label: key,
    alternateMatches: [],
    fieldType: {
      type: "input",
    },
    example: "",
    validations: [],
  };
});

export const contactListBreadcrumbLinks = [{ linkText: "Dashboard", toRoute: rootRoute }];

export const contactFormBreadcrumbLinks = [
  { linkText: "Dashboard", toRoute: rootRoute },
  { linkText: "Contacts", toRoute: getCoreModuleRoute(CoreModule.contacts) },
];
