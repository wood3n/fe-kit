import { useEffect, useRef } from "react";

import { createQrCode, type CreateQrCodeOptions } from "@fe-kit/utils";

export const QrCode = (props: CreateQrCodeOptions) => {
  const elRef = useRef<HTMLImageElement>(null);
  const qrCode = useRef(createQrCode(props));

  useEffect(() => {
    if (elRef.current) {
      qrCode.current.append(elRef.current);
    }
  }, []);

  useEffect(() => {
    qrCode.current.update(props);
  }, [props]);

  return <div ref={elRef} />;
};
