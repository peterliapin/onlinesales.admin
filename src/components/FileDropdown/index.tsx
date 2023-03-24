import Dropzone, {Accept, FileRejection} from "react-dropzone";
import { BoxStyled } from "./index.styled";
import { Button, Grid, Box } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";

type onChangeFunc = (files: File | null) => void;

interface FileDropdownProps {
    acceptMIME: string;
    maxFileSize: number;
    onChange: onChangeFunc;
};

const FileDropdown = ({acceptMIME, maxFileSize, onChange}:FileDropdownProps) =>{
  const [currentImage, setCurrentImage] = useState<File | null>(null);
  const [currentImageUrl, setCurrentImageUrl] = useState<string>("");

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
      setCurrentImage(file);
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        if (e.target === null) {
          toast.error(`Failed to select image ${file.name} (File System error).`);
          return;
        }
        const { result } = e.target;
        if (result === null){
          toast.error(`Failed to select image ${file.name} (File System error).`);
          return;
        }
        setCurrentImageUrl(result as string);
      };
      fileReader.readAsDataURL(file);
      onChange(acceptedFiles[0]);
    }
  };
  return (
    <>
      <BoxStyled>
        {
          currentImage === null ?
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
                    height: 233,
                    width: 350,
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
                  onClick={() => {setCurrentImage(null); onChange(null); }}
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