import { Box, styled } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { PropsWithChildren } from "react";
import "react-toastify/dist/ReactToastify.css";

export const AppLayoutContainerStyled = styled(Box)`
  display: grid;
  height: 100vh;
  grid-template-columns: ${({ theme }) => theme.spacing(64)} 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header header"
    "sidebar main";
`;

export const AppLayoutContainer = ({ children }: PropsWithChildren) => {
  return (
    <AppLayoutContainerStyled>
      {children}
      <ToastContainer />
    </AppLayoutContainerStyled>
  );
};

export const MainContentContainer = styled(Box)`
  grid-area: main;
  background-color: ${({ theme: { palette } }) => palette.background.default};
  padding: ${({ theme }) => theme.spacing(1, 6, 6, 6)};
  overflow: auto;
`;
MainContentContainer.defaultProps = {
  component: "main",
};
