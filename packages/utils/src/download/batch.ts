import JSZip from "jszip";
import PQueue from "p-queue";

import { createDownloadLink } from "../base/createDownloadLink";
import { createXhr } from "../base/xhr";

interface DownloadInfo {
  filename: string | null | undefined;
  response: Blob;
}

const resolveFileNameFromUrl = (url: string) => {
  try {
    return decodeURIComponent(new URL(url).pathname.split("/").pop() ?? "");
  } catch {
    return null;
  }
};

const downloadAsBlob = (url: string) => {
  return new Promise<DownloadInfo>((resolve, reject) => {
    const xhr = createXhr(url, {
      method: "GET",
      responseType: "blob",
      onSuccess: (response: Blob) => {
        const header = xhr.getResponseHeader("Content-Disposition");
        const filename = resolveFileNameFromUrl(url) || header?.match(/filename="(.+)"/)?.[1] || "";

        resolve({
          filename,
          response,
        });
      },
      onError: reject,
    });
  });
};

/**
 * batch download files from http url
 * @param urls multiple file download url
 */
export const batchDownload = async (
  urls: string[],
  options?: {
    filename?: string;
    concurrency?: number;
    onProgress?: (percent: number) => void;
  },
) => {
  const zip = new JSZip();
  const queue = new PQueue({ concurrency: options?.concurrency || 5 });
  let completed = 0;

  try {
    const files = await Promise.allSettled<DownloadInfo>(
      urls.map(url =>
        queue.add(
          () =>
            downloadAsBlob(url).finally(() => {
              completed++;
              options?.onProgress?.(Math.round((completed / urls.length) * 100));
            }),
          {
            throwOnTimeout: true,
          },
        ),
      ),
    );

    files.forEach((file, i) => {
      if (file.status === "fulfilled") {
        zip.file(file.value.filename || String(i + 1), file.value.response);
      }
    });

    const content = await zip.generateAsync({ type: "blob" });

    const url = URL.createObjectURL(content);
    createDownloadLink(url);
    return Promise.resolve();
  } catch (error) {
    let errorMsg = "下载出错";
    if (error instanceof Error) {
      errorMsg = error.message;
    } else if (typeof error === "string") {
      errorMsg = error;
    }
    return Promise.reject(new Error(errorMsg));
  }
};
