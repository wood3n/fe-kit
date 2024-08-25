import { Icon } from "@iconify/react";

import IconButton from "./icon-button";

interface Props {
  pageIndex: number;
  total: number;
  onChange: (pageIndex: number) => void;
}

const Pagination = ({ pageIndex, total, onChange }: Props) => {
  return (
    <div className="flex items-center gap-x-1" aria-label="Pagination">
      <IconButton
        onChange={() => {
          if (pageIndex > 1) {
            onChange(pageIndex - 1);
          }
        }}
      >
        <Icon icon="material-symbols:chevron-left-rounded" />
        <span className="sr-only">Previous</span>
      </IconButton>
      <div className="flex items-center gap-x-1">
        <input
          type="number"
          value={pageIndex}
          max={total}
          min={1}
          step={1}
          onChange={e => {
            onChange(e.target.valueAsNumber);
          }}
          className="m-0 flex min-h-[32px] min-w-10 items-center justify-center rounded-lg border border-gray-200 px-2 py-1 text-sm text-gray-800 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <span className="flex min-h-[32px] items-center justify-center px-1.5 py-1.5 text-sm text-gray-500">/</span>
        <span className="flex min-h-[32px] items-center justify-center px-1.5 py-1.5 text-sm text-gray-500">{total}</span>
      </div>
      <IconButton
        onClick={() => {
          if (pageIndex < total) {
            onChange(pageIndex + 1);
          }
        }}
      >
        <span className="sr-only">Next</span>
        <Icon icon="material-symbols:chevron-right-rounded" />
      </IconButton>
    </div>
  );
};

export default Pagination;
