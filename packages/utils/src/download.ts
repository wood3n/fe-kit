import { createDownloadLink } from "./base/createDownloadLink";
import { xhr } from "./base/xhr";

interface Options {
  type: "blob";
}

export const download = (url: string, options: Options) => {
  if (options?.type === "blob") {
  }
  createDownloadLink(url);
};
