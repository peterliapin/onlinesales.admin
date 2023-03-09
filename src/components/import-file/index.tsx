import {
  AlertColor,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { CustomizedSnackbar } from "components/snackbar";
import { CoreModule } from "lib/router";
import { useState } from "react";

interface ImportFileProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  handleFileUpload: (fileData: any) => void;
}

export const ImportFile = ({ isOpen, setOpen, handleFileUpload }: ImportFileProps) => {
  const initialSnackBarParams = {
    message: "",
    isOpen: false,
    severity: "success" as AlertColor,
  };

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [filePath, setFilePath] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [snackBarParams, setSnackBarParams] = useState(initialSnackBarParams);

  const handleClose = () => {
    setOpen(false);
    setSnackBarParams(initialSnackBarParams);
  };

  const handleBrowse = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(file);
      setFilePath(file.name);
    }
  };

  const handleUpload = () => {
    const reader = new FileReader();
    reader.readAsText(selectedFile!);
    reader.onload = async (event) => {
      const fileData = event.target?.result as string;
      try {
        setIsUploading(true);
        await handleFileUpload(JSON.parse(fileData));
        setSnackBarParams({
          message: "Uploaded Successfully",
          isOpen: true,
          severity: "success",
        });
      } catch (error) {
        console.log(error);
        setSnackBarParams({
          message: "Upload Failed",
          isOpen: true,
          severity: "error",
        });
      } finally {
        setIsUploading(false);
      }
    };
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Import Data</DialogTitle>
      <DialogContent>
        <DialogContentText>File selected : {filePath}</DialogContentText>
        <Box>
          <label htmlFor="btn-upload">
            <input
              id="btn-upload"
              name="btn-upload"
              style={{ display: "none" }}
              type="file"
              onChange={handleBrowse}
            />
            <Button component="span">Choose File</Button>
          </label>
          <Button autoFocus onClick={handleUpload}>
            Upload file
          </Button>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
      <Backdrop open={isUploading} style={{ zIndex: 999 }}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <CustomizedSnackbar
        isOpen={snackBarParams.isOpen}
        severerity={snackBarParams.severity}
        message={snackBarParams.message}
        navigateTo={CoreModule.contacts}
      />
    </Dialog>
  );
};
