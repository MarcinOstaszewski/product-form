import React from "react";
import { Button } from "react-bootstrap";

export const ClearButton = ({ clearForm }) => {

  return (
      <Button
        className="btn btn-warning"
        type="button"
        onClick={clearForm}
      >
        Clear Form
      </Button>
  );
};