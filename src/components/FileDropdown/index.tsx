import Dropzone, {Accept, FileRejection} from "react-dropzone";
import { BoxStyled } from "./index.styled";
import { Button, Grid, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

type onChangeFunc = (files: File | null) => void;

interface FileDropdownProps {
    acceptMIME: string;
    maxFileSize: number;
    onChange: onChangeFunc;
    initialUrl: string;
    error?: boolean | null;
    helperText?: string | boolean | undefined;
};

const FileDropdown = ({
  acceptMIME, 
  maxFileSize, 
  onChange, 
  initialUrl, 
  error, 
  helperText
}:FileDropdownProps) =>{
  const [currentImageUrl, setCurrentImageUrl] = useState<string>(initialUrl);
  // If we're restoring content with already set (uploaded ) cover we need this
  useEffect(() => setCurrentImageUrl(initialUrl), [initialUrl]); 

  const onDrop = (acceptedFiles: File[], rejections: FileRejection[] ) => {
    if (rejections.length > 0){
      rejections.map((rejection) => {
        const fileName = rejection.file.name;
        const error = rejection.errors[0].message;
        toast.error(`Failed to select image ${fileName} (${error}).`);
      });
    }
    if (acceptedFiles.length !== 0) {
      const file = acceptedFiles[0];
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        if (e.target === null || e.target.result === null) {
          toast.error(`Failed to select image ${file.name} (File System error).`);
          return;
        }
        setCurrentImageUrl(e.target.result as string);
      };
      fileReader.readAsDataURL(file);
      onChange(acceptedFiles[0]);
    }
  };

  const onReset = () => {
    setCurrentImageUrl("");
    onChange(null);
  };

  return (
    <>
      <BoxStyled>
        {
          currentImageUrl.length === 0 ?
            <Dropzone 
              onDrop={onDrop} 
              maxSize={maxFileSize} 
              maxFiles={1} 
              accept={{key: [acceptMIME]} as Accept}
            >
              {({getRootProps, getInputProps}) => (
                <Grid
                  container
                  spacing={0}
                  xs={12}
                  direction="row"
                  justifyContent="center"
                >
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag drop some files here, or click to select files</p>
                    <Grid item xs={12} style={{textAlign: "center"}}>
                      <Button variant="outlined">
                        Select file
                      </Button>
                    </Grid>
                  </div>
                </Grid>
              )}
            </Dropzone> :
            <Grid
              container
              xs={12}
              direction="column"
              justifyContent="center"
            >
              <Grid item xs={12} style={{textAlign: "center"}}>
                <Box
                  component="img"
                  sx={{
                    height: 1,
                    width: 1,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                    "object-fit": "contain"
                  }}
                  alt="Cover image preview"
                  src={currentImageUrl}
                />
              </Grid>
              <Grid item xs={12} style={{textAlign: "center"}}>
                <Button 
                  variant="outlined" 
                  onClick={onReset}
                >
                  Reset
                </Button>
              </Grid>
            </Grid>
        }
      </BoxStyled>
    </>
  );
};

export default FileDropdown;