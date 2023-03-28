import MDEditor, { commands }  from "@uiw/react-md-editor";
import { ImageUpload } from "./commands";
import AppsIcon from "@mui/icons-material/Apps";
import { MarkdownEditorProps, CommandContext } from "./types";
import { useMemo, useEffect } from "react";

const MarkdownEditor = ({ 
  value, 
  onChange, 
  isReadOnly, 
  networkContext,
  contentDetails,
}: MarkdownEditorProps) => {
  const customCommands = commands.getCommands().concat([
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
  ]);

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
      />
    </>
  );
};

export default MarkdownEditor;
