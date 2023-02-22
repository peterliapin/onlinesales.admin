import { Button } from "@mui/material";
import { DataGrid, GridColDef, GridSortModel } from "@mui/x-data-grid";
import { ContactDetailsDto } from "lib/network/swagger-client";
import { ContactsTableContainer } from "./index.styled";
import { CoreModule, getEditModuleRoute } from "lib/router";
import { GhostLink } from "components/ghost-link";
import { useState } from "react";

type ContactsTableProps = {
  contacts?: ContactDetailsDto[];
  pageSize?: number;
  totalRowCount: number;
  setSortColumn: (sortColumn: string) => void;
  setSortOrder: (sortOrder: string) => void;
  setPageSize: (pageSize: number) => void;
  setSkipLimit: (skipLimit: number) => void;
};

export const ContactsTable = ({
  contacts,
  setPageSize,
  pageSize,
  setSkipLimit,
  totalRowCount,
  setSortColumn,
  setSortOrder,
}: ContactsTableProps) => {
  const [page, setPage] = useState(0);

  const empty = [] as const;

  const columns: GridColDef<ContactDetailsDto>[] = [
    {
      field: "firstName",
      headerName: "Name",
      flex: 1,
      renderCell: ({ row }) => (
        <div>
          <div>{`${row.firstName} ${row.lastName}`}</div>
          <div>{row.email}</div>
        </div>
      ),
    },
    {
      field: "address1",
      headerName: "Address",
    },
    {
      field: "phone",
      headerName: "Phone",
    },
    {
      field: "location",
      headerName: "Location",
    },
    {
      field: "actions",
      headerName: "Actions",
      align: "right",
      headerAlign: "right",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <div>
            <Button
              to={getEditModuleRoute(CoreModule.contacts, params.id as number)}
              component={GhostLink}
            >
              edit
            </Button>
          </div>
        );
      },
    },
  ];

  const setNewPage = (page: number) => {
    setPage(page);
    setSkipLimit(page * pageSize!);
  };

  const handleSortChange = (sortModel: GridSortModel) => {
    setSortColumn(sortModel[sortModel.length - 1].field);
    setSortOrder(sortModel[sortModel.length - 1].sort || "asc");
  };

  return (
    <ContactsTableContainer>
      <DataGrid
        columns={columns}
        rows={contacts ?? empty}
        loading={!contacts}
        checkboxSelection
        rowCount={totalRowCount}
        rowsPerPageOptions={[10, 20, 50, 100]}
        pagination
        page={page}
        pageSize={pageSize}
        paginationMode="server"
        onPageChange={(newPage) => setNewPage(newPage)}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        sortingMode="server"
        onSortModelChange={(newSortModel) => handleSortChange(newSortModel)}
      />
    </ContactsTableContainer>
  );
};
