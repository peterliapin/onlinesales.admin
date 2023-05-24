import { ModuleWrapper } from "@components/module-wrapper";
import { SavingBar } from "@components/SavingBar";
import { useNotificationsService } from "@hooks";
import { ContactDetailsDto, OrderDetailsDto } from "@lib/network/swagger-client";
import { defaultFilterLimit } from "@lib/query";
import { CoreModule } from "@lib/router";
import { Autocomplete, Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { useModuleWrapperContext } from "@providers/module-wrapper-provider";
import { useRequestContext } from "@providers/request-provider";
import { truncate } from "fs";
import { SyntheticEvent, useEffect, useState } from "react";
import { useCoreModuleNavigation } from "utils/helper";
import { isNotEmpty, isValidNumber, isValidOrEmptyNumber } from "utils/validators";
import { orderAddHeader, orderEditHeader, orderFormBreadcrumbLinks } from "../constants";

interface OrderFormProps {
  order: OrderDetailsDto | undefined;
  updateOrder: (order: OrderDetailsDto) => void;
  handleSave: () => void;
  isEdit: boolean;
}

export const OrderForm = ({ order, updateOrder, handleSave, isEdit }: OrderFormProps) => {
  const { notificationsService } = useNotificationsService();
  const { client } = useRequestContext();
  const { setSaving } = useModuleWrapperContext();
  const handleNavigation = useCoreModuleNavigation();
  const { setBusy } = useModuleWrapperContext();

  const [isLoading, setIsLoading] = useState(true);
  const [contactList, setContactList] = useState<ContactDetailsDto[]>([]);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [open, setOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<ContactDetailsDto>();
  const [isValidRefNo, setIsValidRefNo] = useState(true);
  const [isValidOrderNo, setIsValidOrderNo] = useState(true);
  const [isValidContactId, setIsValidContactId] = useState(true);
  const [isValidCurrency, setIsValidCurrency] = useState(true);
  const [isValidExchangeRate, setIsValidExchangeRate] = useState(true);
  const loading = open && contactList.length === 0;
  const header = isEdit ? orderEditHeader : orderAddHeader;

  useEffect(() => {
    setBusy(async () => {
      try {
        const { data } = await client.api.contactsDetail(order!.contactId);
        setSelectedContact(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    });
  }, [order]);

  useEffect(() => {
    if (!open) {
      setContactList([]);
    }
  }, [open]);

  const loadContacts = async (e: SyntheticEvent<Element, Event>, text: string) => {
    if (e.type != "change") return;

    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(async () => {
        const { data } = await client.api.contactsList({
          query: `${text}&filter[limit]=${defaultFilterLimit}`,
        });
        setContactList(data);
        setIsLoading(false);
      }, 800)
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedOrder: OrderDetailsDto = {
      ...order!,
      [name]: value,
    };
    updateOrder(updatedOrder);
  };

  const validateAndSave = () =>
    setSaving(async () => {
      try {
        if (isValid()) {
          await handleSave();
          handleSuccess();
        }
      } catch (e) {
        console.log(e);
        notificationsService.error("Server error occurred.");
      }
    });

  const isValid = () => {
    setIsValidRefNo(true);
    setIsValidOrderNo(true);
    setIsValidContactId(true);
    setIsValidCurrency(true);
    setIsValidExchangeRate(true);

    if (!isValidNumber(order && order.contactId)) {
      setIsValidContactId(false);
      return false;
    }
    if (!isNotEmpty(order && order.refNo)) {
      setIsValidRefNo(false);
      return false;
    }
    if (!isNotEmpty(order && order.orderNumber)) {
      setIsValidOrderNo(false);
      return false;
    }
    if (!isNotEmpty(order && order.currency)) {
      setIsValidCurrency(false);
      return false;
    }
    if (!isValidOrEmptyNumber(order && order.exchangeRate)) {
      setIsValidExchangeRate(false);
      return false;
    }
    return true;
  };

  const handleSuccess = () => {
    notificationsService.success(`Order ${isEdit ? "updated" : "added"} successfully.`);
    handleNavigation(CoreModule.orders);
  };

  const handleCancel = () => {
    handleNavigation(CoreModule.orders);
  };

  const handleContactChange = (value: ContactDetailsDto) => {
    setSelectedContact(value);
    const updatedOrder: OrderDetailsDto = {
      ...order!,
      ["contactId"]: value.id!,
    };
    updateOrder(updatedOrder);
  };

  const getOptionLabel = (contact: ContactDetailsDto) => {
    if (contact.firstName || contact.lastName) return `${contact.firstName} ${contact.lastName}`;
    else return contact.email;
  };

  return (
    <ModuleWrapper
      breadcrumbs={orderFormBreadcrumbLinks}
      currentBreadcrumb={header}
      saveIndicatorElement={<SavingBar />}
    >
      {isEdit && isLoading ? (
        <div>Loading...</div>
      ) : (
        order && (
          <Card>
            <CardContent>
              <Grid container spacing={3}>
                <Grid xs={12} sm={6} item>
                  <Autocomplete
                    disablePortal
                    open={open}
                    onOpen={() => {
                      setOpen(true);
                    }}
                    onClose={() => {
                      setOpen(false);
                    }}
                    options={contactList}
                    getOptionLabel={(option) => getOptionLabel(option)}
                    value={selectedContact || null}
                    onChange={(event, value) => handleContactChange(value!)}
                    onInputChange={(event, value) => {
                      loadContacts(event, value);
                    }}
                    loading={loading}
                    filterOptions={(x) => x}
                    fullWidth
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Contact Name"
                        error={!isValidContactId}
                        helperText={!isValidContactId ? "Contact cannot be empty" : ""}
                      />
                    )}
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="Ref No"
                    name="refNo"
                    value={order.refNo || ""}
                    placeholder="Enter Ref No"
                    variant="outlined"
                    onChange={handleInputChange}
                    error={!isValidRefNo}
                    helperText={!isValidRefNo ? "Ref No cannot be empty" : ""}
                    fullWidth
                  ></TextField>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="Order No"
                    name="orderNumber"
                    value={order.orderNumber || ""}
                    placeholder="Enter Order Number"
                    variant="outlined"
                    error={!isValidOrderNo}
                    helperText={!isValidOrderNo ? "Order Number cannot be empty" : ""}
                    onChange={handleInputChange}
                    fullWidth
                  ></TextField>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="Affiliate Name"
                    name="affiliateName"
                    value={order.affiliateName || ""}
                    placeholder="Enter Affiliate Name"
                    variant="outlined"
                    onChange={handleInputChange}
                    fullWidth
                  ></TextField>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="Exchange Rate"
                    name="exchangeRate"
                    value={order.exchangeRate || ""}
                    placeholder="Enter Exchange Rate"
                    variant="outlined"
                    error={!isValidExchangeRate}
                    helperText={
                      !isValidExchangeRate ? "Exchange rate should be a valid number" : ""
                    }
                    onChange={handleInputChange}
                    fullWidth
                  ></TextField>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="Currency"
                    name="currency"
                    value={order.currency || ""}
                    placeholder="Enter Currency"
                    variant="outlined"
                    error={!isValidCurrency}
                    helperText={!isValidCurrency ? "Currency cannot be empty" : ""}
                    onChange={handleInputChange}
                    fullWidth
                  ></TextField>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="Source"
                    name="source"
                    value={order.source || ""}
                    placeholder="Enter Source"
                    variant="outlined"
                    onChange={handleInputChange}
                    fullWidth
                  ></TextField>
                </Grid>
                <Grid xs={12} sm={6} item></Grid>
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
        )
      )}
    </ModuleWrapper>
  );
};
