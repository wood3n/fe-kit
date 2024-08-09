import type React from "react";

import { useDraggable } from "@dnd-kit/core";

interface Props {
  top: number;
  left: number;
  className?: string;
  style?: React.CSSProperties;
}

const Modal = ({ top, left, className, style }: Props) => {
  const { attributes, isDragging, listeners, setNodeRef, transform } = useDraggable({
    id: "react-dnd-modal-x",
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="fixed resize overflow-auto bg-white p-6 shadow"
      style={{
        top,
        left,
        cursor: isDragging ? "grabbing" : "grab",
        transform: `translate(${transform?.x ?? 0}px, ${transform?.y ?? 0}px)`,
      }}
    >
      <div className={className} style={style}>
        内容
      </div>
    </div>
  );
};

export default Modal;
