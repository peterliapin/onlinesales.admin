import { useState } from "react";
import { Tab, Tabs, Typography } from "@mui/material";
import {
  ModuleContainer,
  ModuleHeaderContainer,
  ModuleHeaderSubtitleContainer,
  ModuleHeaderTitleContainer,
} from "components/module";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ContactDetailsDto } from "lib/network/swagger-client";
import { contactFormBreadcrumbLinks, contactViewHeader } from "../constants";
import { BreadCrumbNavigation } from "components/breadcrumbs";

export const ContactBase = () => {
  const { state } = useLocation();
  const contact = state as ContactDetailsDto;
  const contactFullName = `${contact.firstName || ""} ${contact.lastName || ""}`;

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
          <BreadCrumbNavigation
            links={contactFormBreadcrumbLinks}
            current={contactViewHeader}
          ></BreadCrumbNavigation>
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
