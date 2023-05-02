import {
  ModuleContainer,
  ModuleHeaderContainer,
  ModuleHeaderSubtitleContainer,
} from "@components/module";
import { BreadCrumbNavigation } from "@components/breadcrumbs";
import { PropsWithChildren, ReactNode } from "react";
import {
  ActionsContainer,
  AddButtonContainer,
  CenteredCircularProgress,
  ExtraActionsContainer,
  LeftContainer,
  LoadingIndicatorContainer,
  ModuleContentContainer,
  RightContainer,
  SavingIndicatorContainer,
  ScrollContainer,
} from "./index.styled";
import { useModuleWrapperContext } from "@providers/module-wrapper-provider";
import { BreadcrumbLink } from "../../utils/types";
import { Grid } from "@mui/material";

export interface ModuleWrapperProps extends PropsWithChildren {
  key?: string;
  breadcrumbs: BreadcrumbLink[];
  currentBreadcrumb: string;
  leftContainerChildren?: ReactNode | undefined;
  extraActionsContainerChildren?: ReactNode | undefined;
  addButtonContainerChildren?: ReactNode | undefined;
  saveIndicatorElement?: ReactNode | undefined;
}

export const ModuleWrapper = ({
  breadcrumbs,
  currentBreadcrumb,
  leftContainerChildren,
  extraActionsContainerChildren,
  addButtonContainerChildren,
  saveIndicatorElement,
  children,
}: ModuleWrapperProps) => {
  const { isSaving, isBusy } = useModuleWrapperContext();

  return (
    <ModuleContainer>
      <ModuleHeaderContainer>
        <Grid container direction={"row"} justifyContent={"space-between"}>
          <Grid item>
            <ModuleHeaderSubtitleContainer>
              <BreadCrumbNavigation
                links={breadcrumbs}
                current={currentBreadcrumb}
              ></BreadCrumbNavigation>
            </ModuleHeaderSubtitleContainer>
          </Grid>
          {isSaving && saveIndicatorElement && (
            <Grid item>
              <SavingIndicatorContainer>{saveIndicatorElement}</SavingIndicatorContainer>
            </Grid>
          )}
        </Grid>
      </ModuleHeaderContainer>
      {(leftContainerChildren || extraActionsContainerChildren || addButtonContainerChildren) && (
        <ActionsContainer>
          {leftContainerChildren && <LeftContainer>{leftContainerChildren}</LeftContainer>}
          {(extraActionsContainerChildren || addButtonContainerChildren) && (
            <RightContainer>
              {extraActionsContainerChildren && (
                <ExtraActionsContainer>{extraActionsContainerChildren}</ExtraActionsContainer>
              )}
              {addButtonContainerChildren && (
                <AddButtonContainer>{addButtonContainerChildren}</AddButtonContainer>
              )}
            </RightContainer>
          )}
        </ActionsContainer>
      )}
      <ModuleContentContainer>
        <ScrollContainer>{children}</ScrollContainer>
        {isBusy && (
          <>
            <LoadingIndicatorContainer />
            <CenteredCircularProgress />
          </>
        )}
      </ModuleContentContainer>
    </ModuleContainer>
  );
};
