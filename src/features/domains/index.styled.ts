import { ListItem, ListItemText, styled } from "@mui/material";

export const DomainListItem = styled(ListItem)({
  alignItems: "center",
  paddingLeft: "0",
  disablePadding: true,
});

export const DomainListItemText = styled(ListItemText)`
  .MuiListItemText-primary {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
    font-weight: 500;
  }
  .MuiListItemText-secondary {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
  }
`;