import { useState } from "react";
import {
  Backdrop,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  TextField,
} from "@mui/material";
import { ContactDetailsDto } from "lib/network/swagger-client";
import {
  ModuleContainer,
  ModuleHeaderContainer,
  ModuleHeaderSubtitleContainer,
} from "components/module";
import { CustomizedSnackbar } from "components/snackbar";
import { CoreModule, getCoreModuleRoute } from "lib/router";
import { EMAIL_REGEX } from "utils/constants";
import { initialSnackBarParams, serverErrorSnackBarParams } from "components/snackbar/constants";
import { BreadCrumbNavigation } from "components/breadcrumbs";
import { contactFormBreadcrumbLinks } from "../constants";
import { useNavigate } from "react-router-dom";

interface ContactFormProps {
  contact: ContactDetailsDto;
  updateContact: (contact: ContactDetailsDto | any) => void;
  handleSave: () => void;
  isEdit: boolean;
}

export const ContactForm = ({ contact, updateContact, handleSave, isEdit }: ContactFormProps) => {
  const navigate = useNavigate();

  const [isInvalidEmail, setIsInvalidEmail] = useState(false);

  const [isInvalidNumber, setIsInvalidNumber] = useState(false);

  const [isSaving, setIsSaving] = useState(false);

  const [snackBarParams, setSnackBarParams] = useState(initialSnackBarParams);

  const header = isEdit ? "Contact edit" : "Contact add";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateContact((currentContact: ContactDetailsDto) => ({ ...currentContact, [name]: value }));
  };

  const isValidEmail = (email: string) => {
    return email && EMAIL_REGEX.test(email);
  };

  const validateAndSave = async () => {
    setIsInvalidEmail(false);
    setIsInvalidNumber(false);

    if (!isValidEmail(contact.email)) {
      setIsInvalidEmail(true);
    } else if (!contact.timezone || isNaN(contact.timezone!)) {
      setIsInvalidNumber(true);
    } else {
      try {
        setIsSaving(true);
        await handleSave();
        handleSuccess();
      } catch (e) {
        console.log(e);
        setSnackBarParams(serverErrorSnackBarParams);
      } finally {
        setIsSaving(false);
      }
    }
  };

  const handleSuccess = () => {
    const toRoute = getCoreModuleRoute(CoreModule.contacts);
    if (location.pathname === toRoute) {
      window.location.reload();
    } else {
      navigate(toRoute);
    }
  };

  const handleCancel = () => {
    navigate(getCoreModuleRoute(CoreModule.contacts));
  };

  return (
    <ModuleContainer>
      <ModuleHeaderContainer>
        <ModuleHeaderSubtitleContainer>
          <BreadCrumbNavigation
            links={contactFormBreadcrumbLinks}
            current={header}
          ></BreadCrumbNavigation>
        </ModuleHeaderSubtitleContainer>
      </ModuleHeaderContainer>
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
      <Backdrop open={isSaving} style={{ zIndex: 999 }}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <CustomizedSnackbar
        isOpen={snackBarParams.isOpen}
        severerity={snackBarParams.severity}
        message={snackBarParams.message}
        navigateTo={CoreModule.contacts}
      ></CustomizedSnackbar>
    </ModuleContainer>
  );
};
