import { useState } from "react";
import { Backdrop, Button, CircularProgress, Grid, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { CustomizedSnackbar } from "components/snackbar";
import { CoreModule } from "lib/router";
import csv from "csvtojson";
import {
  fileUnsupportedSnackBarParams,
  initialSnackBarParams,
  noDataErrorSnackBarParams,
  uploadFailedSnackBarParams,
  uploadSuccessSnackBarParams,
} from "components/snackbar/constants";
import { DataGridDiv, FileNameTextSpan, StyledBackdrop, UploadButton } from "./index.styled";

interface ImportFileProps {
  handleFileUpload: (fileData: any) => void;
}

export const ImportFile = ({ handleFileUpload }: ImportFileProps) => {
  const [data, setData] = useState<any[]>([]);
  const [filePath, setFilePath] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [snackBarParams, setSnackBarParams] = useState(initialSnackBarParams);
  const [columns, setColumns] = useState<GridColDef[]>([]);
  const [rows, setRows] = useState<any[]>([]);

  const handleBrowse = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSnackBarParams(initialSnackBarParams);
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFilePath(file.name);

      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = async (event) => {
        const fileData = event.target?.result as string;
        let jsonData: any = [];
        if (file.name.endsWith(".json")) {
          jsonData = JSON.parse(fileData);
        } else if (file.name.endsWith(".csv")) {
          jsonData = await csv().fromString(fileData);
        } else {
          setSnackBarParams(fileUnsupportedSnackBarParams);
          return;
        }
        setData(jsonData);
        generateGridColumnsRows(jsonData);
      };
    }
  };

  const handleUpload = async () => {
    try {
      setSnackBarParams(initialSnackBarParams);
      if (data.length === 0) {
        setSnackBarParams(noDataErrorSnackBarParams);
        return;
      }
      setIsUploading(true);
      await handleFileUpload(data);
      setSnackBarParams(uploadSuccessSnackBarParams);
    } catch (error) {
      console.log(error);
      setSnackBarParams(uploadFailedSnackBarParams);
    } finally {
      setIsUploading(false);
    }
  };

  const generateGridColumnsRows = (data: any[]) => {
    if (data.length > 0) {
      const entityKeys = Object.keys(data[0]);
      const newColumns = entityKeys.map((key) => ({
        field: key,
        headerName: key.charAt(0).toUpperCase() + key.slice(1),
        width: 150,
      }));
      setColumns(newColumns);
      setRows(data);
    } else {
      setColumns([]);
      setRows([]);
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="File name"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: <FileNameTextSpan>{filePath}</FileNameTextSpan>,
            }}
          />
        </Grid>
        <Grid item xs={12} spacing={4}>
          <label htmlFor="btn-upload">
            <input
              id="btn-upload"
              name="btn-upload"
              style={{ display: "none" }}
              type="file"
              onChange={handleBrowse}
            />
            <Button component="span" variant="contained">
              Choose File
            </Button>
          </label>
          <UploadButton onClick={handleUpload} variant="contained">
            Upload file
          </UploadButton>
        </Grid>
        <Grid item xs={12}>
          <DataGridDiv>
            <DataGrid
              columns={columns}
              rows={rows}
              autoHeight
              pagination
              pageSize={10}
              rowsPerPageOptions={[5, 10, 20]}
              getRowId={(row) => row.email}
            />
          </DataGridDiv>
        </Grid>
      </Grid>
      <StyledBackdrop open={isUploading}>
        <CircularProgress color="inherit" />
      </StyledBackdrop>
      <CustomizedSnackbar
        isOpen={snackBarParams.isOpen}
        severerity={snackBarParams.severity}
        message={snackBarParams.message}
        navigateTo={CoreModule.contacts}
      />
    </>
  );
};
