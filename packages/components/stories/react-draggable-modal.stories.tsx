import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ReactDraggableModal } from "../src/react-draggable-modal";

const meta: Meta<typeof ReactDraggableModal> = {
  title: "ReactDraggableModal",
  component: ReactDraggableModal,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    style: {
      control: { type: "object" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ReactDraggableModal>;

const Basic = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" className="rounded-lg border bg-gray-300 p-2" onClick={() => setIsOpen(true)}>
        打开 Modal
      </button>
      <ReactDraggableModal isOpen={isOpen} className="h-full p-6">
        <h1>React Draggable Modal</h1>
        <button type="button" className="rounded-sm bg-gray-300 p-2" onClick={() => setIsOpen(false)}>
          关闭 Modal
        </button>
      </ReactDraggableModal>
    </>
  );
};

export const Example: Story = {
  render: () => <Basic />,
};
