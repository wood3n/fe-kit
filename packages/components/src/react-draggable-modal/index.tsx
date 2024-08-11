import { useState } from "react";
import ReactDOM from "react-dom";

import { DndContext, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import type { Coordinates } from "@dnd-kit/utilities";

import Modal, { type ModalProps } from "./modal";

export interface ReactDraggableModalProps extends ModalProps {
  /**
   * visible state
   */
  isOpen: boolean;
}

/**
 * draggable modal
 */
const ReactDraggableModal = ({ isOpen, ...modalProps }: ReactDraggableModalProps) => {
  const [{ x, y }, setCoordinates] = useState<Coordinates>({ x: 100, y: 100 });

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    }),
  );

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={({ delta }) => {
        setCoordinates(({ x, y }) => {
          return {
            x: x + delta.x,
            y: y + delta.y,
          };
        });
      }}
    >
      {isOpen && ReactDOM.createPortal(<Modal top={y} left={x} {...modalProps} />, document.body)}
    </DndContext>
  );
};

export default ReactDraggableModal;
