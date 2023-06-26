import { ModuleWrapper } from "@components/module-wrapper";
import { AccountDetailsDto } from "@lib/network/swagger-client";
import { ListItem, ListItemAvatar, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { accountFormBreadcrumbLinks } from "../constants";
import { AccountNameListItemTextLarge, AccountUrlHref, AvatarContainer } from "../index.styled";

export const AccountViewBase = () => {
  const { state } = useLocation();
  const account = state as AccountDetailsDto;
  const accountName = account.name;

  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState("details");

  const handleChange = (event: React.ChangeEvent<any>, newValue: string) => {
    setTabValue(newValue);
    navigate(newValue, { state: state });
  };

  return (
    <ModuleWrapper breadcrumbs={accountFormBreadcrumbLinks} currentBreadcrumb={accountName}>
      <ListItem>
        <ListItemAvatar>
          <AvatarContainer src={account.logoUrl!}></AvatarContainer>
        </ListItemAvatar>
        <AccountNameListItemTextLarge
          primary={account.name || ""}
          secondary={
            account.siteUrl && (
              <AccountUrlHref href={account.siteUrl} target="_blank">
                {`url: ${account.siteUrl}`}
              </AccountUrlHref>
            )
          }
        />
      </ListItem>
      <Tabs value={tabValue} onChange={handleChange}>
        <Tab value="details" label="Overview" />
      </Tabs>
      <Outlet />
    </ModuleWrapper>
  );
};
