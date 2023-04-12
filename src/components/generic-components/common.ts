import {BreadcrumbLink} from "../../utils/types";
import {dataListBreadcrumbLinks} from "../../utils/constants";
import {CoreModule, getCoreModuleRoute} from "@lib/router";

export interface DtoSchema {
  "required"?: string[];
  "properties": {
    [x: string]: {
      "type": string;
      "format"?: string;
      "nullable"?: boolean;
      "description"?: string;
    }
  }
}

export const camelCaseToTitleCase = (str: string) => {
  const titleCase = str.replace(/[A-Z]/g, (match) => ` ${match}`);
  return titleCase.charAt(0).toUpperCase() + titleCase.slice(1);
};

export interface BasicTypeForGeneric {
  "id"?: number;
  "createdAt"?: string | null;
  "updatedAt"?: string | null;
}

export const getBreadcrumbLinks = (moduleName: string, modulePath: CoreModule): BreadcrumbLink[] => {
  return [
    ...dataListBreadcrumbLinks,
    {linkText: moduleName, toRoute: getCoreModuleRoute(modulePath)},
  ]
};
