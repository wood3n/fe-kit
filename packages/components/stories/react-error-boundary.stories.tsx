import type { Meta } from "@storybook/react";

import { ErrorBoundary } from "../src/react-error-boundary";

const ErrorComponent = () => {
  throw new Error("this is an error component");
};

export const Example = () => {
  return (
    <ErrorBoundary fallback="fallback：出错了！">
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
