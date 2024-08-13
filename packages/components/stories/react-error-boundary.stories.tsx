import type { Meta, StoryObj } from "@storybook/react";

import { ErrorBoundary } from "../src/react-error-boundary";

const meta: Meta<typeof ErrorBoundary> = {
  title: "react-error-boundary",
  component: ErrorBoundary,
  tags: ["autodocs"],
};
export default meta;

const ErrorComponent = () => {
  throw new Error("this is an error component");
};

const BasicUsage = () => {
  return (
    <ErrorBoundary fallback="fallback：出错了！">
      <ErrorComponent />
    </ErrorBoundary>
  );
};

export const Basic = {
  render: () => <BasicUsage />,
};
