import { useState } from "react";
import {
  AlertColor,
  Backdrop,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { ContactDetailsDto } from "lib/network/swagger-client";
import {
  ModuleContainer,
  ModuleHeaderContainer,
  ModuleHeaderSubtitleContainer,
  ModuleHeaderTitleContainer,
} from "components/module";
import { CustomizedSnackbar } from "components/snackbar";
import { CoreModule, getCoreModuleRoute, rootRoute } from "lib/router";
import { GhostLink } from "components/ghost-link";
import { NavigateNext } from "@mui/icons-material";

interface ContactFormProps {
  contact: ContactDetailsDto;
  updateContact: (contact: ContactDetailsDto | any) => void;
  handleSave: () => void;
  isEdit: boolean;
}

export const ContactForm = ({ contact, updateContact, handleSave, isEdit }: ContactFormProps) => {
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);

  const [isInvalidNumber, setIsInvalidNumber] = useState(false);

  const [isSaving, setIsSaving] = useState(false);

  const [snackBarParams, setSnackBarParams] = useState({
    message: "",
    isOpen: false,
    severerity: "success" as AlertColor,
  });

  const header = isEdit ? "Contact edit" : "Contact add";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateContact((currentContact: ContactDetailsDto) => ({ ...currentContact, [name]: value }));
  };

  const isValidEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    return email && regex.test(email);
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
        setSnackBarParams({
          message: isEdit ? "Updated Successfully" : "Saved Successfully",
          isOpen: true,
          severerity: "success",
        });
      } catch (e) {
        console.log(e);
        setSnackBarParams({
          message: "Server error occurred. ",
          isOpen: true,
          severerity: "error",
        });
      } finally {
        setIsSaving(false);
      }
    }
  };

  return (
    <ModuleContainer>
      <ModuleHeaderContainer>
        <ModuleHeaderTitleContainer>
          <Typography variant="h3">{header}</Typography>
        </ModuleHeaderTitleContainer>
        <ModuleHeaderSubtitleContainer>
          <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
            <Link to={rootRoute} component={GhostLink} underline="hover">
              Dashboard
            </Link>
            <Link
              to={getCoreModuleRoute(CoreModule.contacts)}
              component={GhostLink}
              underline="hover"
            >
              Contacts
            </Link>
            <Typography variant="body1">{header}</Typography>
          </Breadcrumbs>
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
                label="Location"
                name="location"
                value={contact.location || ""}
                placeholder="Enter location"
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
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={validateAndSave}
                fullWidth
              >
                Submit
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
        severerity={snackBarParams.severerity}
        message={snackBarParams.message}
        navigateTo={CoreModule.contacts}
      ></CustomizedSnackbar>
    </ModuleContainer>
  );
};
