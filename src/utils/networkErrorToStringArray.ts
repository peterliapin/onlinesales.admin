const networkErrorToStringArray = (error: any) => {
  if (error === undefined || error === null){
    return [];
  }
  const output: string[] = [];
  const keys = Object.keys(error);
  const values = Object.values(error);
  keys.map((key, idx) => {
    const value = values[idx] as string[];
    const stringValue = value.reduce((acc, val) => {
      return `${acc}\u000A${val}`;
    });
    output.push(`${key}:\u000A${stringValue}`);
  });
  return output;
};

export default networkErrorToStringArray;