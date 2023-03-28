import { AccountDetailsDto, AccountImportDto } from "lib/network/swagger-client";
import { useRequestContext } from "providers/request-provider";
import {
  accountListBreadcrumbLinks,
  accountListCurrentBreadcrumb,
  defaultFilterOrderColumn,
  defaultFilterOrderDirection,
  modelName,
  searchLabel,
} from "./constants";
import { DataList } from "components/data-list";
import { GridColDef } from "@mui/x-data-grid";
import { CoreModule } from "lib/router";

export const Accounts = () => {
  const { client } = useRequestContext();

  const getAccountList = async (query: string) => {
    try {
      const result = await client.api.accountsList({
        query: query,
      });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getAccountExportUrlAsync = async (query: string) => {
    const { url } = await client.api.accountsExportList({
      query: query,
    });
    return url;
  };

  const handleAccountImport = async (data: AccountImportDto[]) => {
    await client.api.accountsImportCreate(data);
  };

  const columns: GridColDef<AccountDetailsDto>[] = [
    {
      field: "name",
      headerName: "Account Name",
      flex: 1,
    },
    {
      field: "state",
      headerName: "State",
      flex: 1,
    },
    {
      field: "countryCode",
      headerName: "Country Code",
      flex: 1,
    },
    {
      field: "cityName",
      headerName: "City",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      flex: 1,
      valueGetter: (params) => {
        const createdAt = params.value as string;
        const formattedDate = new Date(createdAt).toLocaleDateString();
        return formattedDate;
      },
    },
    {
      field: "continentCode",
      headerName: "Continent Code",
    },
  ];

  return (
    <DataList
      modelName={modelName}
      columns={columns}
      dataListBreadcrumbLinks={accountListBreadcrumbLinks}
      currentBreadcrumb={accountListCurrentBreadcrumb}
      defaultFilterOrderColumn={defaultFilterOrderColumn}
      defaultFilterOrderDirection={defaultFilterOrderDirection}
      searchBarLabel={searchLabel}
      endRoute={CoreModule.accounts}
      getModelDataList={getAccountList}
      getExportUrl={getAccountExportUrlAsync}
      dataImportCreate={handleAccountImport}
      initialGridState={{
        columns: { columnVisibilityModel: { continentCode: false } },
        sorting: {
          sortModel: [{ field: defaultFilterOrderColumn, sort: defaultFilterOrderDirection }],
        },
      }}
    ></DataList>
  );
};
