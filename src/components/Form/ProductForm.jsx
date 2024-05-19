import React, { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import { Bullets, Description, TitleInput, SubmitButton } from './'

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
            <TitleInput title={title} onChange={handleChange} error={error} />
          </FormGroup>

          <FormGroup>
            <Description
              description={description}
              setDescription={setDescription}
            />
          </FormGroup>

          <FormGroup>
            <Bullets 
              bullets={bullets}
              bulletText={bulletText}
              handleBulletTextChange={handleBulletTextChange}
              addBullet={addBullet}
            />
          </FormGroup>

          <SubmitButton isDisabled={title.length === 0}/>
        </FormGroup>
      </Form>
    </>
  );
};
