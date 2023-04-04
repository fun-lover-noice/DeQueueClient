import React from "react";
import { Button, Card } from "react-bootstrap";

import { Person } from "./person";

export const Adults = (props) => {
  return (
    <>
      <Card.Title>Adults</Card.Title>
      {props.adults.map((adult, index) => {
        return (
          <Person
            key={adult.id}
            person={adult}
            onEditPerson={props.onEditAdult}
            index={index}
            type="adult"
          />
        );
      })}
      <Button onClick={props.onAddAdult}>Add Adult</Button>
    </>
  );
};
