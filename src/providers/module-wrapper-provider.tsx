import { createContext, memo, PropsWithChildren, ReactNode, useContext, useState } from "react";
import { BreadcrumbLink } from "../utils/types";

interface ModuleWrapperContextType {
  breadcrumbs: BreadcrumbLink[];
  setBreadcrumbs: (newValue: BreadcrumbLink[]) => void;
  currentBreadcrumb: string;
  setCurrentBreadcrumb: (newValue: string) => void;
  leftContainerChildren: ReactNode | undefined;
  setLeftContainerChildren: (newValue: ReactNode | undefined) => void;
  extraActionsContainerChildren: ReactNode | undefined;
  setExtraActionsContainerChildren: (newValue: ReactNode | undefined) => void;
  addButtonContainerChildren: ReactNode | undefined;
  setAddButtonContainerChildren: (newValue: ReactNode | undefined) => void;

  isBusy: boolean;
  setBusy: (fn: () => Promise<void>) => void;
}

const ModuleWrapperContext = createContext<ModuleWrapperContextType>({
  breadcrumbs: [],
  setBreadcrumbs() {
    // setBreadcrumbs stub
  },

  currentBreadcrumb: "",
  setCurrentBreadcrumb() {
    // setCurrentBreadcrumb stub
  },

  leftContainerChildren: undefined,
  setLeftContainerChildren() {
    // setLeftContainerChildren stub
  },

  extraActionsContainerChildren: undefined,
  setExtraActionsContainerChildren() {
    // setExtraActionsContainerChildren stub
  },

  addButtonContainerChildren: undefined,
  setAddButtonContainerChildren() {
    // setAddButtonContainerChildren stub
  },

  isBusy: false,
  setBusy() {
    // setBusy stub
  },
});

export const ModuleWrapperProvider = memo(function ModuleWrapperProvider({
  children,
}: PropsWithChildren) {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbLink[]>([]);
  const [currentBreadcrumb, setCurrentBreadcrumb] = useState<string>("");
  const [leftContainerChildren, setLeftContainerChildren] = useState<ReactNode | undefined>();
  const [extraActionsContainerChildren, setExtraActionsContainerChildren] = useState<
    ReactNode | undefined
  >();
  const [addButtonContainerChildren, setAddButtonContainerChildren] = useState<
    ReactNode | undefined
  >();

  const [isBusy, setIsBusy] = useState<number>(0);

  const setBusy = async (fn: () => Promise<void>) => {
    setIsBusy((prev) => prev + 1);
    try {
      await fn();
    } finally {
      setIsBusy((prev) => prev - 1);
    }
  };

  const value: ModuleWrapperContextType = {
    breadcrumbs,
    setBreadcrumbs,
    currentBreadcrumb,
    setCurrentBreadcrumb,
    leftContainerChildren,
    setLeftContainerChildren,
    extraActionsContainerChildren,
    setExtraActionsContainerChildren,
    addButtonContainerChildren,
    setAddButtonContainerChildren,
    isBusy: isBusy > 0,
    setBusy,
  };

  return <ModuleWrapperContext.Provider value={value}>{children}</ModuleWrapperContext.Provider>;
});

export const useModuleWrapperContext = () => useContext(ModuleWrapperContext);
