import { Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ContactDetailsDto } from "lib/network/swagger-client";
import { ContactsTableContainer } from "./index.styled";

type ContactsTableProps = {
  contacts?: ContactDetailsDto[];
};

const empty = [] as const;

const columns: GridColDef<ContactDetailsDto>[] = [
  {
    field: "name",
    headerName: "Name",
    minWidth: 150,
    flex: 1,
    renderCell: ({ row }) => (
      <div>
        <div>{`${row.firstName} ${row.lastName}`}</div>
        <div>{row.email}</div>
      </div>
    ),
  },
  {
    field: "location",
    headerName: "Location",
  },
  {
    field: "orders",
    headerName: "Orders",
  },
  {
    field: "spent",
    headerName: "Spent",
  },
  {
    field: "actions",
    headerName: "Actions",
    align: "right",
    headerAlign: "right",
    sortable: false,
    disableColumnMenu: true,
    renderCell: () => {
      return (
        <div>
          <Button>edit</Button>
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
