import { Backdrop, Button, CircularProgress, Grid, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { CustomizedSnackbar } from "components/snackbar";
import { CoreModule } from "lib/router";
import { useState } from "react";
import csv from "csvtojson";
import {
  fileUnsupportedSnackBarParams,
  initialSnackBarParams,
  uploadFailedSnackBarParams,
  uploadSuccessSnackBarParams,
} from "components/snackbar/constants";

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
      const rows = data.map((item, index) => ({ ...item, id: index }));
      setRows(rows);
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
              startAdornment: <span style={{ marginRight: "5px" }}>{filePath}</span>,
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
          <Button onClick={handleUpload} variant="contained" style={{ marginLeft: "10px" }}>
            Upload file
          </Button>
        </Grid>
        <Grid item xs={12}>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              columns={columns}
              rows={rows}
              autoHeight
              pagination
              pageSize={10}
              rowsPerPageOptions={[5, 10, 20]}
            />
          </div>
        </Grid>
      </Grid>
      <Backdrop open={isUploading} style={{ zIndex: 999 }}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <CustomizedSnackbar
        isOpen={snackBarParams.isOpen}
        severerity={snackBarParams.severity}
        message={snackBarParams.message}
        navigateTo={CoreModule.contacts}
      />
    </>
  );
};
