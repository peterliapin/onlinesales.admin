import { Typography } from "@mui/material";
import { rootRoute } from "lib/router";
import { GhostLink } from "components/ghost-link";
import { useAuthState } from "providers/auth-provider";
import { AppBarStyled, AppBarToolbar } from "./index.styled";

export const AppHeader = () => {
  const { account } = useAuthState();

  return (
    <AppBarStyled>
      <AppBarToolbar>
        <Typography component={GhostLink} to={rootRoute} variant="h5">
          OnlineSales
        </Typography>
        <Typography>{account?.name}</Typography>
      </AppBarToolbar>
    </AppBarStyled>
  );
};
