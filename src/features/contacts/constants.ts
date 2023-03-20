import { rootRoute } from "lib/router";
import { ContactImportDto } from "lib/network/swagger-client";
import { getMappings } from "utils/importKeyMappings";

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

export const ImportContactFields = Object.keys(importContact).map((key) => {
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

export const breadcrumbLinks = [{ linkText: "Dashboard", toRoute: rootRoute }];
