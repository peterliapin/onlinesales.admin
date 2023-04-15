import { useEffect, useRef } from "react";
import { downloadFile } from "components/download";
import { useNotificationsService } from "@hooks";

interface ExportPorps {
  exportAsync: (accept: string) => Promise<string>;
  closeExport: () => void;
  fileName: string;
}

export const CsvExport = ({ exportAsync, closeExport, fileName }: ExportPorps) => {
  const didExportRef = useRef(false);
  const { notificationsService } = useNotificationsService();

  useEffect(() => {
    if (!didExportRef.current) {
      const exportFile = async () => {
        try {
          const response = await exportAsync("text/csv");
          downloadFile(response, "text/csv", `${fileName}.csv`);
          closeExport();
        } catch (error) {
          notificationsService.error("Server error occurred.");
        }
      };
      exportFile();
      didExportRef.current = true;
    }
  }, []);

  return <></>;
};