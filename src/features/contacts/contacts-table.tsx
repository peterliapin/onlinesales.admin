import { GridColDef } from "@mui/x-data-grid";
import { ContactDetailsDto } from "lib/network/swagger-client";
import {
  ContactNameListItem,
  ContactNameListItemText,
} from "./index.styled";
import { Avatar, ListItemAvatar } from "@mui/material";
import { DataTableGrid } from "components/data-table";

type ContactsTableProps = {
  contacts?: ContactDetailsDto[];
  pageSize?: number;
  totalRowCount: number;
  setSortColumn: (sortColumn: string) => void;
  setSortOrder: (sortOrder: string) => void;
  setPageSize: (pageSize: number) => void;
  setSkipLimit: (skipLimit: number) => void;
  setFilterField: (filterField: string) => void;
  setFilterFieldValue: (fieldValue: string) => void;
};

export const ContactsTable = ({
  contacts,
  pageSize,
  totalRowCount,
  setPageSize,
  setSkipLimit,
  setSortColumn,
  setSortOrder,
  setFilterField,
  setFilterFieldValue,
}: ContactsTableProps) => {

  const columns: GridColDef<ContactDetailsDto>[] = [
    {
      field: "lastName",
      headerName: "Name",
      flex: 4,
      renderCell: ({ row }) => (
        <ContactNameListItem>
          <ListItemAvatar>
            <Avatar src={row.avatarUrl!}></Avatar>
          </ListItemAvatar>
          <ContactNameListItemText
            primary={`${row.firstName} ${row.lastName}`}
            secondary={row.email}
          />
        </ContactNameListItem>
      ),
    },
    {
      field: "firstName",
      headerName: "First Name",
    },
    {
      field: "email",
      headerName: "Email",
    },
    {
      field: "address1",
      headerName: "Address",
      flex: 4,
    },
    {
      field: "phone",
      headerName: "Phone",
    },
    {
      field: "location",
      headerName: "Location",
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
      field: "language",
      headerName: "Language",
      flex: 1,
    },
  ];

  return (
    <DataTableGrid
      columns={columns}
      data={contacts}
      pageSize={pageSize}
      totalRowCount={totalRowCount}
      rowsPerPageOptions={[10, 30, 50, 100, 1000]}
      setSortColumn={setSortColumn}
      setSortOrder={setSortOrder}
      setPageSize={setPageSize}
      setSkipLimit={setSkipLimit}
      setFilterField={setFilterField}
      setFilterFieldValue={setFilterFieldValue}
      initialState={{
        columns: { columnVisibilityModel: { firstName: false, email: false, phone: false } },
      }}
      showActionsColumn={true}
      disableEditRoute={false}
      disableViewRoute={true}
    />
  );
};
