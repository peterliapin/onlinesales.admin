import {
  ModuleContainer,
  ModuleHeaderContainer,
  ModuleHeaderSubtitleContainer,
} from "@components/module";
import { BreadCrumbNavigation } from "@components/breadcrumbs";
import { PropsWithChildren } from "react";
import {
  ActionsContainer,
  AddButtonContainer,
  CenteredCircularProgress,
  ExtraActionsContainer,
  LeftContainer,
  LoadingIndicatorContainer,
  RightContainer,
  ScrollContainer,
} from "./index.styled";
import { useModuleWrapperContext } from "@providers/module-wrapper-provider";

export interface ModuleWrapperProps extends PropsWithChildren {
  key?: string;
}

export const ModuleWrapper = ({ key, children }: ModuleWrapperProps) => {
  const {
    breadcrumbs,
    currentBreadcrumb,
    leftContainerChildren,
    extraActionsContainerChildren,
    addButtonContainerChildren,
    isBusy,
  } = useModuleWrapperContext();

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
      <ScrollContainer>
        {children}
        {isBusy && (
          <>
            <LoadingIndicatorContainer />
            <CenteredCircularProgress />
          </>
        )}
      </ScrollContainer>
    </ModuleContainer>
  );
};
