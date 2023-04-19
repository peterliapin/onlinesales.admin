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
  pageNumber: number;
  columnVisibilityModel: GridColumnVisibilityModel | undefined;
};
