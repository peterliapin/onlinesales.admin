
export type onCloseFunc = (selectedValues: boolean) => void;

export interface RestoreDataProps {
    isOpen: boolean;
    onClose: onCloseFunc;
}