import React, { useState } from "react";
import { Description } from "./Description";
import TitleInput from "./TitleInput";
import SubmitButton from "./SubmitButton";

export const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      console.log({ title, description });
    } else {
      console.log("Can't submit with errors!");
    }
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    setError(value.length < 1 ? "Product Title is required!" : "");
  };

  return (
    <>
      <h4 className="my-4">Product form</h4>
      <Form onSubmit={handleSubmit} id="product-form" role="form">
        <FormGroup>
          <FormGroup>
            <Form.Label>Product Title</Form.Label>
            <TitleInput title={title} onChange={handleChange} error={error} />
          </FormGroup>

          <FormGroup>
            <Form.Label>Product Description</Form.Label>
            <Description
              description={description}
              setDescription={setDescription}
            />
          </FormGroup>

          <SubmitButton />
        </FormGroup>
      </Form>
    </>
  );
};
