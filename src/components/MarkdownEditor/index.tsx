import MDEditor, { commands } from "@uiw/react-md-editor";
import { ImageUpload } from "./commands";
import AppsIcon from "@mui/icons-material/Apps";
import { MarkdownEditorProps, onFrontmatterErrorChangeFunc } from "./types";
import { useMemo, useEffect, useState } from "react";
import { MarkdownViewerFunc } from "@components/MarkdownViewer";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { validateFrontmatter, ValidateFrontmatterError } from "utils/frontmatter-validator";
import "./styles.css";

const EditorViewFunc = (
  value: string, 
  onChange: any, 
  onErrorChange: onFrontmatterErrorChangeFunc
) => {
  useEffect(() => {
    const validationResult = validateFrontmatter(value);
    if (validationResult !== true){
      onErrorChange(validationResult);
      if (validationResult.errorLine === -1) {
        return;
      }
      const lines = document.querySelectorAll(".code-line");
      if (lines.length === 0 ){
        return;
      }
      const element = lines[validationResult.errorLine - 1] as HTMLTextAreaElement;
      element.classList.add("error-line");
      return;
    }
    onErrorChange(null);
  }, [value]);
  
  return ( 
    <CodeEditor
      value={value}
      language="yaml"
      onChange={(evn) => onChange(evn.target.value)}
      padding={16}
      style={{
        fontSize: 16,
        font: "Helvetica Neue",
        backgroundColor: "#FFFFFF",
        lineHeight: 1.5,
        fontFamily: "Helvetica Neue, Helvetica",
      }}
    />
  );
};


const MarkdownEditor = ({
  value,
  onChange,
  isReadOnly,
  networkContext,
  contentDetails,
  onFrontmatterErrorChange,
}: MarkdownEditorProps) => {
  const [currentError, setCurrentError] = useState<string>("");
  const customCommands = useMemo(
    () =>
      commands.getCommands().concat([
        commands.group([ImageUpload(networkContext, contentDetails)], {
          name: "OnlineSales components",
          groupName: "onlinesales-components",
          buttonProps: { "aria-label": "Insert onlinesales custom components" },
          icon: <AppsIcon sx={{ fontSize: 15 }} />,
        }),
      ]),
    [networkContext, contentDetails]
  );
  const onErrorChange = (error: ValidateFrontmatterError | null) => {
    error !== null ? 
      setCurrentError(`Frontmatter Error \n (${error.errorMessage})\n`) :
      setCurrentError("");
    onFrontmatterErrorChange(error);
  };
  const strippedValue = value.replace(/(---.*?---)/s, ""); 
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
        highlightEnable
        components={{
          preview: (value) => { return MarkdownViewerFunc(`${currentError}${strippedValue}`); },
          textarea: () => EditorViewFunc(value, onChange, onErrorChange),
        }}
      />
    </>
  );
};

export default MarkdownEditor;
