import { BrowserMultiFormatReader } from "@zxing/library";

/**
 * scan barcode or qrcode from selected file
 * @param file file object
 * @returns scan text result
 */
export const scanCode = async (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      const decoder = new BrowserMultiFormatReader();
      decoder
        .decodeFromImageUrl(fileReader.result as string)
        .then(result => {
          resolve(result.getText());
        })
        .catch(err => {
          reject(err);
        });
    };

    fileReader.onerror = err => {
      reject(err);
    };

    fileReader.readAsDataURL(file);
  });
};
