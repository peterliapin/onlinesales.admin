import ImageIcon from "@mui/icons-material/Image";
import { Button } from "@mui/material";
import { ExtendedCommandBase } from "../types";
import { RequestContextType } from "@providers/request-provider";
import { ContentDetails } from "@features/blog/ContentEdit/types";

export const ImageUpload = (networkContext: RequestContextType, contentDetails: ContentDetails) => {
  const command = {
    networkContext,
    contentDetails,
    name: "Upload Image",
    keyCommand: "image-upload",
    buttonProps: { "aria-label": "Upload image" },
    icon: <ImageIcon sx={{ fontSize: 20 }}/>,
    render(command, disabled, executeCommand) {
      const onClick = () => {
        executeCommand(command, command.groupName);
      };
      return (
        <>
          <Button
            variant="outlined"
            disabled={disabled}
            startIcon={<ImageIcon sx={{ fontSize: 20 }}/>}
            onClick={onClick}
          >
            Upload Image
          </Button>
        </>
      );
    },
    execute(state, api){
      const inputElement = document.createElement("input");
      inputElement.style.display = "none";
      inputElement.type= "file";
      inputElement.addEventListener("change", async () => {
        if (inputElement.files === null || inputElement.files.length === 0) {
          document.body.removeChild(inputElement);
          return;
        }
        const selectedFile = inputElement.files[0];
        const replaceText = `![${selectedFile.name}](Uploading...)`;
        api.replaceSelection(replaceText);
        const response = await this.networkContext.client.api.mediaCreate(
          {
            Image: selectedFile,
            ScopeUid: this.contentDetails.slug,
          });
        api.replaceSelection(`![${selectedFile.name}](${response.data.location})`);
        console.log(state);
        console.log(inputElement.files);
        document.body.removeChild(inputElement);
      });
      document.body.appendChild(inputElement);
      inputElement.click();
      console.log(state);
    }
  } as ExtendedCommandBase<string>;
  return command;
};

