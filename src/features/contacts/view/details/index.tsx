import { useEffect, useState } from "react";
import { Card, CardContent, Divider, Grid, Link, Typography } from "@mui/material";
import { ContactDetailsDto } from "lib/network/swagger-client";
import { viewFormRoute } from "lib/router";
import { useRequestContext } from "providers/request-provider";
import { useRouteParams } from "typesafe-routes";
import { ContactCardHeader, ContactRowGrid } from "../../index.styled";

export const ContactView = () => {
  const { client } = useRequestContext();
  const { id } = useRouteParams(viewFormRoute);
  const [contact, setContact] = useState<ContactDetailsDto>({
    firstName: "",
    email: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await client.api.contactsDetail(id);
        setContact(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [client]);

  return (
    <Grid container spacing={3}>
      <Grid xs={12} sm={6} item>
        <Card>
          <CardContent>
            <ContactCardHeader title="Contact Details"></ContactCardHeader>
            <Divider variant="fullWidth" />
            <ContactRowGrid container>
              <Grid item xs={2}>
                <Typography fontWeight="bold">Email</Typography>
              </Grid>
              <Grid item xs={10}>
                {contact.email}
              </Grid>
            </ContactRowGrid>
            <Divider variant="fullWidth" />
            <ContactRowGrid container>
              <Grid item xs={2}>
                <Typography fontWeight="bold">Phone</Typography>
              </Grid>
              <Grid item xs={10}>
                {contact.phone}
              </Grid>
            </ContactRowGrid>
            <Divider variant="fullWidth" />
            <ContactRowGrid container>
              <Grid item xs={2}>
                <Typography fontWeight="bold">Country</Typography>
              </Grid>
              <Grid item xs={10}>
                {contact.location}
              </Grid>
            </ContactRowGrid>
            <Divider variant="fullWidth" />
            <ContactRowGrid container>
              <Grid item xs={2}>
                <Typography fontWeight="bold">State/Region</Typography>
              </Grid>
              <Grid item xs={10}>
                {contact.state}
              </Grid>
            </ContactRowGrid>
            <Divider variant="fullWidth" />
            <ContactRowGrid container>
              <Grid item xs={2}>
                <Typography fontWeight="bold">Address 1</Typography>
              </Grid>
              <Grid item xs={10}>
                {contact.address1}
              </Grid>
            </ContactRowGrid>
            <Divider variant="fullWidth" />
            <ContactRowGrid container>
              <Grid item xs={2}>
                <Typography fontWeight="bold">Address 2</Typography>
              </Grid>
              <Grid item xs={10}>
                {contact.address2}
              </Grid>
            </ContactRowGrid>
          </CardContent>
        </Card>
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
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
