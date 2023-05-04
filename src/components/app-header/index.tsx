import { Typography } from "@mui/material";
import { rootRoute } from "lib/router";
import { GhostLink } from "components/ghost-link";
import { AppBarStyled, AppBarToolbar, LogoutStyled } from "./index.styled";
import { DropdownMenu } from "./DropdownMenu";

export const AppHeader = () => {
  return (
    <AppBarStyled>
      <AppBarToolbar>
        <Typography component={GhostLink} to={rootRoute} variant="h5">
          OnlineSales
        </Typography>
        <DropdownMenu />
      </AppBarToolbar>
    </AppBarStyled>
  );
};
