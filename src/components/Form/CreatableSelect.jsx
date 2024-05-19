import React from "react";
import Select from "react-select";
import { Form, InputGroup } from "react-bootstrap";
import { keywordsOptions } from "../../constants/constants";

export const CreatableSelect = (
  { onOptionChange, selectedOptions }
) => {
  const handleOptionChange = (value) => {
    onOptionChange(value);
  };

  return (
    <>
      <Form.Label>Keyword</Form.Label>
      <InputGroup className="mb-4">
        <Select
          isClearable
          isMulti
          onChange={handleOptionChange}
          placeholder="Select Product Keywords"
          value={selectedOptions}
          name="keywords"
          options={keywordsOptions}
          className="basic-multi-select w-100"
          classNamePrefix="select"
        />
      </InputGroup>
    </>
  );
};
