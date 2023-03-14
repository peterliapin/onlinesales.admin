import { useState } from "react";
import { NavigateNext } from "@mui/icons-material";
import { Breadcrumbs, Link, Tab, Tabs, Typography } from "@mui/material";
import { GhostLink } from "components/ghost-link";
import {
  ModuleContainer,
  ModuleHeaderContainer,
  ModuleHeaderSubtitleContainer,
  ModuleHeaderTitleContainer,
} from "components/module";
import { CoreModule, getCoreModuleRoute, rootRoute } from "lib/router";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ContactDetailsDto } from "lib/network/swagger-client";

export const ContactBase = () => {
  const { state } = useLocation();
  const contact = state as ContactDetailsDto;
  const contactFullName = `${contact.firstName} ${contact.lastName}`;

  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState("details");

  const handleChange = (event: React.ChangeEvent<any>, newValue: string) => {
    setTabValue(newValue);
    navigate(newValue, { state: state });
  };

  return (
    <ModuleContainer>
      <ModuleHeaderContainer>
        <ModuleHeaderTitleContainer>
          <Typography variant="h3">{contactFullName}</Typography>
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
            <Typography variant="body1">Contact View</Typography>
          </Breadcrumbs>
        </ModuleHeaderSubtitleContainer>
      </ModuleHeaderContainer>
      <Tabs value={tabValue} onChange={handleChange} aria-label="simple tabs example">
        <Tab value="details" label="Details" />
        <Tab value="invoices" label="Invoices" />
        <Tab value="logs" label="Logs" />
      </Tabs>
      <Outlet />
    </ModuleContainer>
  );
};
