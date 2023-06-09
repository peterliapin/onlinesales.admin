import { ChangeEvent, useEffect, useState } from "react";
import { ContactCardHeader } from "@features/contacts/index.styled";
import { useNotificationsService } from "@hooks";
import {
  ContactDetailsDto,
  OrderDetailsDto,
  OrderItemDetailsDto,
} from "@lib/network/swagger-client";
import { getWhereFilterQuery } from "@providers/query-provider";
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
  Tooltip,
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
import { useModuleWrapperContext } from "@providers/module-wrapper-provider";
import { useFormik, FormikHelpers } from "formik";
import zod from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { execSubmitWithToast } from "utils/formik-helpers";
import { useErrorDetailsModal } from "@providers/error-details-modal-provider";

export const OrderViewBase = () => {
  const context = useRequestContext();
  const { client } = context;
  const { id } = useRouteParams(viewFormRoute);
  const { notificationsService } = useNotificationsService();
  const { setBusy } = useModuleWrapperContext();
  const { Show: showErrorModal } = useErrorDetailsModal()!;

  const [order, setOrder] = useState<OrderDetailsDto | undefined>();
  const [contact, setContact] = useState<ContactDetailsDto>();
  const [contactCountry, setContactCountry] = useState<string>("");
  const [orderItems, setOrderItems] = useState<OrderItemDetailsDto[] | undefined>();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [orderItem, setOrderItem] = useState<OrderItemDetailsDto>();
  const [openConfirmation, setOpenConfirmation] = useState(false);

  useEffect(() => {
    setBusy(async () => {
      try {
        const { data } = await client.api.ordersDetail(id);
        setContactState(data.contactId);
        setOrder(data);
        setOrderItems(await getOrderItems(data.id!));
      } catch (e) {
        console.log(e);
      }
    });
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
    const editingOrderItem = orderItems?.find((x) => x.id === row.id);
    formik.setValues(editingOrderItem!);
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

  const handleAdd = () => {
    formik.setValues({
      productName: "",
      orderId: order!.id!,
      licenseCode: "",
      unitPrice: 0,
      currency: "",
      quantity: 0,
    });
    setIsEdit(true);
  };

  const gridFinalizedColumns = columns.concat(actionsColumn);

  const submitFunc = async (
    values: OrderItemDetailsDto,
    helpers: FormikHelpers<OrderItemDetailsDto>
  ) => {
    try {
      if (values?.id) {
        await client.api.orderItemsPartialUpdate(values.id!, values!);
      } else await client.api.orderItemsCreate(values!);
      setOrderItems(await getOrderItems(order!.id!));
      setIsEdit(false);
    } catch (error) {
      formik.setSubmitting(false);
      throw error;
    }
  };

  const submit = (values: OrderItemDetailsDto, helpers: FormikHelpers<OrderItemDetailsDto>) => {
    execSubmitWithToast<OrderItemDetailsDto>(
      values,
      helpers,
      submitFunc,
      notificationsService,
      showErrorModal,
      "order item"
    );
  };

  const OrderItemEditValidationScheme = zod.object({
    productName: zod.string(),
    licenseCode: zod.string(),
    unitPrice: zod.number().positive(),
    currency: zod.string(),
    quantity: zod.number().positive(),
  });

  const formik = useFormik({
    validationSchema: toFormikValidationSchema(OrderItemEditValidationScheme),
    initialValues: {
      orderId: 0,
      productName: "",
      licenseCode: "",
      unitPrice: 0,
      currency: "",
      quantity: 0,
    },
    onSubmit: submit,
    validateOnChange: false,
  });

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
            <form onSubmit={formik.handleSubmit}>
              <Card>
                <CardContent>
                  <ContactCardHeader title="Edit Order Item"></ContactCardHeader>
                  <Grid container spacing={3}>
                    <Grid xs={12} sm={12} item>
                      <TextField
                        disabled={formik.isSubmitting}
                        label="Product Name"
                        name="productName"
                        value={formik.values.productName || ""}
                        variant="outlined"
                        fullWidth
                        error={formik.touched.productName && Boolean(formik.errors.productName)}
                        helperText={formik.touched.productName && formik.errors.productName}
                        onChange={formik.handleChange}
                      />
                    </Grid>
                    <Grid xs={12} sm={12} item>
                      <TextField
                        disabled={formik.isSubmitting}
                        label="License Code"
                        name="licenseCode"
                        value={formik.values.licenseCode || ""}
                        fullWidth
                        error={formik.touched.licenseCode && Boolean(formik.errors.licenseCode)}
                        helperText={formik.touched.licenseCode && formik.errors.licenseCode}
                        onChange={formik.handleChange}
                      />
                    </Grid>
                    <Grid xs={12} sm={12} item>
                      <Tooltip title="Unit Price field must contain only numbers">
                        <TextField
                          disabled={formik.isSubmitting}
                          label="Unit Price"
                          name="unitPrice"
                          type="number"
                          value={formik.values.unitPrice || ""}
                          fullWidth
                          error={formik.touched.unitPrice && Boolean(formik.errors.unitPrice)}
                          helperText={formik.touched.unitPrice && formik.errors.unitPrice}
                          onChange={formik.handleChange}
                        />
                      </Tooltip>
                    </Grid>
                    <Grid xs={12} sm={12} item>
                      <TextField
                        disabled={formik.isSubmitting}
                        label="Currency"
                        name="currency"
                        value={formik.values.currency || ""}
                        error={formik.touched.currency && Boolean(formik.errors.currency)}
                        helperText={formik.touched.currency && formik.errors.currency}
                        fullWidth
                        onChange={formik.handleChange}
                      />
                    </Grid>
                    <Grid xs={12} sm={12} item>
                      <Tooltip title="Quantity field must contain only numbers">
                        <TextField
                          disabled={formik.isSubmitting}
                          label="Quantity"
                          name="quantity"
                          type="number"
                          value={formik.values.quantity || ""}
                          fullWidth
                          error={formik.touched.quantity && Boolean(formik.errors.quantity)}
                          helperText={formik.touched.quantity && formik.errors.quantity}
                          onChange={formik.handleChange}
                        />
                      </Tooltip>
                    </Grid>
                    <Grid xs={12} sm={12} item>
                      <TextField
                        disabled={formik.isSubmitting}
                        label="Source"
                        name="source"
                        value={formik.values.source || ""}
                        fullWidth
                        onChange={formik.handleChange}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        disabled={formik.isSubmitting}
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
                        disabled={formik.isSubmitting}
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Save
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </form>
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
