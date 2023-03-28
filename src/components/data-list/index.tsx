import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Download, Upload } from "@mui/icons-material";
import {
  ModuleContainer,
  ModuleHeaderContainer,
  ModuleHeaderSubtitleContainer,
} from "components/module";
import { CoreModule, getAddFormRoute, getCoreModuleRoute } from "lib/router";
import { GhostLink } from "components/ghost-link";
import {
  ActionsContainer,
  AddButtonContainer,
  ExtraActionsContainer,
  LeftContainer,
  RightContainer,
} from "./index.styled";
import {
  defaultFilterLimit,
  getBasicExportFilterQuery,
  getBasicFilterQuery,
  getWhereFilterQuery,
  totalCountHeaderName,
} from "lib/query";
import { BreadCrumbNavigation } from "components/breadcrumbs";
import { CsvImport } from "components/spreadsheet-import";
import { Result } from "@wavepoint/react-spreadsheet-import/types/types";
import { CsvExport } from "components/export";
import { SearchBar } from "components/search-bar";
import { DataTableGrid } from "components/data-table";
import { GridColDef, GridSortDirection } from "@mui/x-data-grid";
import { GridInitialStateCommunity } from "@mui/x-data-grid/models/gridStateCommunity";

type dataListProps = {
  modelName: string;
  columns: GridColDef<any>[];
  dataListBreadcrumbLinks: any[];
  currentBreadcrumb: string;
  searchBarLabel: string;
  defaultFilterOrderColumn: string;
  defaultFilterOrderDirection: string;
  initialGridState: GridInitialStateCommunity | undefined;
  endRoute: string;
  importFieldsObject: any;
  getModelDataList: (query: string) => any;
  getExportUrl: (query: string) => Promise<string>;
  dataImportCreate: (data: any) => void;
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
};

