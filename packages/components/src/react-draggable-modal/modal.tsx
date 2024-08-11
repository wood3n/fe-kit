import type React from "react";

import { useDraggable } from "@dnd-kit/core";

export interface ModalProps {
  /**
   * modal content
   */
  children?: React.ReactNode;
  /**
   * modal content wrapper class
   */
  className?: string;
  /**
   * modal content wrapper style
   */
  style?: React.CSSProperties;
}

interface Props extends ModalProps {
  top: number;
  left: number;
}

const Modal = ({ top, left, children, className, style }: Props) => {
  const { attributes, isDragging, listeners, setNodeRef, transform } = useDraggable({
    id: "react-dnd-modal-x",
  });

  return (
    <div
      ref={setNodeRef}
      className="fixed resize overflow-auto"
      style={{
        top,
        left,
        cursor: isDragging ? "grabbing" : "grab",
        transform: `translate(${transform?.x ?? 0}px, ${transform?.y ?? 0}px)`,
      }}
    >
      <div {...listeners} {...attributes} className={className} style={style}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
