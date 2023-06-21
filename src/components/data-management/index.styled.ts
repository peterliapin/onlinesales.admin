import { CardHeader, styled } from "@mui/material";

export const DeleteButtonContainer = styled("div")`
  padding-left: ${({ theme }) => theme.spacing(2)};
`;

export const CardHeaderStyled = styled(CardHeader)({
  paddingLeft: 0,
});
