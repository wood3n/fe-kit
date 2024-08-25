import { type ButtonHTMLAttributes } from "react";

const IconButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-x-2 rounded-lg border border-transparent p-2 text-sm font-medium transition ease-in-out hover:bg-gray-200 hover:text-blue-500 disabled:pointer-events-none disabled:opacity-50"
      {...props}
    />
  );
};

export default IconButton;
