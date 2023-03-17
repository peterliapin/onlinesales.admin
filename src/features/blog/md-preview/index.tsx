import ReactMarkdown from "react-markdown";
import React from "react";

interface MdPreviewProps {
  source: string | undefined;
}

export const MdPreview = ({ source }: MdPreviewProps) => {
  // todo: place for customization markdown preview
  const filteredSource = (source || "").replace(/(---)(.|[\r\n])*?(---)/, "");
  return <ReactMarkdown>{filteredSource}</ReactMarkdown>;
};

export const mdPreviewFn = (source: string) => <MdPreview source={source} />;
