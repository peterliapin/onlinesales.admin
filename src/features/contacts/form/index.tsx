import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { ContactDetailsDto } from "lib/network/swagger-client";
import { useState } from "react";

interface ContactFormProps {
  contact: ContactDetailsDto;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSave: () => void;
}

export const ContactForm = ({ contact, handleInputChange, handleSave }: ContactFormProps) => {
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);

  const [isInvalidNumber, setIsInvalidNumber] = useState(false);

  const isValidEmail = (email: string) => {
    const regex =
    /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    return email && regex.test(email);
  };

  const validateAndSave = () => {
    setIsInvalidEmail(false);
    setIsInvalidNumber(false);

    if (!isValidEmail(contact.email)) setIsInvalidEmail(true);
    else if (!contact.timezone || isNaN(contact.timezone!)) {
      setIsInvalidNumber(true);
    } else handleSave();
  };

  return (
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
  );
};
