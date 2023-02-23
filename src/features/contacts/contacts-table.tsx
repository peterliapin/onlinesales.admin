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
  AvatarContainer as ContactProfileContainer,
  AvatarImg,
  AvatarImgContainer,
  ContactEmail,
  ContactName,
  ContactNameEmailContainer,
  ContactsTableContainer,
  EditIconContainer,
  ForwardIconContainer,
} from "./index.styled";
import { CoreModule, getEditModuleRoute } from "lib/router";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type ContactsTableProps = {
  contacts?: ContactDetailsDto[];
  pageSize?: number;
  totalRowCount: number;
  setSortColumn: (sortColumn: string) => void;
  setSortOrder: (sortOrder: string) => void;
  setPageSize: (pageSize: number) => void;
  setSkipLimit: (skipLimit: number) => void;
  setFileterField: (filterField: string) => void;
  setFilterFieldValue: (fieldValue: string) => void;
};

export const ContactsTable = ({
  contacts,
  setPageSize: handlePageSizeChange,
  pageSize,
  setSkipLimit,
  totalRowCount,
  setSortColumn,
  setSortOrder,
  setFileterField: setFilterField,
  setFilterFieldValue,
}: ContactsTableProps) => {
  const [page, setPage] = useState(0);

  const navigate = useNavigate();

  const empty = [] as const;

  const handleEditClick = (id: number) => {
    navigate(getEditModuleRoute(CoreModule.contacts, id));
  };

  const handleForwardClick = () => {
    //TODO
  };

  const columns: GridColDef<ContactDetailsDto>[] = [
    {
      field: "firstName",
      headerName: "Name",
      flex: 4,
      renderCell: ({ row }) => (
        <ContactProfileContainer>
          <AvatarImgContainer>
            <AvatarImg src={row.avatarUrl!} />
          </AvatarImgContainer>
          <ContactNameEmailContainer>
            <ContactName>{`${row.firstName} ${row.lastName}`}</ContactName>
            <ContactEmail>{row.email}</ContactEmail>
          </ContactNameEmailContainer>
        </ContactProfileContainer>
      ),
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
        onPageSizeChange={(newPageSize) => handlePageSizeChange(newPageSize)}
        sortingMode="server"
        onSortModelChange={(newSortModel) => handleSortChange(newSortModel)}
        filterMode="server"
        onFilterModelChange={(newFilterModel) => handleFilterChange(newFilterModel)}
      />
    </ContactsTableContainer>
  );
};
