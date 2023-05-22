import { ModuleWrapper } from "@components/module-wrapper";
import { SavingBar } from "@components/SavingBar";
import { useNotificationsService } from "@hooks";
import {
  AccountDetailsDto,
  OrderDetailsDto,
  OrderItemDetailsDto,
} from "@lib/network/swagger-client";
import { CoreModule } from "@lib/router";
import { Autocomplete, Button, Card, CardContent, Divider, Grid, TextField } from "@mui/material";
import { useModuleWrapperContext } from "@providers/module-wrapper-provider";
import { useRequestContext } from "@providers/request-provider";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { getContinentList, getCountryList, useCoreModuleNavigation } from "utils/helper";
import { isNotEmpty, isValidOrEmptyNumber } from "utils/validators";
import { orderAddHeader, orderEditHeader, orderFormBreadcrumbLinks } from "../constants";

interface OrderFormProps {
  order: OrderDetailsDto;
  orderItems: OrderItemDetailsDto[];
  updateOrder: (order: OrderDetailsDto) => void;
  handleSave: () => void;
  isEdit: boolean;
}

type Country = {
  code: string;
  name: string;
};

type Continent = {
  code: string;
  name: string;
};

export const OrderForm = ({
  order,
  orderItems,
  updateOrder,
  handleSave,
  isEdit,
}: OrderFormProps) => {
  const { notificationsService } = useNotificationsService();
  const context = useRequestContext();
  const { setSaving } = useModuleWrapperContext();
  const handleNavigation = useCoreModuleNavigation();

  const [countryList, setCountryList] = useState<Country[]>([]);
  const [continentList, setContinentList] = useState<Continent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newSocialMediaKey, setNewSocialMediaKey] = useState("");
  const [newSocialMediaValue, setNewSocialMediaValue] = useState("");
  const [nameIsEmpty, setNameIsEmpty] = useState(false);
  const [isValidRevenue, setIsValidRevenue] = useState(true);

  const header = isEdit ? orderEditHeader : orderAddHeader;

  useEffect(() => {
    (async () => {
      const countries = await getCountryList(context);
      const continents = await getContinentList(context);
      if (countries) {
        setCountryList(Object.entries(countries).map(([code, name]) => ({ code, name })));
      } else {
        notificationsService.error("Server error: country list not available.");
      }
      if (continents) {
        setContinentList(Object.entries(continents).map(([code, name]) => ({ code, name })));
      } else {
        notificationsService.error("Server error: continents list not available.");
      }
      setIsLoading(false);
    })();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  };

  const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
  };

  const validateAndSave = () => setSaving(async () => {});

  const handleSuccess = () => {
    notificationsService.success(`Account ${isEdit ? "updated" : "added"} successfully.`);
    handleNavigation(CoreModule.accounts);
  };

  const handleCancel = () => {
    handleNavigation(CoreModule.accounts);
  };

  const handleCountryChange = (
    e: SyntheticEvent<Element, Event>,
    value: { code: string; name: string } | null
  ) => {
    if (value) {
    }
  };

  const handleOrderItemChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {};

  const handleOrderItemRemove = (index: number) => {};

  const handleOrderItemAdd = () => {};

  return (
    <ModuleWrapper
      breadcrumbs={orderFormBreadcrumbLinks}
      currentBreadcrumb={header}
      saveIndicatorElement={<SavingBar />}
    >
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Contact Name"
                name="contactId"
                value={order.contactId || ""}
                placeholder="Enter Contact Name"
                variant="outlined"
                onChange={handleInputChange}
                fullWidth
              ></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Ref No"
                name="refNo"
                value={order.refNo || ""}
                placeholder="Enter Ref No"
                variant="outlined"
                onChange={handleInputChange}
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
                onChange={handleInputChange}
                fullWidth
              ></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Affiliate Name"
                name="affiliateName"
                value={""}
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
                onChange={handleInputChange}
                fullWidth
              ></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Data"
                name="data"
                value={order.data}
                placeholder="Enter Data"
                variant="outlined"
                onChange={handleTagInputChange}
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
            <Grid xs={12} sm={12} item>
              <Divider textAlign="left">Order Items</Divider>
              <Grid container spacing={3}>
                {orderItems.map((item, index) => (
                  <>
                    <Grid key={index} xs={12} sm={4} item>
                      <TextField
                        label="Product Name"
                        value={item.productName}
                        variant="outlined"
                        fullWidth
                        disabled
                      />
                    </Grid>
                    <Grid key={index} xs={12} sm={4} item>
                      <TextField
                        label="License Code"
                        value={item.licenseCode}
                        fullWidth
                        onChange={(event) => handleOrderItemChange(event, index)}
                      />
                    </Grid>
                    <Grid key={index} xs={12} sm={4} item>
                      <Button onClick={() => handleOrderItemRemove(index)}>Remove</Button>
                    </Grid>
                  </>
                ))}
                <Grid xs={12} sm={4} item>
                  <Button onClick={handleOrderItemAdd}>Add</Button>
                </Grid>
              </Grid>
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
    </ModuleWrapper>
  );
};
