import { CardHeader, Grid, Paper, styled } from "@mui/material";

export const ExtraActionsContainer = styled("div")`
  display: flex;
  flex-flow: row;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ContactsTableContainer = styled(Paper)`
  flex-grow: 1;
`;

export const ContactRowGrid = styled(Grid)({
  height: 60,
  alignItems: "center",
});

export const ContactCardHeader = styled(CardHeader)({
  paddingLeft: 0,
});

export const ActionButtonContainer = styled("div")`
  display: flex;
  justify-content: flex-end;
`;

export const EditIconContainer = styled("div")`
  padding: 0;
  cursor: pointer;
  margin-right: 10px;
`;

export const ForwardIconContainer = styled("div")`
  padding: 0;
  cursor: pointer;
`;
