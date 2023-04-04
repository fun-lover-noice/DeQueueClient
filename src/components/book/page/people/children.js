import React from "react";
import { Button, Card } from "react-bootstrap";

import { Person } from "./person";

export const Children = (props) => {
  return (
    <>
      <Card.Title>Children</Card.Title>
      {props.children.map((child, index) => {
        return (
          <Person
            key={child.id}
            person={child}
            onEditPerson={props.onEditChild}
            index={index}
            type="child"
          />
        );
      })}
      <Button onClick={props.onAddChild}>Add Child</Button>
    </>
  );
};
