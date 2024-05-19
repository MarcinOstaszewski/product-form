import React, { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import { Bullets, Description, TitleInput } from "./";
import { CreatableSelect } from "./CreatableSelect";
import { FormButtons } from "./FormButtons";

export const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [description, setDescription] = useState("");
  const [bulletText, setBulletText] = useState("");
  const [bullets, setBullets] = useState([]);
  const [keyword, setKeywords] = useState([]);
  const [nextId, setNextId] = useState({ id: 1 });
  const [editedBulletId, setEditedBulletId] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      console.log({
        title,
        description,
        keyword,
        bullets,
      });
    } else {
      console.log("Can't submit form with errors!");
    }
  };
  const handleChange = (value) => {
    setTitle(value);
    setError(value.length < 1 ? "Product Title is required!" : "");
  };
  const handleBulletTextChange = (e) => {
    setBulletText(e.target.value);
  };
  const addBullet = () => {
    setBullets([...bullets, { id: nextId.id, bulletText }]);
    setBulletText("");
    setNextId({ id: ++nextId.id });
  };
  const removeBullet = (id) => {
    setBullets(bullets.filter((bullet) => bullet.id !== id));
  };
  const editBulletText = (id) => {
    setEditedBulletId(id);
  };
  const setNewBulletText = (value, id) => {
    setBullets(
      bullets.map((bullet) =>
        bullet.id !== id
          ? bullet
          : {
              ...bullet,
              bulletText: value,
            }
      )
    );
    setEditedBulletId(0);
  };
  const onOptionChange = (options) => {
    const labels = options.map((option) => option.label);
    setKeywords(labels || []);
    setSelectedOptions(options);
  };
  const clearForm = () => {
    setTitle("");
    setDescription("");
    setBullets([]);
    setBulletText("");
    setNextId({ id: 1 });
    onOptionChange([]);
  };

  return (
    <>
      <h4 className="my-4 form-header">Product form</h4>
      <Form onSubmit={handleSubmit} id="product-form" role="form">
        <FormGroup>
          <TitleInput title={title} onChange={handleChange} error={error} />
          <Description
            description={description}
            setDescription={setDescription}
          />
          <CreatableSelect
            onOptionChange={onOptionChange}
            selectedOptions={selectedOptions}
          />
          <Bullets
            bullets={bullets}
            bulletText={bulletText}
            handleBulletTextChange={handleBulletTextChange}
            addBullet={addBullet}
            removeBullet={removeBullet}
            editBulletText={editBulletText}
            editedBulletId={editedBulletId}
            setEditedBulletId={setEditedBulletId}
            setNewBulletText={setNewBulletText}
          />
          <FormButtons title={title} clearForm={clearForm} />
        </FormGroup>
      </Form>
    </>
  );
};
