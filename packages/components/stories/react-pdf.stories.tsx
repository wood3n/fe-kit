import type { Meta } from "@storybook/react";

import { PdfViewer } from "../src/react-pdf-viewer";

const meta: Meta<typeof PdfViewer> = {
  title: "react-pdf-viewer",
  component: PdfViewer,
  tags: ["autodocs"],
};
export default meta;

const BasicUsage = () => {
  return <PdfViewer url="https://pdfobject.com/pdf/sample.pdf" />;
};

export const Basic = {
  render: () => <BasicUsage />,
};
