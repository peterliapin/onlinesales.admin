import { Avatar, ListItemAvatar } from "@mui/material";
import { ContactDetailsDto, ContactImportDto } from "lib/network/swagger-client";
import { useRequestContext } from "providers/request-provider";
import { ContactNameListItem, ContactNameListItemText } from "./index.styled";
import {
  contactListPageBreadcrumb,
  defaultFilterOrderColumn,
  defaultFilterOrderDirection,
  modelName,
  searchLabel,
} from "./constants";
import { DataList } from "components/data-list";
import { GridColDef } from "@mui/x-data-grid";
import { CoreModule } from "lib/router";
import { dataListBreadcrumbLinks } from "utils/constants";

export const Contacts = () => {
  const { client } = useRequestContext();

  const getContactList = async (query: string) => {
    try {
      const result = await client.api.contactsList({
        query: query,
      });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getContactExportUrlAsync = async (query: string) => {
    const { url } = await client.api.contactsExportList({
      query: query,
    });
    return url;
  };

  const handleContactImport = async (data: ContactImportDto[]) => {
    await client.api.contactsImportCreate(data);
  };

  const columns: GridColDef<ContactDetailsDto>[] = [
    {
      field: "firstName",
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
      field: "lastName",
      headerName: "Last Name",
      flex: 2,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 3,
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
      modelName={modelName}
      columns={columns}
      dataListBreadcrumbLinks={dataListBreadcrumbLinks}
      currentBreadcrumb={contactListPageBreadcrumb}
      defaultFilterOrderColumn={defaultFilterOrderColumn}
      defaultFilterOrderDirection={defaultFilterOrderDirection}
      searchBarLabel={searchLabel}
      endRoute={CoreModule.contacts}
      getModelDataList={getContactList}
      getExportUrl={getContactExportUrlAsync}
      dataImportCreate={handleContactImport}
      initialGridState={{
        columns: { columnVisibilityModel: { lastName: false, email: false } },
        sorting: {
          sortModel: [{ field: defaultFilterOrderColumn, sort: defaultFilterOrderDirection }],
        },
      }}
    ></DataList>
  );
};
