import QRCodeStyling, { type Options } from "qr-code-styling";

export type CreateQrCodeOptions = Options;

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
