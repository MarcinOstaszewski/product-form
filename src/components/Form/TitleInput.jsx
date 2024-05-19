import React from "react";
import { FormControl } from "react-bootstrap";

export default function TitleInput(
  { title, onChange, error }
) {
  return (
    <>
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
