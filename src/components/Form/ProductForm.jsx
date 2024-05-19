import React, { useState } from "react";
import { Button, Form, FormGroup, InputGroup } from "react-bootstrap";
import { Description } from "./Description";
import TitleInput from "./TitleInput";
import Bullets from "./Bullets";
import SubmitButton from "./SubmitButton";

export const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [description, setDescription] = useState("");
  const [bulletText, setBulletText] = useState("");
  const [bullets, setBullets] = useState([]);
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
  const handleBulletTextChange = (e) => {
    setBulletText(e.target.value);
  }
  const addBullet = () => {
    setBullets([
      ...bullets,
      {id: bullets.length + 1, bulletText}
    ]);
    setBulletText('');
  }

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

          <FormGroup>
            <Form.Label>Product Bullets</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Add Product Bullet"
                aria-label="Product Bullet"
                aria-describedby="basic-addon2"
                value={bulletText}
                onChange={handleBulletTextChange}
              />
              <Button
                variant="outline-secondary"
                id="button-addon2"
                onClick={addBullet}
                disabled={!bulletText}
              >
                Add Bullet
              </Button>
            </InputGroup>
            <Bullets bullets={bullets} />
          </FormGroup>

          <SubmitButton isDisabled={!error}/>
        </FormGroup>
      </Form>
    </>
  );
};
