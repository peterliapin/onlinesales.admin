import { OrderDetailsDto, OrderImportDto } from "lib/network/swagger-client";
import { useRequestContext } from "providers/request-provider";
import {
  defaultFilterOrderColumn,
  defaultFilterOrderDirection,
  modelName,
  orderListPageBreadcrumb,
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

  const exportOrdersAsync = async (query: string) => {
    const response = await client.api.ordersExportList({
      query: query
    });

    return response.text();        
  };

  const handleOrderImport = async (data: OrderImportDto[]) => {
    await client.api.ordersImportCreate(data);
  };

  const columns: GridColDef<OrderDetailsDto>[] = [
    {
      field: "orderNumber",
      headerName: "Order Number",
      flex: 2,
    },
    {
      field: "refNo",
      headerName: "Reference Number",
      flex: 2,
    },
    {
      field: "affiliateName",
      headerName: "Affiliate",
      flex: 2,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 2,
    },
    {
      field: "total",
      headerName: "Total",
      flex: 2,
    },
    {
      field: "exchangeRate",
      headerName: "Exchange Rate",
      flex: 2,
    },
    {
      field: "currency",
      headerName: "Currency",
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
      currentBreadcrumb={orderListPageBreadcrumb}
      defaultFilterOrderColumn={defaultFilterOrderColumn}
      defaultFilterOrderDirection={defaultFilterOrderDirection}
      searchBarLabel={searchLabel}
      endRoute={CoreModule.orders}
      getModelDataList={getOrderList}
      exportAsync={exportOrdersAsync}
      exportFileName="orders"
      dataImportCreate={handleOrderImport}
      initialGridState={{
        columns: { columnVisibilityModel: { currency: false, exchangeRate: false } },
        sorting: {
          sortModel: [{ field: defaultFilterOrderColumn, sort: defaultFilterOrderDirection }],
        },
      }}
    ></DataList>
  );
};
