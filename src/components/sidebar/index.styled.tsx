import { Drawer, ListItemButton, ListItemText, styled } from "@mui/material";

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

export const SidebarLink = styled(ListItemButton)`
  border-radius: ${({ theme }) => theme.spacing(16)};
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
