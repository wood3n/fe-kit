/**
 * create an a alement to download file
 * @param url file url
 */
export const createDownloadLink = (url: string) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = "";
  link.target = "_blank";
  link.rel = "noreferrer noopener";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
