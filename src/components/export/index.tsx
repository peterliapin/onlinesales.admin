import { useEffect, useRef, useState } from "react";
import { downloadFile } from "components/download";
import { CustomizedSnackbar } from "components/snackbar";
import { initialSnackBarParams, serverErrorSnackBarParams } from "components/snackbar/constants";
import { CoreModule } from "lib/router";

interface csvExportPorps {
  getExportUrlAsync: () => Promise<string>;
  closeExport: () => void;
  endRoute: string;
}

export const CsvExport = ({ getExportUrlAsync, closeExport, endRoute }: csvExportPorps) => {
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
        navigateTo={endRoute as CoreModule}
      />
    </>
  );
};
