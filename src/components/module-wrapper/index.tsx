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
  key,
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
    <ModuleContainer key={key}>
      <ModuleHeaderContainer>
        <ModuleHeaderSubtitleContainer>
          <BreadCrumbNavigation
            links={breadcrumbs}
            current={currentBreadcrumb}
          ></BreadCrumbNavigation>
        </ModuleHeaderSubtitleContainer>
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
        {isSaving && saveIndicatorElement && (
          <SavingIndicatorContainer>{saveIndicatorElement}</SavingIndicatorContainer>
        )}
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
