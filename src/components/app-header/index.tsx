import { Typography } from "@mui/material";
import { rootRoute } from "lib/router";
import { GhostLink } from "components/ghost-link";
import { useAuthState } from "providers/auth-provider";
import { AppBarStyled, AppBarToolbar, LogoutStyled } from "./index.styled";

export const AppHeader = () => {
  const { account, logout } = useAuthState();

  return (
    <AppBarStyled>
      <AppBarToolbar>
        <Typography component={GhostLink} to={rootRoute} variant="h5">
          OnlineSales
        </Typography>
        <Typography>
          {account?.name} {account?.username && <LogoutStyled sx={{
            marginLeft: "1rem", marginRight: "0.8rem" }} onClick={logout} />}{" "}
        </Typography>
      </AppBarToolbar>
    </AppBarStyled>
  );
};
