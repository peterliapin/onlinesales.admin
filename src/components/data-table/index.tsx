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
  pageSize?: number;
  totalRowCount: number;
  rowsPerPageOptions: number[];
  pageNumber: number;
  setSortColumn: (sortColumn: string) => void;
  setSortOrder: (sortOrder: string) => void;
  setPageSize: (pageSize: number) => void;
  setSkipLimit: (skipLimit: number) => void;
  setFilterField: (filterField: string) => void;
  setFilterFieldValue: (fieldValue: string) => void;
  setPageNumber: (pageNumber: number) => void;
  handleColumnVisibilityModel: (model: GridColumnVisibilityModel) => void;
  initialState?: GridInitialStateCommunity | undefined;
  showActionsColumn: boolean;
  disableEditRoute: boolean;
  disableViewRoute: boolean;
};

export const DataTableGrid = ({
  columns,
  data,
  pageSize,
  totalRowCount,
  rowsPerPageOptions,
  pageNumber,
  setSortColumn,
  setSortOrder,
  setPageSize,
  setSkipLimit,
  setFilterField,
  setFilterFieldValue,
  setPageNumber,
  handleColumnVisibilityModel,
  initialState,
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
    setPageNumber(page);
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
        autoHeight={false}
        rowCount={totalRowCount}
        rowsPerPageOptions={rowsPerPageOptions}
        pagination
        page={pageNumber}
        pageSize={pageSize}
        paginationMode="server"
        onPageChange={(newPage) => handlePageChange(newPage)}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        sortingMode="server"
        onSortModelChange={(newSortModel) => handleSortChange(newSortModel)}
        filterMode="server"
        onFilterModelChange={(newFilterModel) => handleFilterChange(newFilterModel)}
        onColumnVisibilityModelChange={(newModel) => handleColumnVisibilityModel(newModel)}
        initialState={initialState}
      />
    </DataTableContainer>
  );
};
