import {AppBar, styled, Toolbar} from "@mui/material";
import {Logout} from "@mui/icons-material";

export const AppBarStyled = styled(AppBar)`
  grid-area: header;
  position: static;
`;

export const AppBarToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

export const LogoutStyled = styled(Logout)`
  vertical-align: middle;
  cursor: pointer;
`;
