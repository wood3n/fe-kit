import { useState } from "react";
import ReactDOM from "react-dom";

import { DndContext, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import type { Coordinates } from "@dnd-kit/utilities";

import Modal from "./modal";

interface Props {
  isOpen: boolean;
  onClose: VoidFunction;
}

/**
 * draggable modal
 */
const ReactDraggableModal = ({ isOpen, onClose }: Props) => {
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
      {isOpen && ReactDOM.createPortal(<Modal top={y} left={x} />, document.body)}
    </DndContext>
  );
};

export default ReactDraggableModal;
