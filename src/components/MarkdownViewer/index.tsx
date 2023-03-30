import ReactMarkdown from "react-markdown";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";
import { MarkdownViewerProps } from "./types";
//Plugins
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

// This custom previewer is required because standard one included in editor
// re-renders AST tree for each change which requires about 60 msecs which causes
// HUGE performance drop when typing something


const ImageUriTransformer = (src: string, alt: string, title: string | null) => {
  if (src.startsWith("/api")){
    return new URL(src, process.env.CORE_API).href;
  }
  return src;
};

const MarkdownViewer = ({ source }: MarkdownViewerProps) => {
  const [body, setBody] = useState<string>(source);
  const onChange = useDebouncedCallback((value) => {
    setBody(value);
  }, 200);
  useEffect(() => {
    onChange(source);
  }, [source]);
  return(
    <ReactMarkdown
      remarkPlugins={
        [
          remarkGfm,
          remarkBreaks,
        ]
      }
      transformImageUri={ImageUriTransformer}
    >
      {body}
    </ReactMarkdown>
  );
};

export const MarkdownViewerFunc = (source: string) => {
  return (
    <MarkdownViewer source={source}/>
  );
};

export default MarkdownViewer;
