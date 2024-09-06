import type { Meta, StoryObj } from "@storybook/react";

import { BarCode } from "../src/react-barcode";

const meta: Meta<typeof BarCode> = {
  title: "BarCode",
  component: BarCode,
  tags: ["autodocs"],
  argTypes: {
    data: {
      control: { type: "text" },
      description: "code",
    },
    format: {
      control: {
        type: "radio",
      },
      options: ["CODE128", "EAN13", "UPC", "EAN8", "EAN5", "EAN2", "CODE39", "ITF14", "MSI", "pharmacode", "codabar"],
    },
    width: {
      control: {
        type: "number",
      },
      description: "The width option is the width of a single bar.",
    },
    height: {
      control: {
        type: "number",
      },
      description: "The height of the barcode.",
    },
    displayValue: {
      control: {
        type: "boolean",
      },
    },
    text: {
      control: {
        type: "text",
      },
      description: "Overide the text that is diplayed",
    },
    flat: {
      control: {
        type: "boolean",
      },
      description: "Only for EAN8/EAN13",
    },
  },
};
export default meta;

type Story = StoryObj<typeof BarCode>;

export const BarCodeImage: Story = {
  args: {
    data: "123456",
    format: "CODE128",
    width: 2,
    height: 160,
    displayValue: true,
    flat: false,
    text: "",
  },
};
