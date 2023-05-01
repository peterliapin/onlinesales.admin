import styled from "@emotion/styled";
import { Avatar } from "@mui/material";

export const UserEditContainer = styled("div")`
  flex-grow: 1;
`;

export const StyledAvatar = styled(Avatar)`
  &:hover {
    background-color: #b3e5fc;
    cursor: pointer;
  }
`;