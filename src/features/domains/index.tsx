import { Avatar, ListItemAvatar } from "@mui/material";
import { DomainDetailsDto, DomainImportDto } from "lib/network/swagger-client";
import { useRequestContext } from "providers/request-provider";
import { DomainListItem, DomainListItemText } from "./index.styled";
import {
  defaultFilterOrderColumn,
  defaultFilterOrderDirection,
  modelName,
  domainListPageBreadcrumb,
  searchLabel,
} from "./constants";
import { DataList } from "@components/data-list-old";
import { GridColDef } from "@mui/x-data-grid";
import { CoreModule } from "lib/router";
import { dataListBreadcrumbLinks } from "utils/constants";

export const Domains = () => {
  const { client } = useRequestContext();

  const getDomainList = async (query: string) => {
    try {
      const result = await client.api.domainsList({
        query: query,
      });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const exportDomainsAsync = async (query: string) => {
    const response = await client.api.domainsExportList({
      query: query,
    });

    return response.text();
  };

  const handleDomainImport = async (data: DomainImportDto[]) => {
    await client.api.domainsImportCreate(data);
  };

  const columns: GridColDef<DomainDetailsDto>[] = [
    {
      field: "name",
      headerName: "Name",
      flex: 4,
      renderCell: ({ row }) => (
        <DomainListItem>
          <ListItemAvatar>
            <Avatar sizes="64" src={
              "http://www.google.com/s2/favicons?domain=" + row.name + "&sz=32"
            } sx={{
              width: 32,
              height: 32,
            }}></Avatar>
          </ListItemAvatar>
          <DomainListItemText
            primary={`${row.name || ""}`}
            secondary={row.url}
          />
        </DomainListItem>
      ),
    },
    {
      field: "title",
      headerName: "Title",
      flex: 2,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 2,
    },
    {
      field: "url",
      headerName: "Url",
      flex: 2,
    },
    {
      field: "dnsCheck",
      headerName: "Dns Check",
      flex: 2,
    },
    {
      field: "free",
      headerName: "Free",
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
  ];

  return (
    <DataList
      modelName={modelName}
      columns={columns}
      dataListBreadcrumbLinks={dataListBreadcrumbLinks}
      currentBreadcrumb={domainListPageBreadcrumb}
      defaultFilterOrderColumn={defaultFilterOrderColumn}
      defaultFilterOrderDirection={defaultFilterOrderDirection}
      searchBarLabel={searchLabel}
      endRoute={CoreModule.orders}
      getModelDataList={getDomainList}
      exportAsync={exportDomainsAsync}
      exportFileName="domains"
      dataImportCreate={handleDomainImport}
      initialGridState={{
        columns: { columnVisibilityModel: { dnsCheck: false, free: false } },
        sorting: {
          sortModel: [{ field: defaultFilterOrderColumn, sort: defaultFilterOrderDirection }],
        },
      }}
    ></DataList>
  );
};
