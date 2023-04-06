import { useEffect, useState } from "react";
import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import { ContactDetailsDto } from "lib/network/swagger-client";
import { viewFormRoute } from "lib/router";
import { useRequestContext } from "providers/request-provider";
import { useRouteParams } from "typesafe-routes";
import { ContactCardHeader, ContactRowGrid } from "../../index.styled";
import { getCountryList } from "utils/helper";
import { useNotificationsService } from "@hooks";

export const ContactView = () => {
  const { notificationsService } = useNotificationsService();
  const context = useRequestContext();
  const { client } = context;
  const { id } = useRouteParams(viewFormRoute);
  const [contact, setContact] = useState<ContactDetailsDto>({
    email: "",
  });
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await client.api.contactsDetail(id);
        setCountry(data.countryCode);
        setContact(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [client]);

  const setCountry = async (countryCode: string | null | undefined) => {
    if (countryCode) {
      const countries = await getCountryList(context);
      if (countries) {
        const countryList = Object.entries(countries).map(([code, name]) => ({ code, name }));
        setSelectedCountry(countryList.find((c) => c.code === countryCode)!.name);
        setIsLoading(false);
      } else {
        notificationsService.error("Server error: country list not available.");
      }
    }
  };

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
              {!isLoading && (
                <Grid item xs={10}>
                  {selectedCountry}
                </Grid>
              )}
            </ContactRowGrid>
            <Divider variant="fullWidth" />
            <ContactRowGrid container>
              <Grid item xs={2}>
                <Typography fontWeight="bold">City</Typography>
              </Grid>
              <Grid item xs={10}>
                {contact.cityName}
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
