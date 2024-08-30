import type { Meta } from "@storybook/react";

import { ErrorBoundary } from "../src/react-error-boundary";

const ErrorComponent = () => {
  throw new Error("throw error component");
};

export const Example = () => {
  return (
    <ErrorBoundary
      fallback={error => {
        let errorMsg = "component error";
        if (error instanceof Error) {
          errorMsg = error.message;
        } else if (typeof error === "string") {
          errorMsg = error;
        }

        return <div className="text-red-500">{errorMsg}</div>;
      }}
    >
      <ErrorComponent />
    </ErrorBoundary>
  );
};

const meta: Meta<typeof ErrorBoundary> = {
  title: "ErrorBoundary",
  component: ErrorBoundary,
  tags: ["autodocs"],
};

export default meta;
