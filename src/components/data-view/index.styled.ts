import { CardHeader, Grid, ListItemText, styled } from "@mui/material";

export const ViewListItemText = styled(ListItemText)`
  .MuiListItemText-primary {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
    font-weight: 500;
  }
  .MuiListItemText-secondary {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
  }
`;

export const ViewRowGrid = styled(Grid)({
  minHeight: 60,
  alignItems: "center",
});
