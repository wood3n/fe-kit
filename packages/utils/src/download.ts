import { createDownloadLink } from "./base/createDownloadLink";
import { xhr as request, type XhrOptions } from "./base/xhr";

/**
 * async download by XMLHttpRequest
 * @param url file url
 * @param options download options
 * @returns XMLHttpRequest instance, so you can use this instance to abort download
 */
export const download = (url: string, options?: Pick<XhrOptions, "onProgress">) => {
  return new Promise<XMLHttpRequest>((resolve, reject) => {
    const xhrInstance = request(url, {
      method: "GET",
      responseType: "blob",
      onSuccess: (response: Blob) => {
        const downloadLink = URL.createObjectURL(response);

        createDownloadLink(downloadLink);
        resolve(xhrInstance);
      },
      onError: reject,
      onProgress: options?.onProgress,
    });
  });
};
