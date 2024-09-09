export interface XhrOptions {
  method?: string;
  onSuccess?: (response: any) => void;
  onError?: (error: string) => void;
  onProgress?: (percent: number) => void;
  responseType?: XMLHttpRequestResponseType;
}

export const createXhr = (url: string, options?: XhrOptions) => {
  const { method = "GET", onSuccess, onError, onProgress, responseType = "" } = options ?? {};

  const xhrInstance = new XMLHttpRequest();
  xhrInstance.responseType = responseType;
  xhrInstance.open(method, url, true);

  xhrInstance.onload = () => {
    const status = xhrInstance.status;
    if (status >= 200 && status < 300) {
      onSuccess?.(xhrInstance.response);
    } else {
      onError?.(xhrInstance.statusText);
    }
  };

  xhrInstance.onabort =
    xhrInstance.onerror =
    xhrInstance.ontimeout =
      () => {
        onError?.(xhrInstance.statusText);
      };

  xhrInstance.onprogress = e => {
    if (onProgress && e.lengthComputable) {
      const percent = Math.round((e.loaded / e.total) * 100);
      onProgress(percent);
    }
  };

  xhrInstance.send();
  return xhrInstance;
};
