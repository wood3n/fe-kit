import { useRef, useState } from "react";

import { scanCode } from "@fe-kit/utils";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const QrCodeScan = ({ className, style }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [code, setCode] = useState<string>();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const file = e.target.files?.[0];

    if (file) {
      scanCode(file).then(setCode);
    }
  };

  return (
    <>
      <button type="button" onClick={() => inputRef.current?.click()} className={className} style={style}>
        <input type="file" ref={inputRef} onChange={handleChange} style={{ display: "none" }} />
        选择图片
      </button>
      <div>{code}</div>
    </>
  );
};
