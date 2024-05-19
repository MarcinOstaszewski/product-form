import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const Description = ({ description, setDescription }) => {
  const modules = { toolbar: [["bold", "italic", "underline"]] };
  const formats = ["bold", "italic", "underline"];

  return (
    <>
      <ReactQuill
        className="mb-4"
        theme="snow"
        value={description}
        onChange={setDescription}
        modules={modules}
        formats={formats}
        placeholder="Product Description"
      />
    </>
  );
};
