import { useEffect, useState } from "react";
import { Card, CardContent, Grid } from "@mui/material";
import { ContactDetailsDto } from "lib/network/swagger-client";
import { CoreModule, viewFormRoute } from "lib/router";
import { useRequestContext } from "providers/request-provider";
import { useRouteParams } from "typesafe-routes";
import { ContactCardHeader } from "../../index.styled";
import { getCountryList } from "utils/general-helper";
import { useNotificationsService } from "@hooks";
import { DataView } from "components/data-view";
import { useModuleWrapperContext } from "@providers/module-wrapper-provider";
import { DataManagementBlock } from "@components/data-management";

export const ContactView = () => {
  const { notificationsService } = useNotificationsService();
  const context = useRequestContext();
  const { setBusy } = useModuleWrapperContext();

  const { client } = context;
  const { id } = useRouteParams(viewFormRoute);
  const [contact, setContact] = useState<ContactDetailsDto>({
    email: "",
  });
  const [selectedCountry, setSelectedCountry] = useState("");
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
          <DataManagementBlock
            header="Data Management"
            description="Remove this customer's data if he requested that, 
            if not please be aware that what
            has been deleted can never be brought back."
            entity="contact"
            handleDeleteAsync={(id) => client.api.contactsDelete(id as number)}
            itemId={contact.id!}
            successNavigationRoute={CoreModule.contacts}
          ></DataManagementBlock>
        </Grid>
      </Grid>
    </>
  );
};
