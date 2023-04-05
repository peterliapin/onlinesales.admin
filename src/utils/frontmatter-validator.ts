import { parse as parseYaml, YAMLParseError } from "yaml";

export interface ValidateFrontmatterError {
  errorMessage: string,
  errorLine: number,
};

export const validateFrontmatter = (body: string) => {
  const frontmatterString = /---(.*?)---/s.exec(body);
  if (frontmatterString === null || frontmatterString[1] === null){
    return {
      errorMessage: "Frontmatter doesn't exists", 
      errorLine: -1,
    } as ValidateFrontmatterError;
  }
  try {
    parseYaml(frontmatterString[1], {
      strict: true,
    });
    return true;
  }catch (e) {
    console.log(e);
    const exc = e as YAMLParseError;
    return {
      errorMessage: exc.message, 
      errorLine: exc.linePos && exc.linePos[0].line,
    } as ValidateFrontmatterError;
  }
};