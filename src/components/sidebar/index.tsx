import { List, ListItem } from "@mui/material";
import { People, Business, Inventory, Web } from "@mui/icons-material";
import { CoreModule, coreModuleRoute, getCoreModuleRoute } from "lib/router";
import { SidebarLinkButton } from "./sidebar-link-button";
import { ListSubheaderStyled, SidebarStyled } from "./index.styled";
import { useRouteParams } from "typesafe-routes";
import { Newspaper } from "@mui/icons-material";

export const Sidebar = () => {
  const { moduleName } = useRouteParams(coreModuleRoute);

  return (
    <SidebarStyled>
      <List component="nav" subheader={<ListSubheaderStyled>General</ListSubheaderStyled>}>
        <ListItem>
          <SidebarLinkButton
            title="Blog"
            to={getCoreModuleRoute(CoreModule.blog)}
            Icon={Newspaper}
            selected={moduleName === CoreModule.blog}
          />
        </ListItem>
        <ListItem>
          <SidebarLinkButton
            title="Contacts"
            to={getCoreModuleRoute(CoreModule.contacts)}
            Icon={People}
            selected={moduleName === CoreModule.contacts}
          />
        </ListItem>
        <ListItem>
          <SidebarLinkButton
            title="Accounts"
            to={getCoreModuleRoute(CoreModule.accounts)}
            Icon={Business}
            selected={moduleName === CoreModule.accounts}
          />
        </ListItem>
        <ListItem>
          <SidebarLinkButton
            title="Orders"
            to={getCoreModuleRoute(CoreModule.orders)}
            Icon={Inventory}
            selected={moduleName === CoreModule.orders}
          />
        </ListItem>
        <ListItem>
          <SidebarLinkButton
            title="Domains"
            to={getCoreModuleRoute(CoreModule.domains)}
            Icon={Web}
            selected={moduleName === CoreModule.domains}
          />
        </ListItem>
      </List>
    </SidebarStyled>
  );
};
