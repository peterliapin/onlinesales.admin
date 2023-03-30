import MDEditor, { commands }  from "@uiw/react-md-editor";
import { ImageUpload } from "./commands";
import AppsIcon from "@mui/icons-material/Apps";
import { MarkdownEditorProps } from "./types";
import { useMemo } from "react";
import { MarkdownViewerFunc } from "@components/MarkdownViewer";

const MarkdownEditor = ({ 
  value, 
  onChange, 
  isReadOnly, 
  networkContext,
  contentDetails,
}: MarkdownEditorProps) => {
  const customCommands = useMemo(() => commands.getCommands().concat([
    commands.group(
      [
        ImageUpload(networkContext, contentDetails),
      ],
      {
        name: "OnlineSales components",
        groupName: "onlinesales-components",
        buttonProps: {"aria-label": "Insert onlinesales custom components"},
        icon: <AppsIcon sx={{ fontSize: 15 }} />,
      }
    )
  ]), [networkContext, contentDetails]);

  return (
    <>
      <MDEditor
        aria-disabled={isReadOnly}
        hideToolbar={isReadOnly}
        height={600}
        preview={"live"}
        value={value}
        onChange={onChange}
        commands={customCommands}
        components={
          {
            preview: MarkdownViewerFunc,
          }
        }
      />
    </>
  );
};

export default MarkdownEditor;
