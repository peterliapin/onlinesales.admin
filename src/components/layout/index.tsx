import { Box, styled } from "@mui/material";

export const AppLayoutContainer = styled(Box)`
  display: grid;
  height: 100vh;
  grid-template-columns: ${({ theme }) => theme.spacing(64)} 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header header"
    "sidebar main";
`;

export const MainContentContainer = styled(Box)`
  grid-area: main;
  background-color: ${({ theme: { palette } }) => palette.background.default};
  padding: ${({ theme }) => theme.spacing(12, 6, 16, 6)};
  overflow: auto;
`;
MainContentContainer.defaultProps = {
  component: "main",
};
