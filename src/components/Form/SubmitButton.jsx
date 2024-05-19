import React from 'react';
import { Button } from 'react-bootstrap';

export const SubmitButton = (
  { isDisabled }
) => {
  return (
    <Button
      className="btn btn-primary btn-large"
      type="submit"
      disabled={isDisabled}
    >
      Submit Product
    </Button>
  );
}
