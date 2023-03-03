type FilterParams = {
  [key: string]: number | string | boolean;
};

export const getBasicFilterQuery = (
  filterLimit: number,
  sortColumn: string,
  sortOrder: string,
  skipLimit: number,
  downloadCsv: boolean
) => {
  const basicFilters: FilterParams = {
    "filter[limit]": filterLimit,
    "filter[order]": `${sortColumn} ${sortOrder}`,
    "filter[skip]": skipLimit,
  };

  const basicFilterQuery = Object.keys(basicFilters)
    .filter(
      (key) =>
        `${basicFilters[key].toString().trim()}` != "" && !(key == "filter[limit]" && downloadCsv)
    )
    .map((key) => `${key}=${basicFilters[key]}`)
    .join("&");

  return basicFilterQuery;
};

export const getWhereFilterQuery = (whereField: string, whereFieldValue: string) => {
  const whereFilterQuery: string = whereFieldValue
    ? `&filter[where][${whereField}]=${whereFieldValue}`
    : "";

  return whereFilterQuery;
};

export const getDownloadCsvQuery = (downloadCsv: boolean) => {
  const downloadCsvQuery: string = downloadCsv ? "&downloadCsv=true" : "";

  return downloadCsvQuery;
};

export const defaultFilterLimit = 10;

export const totalCountHeaderName = "x-total-count";
