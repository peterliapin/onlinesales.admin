import {Outlet, Route, Routes} from "react-router-dom";
import {
  CoreModule,
  editFormRoute,
  viewFormRoute
} from "@lib/router";
import {BasicTypeForGeneric, getBreadcrumbLinks} from "@components/generic-components/common";
import {ReactNode, useMemo} from "react";
import {
  GenericDataGrid,
  GenericDataGridProps
} from "@components/generic-components/generic-data-grid";
import {ModuleWrapper} from "@components/module-wrapper";
import {dataListBreadcrumbLinks} from "../../utils/constants";
import {GenericForm, GenericFormProps} from "@components/generic-components/generic-form";
import {useRouteParams} from "typesafe-routes";
import {CircularProgress, Grid, Typography} from "@mui/material";

interface GenericModuleProps<TView extends BasicTypeForGeneric, TCreate, TUpdate> {
  moduleName: string;
  modulePath: CoreModule;
  tableProps?: GenericDataGridProps<TView>;
  editFormProps?: GenericFormProps<TView, TCreate, TUpdate>
  viewFormProps?: GenericFormProps<TView, TCreate, TUpdate>
}

export function GenericModule<
  TView extends BasicTypeForGeneric,
  TCreate,
  TUpdate
>({
    moduleName,
    modulePath,
    tableProps,
    editFormProps,
    viewFormProps,
  }: GenericModuleProps<TView, TCreate, TUpdate>): ReactNode {

  const getGenericTable = (key: string, tableProps: GenericDataGridProps<TView>) => {
    const genericDataGrid = GenericDataGrid<TView>(tableProps);

    return <ModuleWrapper key={key}
                          breadcrumbs={dataListBreadcrumbLinks}
                          currentBreadcrumb={moduleName}>
      {genericDataGrid}
    </ModuleWrapper>;
  }

  const genericTable = tableProps
    ? getGenericTable("table", tableProps)
    : <div key={"table"}></div>;

  const getForm = (key: string, formProps: GenericFormProps<TView, TCreate, TUpdate>) => {
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

    return <ModuleWrapper key={key}
                          saveIndicatorElement={savingIndicatorElement}
                          breadcrumbs={getBreadcrumbLinks(moduleName, modulePath)}
                          currentBreadcrumb={`${formProps.editable ? "Edit" : "View"}`}>
      {genericForm}
    </ModuleWrapper>;
  }

  const genericEditForm = editFormProps
    ? getForm("edit", editFormProps)
    : <div key={"edit"}>editFormProps is empty</div>;

  const genericViewForm = viewFormProps
    ? getForm("view", viewFormProps)
    : <div key={"view"}>viewFormProps is empty</div>;

  return (
    <>
      <Routes>
        <Route index element={genericTable}/>
        <Route path={editFormRoute.template} element={genericEditForm}/>
        <Route path={viewFormRoute.template} element={genericViewForm}/>
      </Routes>
      <Outlet/>
    </>
  );
}
;