export const DataList = ({
  modelName,
  columns,
  dataListBreadcrumbLinks,
  currentBreadcrumb,
  searchBarLabel,
  defaultFilterOrderColumn,
  defaultFilterOrderDirection,
  initialGridState,
  endRoute,
  importFieldsObject,
  getModelDataList,
  getExportUrl,
  dataImportCreate,
}: dataListProps) => {
  const [modelData, setModelData] = useState<any[]>();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLimit, setFilterLimit] = useState(defaultFilterLimit);
  const [sortColumn, setSortColumn] = useState(defaultFilterOrderColumn);
  const [sortOrder, setSortOrder] = useState(defaultFilterOrderDirection);
  const [whereField, setWhereField] = useState("");
  const [whereFieldValue, setWhereFieldValue] = useState("");
  const [skipLimit, setSkipLimit] = useState(0);
  const [totalRowCount, setTotalRowCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [isImportWindowOpen, setIsImportWindowOpen] = useState(false);
  const [openExport, setOpenExport] = useState(false);
  const [gridSettingsUpdated, setGridSettingsUpdated] = useState(false);

  const whereFilterQuery = getWhereFilterQuery(whereField, whereFieldValue);

  const basicFilterQuery = getBasicFilterQuery(filterLimit, sortColumn, sortOrder, skipLimit);

  const basicExportFilterQuery = getBasicExportFilterQuery(sortColumn, sortOrder);

  useEffect(() => {
    (async () => {
      const { data, headers } = await getModelDataList(
        `${searchTerm}&${basicFilterQuery}${whereFilterQuery}`
      );
      setTotalResultsCount(headers.get(totalCountHeaderName));
      setModelData(data);
      localStorage.setItem(
        "dataListSettings",
        JSON.stringify({
          searchTerm,
          filterLimit,
          skipLimit,
          sortColumn,
          sortOrder,
          whereField,
          whereFieldValue,
          pageNumber,
        } as dataListSettings)
      );
      setInitialSorting();
      setGridSettingsUpdated(true);
    })();
  }, [searchTerm, filterLimit, skipLimit, sortColumn, sortOrder, whereFieldValue]);

  useEffect(() => {
    if (totalRowCount === -1) {
      throw new Error("Server error: x-total-count header is not provided.");
    }
  }, [totalRowCount]);

  useEffect(() => {
    const settingsState = localStorage.getItem("dataListSettings");
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
      } = settings;
      setSearchTerm(searchTerm);
      setFilterLimit(filterLimit);
      setSkipLimit(skipLimit);
      setSortColumn(sortColumn);
      setSortOrder(sortOrder);
      setWhereField(whereField);
      setWhereFieldValue(whereFieldValue);
      setPageNumber(pageNumber);
      updateGridSettings(settings);
    }
    return () => {
      const mainRoutePath = getCoreModuleRoute(endRoute as CoreModule);
      if (!window.location.pathname.startsWith(mainRoutePath)) {
        localStorage.removeItem("dataListSettings");
      }
    };
  }, []);

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
    setGridSettingsUpdated(true);
  };

  const setInitialSorting = () => {
    initialGridState!.sorting = {
      sortModel: [
        { field: defaultFilterOrderColumn, sort: defaultFilterOrderDirection as GridSortDirection },
      ],
    };
  };

  const setTotalResultsCount = (headerCount: string | null) => {
    if (headerCount) setTotalRowCount(parseInt(headerCount, 10));
    else setTotalRowCount(-1);
  };

  const getExportUrlAsync = async () => {
    const url = await getExportUrl(`${searchTerm}&${basicExportFilterQuery}${whereFilterQuery}`);
    return url;
  };

  const onExportClick = () => {
    setOpenExport(true);
  };

  const closeExport = () => {
    setOpenExport(false);
  };

  const onImportWindowClose = () => {
    setIsImportWindowOpen(false);
  };

  const handleFileUpload = async (data: Result<string>) => {
    const importDtoCollection: any[] = data.validData.map((data) => {
      const importDto: any = {
        ...data,
        email: data.email as string,
      };
      return importDto;
    });
    await dataImportCreate(importDtoCollection);
  };

  const openImportPage = () => {
    setIsImportWindowOpen(true);
  };

  return gridSettingsUpdated ? (
    <ModuleContainer>
      <ModuleHeaderContainer>
        <ModuleHeaderSubtitleContainer>
          <BreadCrumbNavigation
            links={dataListBreadcrumbLinks}
            current={currentBreadcrumb}
          ></BreadCrumbNavigation>
        </ModuleHeaderSubtitleContainer>
      </ModuleHeaderContainer>
      <ActionsContainer>
        <LeftContainer>
          <SearchBar
            setSearchTermOnChange={setSearchTerm}
            searchBoxLabel={searchBarLabel}
            initialValue={
              localStorage.getItem("dataListSettings")
                ? JSON.parse(localStorage.getItem("dataListSettings")!).searchTerm
                : ""
            }
          ></SearchBar>
        </LeftContainer>
        <RightContainer>
          <ExtraActionsContainer>
            <Button startIcon={<Upload />} onClick={openImportPage}>
              Import
            </Button>
            <Button startIcon={<Download />} onClick={onExportClick}>
              Export
            </Button>
          </ExtraActionsContainer>
          <AddButtonContainer>
            <Button to={getAddFormRoute()} component={GhostLink} variant="contained">
              {`Add ${modelName}`}
            </Button>
          </AddButtonContainer>
        </RightContainer>
      </ActionsContainer>
      <DataTableGrid
        columns={columns}
        data={modelData}
        pageSize={filterLimit}
        totalRowCount={totalRowCount}
        rowsPerPageOptions={[10, 30, 50, 100]}
        pageNumber={pageNumber}
        setSortColumn={setSortColumn}
        setSortOrder={setSortOrder}
        setPageSize={setFilterLimit}
        setSkipLimit={setSkipLimit}
        setFilterField={setWhereField}
        setFilterFieldValue={setWhereFieldValue}
        setPageNumber={setPageNumber}
        initialState={initialGridState}
        showActionsColumn={true}
        disableEditRoute={false}
        disableViewRoute={false}
      />
      {importFieldsObject && (
        <CsvImport
          isOpen={isImportWindowOpen}
          onClose={onImportWindowClose}
          onUpload={handleFileUpload}
          object={importFieldsObject}
          endRoute={endRoute as CoreModule}
        ></CsvImport>
      )}
      {openExport && (
        <CsvExport
          getExportUrlAsync={getExportUrlAsync}
          closeExport={closeExport}
          endRoute={endRoute as CoreModule}
        ></CsvExport>
      )}
    </ModuleContainer>
  ) : null;
};
