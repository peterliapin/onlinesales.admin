import { ChangeEvent, useEffect, useState } from "react";
import { ContactCardHeader } from "@features/contacts/index.styled";
import { useNotificationsService } from "@hooks";
import {
  ContactDetailsDto,
  OrderDetailsDto,
  OrderItemDetailsDto,
} from "@lib/network/swagger-client";
import { getWhereFilterQuery } from "@lib/query";
import { CoreModule, getCoreModuleRoute, getViewFormRoute, viewFormRoute } from "@lib/router";
import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Link,
  TextField,
} from "@mui/material";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import { useRequestContext } from "@providers/request-provider";
import { DataView } from "components/data-view";
import { useRouteParams } from "typesafe-routes";
import { getCountryByCode, getFormattedDateTime } from "utils/helper";
import { orderFormBreadcrumbLinks } from "../constants";
import { ModuleWrapper } from "@components/module-wrapper";
import { GhostLink } from "@components/ghost-link";
import { ActionButtonContainer } from "@components/data-table/index.styled";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { isNotEmpty, isValidNumber, isValidOrEmptyNumber } from "utils/validators";

export const OrderViewBase = () => {
  const context = useRequestContext();
  const { client } = context;
  const { id } = useRouteParams(viewFormRoute);
  const { notificationsService } = useNotificationsService();

  const [order, setOrder] = useState<OrderDetailsDto | undefined>();
  const [contact, setContact] = useState<ContactDetailsDto>();
  const [contactCountry, setContactCountry] = useState<string>("");
  const [orderItems, setOrderItems] = useState<OrderItemDetailsDto[] | undefined>();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [orderItem, setOrderItem] = useState<OrderItemDetailsDto>();
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [isValidProductName, setIsValidProductName] = useState(true);
  const [isValidLicenseCode, setIsValidLicenseCode] = useState(true);
  const [isValidUnitPrice, setIsValidUnitPrice] = useState(true);
  const [isValidCurrency, setIsValidCurrency] = useState(true);
  const [isValidQuantity, setIsValidQuantity] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await client.api.ordersDetail(id);
        setContactState(data.contactId);
        setOrder(data);
        setOrderItems(await getOrderItems(data.id!));
      } catch (e) {
        console.log(e);
      }
    })();
  }, [client]);

  const setContactState = async (id: number) => {
    try {
      const { data } = await client.api.contactsDetail(id);
      setContact(data);
      if (data.countryCode) {
        setContactCountryState(data.countryCode);
      }
    } catch (error) {
      console.log(error);
      notificationsService.error("Server error: could not retrieve contact details.");
    }
  };

  const setContactCountryState = async (code: string) => {
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
        query: getWhereFilterQuery("orderId", orderId.toString(), "equals"),
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

  const handleDelete = (row: any) => {
    setOpenConfirmation(true);
    setOrderItem(orderItems?.find((x) => x.id === row.id));
  };

  const handleConfirmationClose = () => {
    setOpenConfirmation(false);
  };

  const handleConfirmation = async () => {
    setOpenConfirmation(false);
    try {
      await client.api.orderItemsDelete(orderItem!.id!);
      setOrderItems(await getOrderItems(order!.id!));
      notificationsService.success("Order item deleted!.");
    } catch (error) {
      console.log(error);
      notificationsService.error("Server error: order item not deleted.");
    }
  };

  const contactRef =
    contact?.firstName || contact?.lastName
      ? `${contact.firstName || ""} ${contact.lastName || ""}`
      : contact?.email;

  const nameAndAddress = contact && (
    <div>
      <div>
        <Link
          to={`${getCoreModuleRoute(CoreModule.contacts)}/${getViewFormRoute(contact.id!)}`}
          state={contact}
          component={GhostLink}
          underline="hover"
        >
          {contactRef}
        </Link>
      </div>
      <div>{contact.address1 || ""}</div>
      <div>{contact.cityName || ""}</div>
      <div>{contactCountry || ""}</div>
    </div>
  );

  const orderViewData = [
    { label: "Customer", value: nameAndAddress || "" },
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
      flex: 2,
    },
    {
      field: "licenseCode",
      headerName: "License",
      flex: 2,
    },
    {
      field: "unitPrice",
      headerName: "Unit price",
      flex: 2,
    },
    {
      field: "currency",
      headerName: "Currency",
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
  ];

  const actionsColumn: GridColDef | any = {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    align: "right",
    headerAlign: "center",
    filterable: false,
    sortable: false,
    disableColumnMenu: true,
    renderCell: (params: GridCellParams) => {
      return (
        <ActionButtonContainer>
          <IconButton onClick={() => handleEditClick(params)}>
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton disabled={isEdit} onClick={() => handleDelete(params)}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </ActionButtonContainer>
      );
    },
  };

  const handleEditClick = (row: any) => {
    setIsEdit(true);
    setOrderItem(orderItems?.find((x) => x.id === row.id));
  };

  const handleOrderItemChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedOrderItem: OrderItemDetailsDto = {
      ...orderItem!,
      [name]: value,
    };
    setOrderItem(updatedOrderItem);
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

  const handleAdd = () => {
    setOrderItem({
      productName: "",
      orderId: order!.id!,
      licenseCode: "",
      unitPrice: 0,
      currency: "",
      quantity: 0,
    });
    setIsEdit(true);
  };

  const validateAndSave = async () => {
    if (!isValid()) return;

    if (orderItem?.id) {
      await client.api.orderItemsPartialUpdate(orderItem.id!, orderItem!);
    } else await client.api.orderItemsCreate(orderItem!);

    setOrderItems(await getOrderItems(order!.id!));
    notificationsService.success("Order updated successfully.");
    setIsEdit(false);
  };

  const isValid = () => {
    setIsValidProductName(true);
    setIsValidLicenseCode(true);
    setIsValidUnitPrice(true);
    setIsValidCurrency(true);
    setIsValidQuantity(true);

    if (!isNotEmpty(orderItem && orderItem.productName)) {
      setIsValidProductName(false);
      return false;
    }
    if (!isNotEmpty(orderItem && orderItem.licenseCode)) {
      setIsValidLicenseCode(false);
      return false;
    }
    if (!isValidOrEmptyNumber(orderItem && orderItem.unitPrice)) {
      setIsValidUnitPrice(false);
      return false;
    }
    if (!isNotEmpty(orderItem && orderItem.currency)) {
      setIsValidCurrency(false);
      return false;
    }
    if (!isValidNumber(orderItem && orderItem.quantity)) {
      setIsValidQuantity(false);
      return false;
    }

    return true;
  };

  const gridFinalizedColumns = columns.concat(actionsColumn);

  return (
    <ModuleWrapper breadcrumbs={orderFormBreadcrumbLinks} currentBreadcrumb="View Order">
      <Grid container spacing={3}>
        <Grid xs={12} sm={5} item>
          {order && <DataView header="Order Info" rows={orderViewData}></DataView>}
        </Grid>
        <Grid xs={12} sm={7} item>
          <Card>
            {orderItems && (
              <CardContent>
                <div
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                >
                  <ContactCardHeader title="Order Items" />
                  <Button variant="contained" color="primary" onClick={handleAdd}>
                    Add Order Item
                  </Button>
                </div>
                <DataGrid
                  columns={gridFinalizedColumns}
                  rows={orderItems || []}
                  loading={!orderItems}
                  checkboxSelection={false}
                  autoHeight={true}
                  pagination={undefined}
                  hideFooter={true}
                />
              </CardContent>
            )}
          </Card>
          {isEdit && (
            <Card>
              <CardContent>
                <ContactCardHeader title="Edit Order Item"></ContactCardHeader>
                <Grid container spacing={3}>
                  <Grid xs={12} sm={12} item>
                    <TextField
                      label="Product Name"
                      name="productName"
                      value={(orderItem && orderItem.productName) || ""}
                      variant="outlined"
                      fullWidth
                      error={!isValidProductName}
                      helperText={!isValidProductName ? "Product Name cannot be empty" : ""}
                      onChange={handleOrderItemChange}
                    />
                  </Grid>
                  <Grid xs={12} sm={12} item>
                    <TextField
                      label="License Code"
                      name="licenseCode"
                      value={(orderItem && orderItem.licenseCode) || ""}
                      fullWidth
                      error={!isValidLicenseCode}
                      helperText={!isValidLicenseCode ? "License Code cannot be empty" : ""}
                      onChange={handleOrderItemChange}
                    />
                  </Grid>
                  <Grid xs={12} sm={12} item>
                    <TextField
                      label="Unit Price"
                      name="unitPrice"
                      value={(orderItem && orderItem.unitPrice) || ""}
                      fullWidth
                      error={!isValidUnitPrice}
                      helperText={!isValidUnitPrice ? "Unit Price should be a valid number" : ""}
                      onChange={handleOrderItemChange}
                    />
                  </Grid>
                  <Grid xs={12} sm={12} item>
                    <TextField
                      label="Currency"
                      name="currency"
                      value={(orderItem && orderItem.currency) || ""}
                      error={!isValidCurrency}
                      helperText={!isValidCurrency ? "Currency cannot be empty" : ""}
                      fullWidth
                      onChange={handleOrderItemChange}
                    />
                  </Grid>
                  <Grid xs={12} sm={12} item>
                    <TextField
                      label="Quantity"
                      name="quantity"
                      value={(orderItem && orderItem.quantity) || ""}
                      fullWidth
                      error={!isValidQuantity}
                      helperText={!isValidQuantity ? "Quantity should be a valid number" : ""}
                      onChange={handleOrderItemChange}
                    />
                  </Grid>
                  <Grid xs={12} sm={12} item>
                    <TextField
                      label="Source"
                      name="source"
                      value={(orderItem && orderItem.source) || ""}
                      fullWidth
                      onChange={handleOrderItemChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      onClick={handleCancel}
                      fullWidth
                    >
                      Cancel
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      onClick={validateAndSave}
                      fullWidth
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
      <Dialog open={openConfirmation} onClose={handleConfirmationClose}>
        <DialogTitle>{`Deleting order item ${orderItem?.productName}`}</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete this order item?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmationClose} autoFocus variant="outlined">
            No
          </Button>
          <Button onClick={handleConfirmation} autoFocus variant="outlined" color="error">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </ModuleWrapper>
  );
};
