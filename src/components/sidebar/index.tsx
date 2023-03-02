import { List, ListItem, ListSubheader } from "@mui/material";
import { People, Newspaper } from "@mui/icons-material";
import { CoreModule, coreModuleRoute, getCoreModuleRoute } from "lib/router";
import { SidebarLinkButton } from "./sidebar-link-button";
import { SidebarStyled } from "./index.styled";
import { useRouteParams } from "typesafe-routes";

export const Sidebar = () => {
  const { moduleName } = useRouteParams(coreModuleRoute);

  return (
    <SidebarStyled>
      <List component="nav" subheader={<ListSubheader>General</ListSubheader>}>
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
      </List>
    </SidebarStyled>
  );
};
