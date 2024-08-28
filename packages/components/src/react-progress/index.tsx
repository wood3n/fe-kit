import clsx from "clsx";

export interface ProgressProps {
  percent: number;
  shape?: "circle" | "line" | undefined;
  className?: string;
  style?: React.CSSProperties;
}

export const Progress = ({ percent = 0, shape = "line", className, style }: ProgressProps) => {
  const innerPercent = `${percent}%`;
  const offsetPercent = Math.round(100 - percent);

  if (shape === "circle") {
    return (
      <div className={clsx("relative size-40", className)} style={style}>
        <svg className="size-full -rotate-90" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200" strokeWidth="2"></circle>
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-current text-blue-600"
            strokeWidth="2"
            strokeDasharray="100"
            strokeDashoffset={offsetPercent}
            strokeLinecap="round"
          ></circle>
        </svg>
        <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <span className="text-center text-2xl font-bold text-blue-600">{innerPercent}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={clsx("flex h-4 w-full overflow-hidden rounded-full bg-gray-200", className)} style={style}>
      <div
        className="flex flex-col justify-center overflow-hidden whitespace-nowrap rounded-full bg-blue-600 text-center text-xs text-white transition duration-500"
        style={{
          width: innerPercent,
        }}
      >
        {innerPercent}
      </div>
    </div>
  );
};
