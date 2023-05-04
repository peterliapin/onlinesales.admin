import { DataList } from "@components/data-list";
import { ModuleWrapper } from "@components/module-wrapper";
import { GridColDef } from "@mui/x-data-grid";
import {
  UserGridStorageKey,
  UsersBreadcrumbLinks,
  UsersListCurrentBreadcrumb,
  defaultFilterOrderColumn,
  defaultFilterOrderDirection,
  searchLabel,
} from "../constants";
import { SearchBar } from "@components/search-bar";
import { UserDetailsDto } from "@lib/network/swagger-client";
import useLocalStorage from "use-local-storage";
import { dataListSettings } from "utils/types";
import { Add, Download, Upload } from "@mui/icons-material";
import { Fragment, useState } from "react";
import { Button } from "@mui/material";
import { getAddFormRoute } from "@lib/router";
import { GhostLink } from "@components/ghost-link";
import { useRequestContext } from "@providers/request-provider";

const columns: GridColDef<UserDetailsDto>[] = [
  {
    field: "id",
    headerName: "id",
    flex: 2,
  },
  {
    field: "displayName",
    headerName: "Display Name",
    flex: 2,
  },
  {
    field: "userName",
    headerName: "User Name",
    flex: 2,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 2,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    flex: 2,
    valueGetter: (params) => {
      const createdAt = params.value as string;
      const formattedDate = new Date(createdAt).toLocaleDateString();
      return formattedDate;
    },
  },
  {
    field: "lastTimeLoggedIn",
    headerName: "Last time logged in",
    flex: 2,
    valueGetter: (params) => {
      const lastTimeLoggedIn = params.value as string;
      const formattedDate = new Date(lastTimeLoggedIn).toLocaleDateString();
      return formattedDate;
    },
  },
];

export const UserList = () => {
  const { client } = useRequestContext();
  const [gridSettings, setGridSettings] = useLocalStorage<dataListSettings | undefined>(
    UserGridStorageKey,
    undefined
  );
  const [searchTerm, setSearchTerm] = useState(gridSettings?.searchTerm ?? "");

  const searchBar = (
    <SearchBar
      setSearchTermOnChange={setSearchTerm}
      searchBoxLabel={searchLabel}
      initialValue={gridSettings?.searchTerm ?? ""}
    ></SearchBar>
  );

  const getUserList = async (mainQuery: string, exportQuery?: string) => {
    try {
      const result = await client.api.usersList();
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  const extraActions = [
    <Fragment key={"import-action"}>
      <Button key={"import-btn"} startIcon={<Upload />} disabled>
        Import
      </Button>
    </Fragment>,
    <Fragment key={"export-action"}>
      <Button key={"export-btn"} startIcon={<Download />} disabled>
        Export
      </Button>
    </Fragment>,
  ];

  const addButton = (
    <Button variant="contained" to={getAddFormRoute()} component={GhostLink} startIcon={<Add />}>
      Add account
    </Button>
  );

  return (
    <ModuleWrapper
      breadcrumbs={UsersBreadcrumbLinks}
      currentBreadcrumb={UsersListCurrentBreadcrumb}
      leftContainerChildren={searchBar}
      extraActionsContainerChildren={extraActions}
      addButtonContainerChildren={addButton}
    >
      <DataList
        columns={columns}
        gridSettingsStorageKey={UserGridStorageKey}
        defaultFilterOrderColumn={defaultFilterOrderColumn}
        defaultFilterOrderDirection={defaultFilterOrderDirection}
        searchText={searchTerm}
        getModelDataList={getUserList}
        initialGridState={{
          columns: { columnVisibilityModel: { continentCode: false } },
          sorting: {
            sortModel: [{ field: defaultFilterOrderColumn, sort: defaultFilterOrderDirection }],
          },
        }}
      />
    </ModuleWrapper>
  );
};
