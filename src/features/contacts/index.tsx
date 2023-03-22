import { Avatar, ListItemAvatar } from "@mui/material";
import { ContactDetailsDto } from "lib/network/swagger-client";
import { useRequestContext } from "providers/request-provider";
import { ContactNameListItem, ContactNameListItemText } from "./index.styled";
import { contactListBreadcrumbLinks } from "./constants";
import { DataList } from "components/data-list";
import { GridColDef } from "@mui/x-data-grid";

export const Contacts = () => {
  const { client } = useRequestContext();

  const getContactList = async (query: string) => {
    const result = await client.api.contactsList({
      query: query,
    });
    return result;
  };

  const getExportUrlAsync = async (query: string) => {
    const { url } = await client.api.contactsExportList({
      query: query,
    });
    return url;
  };

  const handleFileUpload = async (data: any) => {
    await client.api.contactsImportCreate(data);
  };

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
    <DataList
      columns={columns}
      dataListBreadcrumbLinks={contactListBreadcrumbLinks}
      currentBreadcrumb="Contacts"
      defaultFilterOrderColumn="firstName"
      defaultFilterOrderDirection="desc"
      searchBarLabel="Search Customers"
      getModelDataList={getContactList}
      getExportUrl={getExportUrlAsync}
      dataImportCreate={handleFileUpload}
    ></DataList>
  );
};
