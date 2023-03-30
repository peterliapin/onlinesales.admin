import ReactMarkdown from "react-markdown";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";
import { MarkdownViewerProps } from "./types";
//Plugins
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkDirective from "remark-directive";
import { visit } from "unist-util-visit";
import { h } from "hastscript";
//Styles
import "./styles.css";

// This custom previewer is required because standard one included in editor
// re-renders AST tree for each change which requires about 60 msecs which causes
// HUGE performance drop when typing something


const ImageUriTransformer = (src: string, alt: string, title: string | null) => {
  if (src.startsWith("/api")){
    return new URL(src, process.env.CORE_API).href;
  }
  return src;
};

function DirectiveHandler() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (
        node.type === "textDirective" ||
        node.type === "leafDirective" ||
        node.type === "containerDirective"
      ) {
        const data = node.data || (node.data = {});
        const hast = h(node.name, node.attributes) as any;

        data.hName = hast.tagName;
        data.hProperties = hast.properties;
      }
    });
  };
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
          remarkDirective,
          DirectiveHandler,
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
