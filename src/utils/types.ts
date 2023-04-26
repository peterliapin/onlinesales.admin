import { GridColumnVisibilityModel } from "@mui/x-data-grid";

export interface BreadcrumbLink {
  linkText: string;
  toRoute: string;
}

export type dataListSettings = {
  searchTerm: string;
  filterLimit: number;
  skipLimit: number;
  sortColumn: string;
  sortOrder: string;
  whereField: string;
  whereFieldValue: string;
  whereOperator?: string;
  pageNumber: number;
  columnVisibilityModel: GridColumnVisibilityModel | undefined;
};

export interface GridDataFilterState {
  filterLimit?: number;
  sortColumn?: string;
  sortOrder?: string;
  whereField?: string;
  whereFieldValue?: string;
  whereOperator?: string;
  skipLimit?: number;
  pageNumber?: number;
  columnVisibilityModel?: GridColumnVisibilityModel | undefined;
}
