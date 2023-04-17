import {createContext, memo, PropsWithChildren, useContext, useState} from "react";

interface ModuleWrapperContextType {
  isSaving: boolean;
  setSaving: (fn: () => Promise<void>) => void;

  isBusy: boolean;
  setBusy: (fn: () => Promise<void>) => void;
}

const ModuleWrapperContext = createContext<ModuleWrapperContextType>({
  isSaving: false,
  setSaving() {
    // setSaving stub
  },

  isBusy: false,
  setBusy() {
    // setBusy stub
  },
});

export const ModuleWrapperProvider = memo(function ModuleWrapperProvider({
  children,
}: PropsWithChildren) {
  const [isBusy, setIsBusy] = useState<number>(0);
  const setBusy = async (fn: () => Promise<void>) => {
    setIsBusy((prev) => prev + 1);
    try {
      await fn();
    } finally {
      setIsBusy((prev) => prev - 1);
    }
  };

  const [isSaving, setIsSaving] = useState<number>(0);
  const setSaving = async (fn: () => Promise<void>) => {
    setIsSaving((prev) => prev + 1);
    try {
      await fn();
    } finally {
      setIsSaving((prev) => prev - 1);
    }
  };

  const value: ModuleWrapperContextType = {
    isSaving: isSaving > 0,
    setSaving,
    isBusy: isBusy > 0,
    setBusy,
  };

  return <ModuleWrapperContext.Provider value={value}>{children}</ModuleWrapperContext.Provider>;
});

export const useModuleWrapperContext = () => useContext(ModuleWrapperContext);
