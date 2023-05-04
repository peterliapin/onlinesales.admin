import { SyntheticEvent, useEffect, useState } from "react";
import { Autocomplete, Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { ContactDetailsDto } from "lib/network/swagger-client";
import { CoreModule } from "lib/router";
import { contactAddHeader, contactEditHeader, contactFormBreadcrumbLinks } from "../constants";
import { getCountryList, useCoreModuleNavigation } from "utils/helper";
import { isValidEmail, isValidNumber } from "utils/validators";
import { useRequestContext } from "@providers/request-provider";
import { useNotificationsService } from "@hooks";
import { ModuleWrapper } from "@components/module-wrapper";
import { useModuleWrapperContext } from "@providers/module-wrapper-provider";
import { SavingBar } from "@components/SavingBar";

interface ContactFormProps {
  contact: ContactDetailsDto;
  updateContact: (contact: ContactDetailsDto | any) => void;
  handleSave: () => void;
  isEdit: boolean;
}

type Country = {
  code: string;
  name: string;
};

export const ContactForm = ({ contact, updateContact, handleSave, isEdit }: ContactFormProps) => {
  const { notificationsService } = useNotificationsService();
  const context = useRequestContext();
  const handleNavigation = useCoreModuleNavigation();
  const { setSaving } = useModuleWrapperContext();

  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInvalidNumber, setIsInvalidNumber] = useState(false);
  const [countryList, setCountryList] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const header = isEdit ? contactEditHeader : contactAddHeader;

  useEffect(() => {
    (async () => {
      const countries = await getCountryList(context);
      if (countries) {
        setCountryList(Object.entries(countries).map(([code, name]) => ({ code, name })));
        setIsLoading(false);
      } else {
        notificationsService.error("Server error: country list not available.");
      }
    })();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateContact((currentContact: ContactDetailsDto) => ({ ...currentContact, [name]: value }));
  };

  const handleCountryChange = (
    e: SyntheticEvent<Element, Event>,
    value: { code: string; name: string } | null
  ) => {
    if (value) {
      updateContact((currentContact: ContactDetailsDto) => ({
        ...currentContact,
        ["countryCode"]: value.code,
      }));
    }
  };

  const validateAndSave = () =>
    setSaving(async () => {
      setIsInvalidEmail(false);
      setIsInvalidNumber(false);

      if (!isValidEmail(contact.email)) {
        setIsInvalidEmail(true);
      } else if (!isValidNumber(contact.timezone)) {
        setIsInvalidNumber(true);
      } else {
        try {
          handleSave();
          handleSuccess();
        } catch (e) {
          console.log(e);
          notificationsService.error("Server error occurred.");
        }
      }
    });

  const handleSuccess = () => {
    notificationsService.success(`Contact ${isEdit ? "updated" : "added"} successfully.`);
    handleNavigation(CoreModule.contacts);
  };

  const handleCancel = () => {
    handleNavigation(CoreModule.contacts);
  };

  return (
    <ModuleWrapper
      breadcrumbs={contactFormBreadcrumbLinks}
      currentBreadcrumb={header}
      saveIndicatorElement={<SavingBar />}
    >
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} item>
              <TextField
                label="First Name"
                name="firstName"
                value={contact.firstName || ""}
                placeholder="Enter first name"
                variant="outlined"
                onChange={handleInputChange}
                fullWidth
              ></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Last Name"
                name="lastName"
                value={contact.lastName || ""}
                placeholder="Enter last name"
                variant="outlined"
                onChange={handleInputChange}
                fullWidth
              ></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Email Address"
                name="email"
                value={contact.email || ""}
                placeholder="Enter email address"
                type="email"
                variant="outlined"
                onChange={handleInputChange}
                fullWidth
                error={isInvalidEmail}
                helperText={isInvalidEmail ? "Enter a valid email address" : ""}
              ></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Phone"
                name="phone"
                value={contact.phone || ""}
                placeholder="Enter phone number"
                variant="outlined"
                onChange={handleInputChange}
                fullWidth
              ></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Address 1"
                name="address1"
                value={contact.address1 || ""}
                placeholder="Enter address"
                variant="outlined"
                onChange={handleInputChange}
                fullWidth
              ></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Address 2"
                name="address2"
                value={contact.address2 || ""}
                placeholder="Enter address"
                variant="outlined"
                onChange={handleInputChange}
                fullWidth
              ></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              {!isLoading && (
                <Autocomplete
                  disablePortal
                  options={countryList}
                  getOptionLabel={(option) => option.name}
                  value={countryList.find((c) => c.code === contact.countryCode) || null}
                  onChange={handleCountryChange}
                  fullWidth
                  renderInput={(params) => <TextField {...params} label="Country" />}
                />
              )}
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="City"
                name="cityName"
                value={contact.cityName || ""}
                placeholder="Enter state"
                variant="outlined"
                onChange={handleInputChange}
                fullWidth
              ></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="State"
                name="state"
                value={contact.state || ""}
                placeholder="Enter state"
                variant="outlined"
                onChange={handleInputChange}
                fullWidth
              ></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Zip"
                name="zip"
                value={contact.zip || ""}
                placeholder="Enter zip"
                variant="outlined"
                onChange={handleInputChange}
                fullWidth
              ></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Timezone"
                name="timezone"
                type="text"
                value={contact.timezone || ""}
                placeholder="Enter timezone"
                variant="outlined"
                onChange={handleInputChange}
                fullWidth
                error={isInvalidNumber}
                helperText={isInvalidNumber ? "Timezone should be a number" : ""}
              ></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Language"
                name="language"
                value={contact.language || ""}
                placeholder="Enter language"
                variant="outlined"
                onChange={handleInputChange}
                fullWidth
              ></TextField>
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
