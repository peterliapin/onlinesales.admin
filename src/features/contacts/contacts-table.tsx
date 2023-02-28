import { GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ContactDetailsDto } from "lib/network/swagger-client";
import { ActionButtonContainer, EditIconContainer, ForwardIconContainer } from "./index.styled";
import { getEditFormRoute, getViewFormRoute } from "lib/router";
import { useNavigate } from "react-router-dom";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
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
  const navigate = useNavigate();

  const handleEditClick = (id: number) => {
    navigate(getEditFormRoute(id));
  };

  const handleForwardClick = (id: number) => {
    navigate(getViewFormRoute(id));
  };

  const columns: GridColDef<ContactDetailsDto>[] = [
    {
      field: "lastName",
      headerName: "Name",
      flex: 4,
      renderCell: ({ row }) => (
        <ListItem alignItems="flex-start" disablePadding>
          <ListItemAvatar>
            <Avatar src={row.avatarUrl!} sx={{ width: 46, height: 46 }}></Avatar>
          </ListItemAvatar>
          <ListItemText
            primaryTypographyProps={{ fontSize: "14px", fontWeight: 500 }}
            primary={`${row.firstName} ${row.lastName}`}
            secondaryTypographyProps={{ fontSize: "13px" }}
            secondary={row.email}
          />
        </ListItem>
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
      flex: 3,
    },
    {
      field: "location",
      headerName: "Location",
      flex: 2,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      align: "right",
      headerAlign: "right",
      filterable: false,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <ActionButtonContainer>
            <EditIconContainer onClick={() => handleEditClick(params.id as number)}>
              <EditIcon fontSize="small" />
            </EditIconContainer>
            <ForwardIconContainer onClick={() => handleForwardClick(params.id as number)}>
              <ArrowForwardIcon fontSize="small" />
            </ForwardIconContainer>
          </ActionButtonContainer>
        );
      },
    },
  ];

  return (
    <DataTableGrid
      columns={columns}
      data={contacts}
      pageSize={pageSize}
      totalRowCount={totalRowCount}
      rowsPerPageOptions={[10, 20, 50, 100]}
      setSortColumn={setSortColumn}
      setSortOrder={setSortOrder}
      setPageSize={setPageSize}
      setSkipLimit={setSkipLimit}
      setFilterField={setFilterField}
      setFilterFieldValue={setFilterFieldValue}
    />
  );
};
