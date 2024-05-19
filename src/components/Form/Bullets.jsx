import React from "react";
import { DropZone } from "./DropZone";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Bullets({ bullets }) {
  return (
    <div className="d-flex flex-column align-center">
      <DndProvider backend={HTML5Backend}>
        <DropZone bullets={bullets} />
      </DndProvider>
    </div>
  );
}
