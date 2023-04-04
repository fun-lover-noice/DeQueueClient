import React from "react";
import { Form } from "react-bootstrap";

export const Person = (props) => {
  const firstNameChangeHandler = (event) => {
    props.onEditPerson(props.index, {
      ...props.person,
      first_name: event.target.value,
    });
  };

  const lastNameChangeHandler = (event) => {
    props.onEditPerson(props.index, {
      ...props.person,
      last_name: event.target.value,
    });
  };

  const ageChangeHandler = (event) => {
    props.onEditPerson(props.index, {
      ...props.person,
      age: parseInt(event.target.value),
    });
  };

  const maxAge = props.type === "adult" ? "" : 10;
  const minAge = props.type === "adult" ? 11 : 0;
  const type = props.type === "adult" ? "Adult" : "Child";
  return (
    <Form.Group>
      <Form.Label>
        {type} {props.index + 1}
      </Form.Label>
      <Form.Control
        className="mt-2 mb-3"
        type="text"
        placeholder="First Name"
        value={props.person.first_name}
        onChange={firstNameChangeHandler}
      />
      <Form.Control
        className="mb-3"
        type="text"
        placeholder="Last Name"
        value={props.person.last_name}
        onChange={lastNameChangeHandler}
      />
      <Form.Control
        className="mb-3"
        type="number"
        placeholder="Age"
        min={minAge}
        max={maxAge}
        value={props.person.age}
        onChange={ageChangeHandler}
      />
    </Form.Group>
  );
};
