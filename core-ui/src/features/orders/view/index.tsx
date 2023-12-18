import { useState } from "react";
import { Divider, Tab, Tabs } from "@mui/material";

import { orderFormBreadcrumbLinks } from "../constants";
import { ModuleWrapper } from "@components/module-wrapper";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const OrderViewBase = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState("details");

  const handleChange = (event: React.ChangeEvent<any>, newValue: string) => {
    setTabValue(newValue);
    navigate(newValue, { state: state });
  };

  return (
    <ModuleWrapper breadcrumbs={orderFormBreadcrumbLinks} currentBreadcrumb="View Order">
      <Tabs value={tabValue} onChange={handleChange}>
        <Tab value="details" label="Overview" />
      </Tabs>
      <Outlet />
      <Divider></Divider>
    </ModuleWrapper>
  );
};
