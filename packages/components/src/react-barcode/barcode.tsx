import { useEffect, useRef } from "react";

import { createBarCode, type CreateBarCodeOptions } from "@fe-kit/utils";

export type BarCodeProps = CreateBarCodeOptions & {
  data: string;
};

export const BarCode = ({ data, ...options }: BarCodeProps) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      createBarCode(data, imgRef.current, options);
    }
  }, [data, options]);

  return <img ref={imgRef} alt={data} />;
};
