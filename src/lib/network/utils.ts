import { string } from "zod";

export const buildAbsoluteUrl = (localUrl: string | null | undefined) => {
  if (localUrl === null || localUrl === undefined || localUrl.length === 0) {
    return "";
  }
  return new URL(localUrl, process.env.CORE_API!).href;
};
