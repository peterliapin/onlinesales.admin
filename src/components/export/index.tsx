import { downloadFile } from "components/download";
import { CustomizedSnackbar } from "components/snackbar";
import { initialSnackBarParams, serverErrorSnackBarParams } from "components/snackbar/constants";
import { CoreModule } from "lib/router";
import { useEffect, useRef, useState } from "react";

interface csvExportPorps {
  handleExport: () => Promise<string>;
  closeExport: () => void;
}

export const CsvExport = ({ handleExport, closeExport }: csvExportPorps) => {
  const [snackBarParams, setSnackBarParams] = useState(initialSnackBarParams);
  const didExportRef = useRef(false);

  useEffect(() => {
    if (!didExportRef.current) {
      const exportFile = async () => {
        try {
          const url = await handleExport();
          downloadFile(url);
          closeExport();
        } catch (error) {
          setSnackBarParams(serverErrorSnackBarParams);
        }
      };
      setSnackBarParams(initialSnackBarParams);
      exportFile();
      didExportRef.current = true;
    }
  }, []);

  return (
    <>
      <CustomizedSnackbar
        isOpen={snackBarParams.isOpen}
        severerity={snackBarParams.severity}
        message={snackBarParams.message}
        navigateTo={CoreModule.contacts}
      />
    </>
  );
};
