import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { ContactDetailsDto } from "lib/network/swagger-client";
import { CoreModule, viewFormRoute } from "lib/router";
import { useRequestContext } from "providers/request-provider";
import { useRouteParams } from "typesafe-routes";
import { ContactCardHeader, DeleteButtonContainer } from "../../index.styled";
import { getCountryList } from "utils/general-helper";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCoreModuleNavigation, useNotificationsService } from "@hooks";
import { DataView } from "components/data-view";
import { useModuleWrapperContext } from "@providers/module-wrapper-provider";

export const ContactView = () => {
  const { notificationsService } = useNotificationsService();
  const context = useRequestContext();
  const handleNavigation = useCoreModuleNavigation();
  const { setBusy } = useModuleWrapperContext();

  const { client } = context;
  const { id } = useRouteParams(viewFormRoute);
  const [contact, setContact] = useState<ContactDetailsDto>({
    email: "",
  });
  const [selectedCountry, setSelectedCountry] = useState("");
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const contactViewData = contact && [
    { label: "Email", value: contact.email || "" },
    { label: "Phone", value: contact.phone || "" },
    { label: "Country", value: selectedCountry || "" },
    { label: "City", value: contact.cityName || "" },
    { label: "Address 1", value: contact.address1 || "" },
    { label: "Address 2", value: contact.address2 || "" },
  ];

  useEffect(() => {
    setBusy(async () => {
      try {
        const { data } = await client.api.contactsDetail(id);
        setCountry(data.countryCode);
        setContact(data);
      } catch (e) {
        console.log(e);
      }
    });
  }, [client]);

  const setCountry = async (countryCode: string | null | undefined) => {
    if (countryCode) {
      const countries = await getCountryList(context);
      if (countries) {
        const countryList = Object.entries(countries).map(([code, name]) => ({ code, name }));
        setSelectedCountry(countryList.find((c) => c.code === countryCode)!.name);
      } else {
        notificationsService.error("Server error: country list not available.");
      }
    }
  };

  const handleDelete = () => {
    setOpenConfirmation(true);
  };

  const handleConfirmationClose = () => {
    setOpenConfirmation(false);
  };

  const handleConfirmation = async () => {
    setOpenConfirmation(false);
    try {
      await client.api.contactsDelete(contact.id!);
      notificationsService.success("Contact deleted");
      handleNavigation(CoreModule.contacts);
    } catch (error) {
      console.log(error);
      notificationsService.error("Server error: contact not deleted.");
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} item>
          <DataView header="Contact details" rows={contactViewData}></DataView>
        </Grid>
        <Grid xs={12} sm={6} item>
          <Card>
            <CardContent>
              <ContactCardHeader title="Invoices/Billing"></ContactCardHeader>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} item>
          <Card>
            <CardContent>
              <ContactCardHeader title="Emails"></ContactCardHeader>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} item>
          <Card>
            <CardContent>
              <ContactCardHeader title="Other actions"></ContactCardHeader>
              <Divider variant="fullWidth" />
            </CardContent>
            <CardContent>
              <Typography>
                {`Remove this customer's data if he requested that, if not please be aware that what
                has been deleted can never be brought back.`}
              </Typography>
            </CardContent>
            <CardActions>
              <DeleteButtonContainer>
                <Button
                  startIcon={<DeleteIcon />}
                  type="submit"
                  variant="contained"
                  color="error"
                  onClick={handleDelete}
                >
                  Delete Account
                </Button>
              </DeleteButtonContainer>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Dialog open={openConfirmation} onClose={handleConfirmationClose}>
        <DialogTitle>{`Deleting contact ${contact.email}`}</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete this contact?</DialogContentText>
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
    </>
  );
};
