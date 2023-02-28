import { useMemo, useState } from "react";
import {
  DataGrid,
  getGridStringOperators,
  GridColDef,
  GridFilterModel,
  GridSortModel,
} from "@mui/x-data-grid";
import { DataTableContainer } from "./index.styled";

type DataTableProps = {
  columns: GridColDef[];
  data?: any[];
  pageSize?: number;
  totalRowCount: number;
  rowsPerPageOptions: number[];
  setSortColumn: (sortColumn: string) => void;
  setSortOrder: (sortOrder: string) => void;
  setPageSize: (pageSize: number) => void;
  setSkipLimit: (skipLimit: number) => void;
  setFilterField: (filterField: string) => void;
  setFilterFieldValue: (fieldValue: string) => void;
};

export const DataTableGrid = ({
  columns,
  data,
  pageSize,
  totalRowCount,
  rowsPerPageOptions,
  setSortColumn,
  setSortOrder,
  setPageSize,
  setSkipLimit,
  setFilterField,
  setFilterFieldValue,
}: DataTableProps) => {
  const empty = [] as const;

  const [page, setPage] = useState(0);

  const filterAdjustedColumns = useMemo(
    () =>
      columns.map((col) => {
        return {
          ...col,
          filterOperators: getGridStringOperators().filter(
            (operator) => operator.value === "contains"
          ),
        };
      }),
    [columns]
  );

  const handlePageChange = (page: number) => {
    setPage(page);
    setSkipLimit(page * pageSize!);
  };

  const handleSortChange = (sortModel: GridSortModel) => {
    if (sortModel.length > 0) {
      setSortColumn(sortModel[sortModel.length - 1].field);
      setSortOrder(sortModel[sortModel.length - 1].sort || "asc");
    } else setSortOrder("asc");
  };

  const handleFilterChange = (filterModel: GridFilterModel) => {
    if (filterModel.items.length === 0) return;

    const column = filterModel.items[0].columnField;
    const columnValue = filterModel.items[0].value;

    if (column) {
      setFilterFieldValue(columnValue ? columnValue : "");
      setFilterField(column);
    }
  };

  return (
    <DataTableContainer>
      <DataGrid
        columns={filterAdjustedColumns}
        rows={data ?? empty}
        loading={!data}
        checkboxSelection
        rowCount={totalRowCount}
        rowsPerPageOptions={rowsPerPageOptions}
        pagination
        page={page}
        pageSize={pageSize}
        paginationMode="server"
        onPageChange={(newPage) => handlePageChange(newPage)}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        sortingMode="server"
        onSortModelChange={(newSortModel) => handleSortChange(newSortModel)}
        filterMode="server"
        onFilterModelChange={(newFilterModel) => handleFilterChange(newFilterModel)}
        initialState={{ columns: { columnVisibilityModel: { firstName: false, email: false } } }}
      />
    </DataTableContainer>
  );
};
