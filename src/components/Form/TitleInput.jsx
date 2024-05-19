import React from "react";
import { Form, FormControl, FormGroup } from "react-bootstrap";

export const TitleInput = ({ title, onChange, error }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <FormGroup className="mb-4">
      <Form.Label>
        Title <span className="text-danger">*</span>
      </Form.Label>
      <FormControl
        type="text"
        name="title"
        className="form-control"
        placeholder="Enter title"
        onChange={handleChange}
        value={title}
      />
      {error && <p className="text-danger mt-1">{error}</p>}
    </FormGroup>
  );
};
