import { CircularProgress, styled } from "@mui/material";

export const ActionsContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftContainer = styled("div")`
  display: flex;
  align-items: center;
`;

export const RightContainer = styled("div")`
  display: flex;
  align-items: center;
`;

export const ExtraActionsContainer = styled("div")`
  display: flex;
  flex-flow: row;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const AddButtonContainer = styled("div")`
  margin-left: ${({ theme }) => theme.spacing(10)};
`;

export const ModuleContentContainer = styled("div")`
  height: calc(100%);
  position: relative;
`;

export const ScrollContainer = styled("div")`
  overflow-y: auto;
  height: calc(100%);
`;

export const LoadingIndicatorContainer = styled("div")`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: lightgray;
  opacity: 0.2;
  z: 98;
`;

export const CenteredCircularProgress = styled(CircularProgress)`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z: 99;
`;

export const SavingIndicatorContainer = styled("div")`
  position: absolute;
  margin: 25px;
  right: 0;
  top: 0;
  z: 9999;
`;
