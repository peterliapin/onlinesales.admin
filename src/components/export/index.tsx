import { downloadFile } from "components/download";
import { CustomizedSnackbar } from "components/snackbar";
import { initialSnackBarParams, serverErrorSnackBarParams } from "components/snackbar/constants";
import { CoreModule } from "lib/router";
import { useEffect, useRef, useState } from "react";

interface csvExportPorps {
  getExportUrlAsync: () => Promise<string>;
  closeExport: () => void;
}

export const CsvExport = ({ getExportUrlAsync, closeExport }: csvExportPorps) => {
  const [snackBarParams, setSnackBarParams] = useState(initialSnackBarParams);
  const didExportRef = useRef(false);

  useEffect(() => {
    if (!didExportRef.current) {
      const exportFile = async () => {
        try {
          const url = await getExportUrlAsync();
          downloadFile(url);
          closeExport();
        } catch (error) {
          setSnackBarParams(serverErrorSnackBarParams);
        }
      };
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
