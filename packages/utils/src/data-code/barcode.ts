import Barcode from "jsbarcode";

export type CreateBarCodeOptions = Barcode.BaseOptions & {
  flat?: boolean;
};

export function createBarCode(data: string, options?: CreateBarCodeOptions): Promise<HTMLImageElement>;
export function createBarCode(data: string, imgEl: any, options?: CreateBarCodeOptions): void;
export function createBarCode(data: string, imgEl?: any, options?: CreateBarCodeOptions): void | Promise<HTMLImageElement> {
  if (!imgEl) {
    return new Promise((resolve, reject) => {
      const imgNode = new Image();
      Barcode(imgNode, data, options);
      imgNode.onload = () => {
        resolve(imgNode);
      };
      imgNode.onerror = () => {
        reject();
      };
    });
  }

  Barcode(imgEl, data, options);
}
