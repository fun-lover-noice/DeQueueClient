import React from "react";
import { Card, Button } from "react-bootstrap";

export const Submit = (props) => {
  const adults = props.adults.filter((adult) => {
    return adult.first_name !== "";
  });
  const children = props.children.filter((child) => {
    return child.first_name !== "";
  });

  const total =
    adults.length * props.price.adult + children.length * props.price.child;

  return (
    <>
      <Card.Title>Total Amount</Card.Title>
      <ul>
        <li>
          Adults: {adults.length} x ₹{props.price.adult}
        </li>
        <li>
          Children: {children.length} x ₹{props.price.child}
        </li>
      </ul>
      <Card.Title>Total: ₹{total}</Card.Title>
      <Button onClick={props.onSubmit} disabled={!total}>
        Pay Now
      </Button>
    </>
  );
};
