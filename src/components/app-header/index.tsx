import { Typography } from "@mui/material";
import { rootRoute } from "lib/router";
import { GhostLink } from "components/ghost-link";
import { AppBarStyled, AppBarToolbar, LogoComponent } from "./index.styled";
import { DropdownMenu } from "./dropdown-menu";

export const AppHeader = () => {
  return (
    <AppBarStyled>
      <AppBarToolbar>
        <LogoComponent />
        <Typography
          component={GhostLink}
          to={rootRoute}
          variant="h6"
          style={{ textTransform: "uppercase", marginLeft: "54px" }}
        >
          Online Sales
        </Typography>
        <DropdownMenu />
      </AppBarToolbar>
    </AppBarStyled>
  );
};
