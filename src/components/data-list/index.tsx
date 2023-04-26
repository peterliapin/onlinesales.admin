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
import useLocalStorage from "use-local-storage";
import { dataListSettings, GridDataFilterState } from "utils/types";
import { useNotificationsService } from "@hooks";

type dataListProps = {
  columns: GridColDef<any>[];
  gridSettingsStorageKey: string;
  searchText: string;
  defaultFilterOrderColumn: string;
  defaultFilterOrderDirection: string;
  initialGridState: GridInitialStateCommunity | undefined;
  getModelDataList: (mainQuery: string, exportQuery?: string) => any;
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
  const { notificationsService } = useNotificationsService();
  const [modelData, setModelData] = useState<any[] | undefined>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalRowCount, setTotalRowCount] = useState(0);

  const [filterState, setFilterState] = useState<GridDataFilterState>({
    filterLimit: defaultFilterLimit,
    sortColumn: defaultFilterOrderColumn,
    sortOrder: defaultFilterOrderDirection,
    whereField: "",
    whereFieldValue: "",
    whereOperator: "",
    skipLimit: 0,
    pageNumber: 0,
    columnVisibilityModel: initialGridState?.columns?.columnVisibilityModel,
  });

  const [gridSettingsLoaded, setGridSettingsLoaded] = useState(false);
  const [gridState, setGridState] = useState(initialGridState);

  const whereFilterQuery = getWhereFilterQuery(
    filterState.whereField!,
    filterState.whereFieldValue!,
    filterState.whereOperator!
  );
  const basicFilterQuery = getBasicFilterQuery(
    filterState.filterLimit!,
    filterState.sortColumn!,
    filterState.sortOrder!,
    filterState.skipLimit!
  );
  const basicExportFilterQuery = getBasicExportFilterQuery(
    filterState.sortColumn!,
    filterState.sortOrder!
  );

  const [gridSettings, setGridSettings] = useLocalStorage<dataListSettings | undefined>(
    gridSettingsStorageKey,
    undefined
  );

  useEffect(() => {
    setSearchTerm(searchText);
  }, [searchText]);

  useEffect(() => {
    if (gridSettingsLoaded) {
      saveGridStateInLocalStorage();
      getDataListAsync();
    }
  }, [searchTerm, filterState, gridSettingsLoaded]);

  useEffect(() => {
    if (gridSettings) {
      const {
        searchTerm,
        filterLimit,
        skipLimit,
        sortColumn,
        sortOrder,
        whereField,
        whereFieldValue,
        whereOperator,
        pageNumber,
        columnVisibilityModel,
      } = gridSettings;
      setFilterState({
        filterLimit: filterLimit,
        skipLimit: skipLimit,
        sortColumn: sortColumn,
        sortOrder: sortOrder,
        whereField: whereField,
        whereFieldValue: whereFieldValue,
        whereOperator: whereOperator,
        pageNumber: pageNumber,
        columnVisibilityModel: columnVisibilityModel,
      });
      setSearchTerm(searchTerm);
      updateGridSettings(gridSettings);
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
      notificationsService.error("Server error: Data cannot be retrieved from server.");
    }
  }, [modelData]);

  const saveGridStateInLocalStorage = () => {
    setGridSettings({
      searchTerm,
      filterLimit: filterState.filterLimit!,
      skipLimit: filterState.skipLimit!,
      sortColumn: filterState.sortColumn!,
      sortOrder: filterState.sortOrder!,
      whereField: filterState.whereField!,
      whereFieldValue: filterState.whereFieldValue!,
      whereOperator: filterState.whereOperator!,
      pageNumber: filterState.pageNumber!,
      columnVisibilityModel: initialGridState?.columns?.columnVisibilityModel,
    });
  };

  const updateFilterState = (state: GridDataFilterState) => {
    const updatedFilterState = {
      ...filterState,
      ...state,
    };
    setFilterState(updatedFilterState);
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
        data={modelData || []}
        autoHeight={false}
        pageSize={filterState.filterLimit}
        totalRowCount={totalRowCount}
        rowsPerPageOptions={[10, 30, 50, 100]}
        pageNumber={filterState.pageNumber}
        dataViewMode="server"
        setFilterState={updateFilterState}
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
