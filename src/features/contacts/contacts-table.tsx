import { Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ContactDetailsDto } from "lib/network/swagger-client";
import { ContactsTableContainer } from "./index.styled";
import { CoreModule, getEditModuleRoute } from "lib/router";
import { GhostLink } from "components/ghost-link";

type ContactsTableProps = {
  contacts?: ContactDetailsDto[];
};

const empty = [] as const;

const columns: GridColDef<ContactDetailsDto>[] = [
  {
    field: "name",
    headerName: "Name",
    minWidth: 100,
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

export const ContactsTable = ({ contacts }: ContactsTableProps) => {
  return (
    <ContactsTableContainer>
      <DataGrid columns={columns} rows={contacts ?? empty} loading={!contacts} checkboxSelection />
    </ContactsTableContainer>
  );
};
