const DateValueFormatter = (params: any) => {
  const value = params.value as string | undefined;
  if (value === undefined || value === ""){
    return "-";
  }
  return new Date(value).toLocaleDateString();
};

export default DateValueFormatter;