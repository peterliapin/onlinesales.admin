import { BreadcrumbLink } from "../../types";
import { CoreModule, getCoreModuleRoute, rootRoute } from "@lib/router";

export const defaultFilterOrderColumn = "createdAt";

export const defaultFilterOrderDirection = "asc";

export const searchLabel = "Search users";

export const modelName = "users";

export const UsersBreadcrumbLinks: BreadcrumbLink[] = [
  { linkText: "Dashboard", toRoute: rootRoute },
];

export const UserEditBreadcrumbLinks: BreadcrumbLink[] = [
  { linkText: "Dashboard", toRoute: rootRoute },
  { linkText: "User", toRoute: getCoreModuleRoute(CoreModule.users) },
];

export const UsersListCurrentBreadcrumb = "Users";

export const UserGridStorageKey = "UsersGrid";

export const SearchLabel = "Search users";
