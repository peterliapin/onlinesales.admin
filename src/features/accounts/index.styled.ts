import { Avatar, Card, ListItem, ListItemText, styled } from "@mui/material";

export const AccountListItem = styled(ListItem)({
  alignItems: "center",
  paddingLeft: "0",
  disablePadding: true,
});

export const AccountListItemText = styled(ListItemText)`
  .MuiListItemText-primary {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
    font-weight: 500;
  }
  .MuiListItemText-secondary {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
  }
`;

export const AccountUrlHref = styled("a")`
  text-decoration: none;
  color: inherit;
`;

export const CardContainer = styled(Card)`
  margin-left: ${({ theme }) => theme.spacing(20)};
  margin-right: ${({ theme }) => theme.spacing(20)};
`;

export const AccountNameListItemTextLarge = styled(ListItemText)`
  .MuiListItemText-primary {
    font-size: ${({ theme }) => theme.typography.h5};
    font-weight: 500;
  }
  .MuiListItemText-secondary {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
  }
`;

export const AvatarContainer = styled(Avatar)`
  width: ${({ theme }) => theme.spacing(20)};
  height: ${({ theme }) => theme.spacing(20)};
  margin-right: ${({ theme }) => theme.spacing(5)};
`;
