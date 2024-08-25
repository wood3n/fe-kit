import type { Meta } from "@storybook/react";

import Progress from "../src/react-progress";

const meta: Meta<typeof Progress> = {
  title: "react-progress",
  component: Progress,
  tags: ["autodocs"],
};
export default meta;

const BasicUsage = () => {
  return <Progress percent={20} />;
};

export const Basic = {
  render: () => <BasicUsage />,
};
