import { useEffect, useState } from "react";
import { BreadCrumbNavigation } from "@components/breadcrumbs";
import { DataTableGrid } from "@components/data-table";
import {
  ModuleContainer,
  ModuleHeaderContainer,
  ModuleHeaderSubtitleContainer,
} from "@components/module";
import { ContactCardHeader } from "@features/contacts/index.styled";
import { useNotificationsService } from "@hooks";
import {
  ContactDetailsDto,
  OrderDetailsDto,
  OrderItemDetailsDto,
} from "@lib/network/swagger-client";
import { getWhereFilterQuery } from "@lib/query";
import { viewFormRoute } from "@lib/router";
import { Card, CardContent, Grid } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useRequestContext } from "@providers/request-provider";
import { DataView } from "components/data-view";
import { useRouteParams } from "typesafe-routes";
import { getCountryByCode, getFormattedDateTime } from "utils/helper";
import { orderFormBreadcrumbLinks } from "../constants";

export const OrderViewBase = () => {
  const context = useRequestContext();
  const { client } = context;
  const { id } = useRouteParams(viewFormRoute);
  const { notificationsService } = useNotificationsService();

  const [order, setOrder] = useState<OrderDetailsDto>();
  const [contact, setContact] = useState<ContactDetailsDto>();
  const [contactCountry, setContactCountry] = useState<string>("");
  const [orderItems, setOrderItems] = useState<OrderItemDetailsDto[] | undefined>();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await client.api.ordersDetail(id);
        setCustomer(data.contactId);
        setOrderItems(await getOrderItems(data.id!));
        setOrder(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [client]);

  const setCustomer = async (id: number) => {
    try {
      const { data } = await client.api.contactsDetail(id);
      setContact(data);
      if (data.countryCode) {
        setCustomerCountry(data.countryCode);
      }
    } catch (error) {
      console.log(error);
      notificationsService.error("Server error: could not retrieve contact details.");
    }
  };

  const setCustomerCountry = async (code: string) => {
    const country = await getCountryByCode(context, code);
    if (country) {
      setContactCountry(country);
    } else {
      notificationsService.error("Server error: country is not available.");
    }
  };

  const getOrderItems = async (orderId: number) => {
    try {
      const { data } = await client.api.orderItemsList({
        query: getWhereFilterQuery("orderId", orderId.toString()),
      });
      if (data.length > 0) {
        return data;
      } else {
        notificationsService.info("No order items available for seleted order.");
        return [];
      }
    } catch (error) {
      console.log(error);
      notificationsService.error("Server error: could not retrieve order items.");
    }
  };

  const nameAndAddress = (
    <div>
      <div>{`${contact?.firstName || ""} ${contact?.lastName || ""}`}</div>
      <div>{contact?.address1}</div>
      <div>{contact?.cityName}</div>
      <div>{contactCountry}</div>
    </div>
  );

  const orderViewData = [
    { label: "Customer", value: nameAndAddress },
    { label: "Id", value: order?.orderNumber || "" },
    { label: "Reference no", value: order?.refNo || "" },
    { label: "Order date", value: order?.createdAt ? getFormattedDateTime(order?.createdAt) : "" },
    { label: "Quantity", value: order?.quantity || "" },
    { label: "Total", value: order?.total || "" },
  ];

  const columns: GridColDef<OrderItemDetailsDto>[] = [
    {
      field: "productName",
      headerName: "Product",
      flex: 1,
    },
    {
      field: "licenseCode",
      headerName: "License",
      flex: 1,
    },
    {
      field: "unitPrice",
      headerName: "Unit price",
      flex: 1,
    },
    {
      field: "total",
      headerName: "Total",
      flex: 1,
    },
  ];

  return (
    <ModuleContainer>
      <ModuleHeaderContainer>
        <ModuleHeaderSubtitleContainer>
          <BreadCrumbNavigation
            links={orderFormBreadcrumbLinks}
            current={"View Order"}
          ></BreadCrumbNavigation>
        </ModuleHeaderSubtitleContainer>
      </ModuleHeaderContainer>
      <Grid container spacing={3}>
        {order && <DataView header="Order Info" rows={orderViewData}></DataView>}
        <Grid xs={12} sm={6} item>
          <Card>
            <CardContent>
              <ContactCardHeader title="Order Items"></ContactCardHeader>
              {orderItems && (
                <DataTableGrid
                  columns={columns}
                  data={orderItems}
                  autoHeight={true}
                  pageSize={undefined}
                  totalRowCount={undefined}
                  rowsPerPageOptions={undefined}
                  pageNumber={undefined}
                  dataViewMode="client"
                  setSortColumn={undefined}
                  setSortOrder={undefined}
                  setPageSize={undefined}
                  setSkipLimit={undefined}
                  setFilterField={undefined}
                  setFilterFieldValue={undefined}
                  setPageNumber={undefined}
                  handleColumnVisibilityModel={undefined}
                  initialState={undefined}
                  disableColumnFilter={true}
                  disablePagination={true}
                  showActionsColumn={false}
                  disableEditRoute={false}
                  disableViewRoute={false}
                />
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ModuleContainer>
  );
};
