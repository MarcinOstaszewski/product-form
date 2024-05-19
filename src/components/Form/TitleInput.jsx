import React from "react";
import { Form, FormControl, FormGroup } from "react-bootstrap";

export const TitleInput = (
  { title, onChange, error }
) => {
  return (
    <FormGroup>
      <Form.Label>Title</Form.Label>
      <FormControl
        type="text"
        name="title"
        className="form-control mb-4"
        placeholder="Enter title"
        onChange={onChange}
        value={title}
      />
      {error && <span className="error-message">{error}</span>}
    </FormGroup>
  );
}
