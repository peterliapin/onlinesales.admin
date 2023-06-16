import { AccountDetailsDto } from "@lib/network/swagger-client";
import { CoreModule, viewFormRoute } from "@lib/router";
import { useRequestContext } from "@providers/request-provider";
import { useEffect, useState } from "react";
import { useRouteParams } from "typesafe-routes";
import { DataView } from "components/data-view";
import { getContinentByCode, getCountryByCode } from "utils/general-helper";
import { Grid } from "@mui/material";
import { useModuleWrapperContext } from "@providers/module-wrapper-provider";
import { DataDelete } from "@components/data-delete";

interface DataViewRow {
  label: string;
  value: any;
}

export const AccountView = () => {
  const context = useRequestContext();
  const { setBusy } = useModuleWrapperContext();
  const { client } = context;
  const { id } = useRouteParams(viewFormRoute);
  const [account, setAccount] = useState<AccountDetailsDto>();
  const [country, setCountry] = useState<string>();
  const [continent, setContinent] = useState<string>();

  useEffect(() => {
    setBusy(async () => {
      try {
        const { data } = await client.api.accountsDetail(id);
        setAccount(data);
        const country = await getCountryByCode(context, data.countryCode!);
        if (country) setCountry(country);
        const continent = await getContinentByCode(context, data.continentCode!);
        if (continent) setContinent(continent);
      } catch (e) {
        console.log(e);
      }
    });
  }, [client]);

  const accountSiteUrl = account && (
    <a href={account.siteUrl || ""} target="_blank" rel="noopener noreferrer">
      {account.siteUrl}
    </a>
  );

  const accountViewData: DataViewRow[] | undefined = account && [
    { label: "Name", value: account.name || "" },
    { label: "Continent", value: continent || "" },
    { label: "Country", value: country || "" },
    { label: "State", value: account.state || "" },
    { label: "City", value: account.cityName || "" },
    { label: "Site url", value: accountSiteUrl || "" },
    { label: "Revenue", value: account.revenue || "" },
    { label: "Tags", value: account.tags?.join(", ") || "" },
    { label: "Data", value: account.data || "" },
  ];

  const accountSocialMediaData: DataViewRow[] | undefined =
    account?.socialMedia &&
    Object.entries(account.socialMedia!).map(([label, value]) => ({
      label,
      value,
    }));

  return (
    <>
      {accountViewData && (
        <Grid container spacing={3}>
          <Grid xs={12} sm={6} item>
            <DataView header="Account details" rows={accountViewData} />
          </Grid>
          <Grid xs={12} sm={6} item>
            {accountSocialMediaData && (
              <DataView header="Social media" rows={accountSocialMediaData} />
            )}
          </Grid>
          <Grid xs={12} sm={6} item>
            <DataDelete
              header="Data Management"
              description="Please be aware that what
            has been deleted can never be brought back."
              entity="account"
              handleDeleteAsync={client.api.accountsDelete}
              itemId={id}
              successNavigationRoute={CoreModule.accounts}
            ></DataDelete>
          </Grid>
        </Grid>
      )}
    </>
  );
};
