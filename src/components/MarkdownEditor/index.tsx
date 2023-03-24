import MDEditor from "@uiw/react-md-editor";

type textChangeFunc = (value: string | undefined) => void;
interface MarkdownEditorProps {
  value: string;
  onChange: textChangeFunc;
  isReadOnly: boolean | undefined;
}

const MarkdownEditor = ({ value, onChange, isReadOnly }: MarkdownEditorProps) => {
  return (
    <>
      <MDEditor
        aria-disabled={isReadOnly}
        hideToolbar={isReadOnly}
        height={600}
        preview={"live"}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default MarkdownEditor;
