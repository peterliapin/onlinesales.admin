import {
  DataGrid,
  getGridStringOperators,
  GridColDef,
  GridFilterModel,
  GridSortModel,
} from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ContactDetailsDto } from "lib/network/swagger-client";
import {
  ActionButtonContainer,
  ContactsTableContainer,
  EditIconContainer,
  ForwardIconContainer,
} from "./index.styled";
import { CoreModule, getEditModuleRoute } from "lib/router";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

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
  setPageSize,
  pageSize,
  setSkipLimit,
  totalRowCount,
  setSortColumn,
  setSortOrder,
  setFilterField,
  setFilterFieldValue,
}: ContactsTableProps) => {
  const [page, setPage] = useState(0);

  const navigate = useNavigate();

  const empty = [] as const;

  const handleEditClick = (id: number) => {
    navigate(getEditModuleRoute(id));
  };

  const handleForwardClick = () => {
    //TODO
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
            <ForwardIconContainer onClick={handleForwardClick}>
              <ArrowForwardIcon fontSize="small" />
            </ForwardIconContainer>
          </ActionButtonContainer>
        );
      },
    },
  ];

  const filterAdjustedColumns = useMemo(
    () =>
      columns.map((col) => {
        return {
          ...col,
          filterOperators: getGridStringOperators().filter(
            (operator) => operator.value === "contains"
          ),
        };
      }),
    [columns]
  );

  const handlePageChange = (page: number) => {
    setPage(page);
    setSkipLimit(page * pageSize!);
  };

  const handleSortChange = (sortModel: GridSortModel) => {
    if (sortModel.length > 0) {
      setSortColumn(sortModel[sortModel.length - 1].field);
      setSortOrder(sortModel[sortModel.length - 1].sort || "asc");
    } else setSortOrder("asc");
  };

  const handleFilterChange = (filterModel: GridFilterModel) => {
    if (filterModel.items.length === 0) return;

    const column = filterModel.items[0].columnField;
    const columnValue = filterModel.items[0].value;

    if (column) {
      setFilterFieldValue(columnValue ? columnValue : "");
      setFilterField(column);
    }
  };

  return (
    <ContactsTableContainer>
      <DataGrid
        columns={filterAdjustedColumns}
        rows={contacts ?? empty}
        loading={!contacts}
        checkboxSelection
        rowCount={totalRowCount}
        rowsPerPageOptions={[10, 20, 50, 100]}
        pagination
        page={page}
        pageSize={pageSize}
        paginationMode="server"
        onPageChange={(newPage) => handlePageChange(newPage)}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        sortingMode="server"
        onSortModelChange={(newSortModel) => handleSortChange(newSortModel)}
        filterMode="server"
        onFilterModelChange={(newFilterModel) => handleFilterChange(newFilterModel)}
        initialState={{ columns: { columnVisibilityModel: { firstName: false, email: false } } }}
      />
    </ContactsTableContainer>
  );
};
