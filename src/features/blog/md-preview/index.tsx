import React from "react";
import Markdown from 'markdown-to-jsx';

interface MdPreviewProps {
  source: string | undefined;
}

const findMatches = (regex: RegExp, str: string, matches: Array<string> = []): Array<string> => {
  const res = regex.exec(str);
  if (res) {
    matches.push(res[0]);
    matches = findMatches(regex, str, matches);
  }
  return matches;
}

export const MdPreview = ({source}: MdPreviewProps) => {
  // todo: place for customization markdown preview
  let filteredSource = (source || "").replace(/(---)(.|[\r\n])*?(---)/, "");

  const customLinkMatches = findMatches(/\s*:a\[.*\]\{(?:[^{}]|())*\}/ig, filteredSource);
  if (customLinkMatches) {
    for (let i = 0; i < customLinkMatches.length; i++) {
      const customLinkMatch = customLinkMatches[i];
      const textMatch = (/\[.*\]/).exec(customLinkMatch);
      const text = textMatch && textMatch[0] && textMatch[0].replace('[', '').replace(']', '');
      const paramsMatch = (/\{(?:[^{}]|())*\}/ig).exec(customLinkMatch);
      filteredSource = filteredSource.replace(customLinkMatch, `<customLink text="${text}" ${paramsMatch && paramsMatch[0]} />`)
    }
  }

  return <Markdown options={{
    overrides: {
      customLink: (a) => <a href={a.href} target={a.target}> {a.text || "WavePoint"} </a>
    }
  }}>{filteredSource}</Markdown>;
};

export const mdPreviewFn = (source: string) => <MdPreview source={source}/>;
