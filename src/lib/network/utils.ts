import { string } from "zod";

export const buildAbsoluteUrl = (localUrl: string | null) => {
  if (localUrl === null || localUrl.length === 0){
    return "";
  }
  return new URL(localUrl, process.env.CORE_API!).href;
};