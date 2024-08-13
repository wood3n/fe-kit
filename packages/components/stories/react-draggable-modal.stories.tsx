import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ReactDraggableModal } from "../src/react-draggable-modal";

const meta: Meta<typeof ReactDraggableModal> = {
  title: "react-draggable-modal",
  component: ReactDraggableModal,
  tags: ["autodocs"],
};

export default meta;

const BasicUsage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" className="rounded-lg border bg-gray-300 p-2" onClick={() => setIsOpen(true)}>
        打开 Modal
      </button>
      <ReactDraggableModal isOpen={isOpen} className="h-full bg-blue-300 p-6">
        <h1>React Draggable Modal</h1>
        <button type="button" className="rounded-sm bg-gray-300 p-2" onClick={() => setIsOpen(false)}>
          关闭 Modal
        </button>
      </ReactDraggableModal>
    </>
  );
};

export const Basic = {
  render: () => <BasicUsage />,
};
