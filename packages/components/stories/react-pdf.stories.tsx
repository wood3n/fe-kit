import type { Meta, StoryObj } from "@storybook/react";

import { PdfViewer } from "../src/react-pdf-viewer";

const meta: Meta<typeof PdfViewer> = {
  title: "PdfViewer",
  component: PdfViewer,
  argTypes: {
    url: {
      control: { type: "text" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof PdfViewer>;

export const Example: Story = {
  args: {
    url: "https://pdfobject.com/pdf/sample.pdf",
  },
};
