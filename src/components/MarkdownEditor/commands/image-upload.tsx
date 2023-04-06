import ImageIcon from "@mui/icons-material/Image";
import { Button } from "@mui/material";
import { ExtendedCommandBase } from "../types";
import { RequestContextType } from "@providers/request-provider";
import { ContentDetails } from "@features/blog/ContentEdit/types";
import { useNotificationsService } from "@hooks";

export const ImageUpload = (networkContext: RequestContextType, contentDetails: ContentDetails) => {
  const { notificationService } = useNotificationsService();
  const command = {
    networkContext,
    contentDetails,
    name: "Upload Image",
    keyCommand: "image-upload",
    buttonProps: { "aria-label": "Upload image" },
    icon: <ImageIcon sx={{ fontSize: 20 }} />,
    render(command, disabled, executeCommand) {
      const onClick = () => {
        executeCommand(command, command.groupName);
      };
      return (
        <>
          <Button
            variant="outlined"
            disabled={disabled}
            startIcon={<ImageIcon sx={{ fontSize: 20 }} />}
            onClick={onClick}
          >
            Upload Image
          </Button>
        </>
      );
    },
    execute(state, api) {
      if (this.contentDetails.slug.length === 0) {
        notificationService.error("Specify slug first!");
        return;
      }
      const inputElement = document.createElement("input");
      inputElement.style.display = "none";
      inputElement.type = "file";
      inputElement.addEventListener("change", async () => {
        if (inputElement.files === null || inputElement.files.length === 0) {
          document.body.removeChild(inputElement);
          return;
        }
        const selectedFile = inputElement.files[0];
        const replaceText = `![${selectedFile.name}](Uploading...)`;
        const textPosStart = api.replaceSelection("").selection.start;
        api.replaceSelection(replaceText);
        const response = await this.networkContext.client.api.mediaCreate({
          Image: selectedFile,
          ScopeUid: this.contentDetails.slug,
        });
        api.setSelectionRange({
          start: textPosStart,
          end: replaceText.length + textPosStart,
        });
        api.replaceSelection(`![${selectedFile.name}](${response.data.location})`);
        document.body.removeChild(inputElement);
      });
      document.body.appendChild(inputElement);
      inputElement.click();
    },
  } as ExtendedCommandBase<string>;
  return command;
};
