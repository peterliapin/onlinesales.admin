import { Avatar, ListItemAvatar } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { ContactDetailsDto } from "lib/network/swagger-client";
import { CoreModule, getCoreModuleRoute, rootRoute } from "lib/router";
import { ContactNameListItem, ContactNameListItemText } from "./index.styled";

export const defaultFilterOrderColumn = "firstName";

export const defaultFilterOrderDirection = "desc";

export const contactListBreadcrumbLinks = [{ linkText: "Dashboard", toRoute: rootRoute }];

export const contactFormBreadcrumbLinks = [
  { linkText: "Dashboard", toRoute: rootRoute },
  { linkText: "Contacts", toRoute: getCoreModuleRoute(CoreModule.contacts) },
];
