import React from "react";
import { Button } from "react-bootstrap";

export const SubmitButton = ({ isDisabled }) => {
  return (
    <div className="submit-button d-block">
      <Button
        className="btn btn-primary btn-large"
        type="submit"
        disabled={isDisabled}
      >
        Submit Product
      </Button>
      {isDisabled && (
        <p className="text-danger visible-when-hovered">Title is required!</p>
      )}
    </div>
  );
};
