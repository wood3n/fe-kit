import type { Meta, StoryObj } from "@storybook/react";

import { Progress } from "../src/react-progress";

const meta: Meta<typeof Progress> = {
  title: "Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    shape: {
      options: ["line", "circle"],
      control: { type: "radio" },
    },
    percent: {
      control: { type: "range", min: 0, max: 100 },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Progress>;

export const Line: Story = {
  args: {
    shape: "line",
    percent: 20,
  },
};

export const Circle: Story = {
  args: {
    shape: "circle",
    percent: 20,
  },
};
