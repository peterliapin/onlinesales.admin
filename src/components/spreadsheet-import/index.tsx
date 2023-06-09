import { CircularProgress } from "@mui/material";
import { Fragment, useState } from "react";
import { ReactSpreadsheetImport } from "@wavepoint/react-spreadsheet-import";
import { Result } from "@wavepoint/react-spreadsheet-import/types/types";
import { StyledBackdrop } from "./index.styled";
import { getImportFields } from "utils/import-key-mappings";
import { useCoreModuleNavigation, useNotificationsService } from "@hooks";

interface csvImportPorps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (fileData: any) => void;
  object: any;
  endRoute: string;
}

export const CsvImport = ({ isOpen, onClose, onUpload, object, endRoute }: csvImportPorps) => {
  const handleNavigation = useCoreModuleNavigation();
  const { notificationsService } = useNotificationsService();
  const [isUploading, setIsUploading] = useState(false);

  const onSubmit = async (data: Result<string>) => {
    try {
      if (data.validData.length === 0) {
        throw new Error("No valid data selected.");
      }
      setIsUploading(true);
      await onUpload(data);
      handleSuccess();
    } catch (error) {
      console.log(error);
      notificationsService.error("Error when importing data.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSuccess = () => {
    notificationsService.success("Data import completed.");
    handleNavigation(endRoute);
  };

  return (
    <Fragment key={"spreadsheet-import"}>
      <ReactSpreadsheetImport
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={onSubmit}
        fields={getImportFields(object)}
      />
      <StyledBackdrop open={isUploading}>
        <CircularProgress color="inherit" />
      </StyledBackdrop>
    </Fragment>
  );
};
