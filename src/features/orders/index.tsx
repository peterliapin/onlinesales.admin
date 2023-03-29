import { OrderDetailsDto, OrderImportDto } from "lib/network/swagger-client";
import { useRequestContext } from "providers/request-provider";
import {
  accountListCurrentBreadcrumb,
  defaultFilterOrderColumn,
  defaultFilterOrderDirection,
  modelName,
  searchLabel,
} from "./constants";
import { DataList } from "components/data-list";
import { GridColDef } from "@mui/x-data-grid";
import { CoreModule } from "lib/router";
import { dataListBreadcrumbLinks } from "utils/constants";

export const Orders = () => {
  const { client } = useRequestContext();

  const getOrderList = async (query: string) => {
    try {
      const result = await client.api.ordersList({
        query: query,
      });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getOrderExportUrlAsync = async (query: string) => {
    const { url } = await client.api.ordersExportList({
      query: query,
    });
    return url;
  };

  const handleOrderImport = async (data: OrderImportDto[]) => {
    await client.api.ordersImportCreate(data);
  };

  const columns: GridColDef<OrderDetailsDto>[] = [
    {
      field: "orderNumber",
      headerName: "Order Number",
      flex: 1,
    },
    {
      field: "refNo",
      headerName: "Reference Number",
      flex: 1,
    },
    {
      field: "affiliateName",
      headerName: "Affiliate",
      flex: 1,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 1,
    },
    {
      field: "total",
      headerName: "Total",
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
  ];

  return (
    <DataList
      modelName={modelName}
      columns={columns}
      dataListBreadcrumbLinks={dataListBreadcrumbLinks}
      currentBreadcrumb={accountListCurrentBreadcrumb}
      defaultFilterOrderColumn={defaultFilterOrderColumn}
      defaultFilterOrderDirection={defaultFilterOrderDirection}
      searchBarLabel={searchLabel}
      endRoute={CoreModule.orders}
      getModelDataList={getOrderList}
      getExportUrl={getOrderExportUrlAsync}
      dataImportCreate={handleOrderImport}
      initialGridState={{
        columns: {},
        sorting: {
          sortModel: [{ field: defaultFilterOrderColumn, sort: defaultFilterOrderDirection }],
        },
      }}
    ></DataList>
  );
};
