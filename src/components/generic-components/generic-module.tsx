import {Outlet, Route, Routes} from "react-router-dom";
import {
  addFormRoute,
  CoreModule,
  editFormRoute,
  getAddFormRoute,
  viewFormRoute,
} from "@lib/router";
import {BasicTypeForGeneric, getBreadcrumbLinks} from "@components/generic-components/common";
import {ReactNode, useRef, useState} from "react";
import {
  GenericDataGrid,
  GenericDataGridProps,
  GenericDataGridRef,
} from "@components/generic-components/generic-data-grid";
import {ModuleWrapper} from "@components/module-wrapper";
import {dataListBreadcrumbLinks} from "../../utils/constants";
import {GenericForm, GenericFormProps} from "@components/generic-components/generic-form";
import {Button, CircularProgress, Grid, Typography} from "@mui/material";
import {SearchBar} from "@components/search-bar";
import {GhostLink} from "@components/ghost-link";
import {Download, Upload} from "@mui/icons-material";
import {HttpResponse, ProblemDetails, RequestParams} from "@lib/network/swagger-client";
import {CsvExport} from "@components/export";

interface GenericModuleProps<TView extends BasicTypeForGeneric, TCreate, TUpdate> {
  moduleName: string;
  modulePath: CoreModule;
  addButtonContent?: string | ReactNode | undefined;
  tableProps?: GenericDataGridProps<TView>;
  createFormProps?: GenericFormProps<TView, TCreate, TUpdate>;
  editFormProps?: GenericFormProps<TView, TCreate, TUpdate>;
  viewFormProps?: GenericFormProps<TView, TCreate, TUpdate>;
  showExport?: boolean;

  exportItemsFn?: (
    query?: { query?: string },
    params?: RequestParams
  ) => Promise<HttpResponse<any, void | ProblemDetails>>;
  showImport?: boolean;
}

export function GenericModule<TView extends BasicTypeForGeneric, TCreate, TUpdate>({
  moduleName,
  modulePath,
  addButtonContent,
  tableProps,
  createFormProps,
  editFormProps,
  viewFormProps,
  showExport,
  exportItemsFn,
  showImport
}: GenericModuleProps<TView, TCreate, TUpdate>): JSX.Element {
  const [searchText, setSearchText] = useState("");
  const [openExport, setOpenExport] = useState(false);
  const genericDataGridRef = useRef<GenericDataGridRef>(null);

  const getGenericTable = (key: string, tableProps: GenericDataGridProps<TView>) => {
    const genericDataGrid = GenericDataGrid<TView>({
      ...tableProps,
      searchText: searchText
    }, genericDataGridRef);

    const searchBox = (
      <SearchBar
        setSearchTermOnChange={(value) => setSearchText(value)}
        searchBoxLabel={"Search"}
        initialValue={""}
      />
    );

    const addButton = (
      <Button to={getAddFormRoute()} component={GhostLink} variant="contained">
        {addButtonContent || "Add"}
      </Button>
    );

    const extraActions = (
      <>
        {showImport && <Button key={"import-btn"}
          disabled={true}
          onClick={() => {
            console.log(["import executed"]);
          }}
          startIcon={<Upload/>}>
          Import
        </Button>}
        {showExport && <Button key={"export-btn"}
          disabled={!exportItemsFn}
          onClick={() => {
            setOpenExport(true);
          }}
          startIcon={<Download/>}>
          Export
        </Button>}
      </>
    );

    return (
      <ModuleWrapper
        key={key}
        breadcrumbs={dataListBreadcrumbLinks}
        currentBreadcrumb={moduleName}
        leftContainerChildren={searchBox}
        extraActionsContainerChildren={extraActions}
        addButtonContainerChildren={addButton}
      >
        {genericDataGrid}
        {openExport && exportItemsFn && (
          <CsvExport
            exportAsync={async () => {
              const filters = genericDataGridRef.current
                && genericDataGridRef.current.getExportFilters();
              const response = await exportItemsFn!(filters || {});
              return response?.text();
            }}
            closeExport={() => {
              setOpenExport(false);
            }}
            fileName={moduleName}
          ></CsvExport>
        )}
      </ModuleWrapper>
    );
  };

  const genericTable = tableProps && getGenericTable("table", tableProps);

  const getForm = (
    key: string,
    currentBreadcrumb: string,
    formProps: GenericFormProps<TView, TCreate, TUpdate>
  ) => {
    const genericForm = GenericForm<TView, TCreate, TUpdate>(formProps);

    const savingIndicatorElement = (
      <>
        <Grid container item spacing={3} sm="auto" xs="auto">
          <Grid item>
            <CircularProgress size={14}/>
          </Grid>
          <Grid item>
            <Typography>Saving...</Typography>
          </Grid>
        </Grid>
      </>
    );

    return (
      <ModuleWrapper
        key={key}
        saveIndicatorElement={savingIndicatorElement}
        breadcrumbs={getBreadcrumbLinks(moduleName, modulePath)}
        currentBreadcrumb={currentBreadcrumb}
      >
        {genericForm}
      </ModuleWrapper>
    );
  };

  const genericCreateForm = createFormProps && getForm("create", "Create", createFormProps);
  const genericEditForm = editFormProps && getForm("edit", "Edit", editFormProps);
  const genericViewForm = viewFormProps && getForm("view", "View", viewFormProps);

  return (
    <>
      <Routes>
        <Route index element={genericTable}/>
        <Route path={addFormRoute.template} element={genericCreateForm}/>
        <Route path={editFormRoute.template} element={genericEditForm}/>
        <Route path={viewFormRoute.template} element={genericViewForm}/>
      </Routes>
      <Outlet/>
    </>
  );
}
