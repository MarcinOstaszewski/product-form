import React, { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import { Bullets, Description, TitleInput, SubmitButton } from "./";
import { CreatableSelect } from "./CreatableSelect";

export const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [description, setDescription] = useState("");
  const [bulletText, setBulletText] = useState("");
  const [bullets, setBullets] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [nextId, setNextId] = useState({ id: 1 });
  const [editedBulletId, setEditedBulletId] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      console.log({
        title,
        description,
        keyword,
        bullets: JSON.stringify(bullets),
      });
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
  const onOptionChange = (option) => {
    setKeyword(option.label);
  };

  return (
    <>
      <h4 className="my-4">Product form</h4>
      <Form onSubmit={handleSubmit} id="product-form" role="form">
        <FormGroup>
          <TitleInput title={title} onChange={handleChange} error={error} />
          <Description
            description={description}
            setDescription={setDescription}
          />
          <CreatableSelect onOptionChange={onOptionChange} />
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
          <SubmitButton isDisabled={title.length === 0} />
        </FormGroup>
      </Form>
    </>
  );
};
