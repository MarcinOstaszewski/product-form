import React from "react";
import { Form, FormControl } from "react-bootstrap";

export const TitleInput = (
  { title, onChange, error }
) => {
  return (
    <>
      <Form.Label>Product Title</Form.Label>
      <FormControl
        type="text"
        name="title"
        className="form-control mb-4"
        placeholder="Product Title"
        onChange={onChange}
        value={title}
      />
      {error && <span className="error-message">{error}</span>}
    </>
  );
}
