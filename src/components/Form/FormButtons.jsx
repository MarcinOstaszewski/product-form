import React from "react";
import { ClearButton, SubmitButton } from "./";
import { FormGroup } from "react-bootstrap";

export const FormButtons = ({ title, clearForm }) => {
  return (
    <FormGroup className="d-flex justify-content-between align-items-start mb-4">
      <ClearButton clearForm={clearForm} />
      <SubmitButton isDisabled={title.length === 0} />
    </FormGroup>
  );
};
