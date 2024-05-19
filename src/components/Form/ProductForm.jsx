import React, { useState } from 'react';
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap';
import { Description } from './Description';
import TitleInput from './TitleInput';

export const ProductForm = () => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!error) {
      console.log({ title, description });
    } else {
      console.log("Can't submit with errors!");
    }
  }
  const handleChange = e => {
    const value = e.target.value;
    setTitle(value);
    setError(value.length < 1 ? 'Product Title is required!' : '')
  }

  return <>
    <h4 className="my-4">Product form</h4>
    <Form onSubmit={handleSubmit} id="product-form"  role="form">
      <FormGroup>
        <TitleInput
          title={title}
          onChange={handleChange}
          error={error}
        />

        <Description
          description={description}
          setDescription={setDescription}
        />

        <Button className="btn btn-primary btn-large" type="submit">
          Submit Product
        </Button>
      </FormGroup>
    </Form>
  </>
};