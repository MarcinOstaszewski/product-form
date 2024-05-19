import React from "react";
import { Form, FormGroup } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const Description = ({ description, setDescription }) => {
  const modules = { toolbar: [["bold", "italic", "underline"]] };
  const formats = ["bold", "italic", "underline"];

  return (
    <FormGroup>
      <Form.Label>Description</Form.Label>
      <ReactQuill
        className="mb-4"
        theme="snow"
        value={description}
        onChange={setDescription}
        modules={modules}
        formats={formats}
        placeholder="Enter description"
      />
    </FormGroup>
  );
};
