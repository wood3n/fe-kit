import QRCodeStyling, { type Options } from "qr-code-styling";

export type CreateQrCodeOptions = Options;

/**
 * create qrcode image
 * @param options qr-code-styling options
 * @returns QRCodeStyling instance
 */
export const createQrCode = (options?: CreateQrCodeOptions) => {
  const qrCode = new QRCodeStyling({
    width: 200,
    height: 200,
    type: "svg",
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 20,
    },
    ...options,
  });

  return qrCode;
};
