import {
  Drawer,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  styled,
} from "@mui/material";

export const SidebarStyled = styled(Drawer)`
  grid-area: sidebar;

  & .MuiDrawer-paper {
    box-sizing: border-box;
    position: static;
  }
`;
SidebarStyled.defaultProps = {
  variant: "permanent",
};

export const ListSubheaderStyled = styled(ListSubheader)`
  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
`;

export const SidebarLink = styled(ListItemButton)`
  border-radius: ${({ theme }) => theme.spacing(16)};
  height: ${({ theme }) => theme.spacing(10)};
  margin-top: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme: { palette } }) => palette.text.secondary};
  :hover {
    background-color: ${({ theme: { palette } }) => palette.background.primaryHover};
  }

  &.Mui-selected {
    color: ${({ theme: { palette } }) => palette.primary.main};
    background-color: ${({ theme: { palette } }) => palette.background.primary};
  }
` as typeof ListItemButton;

export const SidebarLinkText = styled(ListItemText)`
  .MuiTypography-root {
    font-weight: 600;
  }
` as typeof ListItemText;

export const ListItemIconStyled = styled(ListItemIcon)`
  min-width: ${({ theme }) => theme.spacing(10)};
` as typeof ListItemIcon;
