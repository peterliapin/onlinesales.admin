import { useEffect, useRef } from "react";
import { downloadFile } from "components/download";
import { useNotificationsService } from "@hooks";

interface csvExportPorps {
  getExportUrlAsync: () => Promise<string>;
  closeExport: () => void;
  endRoute: string;
}

export const CsvExport = ({ getExportUrlAsync, closeExport, endRoute }: csvExportPorps) => {
  const didExportRef = useRef(false);
  const { notificationsService } = useNotificationsService();

  useEffect(() => {
    if (!didExportRef.current) {
      const exportFile = async () => {
        try {
          const url = await getExportUrlAsync();
          downloadFile(url);
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
