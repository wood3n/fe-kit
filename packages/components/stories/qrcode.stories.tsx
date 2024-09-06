import type { Meta, StoryObj } from "@storybook/react";

import { QrCode } from "../src/react-qrcode";

const meta: Meta<typeof QrCode> = {
  title: "QrCode",
  component: QrCode,
  tags: ["autodocs"],
  argTypes: {
    data: {
      control: { type: "text" },
      description: "code",
    },
  },
};
export default meta;

type Story = StoryObj<typeof QrCode>;

export const QrCodeImage: Story = {
  args: {
    data: "123456",
  },
};
