import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import Select from 'react-select';

const keywordsOptions = [
  {label: 'New', value: 'New'},
  {label: 'Classic', value: 'Classic'},
  {label: 'Modern', value: 'Modern'},
  {label: 'Futuristic', value: 'Futuristic'},
];

export const CreatableSelect = (
  { onOptionChange }
) => {
  return (
    <>
      <Form.Label>Keyword</Form.Label>
      <InputGroup className="mb-4">
        <Select 
          isClearable
          onChange={onOptionChange}
          placeholder="Select Product Keywords"
          name="keywords"
          options={keywordsOptions}
          className="basic-multi-select w-100"
          classNamePrefix="select"
        />
      </InputGroup>
    </>
  );
};
