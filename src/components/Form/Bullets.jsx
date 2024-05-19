import React from "react";
import { DropZone } from "./DropZone";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Button, Form, InputGroup } from "react-bootstrap";

export const Bullets = (
  { bullets, bulletText, handleBulletTextChange, addBullet }
) => {
  return <>
    <Form.Label>Product Bullets</Form.Label>
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Add Product Bullet"
        aria-label="Product Bullet"
        aria-describedby="basic-addon2"
        value={bulletText}
        onChange={handleBulletTextChange}
      />
      <Button
        variant="outline-secondary"
        id="button-addon2"
        onClick={addBullet}
        disabled={!bulletText}
      >
        Add Bullet
      </Button>
    </InputGroup>

    <div className="d-flex flex-column align-center">
      <DndProvider backend={HTML5Backend}>
        <DropZone bullets={bullets} />
      </DndProvider>
    </div>
  </>
}
