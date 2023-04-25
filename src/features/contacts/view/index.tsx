import { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ContactDetailsDto } from "lib/network/swagger-client";
import { contactFormBreadcrumbLinks } from "../constants";
import { ModuleWrapper } from "@components/module-wrapper";

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
    <ModuleWrapper breadcrumbs={contactFormBreadcrumbLinks} currentBreadcrumb={contactFullName}>
      <Tabs value={tabValue} onChange={handleChange}>
        <Tab value="details" label="Details" />
        <Tab value="invoices" label="Invoices" />
        <Tab value="logs" label="Logs" />
      </Tabs>
      <Outlet />
    </ModuleWrapper>
  );
};
