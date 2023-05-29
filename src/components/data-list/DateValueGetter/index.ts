const DateValueGetter = (params: any) => {
  const createdAt = params.value as string | undefined;
  if (createdAt === undefined || createdAt === ""){
    return "-";
  }
  return new Date(createdAt).toLocaleDateString();
};

export default DateValueGetter;