import { Paper, styled } from "@mui/material";

export const ExtraActionsContainer = styled("div")`
  display: flex;
  flex-flow: row;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ContactsTableContainer = styled(Paper)`
  flex-grow: 1;
`;

export const AvatarContainer = styled("div")`
  display: flex;
`;

export const AvatarImgContainer = styled("div")`
  flex: 1;
  align-items: center;
`;

export const ContactNameEmailContainer = styled("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;
`;

export const AvatarImg = styled("img")`
  border-radius: 50%;
  display: block;
`;

export const ContactName = styled("div")`
  font-weight: 500;
`;

export const ContactEmail = styled("div")`
  color: rgba(66, 82, 110, 0.86)'; 
  font-weight: 400;
`;
