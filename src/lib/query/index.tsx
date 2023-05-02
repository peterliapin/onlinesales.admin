import { Dictionary } from "lodash";

type FilterParams = {
  [key: string]: number | string | boolean;
};

export const getBasicFilterQuery = (
  filterLimit: number,
  sortColumn: string,
  sortOrder: string,
  skipLimit: number
) => {
  const basicFilters: FilterParams = {
    "filter[limit]": filterLimit,
    "filter[order]": `${sortColumn} ${sortOrder}`,
    "filter[skip]": skipLimit,
  };

  const basicFilterQuery = Object.keys(basicFilters)
    .filter((key) => `${basicFilters[key].toString().trim()}` != "")
    .map((key) => `${key}=${basicFilters[key]}`)
    .join("&");

  return basicFilterQuery;
};

export const getBasicExportFilterQuery = (sortColumn: string, sortOrder: string) => {
  return `filter[order]=${sortColumn} ${sortOrder}`;
};

export const defaultFilterLimit = 10;

export const totalCountHeaderName = "x-total-count";

export const getWhereFilterQuery = (
  whereField: string,
  whereFieldValue: string,
  operatorValue: string
) => {
  if (operatorValue === "isEmpty" || operatorValue === "isNotEmpty" || whereFieldValue) {
    const whereObj = getWhereOperatorAndValue(operatorValue, whereFieldValue);
    return `&filter[where][${whereField}][${whereObj.operator}]=${whereObj.value}`;
  } else return "";
};

const getWhereOperatorAndValue = (
  operatorValue: string,
  whereFieldValue: any
): { operator: string; value: string } => {
  switch (operatorValue) {
  case "equals":
  case "is":
  case "=":
    return { operator: "eq", value: whereFieldValue };
  case "contains":
    return { operator: "contains", value: whereFieldValue };
  case "startsWith":
    return { operator: "contains", value: `${whereFieldValue}*` };
  case "endsWith":
    return { operator: "contains", value: `*${whereFieldValue}` };
  case "isEmpty":
    return { operator: "eq", value: "null" };
  case "isNotEmpty":
    return { operator: "neq", value: "null" };
  case "isAnyOf":
    return { operator: "eq", value: `${whereFieldValue.join("|")}` };
  case "not":
  case "!=":
    return { operator: "neq", value: whereFieldValue };
  case "after":
  case ">":
    return { operator: "gt", value: whereFieldValue };
  case "onOrAfter":
  case ">=":
    return { operator: "gte", value: whereFieldValue };
  case "before":
  case "<":
    return { operator: "lt", value: whereFieldValue };
  case "onOrBefore":
  case "<=":
    return { operator: "lte", value: whereFieldValue };
  default:
    return { operator: "eq", value: whereFieldValue };
  }
};
