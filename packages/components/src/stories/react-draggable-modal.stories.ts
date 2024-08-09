import type { Meta, StoryObj } from "@storybook/react";

import ReactDraggableModal from "../react-draggable-modal";

const meta: Meta<typeof ReactDraggableModal> = {
  title: "react-draggable-modal",
  component: ReactDraggableModal,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ReactDraggableModal>;

export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};
