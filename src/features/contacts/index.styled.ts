import { Paper, styled } from "@mui/material";

export const ExtraActionsContainer = styled("div")`
  display: flex;
  flex-flow: row;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ContactsTableContainer = styled(Paper)`
  flex-grow: 1;
`;
