import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Download, Upload } from "@mui/icons-material";
import { ContactDetailsDto } from "lib/network/swagger-client";
import {
  ModuleContainer,
  ModuleHeaderContainer,
  ModuleHeaderSubtitleContainer,
} from "components/module";
import { CoreModule, getAddFormRoute } from "lib/router";
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
import { GridColDef } from "@mui/x-data-grid";
import { GridInitialStateCommunity } from "@mui/x-data-grid/models/gridStateCommunity";

type dataListProps = {
  columns: GridColDef<ContactDetailsDto>[];
  dataListBreadcrumbLinks: any[];
  currentBreadcrumb: string;
  searchBarLabel: string;
  defaultFilterOrderColumn: string;
  defaultFilterOrderDirection: string;
  initialGridState: GridInitialStateCommunity | undefined;
  endRoute: string;
  getModelDataList: (query: string) => any;
  getExportUrl: (query: string) => Promise<string>;
  dataImportCreate: (data: any) => void;
};

export const DataList = ({
  columns,
  dataListBreadcrumbLinks,
  currentBreadcrumb,
  searchBarLabel,
  defaultFilterOrderColumn,
  defaultFilterOrderDirection,
  initialGridState,
  endRoute,
  getModelDataList,
  getExportUrl,
  dataImportCreate,
}: dataListProps) => {
  const [modelData, setModelData] = useState<ContactDetailsDto[]>();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLimit, setFilterLimit] = useState(defaultFilterLimit);
  const [sortColumn, setSortColumn] = useState(defaultFilterOrderColumn);
  const [sortOrder, setSortOrder] = useState(defaultFilterOrderDirection);
  const [whereField, setWhereField] = useState("");
  const [whereFieldValue, setWhereFieldValue] = useState("");
  const [skipLimit, setSkipLimit] = useState(0);
  const [totalRowCount, setTotalRowCount] = useState(0);
  const [isImportWindowOpen, setIsImportWindowOpen] = useState(false);
  const [openExport, setOpenExport] = useState(false);

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
    })();
  }, [searchTerm, filterLimit, skipLimit, sortColumn, sortOrder, whereFieldValue]);

  useEffect(() => {
    if (totalRowCount === -1) {
      throw new Error("Server error: x-total-count header is not provided.");
    }
  }, [totalRowCount]);

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

  return (
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
              Add contact
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
        setSortColumn={setSortColumn}
        setSortOrder={setSortOrder}
        setPageSize={setFilterLimit}
        setSkipLimit={setSkipLimit}
        setFilterField={setWhereField}
        setFilterFieldValue={setWhereFieldValue}
        initialState={initialGridState}
        showActionsColumn={true}
        disableEditRoute={false}
        disableViewRoute={false}
      />
      {modelData && modelData.length > 0 && (
        <CsvImport
          isOpen={isImportWindowOpen}
          onClose={onImportWindowClose}
          onUpload={handleFileUpload}
          object={modelData[0]}
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
  );
};
