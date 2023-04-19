import { useEffect, useState } from "react";
import {
  defaultFilterLimit,
  getBasicExportFilterQuery,
  getBasicFilterQuery,
  getWhereFilterQuery,
  totalCountHeaderName,
} from "lib/query";
import { GridColDef, GridColumnVisibilityModel, GridSortDirection } from "@mui/x-data-grid";
import { GridInitialStateCommunity } from "@mui/x-data-grid/models/gridStateCommunity";
import { DataListContainer } from "./index.styled";
import { DataTableGrid } from "@components/data-table";

type dataListProps = {
  columns: GridColDef<any>[];
  gridSettingsStorageKey: string;
  searchText: string;
  defaultFilterOrderColumn: string;
  defaultFilterOrderDirection: string;
  initialGridState: GridInitialStateCommunity | undefined;
  getModelDataList: (mainQuery: string, exportQuery?: string) => any;
};

type dataListSettings = {
  searchTerm: string;
  filterLimit: number;
  skipLimit: number;
  sortColumn: string;
  sortOrder: string;
  whereField: string;
  whereFieldValue: string;
  pageNumber: number;
  columnVisibilityModel: GridColumnVisibilityModel;
};

export const DataList = ({
  columns,
  gridSettingsStorageKey,
  searchText,
  defaultFilterOrderColumn,
  defaultFilterOrderDirection,
  initialGridState,
  getModelDataList,
}: dataListProps) => {
  const [modelData, setModelData] = useState<any[] | undefined>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLimit, setFilterLimit] = useState(defaultFilterLimit);
  const [sortColumn, setSortColumn] = useState(defaultFilterOrderColumn);
  const [sortOrder, setSortOrder] = useState(defaultFilterOrderDirection);
  const [whereField, setWhereField] = useState("");
  const [whereFieldValue, setWhereFieldValue] = useState("");
  const [skipLimit, setSkipLimit] = useState(0);
  const [totalRowCount, setTotalRowCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [columnVisibilityModel, setColumnVisibilityModel] = useState(
    initialGridState?.columns?.columnVisibilityModel
  );
  const [gridSettingsLoaded, setGridSettingsLoaded] = useState(false);
  const [gridState, setGridState] = useState(initialGridState);

  const whereFilterQuery = getWhereFilterQuery(whereField, whereFieldValue);
  const basicFilterQuery = getBasicFilterQuery(filterLimit, sortColumn, sortOrder, skipLimit);
  const basicExportFilterQuery = getBasicExportFilterQuery(sortColumn, sortOrder);

  useEffect(() => {
    setSearchTerm(searchText);
  }, [searchText]);

  useEffect(() => {
    if (gridSettingsLoaded) {
      saveGridStateInLocalStorage();
      getDataListAsync();
    }
  }, [
    searchTerm,
    filterLimit,
    skipLimit,
    sortColumn,
    sortOrder,
    whereFieldValue,
    columnVisibilityModel,
    gridSettingsLoaded,
  ]);

  useEffect(() => {
    const settingsState = localStorage.getItem(gridSettingsStorageKey);
    if (settingsState) {
      const settings = JSON.parse(settingsState) as dataListSettings;
      const {
        searchTerm: searchTerm,
        filterLimit: filterLimit,
        skipLimit: skipLimit,
        sortColumn: sortColumn,
        sortOrder: sortOrder,
        whereField: whereField,
        whereFieldValue: whereFieldValue,
        pageNumber: pageNumber,
        columnVisibilityModel: columnVisibilityModel,
      } = settings;
      setSearchTerm(searchTerm);
      setFilterLimit(filterLimit);
      setSkipLimit(skipLimit);
      setSortColumn(sortColumn);
      setSortOrder(sortOrder);
      setWhereField(whereField);
      setWhereFieldValue(whereFieldValue);
      setPageNumber(pageNumber);
      setColumnVisibilityModel(columnVisibilityModel);
      updateGridSettings(settings);
    }
    setGridSettingsLoaded(true);
  }, []);

  useEffect(() => {
    if (totalRowCount === -1) {
      throw new Error("Server error: x-total-count header is not provided.");
    }
  }, [totalRowCount]);

  useEffect(() => {
    if (!modelData) {
      throw new Error("Server error: Data cannot be retrieved from server.");
    }
  }, [modelData]);

  const saveGridStateInLocalStorage = () => {
    localStorage.setItem(
      gridSettingsStorageKey,
      JSON.stringify({
        searchTerm,
        filterLimit,
        skipLimit,
        sortColumn,
        sortOrder,
        whereField,
        whereFieldValue,
        pageNumber,
        columnVisibilityModel,
      } as dataListSettings)
    );
  };

  const getDataListAsync = () => {
    (async () => {
      const result = await getModelDataList(
        `${searchTerm}&${basicFilterQuery}${whereFilterQuery}`,
        `${searchTerm}&${basicExportFilterQuery}${whereFilterQuery}`
      );
      if (result) {
        const { data, headers } = result;
        setTotalResultsCount(headers.get(totalCountHeaderName));
        setModelData(data);
      } else {
        setModelData(undefined);
      }
    })();
  };

  const updateGridSettings = (gridSettings: dataListSettings) => {
    initialGridState!.filter = {
      filterModel: {
        items: [
          {
            columnField: gridSettings.whereField,
            operatorValue: "contains",
            value: gridSettings.whereFieldValue,
          },
        ],
      },
    };
    initialGridState!.sorting = {
      sortModel: [
        { field: gridSettings.sortColumn, sort: gridSettings.sortOrder as GridSortDirection },
      ],
    };
    initialGridState!.pagination = {
      page: gridSettings.pageNumber,
      pageSize: gridSettings.filterLimit,
    };
    initialGridState!.columns = { columnVisibilityModel: gridSettings.columnVisibilityModel };
    setGridState(initialGridState);
  };

  const setTotalResultsCount = (headerCount: string | null) => {
    if (headerCount) setTotalRowCount(parseInt(headerCount, 10));
    else setTotalRowCount(-1);
  };

  return gridSettingsLoaded ? (
    <DataListContainer>
      <DataTableGrid
        columns={columns}
        data={modelData}
        autoHeight={false}
        pageSize={filterLimit}
        totalRowCount={totalRowCount}
        rowsPerPageOptions={[10, 30, 50, 100]}
        pageNumber={pageNumber}
        dataViewMode="server"
        setSortColumn={setSortColumn}
        setSortOrder={setSortOrder}
        setPageSize={setFilterLimit}
        setSkipLimit={setSkipLimit}
        setFilterField={setWhereField}
        setFilterFieldValue={setWhereFieldValue}
        setPageNumber={setPageNumber}
        handleColumnVisibilityModel={setColumnVisibilityModel}
        initialState={gridState}
        disableColumnFilter={false}
        disablePagination={false}
        showActionsColumn={true}
        disableEditRoute={false}
        disableViewRoute={false}
      />
    </DataListContainer>
  ) : null;
};
