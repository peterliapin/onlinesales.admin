import { useMemo } from "react";
import {
  DataGrid,
  getGridStringOperators,
  GridColDef,
  GridColumnVisibilityModel,
  GridFilterModel,
  GridSortModel,
} from "@mui/x-data-grid";
import { ActionButtonContainer, DataTableContainer } from "./index.styled";
import { GridInitialStateCommunity } from "@mui/x-data-grid/models/gridStateCommunity";
import EditIcon from "@mui/icons-material/Edit";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { getEditFormRoute, getViewFormRoute } from "lib/router";
import { IconButton } from "@mui/material";

type DataTableProps = {
  columns: GridColDef[];
  data?: any[];
  autoHeight: boolean;
  pageSize?: number | undefined;
  totalRowCount: number | undefined;
  rowsPerPageOptions: number[] | undefined;
  pageNumber: number | undefined;
  dataViewMode: "client" | "server";
  setSortColumn: ((sortColumn: string) => void) | undefined;
  setSortOrder: ((sortOrder: string) => void) | undefined;
  setPageSize: ((pageSize: number) => void) | undefined;
  setSkipLimit: ((skipLimit: number) => void) | undefined;
  setFilterField: ((filterField: string) => void) | undefined;
  setFilterFieldValue: ((fieldValue: string) => void) | undefined;
  setPageNumber: ((pageNumber: number) => void) | undefined;
  handleColumnVisibilityModel: ((model: GridColumnVisibilityModel) => void) | undefined;
  initialState?: GridInitialStateCommunity | undefined;
  disablePagination: boolean;
  disableColumnFilter: boolean;
  showActionsColumn: boolean;
  disableEditRoute: boolean;
  disableViewRoute: boolean;
};

export const DataTableGrid = ({
  columns,
  data,
  autoHeight,
  pageSize,
  totalRowCount,
  rowsPerPageOptions,
  pageNumber,
  dataViewMode,
  setSortColumn,
  setSortOrder,
  setPageSize,
  setSkipLimit,
  setFilterField,
  setFilterFieldValue,
  setPageNumber,
  handleColumnVisibilityModel,
  initialState,
  disableColumnFilter,
  disablePagination,
  showActionsColumn,
  disableEditRoute,
  disableViewRoute,
}: DataTableProps) => {
  const empty = [] as const;

  const actionsColumn: GridColDef | any = {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    align: "right",
    headerAlign: "right",
    filterable: false,
    sortable: false,
    disableColumnMenu: true,
    renderCell: ({ row }: any) => {
      return (
        <ActionButtonContainer>
          <IconButton disabled={disableEditRoute} onClick={() => handleEditClick(row)}>
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton disabled={disableViewRoute} onClick={() => handleForwardClick(row)}>
            <ArrowForwardIcon fontSize="small" />
          </IconButton>
        </ActionButtonContainer>
      );
    },
  };

  const navigate = useNavigate();

  const handleEditClick = (row: any) => {
    navigate(getEditFormRoute(row.id!), { state: row });
  };

  const handleForwardClick = (row: any) => {
    navigate(getViewFormRoute(row.id!), { state: row });
  };

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
    setPageNumber && setPageNumber(page);
    setSkipLimit && setSkipLimit(page * pageSize!);
  };

  const handleSortChange = (sortModel: GridSortModel) => {
    if (dataViewMode === "client") {
      return;
    }
    if (sortModel.length > 0) {
      setSortColumn && setSortColumn(sortModel[sortModel.length - 1].field);
      setSortOrder && setSortOrder(sortModel[sortModel.length - 1].sort || "asc");
    } else setSortOrder && setSortOrder("asc");
  };

  const handleFilterChange = (filterModel: GridFilterModel) => {
    if (filterModel.items.length === 0) return;

    const column = filterModel.items[0].columnField;
    const columnValue = filterModel.items[0].value;

    if (column) {
      setFilterFieldValue && setFilterFieldValue(columnValue ? columnValue : "");
      setFilterField && setFilterField(column);
    }
  };

  const gridFinalizedColumns = showActionsColumn
    ? filterAdjustedColumns.concat(actionsColumn)
    : filterAdjustedColumns;

  return (
    <DataTableContainer>
      <DataGrid
        columns={gridFinalizedColumns}
        rows={data ?? empty}
        loading={!data}
        checkboxSelection={false}
        autoHeight={autoHeight}
        rowCount={totalRowCount}
        rowsPerPageOptions={rowsPerPageOptions}
        pagination
        page={pageNumber}
        pageSize={pageSize}
        hideFooter={disablePagination}
        disableColumnFilter={disableColumnFilter}
        paginationMode={dataViewMode}
        onPageChange={(newPage) => handlePageChange(newPage)}
        onPageSizeChange={(newPageSize) => setPageSize && setPageSize(newPageSize)}
        sortingMode={dataViewMode}
        onSortModelChange={(newSortModel) => handleSortChange(newSortModel)}
        filterMode={dataViewMode}
        onFilterModelChange={(newFilterModel) => handleFilterChange(newFilterModel)}
        onColumnVisibilityModelChange={(newModel) =>
          handleColumnVisibilityModel && handleColumnVisibilityModel(newModel)
        }
        initialState={initialState}
      />
    </DataTableContainer>
  );
};
