export interface DtoSchema {
  "required"?: string[];
  "properties": {
    [x: string]: {
      "type": string;
      "format"?: string;
      "nullable"?: boolean;
      "description"?: string;
    }
  }
}

export const camelCaseToTitleCase = (str: string) => {
  const titleCase = str.replace(/[A-Z]/g, (match) => ` ${match}`);
  return titleCase.charAt(0).toUpperCase() + titleCase.slice(1);
};
