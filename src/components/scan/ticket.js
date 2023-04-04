import React from "react";
import { Button, Card } from "react-bootstrap";

export const Ticket = (props) => {
  const valid =
    props.status === "Valid" ? (
      <img src="imgs/valid.png" alt="Valid" width="10%" />
    ) : (
      <img src="imgs/invalid.png" alt="Invalid" width="10%" />
    );
  return (
    <Card className="shadow">
      <Card.Header>Ticket</Card.Header>
      <Card.Body>
        <Card.Title>
          <div>{valid}</div>
        </Card.Title>
        <Card.Text>
          <div>Status: {props.status}</div>
          <div>Adults: {props.adults}</div>
          <div>Children: {props.children}</div>
          <div>Site: {props.site}</div>
        </Card.Text>
        <Button variant="primary" onClick={props.onScanMore}>
          Scan More
        </Button>
      </Card.Body>
    </Card>
  );
};
