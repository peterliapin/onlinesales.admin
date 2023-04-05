import { useEffect, useState } from "react";
import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import { ContactDetailsDto } from "lib/network/swagger-client";
import { viewFormRoute } from "lib/router";
import { useRequestContext } from "providers/request-provider";
import { useRouteParams } from "typesafe-routes";
import { ContactCardHeader, ContactRowGrid } from "../../index.styled";
import { countryListStorageKey } from "utils/constants";
import { toast } from "react-toastify";

export const ContactView = () => {
  const { client } = useRequestContext();
  const { id } = useRouteParams(viewFormRoute);
  const [contact, setContact] = useState<ContactDetailsDto>({
    email: "",
  });
  const [selectedCountry, setSelectedCountry] = useState("");

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
      const countries = await getCountryList();
      if (countries) {
        const countryList = Object.entries(countries).map(([code, name]) => ({ code, name }));
        setSelectedCountry(countryList.find((c) => c.code === countryCode)!.name);
      } else {
        toast.error("Server error: country list not available.");
      }
    }
  };

  const getCountryList = async () => {
    const countries = localStorage.getItem(countryListStorageKey);
    if (countries) {
      return JSON.parse(countries) as Record<string, string>;
    } else {
      (async () => {
        try {
          const { data } = await client.api.countriesList();
          localStorage.setItem(countryListStorageKey, JSON.stringify(data));
          return data;
        } catch (e) {
          return null;
        }
      })();
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
              <Grid item xs={10}>
                {selectedCountry}
              </Grid>
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
